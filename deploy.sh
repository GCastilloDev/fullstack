#!/usr/bin/env sh

# abort on errors
set -e

# navega a frontend
cd frontend
npm run build

# regresar a la carpeta principal
cd ..

# copiar carpet dist
npm run copyDist

# Ir a la carpeta backend
cd backend
git add -A
git commit -m 'deploy'

git push -f https://github.com/GustavoCastilloMX/fullstack.git master:deploy