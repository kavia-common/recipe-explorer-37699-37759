#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-37699-37759/recipe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

