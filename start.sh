#!/bin/sh
set -e
sed -i "s/Search by Name:/Search by Pokemon Name:/g" /app/src/components/FilterBar.js
sed -i "s/Filter by Type:/Filter by Pokemon Type:/g" /app/src/components/FilterBar.js
exec npm start
