#!/bin/bash

# Setup git aliases and shell functions for branch creation
echo "Setting up git shortcuts..."

# Source the helper if available (sourcing allows the function to be used by git alias helper)
HELPER_PATH="$(dirname "${BASH_SOURCE[0]}")/detect_github_ssh_user.sh"
if [ -f "$HELPER_PATH" ]; then
    # shellcheck source=/dev/null
    source "$HELPER_PATH"
fi

# Ensure the helper is available from the user's home so ~/.bashrc can source it
if [ -f "$HELPER_PATH" ]; then
    mkdir -p "$HOME/.devcontainer" 2>/dev/null || true
    cp "$HELPER_PATH" "$HOME/.devcontainer/detect_github_ssh_user.sh" 2>/dev/null || true
    chmod +x "$HOME/.devcontainer/detect_github_ssh_user.sh" 2>/dev/null || true
fi

# Git alias for new branch with <username>_yyyymmddhhmm format
git config --global alias.newbranch '!f() { \
    if [ -f "$HOME/.devcontainer/detect_github_ssh_user.sh" ]; then \
        # shellcheck source=/dev/null; source the helper and call it
        user=$(bash -lc "source $HOME/.devcontainer/detect_github_ssh_user.sh >/dev/null 2>&1 || true; detect_github_ssh_user") || user=pl; \
    else \
        user=pl; \
    fi; \
    git checkout -b "${user}_$(date +%Y%m%d%H%M)"; }; f'

# Add shell functions to bashrc if not already present
if ! grep -q "# Custom git branch shortcuts" ~/.bashrc; then
    echo "
# Custom git branch shortcuts
# Source the helper provided by the repository if available
if [ -f \"$HOME/.devcontainer/detect_github_ssh_user.sh\" ]; then
    # shellcheck source=/dev/null
    source \"$HOME/.devcontainer/detect_github_ssh_user.sh\"
fi

nb() {
    local user="pl"
    if [ -f \"$HOME/.devcontainer/detect_github_ssh_user.sh\" ]; then
        # shellcheck source=/dev/null
        source \"$HOME/.devcontainer/detect_github_ssh_user.sh\"
        user=$(detect_github_ssh_user)
    fi
    local branch_name="${user}_$(date +%Y%m%d%H%M)"
    echo "Creating and switching to branch: $branch_name"
    git checkout -b "$branch_name"
}

# Alternative with optional suffix
nbs() {
    local suffix=""
    if [ $# -gt 0 ]; then
        suffix="_$1"
    fi
    local user="pl"
    if [ -f \"$HOME/.devcontainer/detect_github_ssh_user.sh\" ]; then
        # shellcheck source=/dev/null
        source \"$HOME/.devcontainer/detect_github_ssh_user.sh\"
        user=$(detect_github_ssh_user)
    fi
    local branch_name="${user}_$(date +%Y%m%d%H%M)$suffix"
    echo "Creating and switching to branch: $branch_name"
    git checkout -b "$branch_name"
}
" >> ~/.bashrc
    echo "Shell functions added to ~/.bashrc"
else
    echo "Shell functions already configured"
fi

echo "Git shortcuts setup complete!"
echo ""
echo "Available shortcuts:"
echo "  git newbranch          - Create branch pl_yyyymmddhhmm"
echo "  nb                     - Same as git newbranch"
echo "  nbs <suffix>           - Create branch pl_yyyymmddhhmm_<suffix>"
echo ""
echo "Run 'source ~/.bashrc' to use shell functions in current session"