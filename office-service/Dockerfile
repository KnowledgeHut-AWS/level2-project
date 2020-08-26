from node as build
copy index.js /src/
copy package* /src/
run cd /src && \
    npm install
from node
copy --from=build /src/node_modules /dist/node_modules/
copy index.js /dist/
workdir /dist
cmd ["node", "index.js"]
