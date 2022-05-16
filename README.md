# My personal portfolio
## install browsersync 
npm install -g browser-sync
## install tailwind-cli
 npm install -D tailwindcss
## then run 
 npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
 browser-sync start --server   --files "index.html"
