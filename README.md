# React Webpack UIKit Boilerplate

Yet another React Webpack Boilerplate.

## Installation
On your local machine, for development, just run:

	npm install
	webpack-dev-server

## Production (Heroku)
If you want to minify and send everything on Heroku.

### Clean the `/dist` folder
Windows users, beware, doesn't run on Windows (you'll need to do it manually or install [Rimraf](https://github.com/isaacs/rimraf)).

	npm run clean

### Build your app in the `/dist` folder

	npm run build

It will build :
+ `/dist/index.html` from `./src/index.tpl.html`
+ `/dist/bundle.js`
+ `/dist/styles.css`

### Test your production environment locally
It will run the express.js server instead of webpack-dev-server

	npm run start

### Push to heroku
TODO: Explain a bit more.

	git push heroku master

## Features
### UIKIT
Load __uikit components__ from `src/styles.scss` and `src/index.js`.

### CSS Modules / SCSS
+ App-wide styling or css-frameworks can imported in scss.
+ Otherwise prefer to stuff styling in a `style.css` file.
+ Then import them from your React component with `import styles from './styles.css'`
+ You can now call a style from your component like so : `<div className={styles.some-styling}>`
+ See [css modules](https://github.com/css-modules/css-modules) and [css-loader](https://github.com/webpack/css-loader) for more info.

### React Components grouped with assets
Group your css, static images, fonts inside your very component folder.
I personnally use this folder structure:

	src/
	 |-- components/
	 		|--- Component/
			|		|--- fonts/
			|		|--- images/
	 		|		|--- index.jsx
	 		|		|--- styles.css
	 		|--- AnotherComponent/

Component is defined in `index.jsx`. I have seen some people specify a `displayName:` inside the component but it works without it. If you know why, I'd be glad to hear why.

Read more on this in this [great article](https://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/).

[Follow me on twitter](https://twitter.com/@seb_nicolaidis)
