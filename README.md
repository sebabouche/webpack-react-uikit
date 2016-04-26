# React Webpack UIKit Boilerplate

Yet another React Webpack Boiler plate. Still alpha
(needs more testing and staging). But it gathers a few cool
concepts and implementations normally showing on the index page.

## Installation
Just run:

	npm install
	webpack-dev-server

If you want to minify and gather everything in the `/dist` folder:

	webpack --production

## Features
### UIKIT
Load __uikit components__ from `src/styles.scss` and `src/index.js`.

### SCSS
Custom Scss can be written in `src/styles.scss` if they concern the whole app.  
Otherwise prefer to stuff them in the `css` folder of your React components for reusability and require them.

### Webpack
For developpment use `webpack-dev-server`.  
For production you can minify etc. using `webpack --production`.
The trick is in `webpack.config.js` and makes it possible to have just one config file for dev and production.

This [resource was of great help](http://putaindecode.io/fr/articles/js/webpack/premier-exemple/). It's in French :-/

### React Components grouped with assets
This is the most awesome thing about this boilerplate.  
Group your css, static images, fonts inside your very component folder.
You can use this folder structure :

	src/
	 |-- components/
	 		|--- uiComponent/
	 		|		|--- css/
	 		|		|--- images/
	 		|		|--- index.js
	 		|--- uiChild/

Component is defined in index.js. Don't forget to specify a `display_name` for your component.

Read more on this in this [great article](https://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/).

[Follow me on twitter](https://twitter.com/@seb_nicolaidis)
