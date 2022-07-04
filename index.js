import FieldRendering from './fieldRendering.js';
import DisplayRendering from './displayRendering.js';
import ButtonsRendering from './buttonsRendering.js';
import ProcessingUnit from './processingUnit.js';

const field = new FieldRendering(); 
export default field;
let displayView = new DisplayRendering();
let buttonRender = new ButtonsRendering();
let process = new ProcessingUnit(displayView);

