#!/usr/bin/env bash

# detect_github_ssh_user.sh
# Helper to detect GitHub SSH username. Intended to be sourced.

detect_github_ssh_user() {
    # Run ssh in batch mode to avoid interactive prompts; capture stderr as GitHub writes to stderr
    local out
    out=$(ssh -T -o BatchMode=yes git@github.com 2>&1 || true)

    # Expected successful message contains 'Hi <username>!'
    if [[ $out =~ Hi[[:space:]]([a-zA-Z0-9_-]+)! ]]; then
        local user="${BASH_REMATCH[1]}"
        echo "$user"
        return 0
    fi

    # Fallback to git user.name (sanitized), then to 'pl'
    local gitname
    gitname=$(git config --global user.name || true)
    if [ -n "$gitname" ]; then
        # sanitize: lowercase, replace spaces with '-', remove non-alphanum/_/-
        gitname=$(echo "$gitname" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9_-]//g')
        echo "$gitname"
        return 0
    fi

    echo "pl"
    return 0
}

export -f detect_github_ssh_user >/dev/null 2>&1 || true
