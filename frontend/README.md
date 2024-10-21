# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To Run this in your PC you need to first the install the NextUI and DaisyUI through terminal.

- Command to install NextUI using npm : npm install -g nextui-cli
- Command to install NextUI using yarn : yarn add -g nextui-cli
- Command to install NextUI using pnpm : pnpm add -g nextui-cli
- Command to install NextUI using bun : bun add -g nextui-cli

use any one of this depending upon what you are using.

- Command to install DaisyUI : npm i -D daisyui@latest
- Command to install NextUI using pnpm : pnpm add -D daisyui@latest
- Command to install NextUI using yarn : yarn add -D daisyui@latest
- Command to install NextUI using bun : bun add -D daisyui@latest

use any one of this depending upon what you are using.


- Setting up NextUI :
  - After installation of NextUI open tailwind.config.js file
  - There inside plugins add "nextui()"
 
- Setting up DaisyUI :
  - After installation of DaisyUI open tailwind.config.js file
  - There add daisyui inside "require()" -> require('daisyui')
  - "require()" will already be present inside plugins.
