# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- to run db instance run docker command -->
<!-- app name is my-notes-app you can give another name of your choice -->
docker run --name my-notes-app -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mypassword mysql:latest

<!-- to start the backend -->
npm start