# Multimedia Team Graphics Template
This is a Webpack project template for a graphic used on our sites. It's configured to output an index.html and bundled script file ready to upload to our server and iframe into the CMS. It features live editing capability via Google Sheets (with Sheetsy), webpack's hot reload functionality for development, and Crosstalk to ensure responsive iframe height in the CMS.

## Requirements
Before you get started, you should have the latest version of Node installed on your machine. That should be it, but if you run into any weird errors, let me know. 

## Development
In your terminal or whatever you use to access the command line, navigate to the empty directory you've created for your project. Then run: 
```
curl -fsSL https://github.com/swhart22/nbc-ots-gfx/archive/master.tar.gz | tar -xz --strip-components=1
```
Then:
```
npm i
```
Then:
```
npm run start
```
If all went well, your browser should open up a tab on localhost:3000 with the development version of your graphic.

You can change the port in the webpack.dev.js file—note that you'll get an error if you try to run `npm run start` and a different project is already running on the same port.

### Javascript libraries
The project comes with d3 installed. Use ES6 import syntax to use it (or any js library) in a javascript file like:
```
import * as d3 from 'd3';
```
OR, you can import specific d3 modules without importing the whole library like so: 
```
const d3 = Object.assign({}, require('d3-format'));
```

You can also load libraries like D3 and jQuery via their CDNs in the index.html file in the templates folder. Doing that reduces the size of your bundle, but importing and compiling reduces the number of HTTP requests and optimizes javascript processes.

### Setup
The project's default is a div with the ID "container" that has a width of 960px and a height of 540px (set in nbcotsbase.css). The standard width for our CMS is 620px, 960px may be used for wide article pages. 

Our color palette for graphics is available to you in `colors.js`, simply import the object from that file and access the color you want using javascript object syntax. An example of appending a span containing the string "Hello world!" 

### Loading data from Google Sheets
The project comes with NPM's sheetsy library installed. To configure data to be loaded from a Google spreadsheet, see the npm package page for <a href="https://www.npmjs.com/package/sheetsy">the sheetsy library.</a>

## Production

Once you've made sure the graphic looks like it's supposed to, run:
```
npm run build
```
Open the root folder of your directory, and you'll now see a 'dist' folder. The files inside are the ones you need to push to the server. Webpack has bundled everything into minimally-sized files to make you and everyone's browsers' lives easier!

Test the `index.html` file in your browser just to make sure everything worked, and then push to the server. 

### Why all the fancy javascript? 
Webpack can do a whole lot of things under the hood that makes your project's code run smoother and sleeker. For me, the live reloading is enough to justify using it: hard refreshing every time you make a change to a project can become pretty annoying!

That said, if you can't get this to run for whatever reason or are doing a simple project and want a more straightforward template, try our good ol' project template (LINK TO GITHUB REPO WITH PROJECT TEMPLATE TK).