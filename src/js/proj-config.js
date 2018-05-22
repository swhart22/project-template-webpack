import sheetsy from 'sheetsy';
const {urlToKey, getWorkbook, getSheet } = sheetsy;
import draw from './draw.js';
import Data from '../../data/data.csv';
//import polls from './polls.js';



draw(Data);
//export default metadata;