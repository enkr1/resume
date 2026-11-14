#!/usr/bin/env python3
"""Pre-fill index.html with the rendered base resume so readers that skip JavaScript (crawlers, link previews, LLM fetch tools) get the full text; main.js replaces it on load."""
import html
import json
import re
import subprocess
import sys
import textwrap
import unicodedata
from pathlib import Path
from typing import NoReturn

INDEX = Path(__file__).resolve().parent / "index.html"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SITE = "https://resume.enkr1.com/"
MAIN_JS_TITLE_SEPARATOR = f" {unicodedata.lookup('EM DASH')} "


def fail(reason: str) -> NoReturn:
    sys.exit(f"build-static: {reason}; index.html left untouched")


def plain(fragment: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", fragment))).strip()


def capture(pattern: str, text: str, what: str) -> str:
    match = re.search(pattern, text, re.S)
    if not match:
        fail(f"no {what} found")
    return match.group(1)


def replace_once(src: str, pattern: str, inner: str) -> str:
    out, count = re.subn(pattern, lambda m: m.group(1) + inner + m.group(2), src, flags=re.S)
    if count != 1:
        fail(f"expected one match for {pattern!r}, found {count}")
    return out


def main() -> None:
    dom = subprocess.run(
        [CHROME, "--headless=new", "--disable-gpu", "--virtual-time-budget=5000", "--dump-dom", INDEX.as_uri()],
        capture_output=True, encoding="utf-8", check=True,
    ).stdout
    rendered_main = capture(r'<main id="resume-main">(.*?)</main>', dom, "rendered <main>")
    headline = plain(capture(r'<p class="primary-headline">(.*?)</p>', dom, "rendered headline"))
    summary = plain(capture(r'<section id="summary-section"[^>]*>.*?<p[^>]*>(.*?)</p>', dom, "rendered summary"))
    experience = capture(r'<section id="experience-section"[^>]*>(.*?)</section>', dom, "rendered experience")
    jobs = [(plain(title), duration) for title, duration in re.findall(r'<h3>([^<]*)</h3>\s*<p class="duration">([^<]*)</p>', experience)]
    if not (headline and summary and jobs):
        fail("the render is missing the headline, summary or jobs")

    description = " ".join(re.split(r"(?<=\.)\s+", summary)[:2])
    page_title = f"Jing Hui PANG | 彭竞辉 | {headline} - Resume"
    current = [title.split(MAIN_JS_TITLE_SEPARATOR)[-1] for title, duration in jobs if "Present" in duration]

    src = INDEX.read_text(encoding="utf-8")
    src = replace_once(src, r'(<main id="resume-main">).*?(</main>)', rendered_main)
    src = replace_once(src, r'(<p class="primary-headline">).*?(</p>)', html.escape(headline, quote=False))
    src = replace_once(src, r"(<title>).*?(</title>)", html.escape(page_title, quote=False))
    for attr, key, value in (
        ("name", "description", description),
        ("property", "og:title", page_title),
        ("property", "og:description", description),
        ("property", "twitter:title", page_title),
        ("property", "twitter:description", description),
    ):
        src = replace_once(src, rf'(<meta {attr}="{re.escape(key)}"\s+content=")[^"]*(")', html.escape(value))

    person = json.loads(capture(r'<script type="application/ld\+json">(.*?)</script>', src, "JSON-LD"))
    person.update(jobTitle=headline, url=SITE, description=description, worksFor=[{"@type": "Organization", "name": name} for name in current])
    ld = "\n" + textwrap.indent(json.dumps(person, ensure_ascii=False, indent=4), "    ") + "\n    "
    src = replace_once(src, r'(<script type="application/ld\+json">).*?(</script>)', ld)

    INDEX.write_text(src, encoding="utf-8")
    print(f"  ✓ {'static':<16} -> index.html ({len(jobs)} jobs, {len(plain(rendered_main))} chars of text)")


if __name__ == "__main__":
    main()
