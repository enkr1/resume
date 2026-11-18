// Fills in the RESUME_DATA fields the obfuscated main.js leaves out, after it has rendered #contact.
(function () {
  function addLocation(contact, location) {
    if (!location || contact.querySelector('.contact-location')) return;
    const line = document.createElement('span');
    line.className = 'contact-location';
    line.textContent = `Location: ${location}`;
    contact.appendChild(line);
  }

  function spellOutLinkedIn(contact, url) {
    const link = url && contact.querySelector(`a[href="${url}"]`);
    if (link) link.textContent = `LinkedIn: ${url.replace(/^https?:\/\/(www\.)?/, '')}`;
  }

  window.addEventListener('load', () => {
    const contact = document.getElementById('contact');
    if (!contact || typeof RESUME_DATA === 'undefined') return;
    addLocation(contact, RESUME_DATA.location);
    spellOutLinkedIn(contact, RESUME_DATA.contact && RESUME_DATA.contact.linkedin);
  });
})();
