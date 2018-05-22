//import _ from 'lodash';
import '../css/nbcotsbase.css';
import * as d3 from 'd3';
import colors from './colors.js';
//import sheetsy from 'sheetsy';
//const {urlToKey, getWorkbook, getSheet } = sheetsy;
//import metadata from './proj-config.js';

function draw(Data){
	
	/***********
	STARTER CODE
	***********/

	//this is the configuration for a basic d3 chart to get you started, using typical d3 margin conventions
	//of course, do whatever you want with javascript in this draw function

	//sets width & height based on size of container, which you can control with CSS
	//this helps you make your charts responsive 
	let width = parseInt(d3.select('#container').style('width')),
	height = parseInt(d3.select('#container').style('height'));

	//sets margins for chart elements within the SVG, and then the chart extents within SVG
	let margin = {top: 10, left:10, bottom:10, right:10},
	chartWidth = width - margin.left - margin.right,
	chartHeight = height - margin.top - margin.bottom;

	//appends svg with above width/height attributes, fits the size of the container
	let svg = d3.select('#container').append("svg")
		.attr("width",width)
		.attr("height",height);

	//appends g to svg that will contain all chart elements and translate them to the set chart extents
	let g = svg.append("g")
		.attr("transform",'translate(' + margin.left + ',' + margin.top + ')');

	//append all chart elements to g variable
	//happy coding!
		
};

export default draw;
