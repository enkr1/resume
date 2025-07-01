# Take a snapshot of current aliases
current_aliases=$(alias | sort)

# Define a block for aliases
add_aliases() {
  alias o="cd /Users/enkr/Personal/resume/scripts && node o.js && cd -"
  alias gpm='/Users/enkr/Personal/resume/git_push.sh'
  alias deploy_resume='o && gpm'
}

# Call the function to define the aliases
add_aliases

# Take a snapshot of aliases after adding new ones
new_aliases=$(alias | sort)

# Function to list newly added aliases with colors
list_added_aliases() {
  echo -e "\033[1;32mAliases added:\033[0m\n"
  # Compare old and new aliases to find differences
  added_aliases=$(comm -13 <(echo "$current_aliases") <(echo "$new_aliases"))

  echo "$added_aliases" | grep '^alias ' | while read -r alias_def; do
    alias_name=$(echo "$alias_def" | cut -d'=' -f1 | cut -d' ' -f2)
    alias_value=$(echo "$alias_def" | cut -d'=' -f2-)
    echo -e " • \033[1m\033[1;34m$alias_name\033[0m: \033[0;33m$alias_value\033[0m"
  done
}

# Call the function to list aliases
list_added_aliases

# TODO: Make this a required movement after cd
# TODO: Make aliases.sh a lookup file
