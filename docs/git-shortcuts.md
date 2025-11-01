# Git Branch Shortcuts

This project includes custom git shortcuts for creating branches with the pattern `pl_yyyymmddhhmm`.

## Available Commands

### Git Alias

```bash
git newbranch
```

Creates and switches to a new branch with format `pl_yyyymmddhhmm` where:

- `pl_` - prefix
- `yyyy` - 4-digit year
- `mm` - 2-digit month
- `dd` - 2-digit day
- `hh` - 2-digit hour (24-hour format)
- `mm` - 2-digit minute

### Shell Functions

#### Basic function

```bash
nb
```

Same as `git newbranch` - creates branch `pl_yyyymmddhhmm`

#### Function with suffix

```bash
nbs feature-name
```

Creates branch `pl_yyyymmddhhmm_feature-name`

## Examples

```bash
# Create branch pl_202511011134
git newbranch

# Create branch pl_202511011134
nb

# Create branch pl_202511011134_dark-mode
nbs dark-mode

# Create branch pl_202511011134_bugfix
nbs bugfix
```

## Setup

These shortcuts are automatically configured when the devcontainer is created. If you need to set them up manually, run:

```bash
.devcontainer/setup-git-shortcuts.sh
```

## Current Branch Pattern

Based on the current time, your next branch would be: `pl_$(date +%Y%m%d%H%M)`
