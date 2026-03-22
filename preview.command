#!/bin/zsh
# preview.command developed by Bob Tianqi Wei
cd "$(dirname "$0")" || exit 1
python3 -m http.server 8888
