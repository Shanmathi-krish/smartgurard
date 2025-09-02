#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building with vite..."
./node_modules/.bin/vite build

echo "Build completed successfully!"
