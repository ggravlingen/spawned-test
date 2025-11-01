#!/bin/bash

# Setup git aliases and shell functions for branch creation
echo "Setting up git shortcuts..."

# Git alias for new branch with pl_yyyymmddhhmm format
git config --global alias.newbranch '!git checkout -b pl_$(date +%Y%m%d%H%M)'

# Add shell functions to bashrc if not already present
if ! grep -q "# Custom git branch shortcuts" ~/.bashrc; then
    echo "
# Custom git branch shortcuts
nb() {
    local branch_name=\"pl_\$(date +%Y%m%d%H%M)\"
    echo \"Creating and switching to branch: \$branch_name\"
    git checkout -b \"\$branch_name\"
}

# Alternative with optional suffix
nbs() {
    local suffix=\"\"
    if [ \$# -gt 0 ]; then
        suffix=\"_\$1\"
    fi
    local branch_name=\"pl_\$(date +%Y%m%d%H%M)\$suffix\"
    echo \"Creating and switching to branch: \$branch_name\"
    git checkout -b \"\$branch_name\"
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