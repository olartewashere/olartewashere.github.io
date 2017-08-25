/*
---
title: Controllercanvas.js
subtitle: Documentation
author: Luis Olarte Gervacio
date: "September 26, 2016"
---
*/

/**
# Description

This file controls the canvas and their respective buttons;
use different global variables

- theCanvas : Instance of the canvas element
- widthCanvas : Global variable
- heightCanvas: Global variable
- nameFile: Global variable
- countPlus: Global variable
- countMinus: Global variable
- a1,a2,a3,a4:  jCropApi variable
- ctx: Context of the canvas element
- jcrop_api: jCropApi variable
- theCanvasCrop: Global variable
- i,ac,image: jCropApi variable


__Example:__ How to use
```html
<script src="./js/local/dtt/controllercanvas.js"></script>
```

- - -
*/
var theCanvas;
var widthCanvas,originalWidth;
var heightCanvas,originalHeight;
var nameFile;
var countPlus = 0;
var countMinus = 0;
var a1, a2, a3=0, a4=0;
var ctx2;
var jcrop_api;
var theCanvasCrop;
var i, ac;
var image;
var tooltipRegulon;
var x = null;
var y = null;

var div;
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
/*
# Event ready

**Overview**: Set values at variables and drawgraphics on canvas

Parameters:

- widthCanvas : Global variable
- heightCanvas: Global variable
- nameFile: Global variable

*/

$(document).ready(function() {
   tooltipRegulon = document.getElementById('demo-tooltip');
    setValues();
    originalWidth=widthCanvas;
    originalHeight=heightCanvas;
    paintAll();
    theCanvas = document.getElementById("myCanvas");
    ctx = theCanvas.getContext("2d");
    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'myCanvas', nameFile + '.png');
    }, true);
    $('#release').click(function() {
        restore();
    });
 fit (1200);
console.log(navigator.userAgent.toLowerCase());
//console.log($.browser.msie);
});

/*
# innterTooltipClass function

**Overview**: This function displays information of genetic elements when mouse over them

Parameters:

- msg: html variable. Div with information of element

## Example

innterTooltipClass("Information: <i><b>Riboswitch Cis-reg</b> <strong>Genome position:</strong> 184-310</i>");


*/
function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
}

function getMouseX() {
    return x;
}

function getMouseY() {
    return y;
}
function innterTooltipClass(msg) {

    document.getElementById("logTooltip").innerHTML = msg;
/*funciona
    $('.tpd-content').empty();
    Tipped.create('#demo-tooltip', msg);
    console.log("X: "+getMouseX());
    console.log("Y: "+getMouseY());
    tooltipRegulon.style.position = "absolute";
    tooltipRegulon.style.display="block";
    tooltipRegulon.style.left = getMouseX()+'px';
    tooltipRegulon.style.top = (getMouseY()-20)+'px';
    var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
    tooltipRegulon.dispatchEvent(event);
*/
      var canvas = document.getElementById("myCanvas");
      var me = this,                                // self-reference for event handlers
      parent = canvas.parentNode,               // parent node for canvas
      visible = false;                          // current status
      $('.Div_tooltip_v2').remove();
      div = document.createElement("div");
  // set some initial styles, can be replaced by class-name etc.

    div.style.cssText = "position:fixed;padding:7px;background:white;pointer-events:none;width:auto;border:1px solid blue;";
    div.innerHTML = msg;
    div.setAttribute("id", "Div_tooltip_v2");
    div.setAttribute("class","Div_tooltip_v2");
    div.style.left =getMouseX()+"px";
    div.style.top = (getMouseY()-30)+"px";
    parent.appendChild(div);
}
function hideToolTip(){

/*  $(".tpd-tooltip").remove();
  var event = new MouseEvent('mouseout', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});
  tooltipRegulon.dispatchEvent(event);

*/
//var canvas = document.querySelector("canvas");
//var parent = canvas.parentNode;
//parent.removeChild(div);
$('.Div_tooltip_v2').remove();
}

/*
# redirect function

**Overview**: This function reload de page

*/
function redirect(name) {
    window.location = name;
}
function restore() {
/*
    document.getElementById('mycanvasContainer').innerHTML="<canvas id=\"myCanvas\" width="+originalWidth+" height="+originalHeight+" >Your browser doesn't support the HTML5 CANVAS </canvas>";
    countPlus = 1;
    countMinus = 1;
    theCanvas = document.getElementById("myCanvas");
    theCanvas.width = originalWidth;
    theCanvas.height = originalHeight;
    widthCanvas=originalWidth;
    heightCanvas=originalHeight;
    paintAll();
    fit();
    document.getElementById('canvasCrop').style.display = "none";
    document.getElementById('download').style.display = "inline";
    document.getElementById('buttonScreen').style.display = "inline";
    document.getElementById('buttonZoomin').style.display = "inline";
    document.getElementById('buttonZoomout').style.display = "inline";
    document.getElementById('buttonCrop').style.display = "inline";
    document.getElementById('cut').style.display = "none";
    document.getElementById('release').style.display = "none";
    document.getElementById('myControls').style.display = "none";
  */
  setValues();
  countPlus = 1;
    countMinus = 1;
    theCanvas = document.getElementById("myCanvas");
    theCanvas.width = originalWidth;
    theCanvas.height = originalHeight;
    widthCanvas=originalWidth;
    heightCanvas=originalHeight;
  document.getElementById('drawingZone').innerHTML= "<div id='mycanvasContainer'>"+
  "<canvas id='myCanvas' width="+widthCanvas+" height="+heightCanvas+" style='border:solid 1px black;'>"+
    " Your browser doesn't support the HTML5 CANVAS MyCanvas "+
    "</canvas>"+
    "</div>"+
    "<div id='jcropArea'>"+
    "<center>"+
    "<canvas id='canvasCrop' width="+widthCanvas+" height="+heightCanvas+"  style='border:solid 1px black'>"+
    "Your browser doesn't support the HTML5 CANVAS"+
    "</canvas>"+
    "</center>"+
    "</div>  ";
    document.getElementById('canvasCrop').style.display = "none";
    document.getElementById('download').style.display = "inline";
    document.getElementById('buttonScreen').style.display = "inline";
    document.getElementById('buttonZoomin').style.display = "inline";
    document.getElementById('buttonZoomout').style.display = "inline";
    document.getElementById('buttonCrop').style.display = "inline";
    document.getElementById('cut').style.display = "none";
    document.getElementById('release').style.display = "none";
    document.getElementById('myControls').style.display = "none";
    document.getElementById("buttonZoomin").disabled = false;
    document.getElementById("buttonZoomout").disabled = false;
    document.getElementById("buttonCrop").disabled = false;
    paintAll();
    fit(1200);
}

/*
# downloadCanvas function

**Overview**: This function export canvas to image `PNG`
Parameters:

- link: Event. When clicking.
- canvasId: The canvas to save at png.
- filename: Name of image.

## Example

downloadCanvas(this,'myCanvas', 'Test.png');

*/
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById('myCanvas').toDataURL();
    link.download = filename;
}

/*
# cortado function

**Overview**: This function crop the seleted area in canvas

Parameters:

## Example

cortado();

*/
function cortado() {
    $('canvasCrop').setLayerGroup("all", {
            visible: false
        }).drawLayers();
    theCanvasCrop = document.getElementById("canvasCrop");
    ctx2 = theCanvasCrop2.getContext("2d");
    theCanvasCrop.width = (a3);
    theCanvasCrop.height = (a4);

    //document.getElementById('canvasCrop').style.display = "inline";
    document.getElementById('myCanvas').style.display = "inline";
    //document.getElementById('download').style.display = "none";
    //document.getElementById('buttonScreen').style.display = "none";
    //document.getElementById('buttonZoomin').style.display = "none";
    //document.getElementById('buttonZoomout').style.display = "none";
    //document.getElementById('buttonCrop').style.display = "none";
    document.getElementById('cut').style.display = "none";
    document.getElementById('release').style.display = "none";
    //document.getElementById('myControls').style.display = "none";

    //ctx2.scale(1.5, 1.5);
    //ctx2.drawImage(theCanvas, a1, a2, a3, a4, 0, 0, 0, 0);
    ctx2.drawImage(theCanvas, a1, a2, a3, a4, 0, 0, a3, a4);
    var dataURL= theCanvasCrop.toDataURL();
    window.open(dataURL);
    // jcrop_api.destroy();
    //restore();
    document.getElementById('jcropArea').remove();
    restore();
}

/*
# crop function

**Overview**: changes the state of the canvas


## Example

crop();

*/
function crop() {

    initJcrop();
    document.getElementById('canvasCrop').style.background = "white";
    document.getElementById('myCanvas').style.display = "none";
    document.getElementById('cut').style.display = "inline";
    document.getElementById('release').style.display = "inline";
    document.getElementById("buttonZoomin").disabled = true;
    document.getElementById("buttonZoomout").disabled = true;
    document.getElementById("buttonCrop").disabled = true;
    //var newCanvas = document.createElement('canvas');
    $('#canvasCrop').Jcrop({
            setSelect: [ 60, 70, 540, 330 ],
            onSelect: function(c) {
                a3 = c.w;
                a4 = c.h;
            }
        });
    $('#canvasCrop').Jcrop({
            onChange: function(c) {
                a1 = c.x;
                a2 = c.y;
                a3 = c.w;
                a4 = c.h;
            }
        });

    theCanvasCrop2 = document.getElementById("canvasCrop");
    ctxcrop= theCanvasCrop2.getContext("2d");
    ctxcrop.drawImage(theCanvas,0,0);
}



/*
# initJcrop function

**Overview**: jCrop API initialize values


## Example

initjCrop();

*/
function initJcrop() {
    theCanvasCrop2 = document.getElementById("canvasCrop");
    theCanvasCrop2.width=theCanvas.width;
    theCanvasCrop2.height=theCanvas.height;
       jQuery(function($) {
        $('#canvasCrop').Jcrop();
    });
    //JcropAPI = $.Jcrop('#canvasCrop');
    //$('#can_click,#can_move,#can_size').attr('checked', 'checked');
   // $('#ar_lock,#size_lock,#bg_swap').attr('checked', false);
}
/*
# drawElement function

**Overview**: This function disappears same elements of canvas

Parameters:

- geneType: String variable. name of Element.
- estado: Boolean.

## Example

drawElement("BaseLine", false);

*/
function drawElement(geneType, estado) {
    $('canvas').setLayerGroup(geneType, {
            visible: estado
        }).drawLayers();
}

/*
# minus function

**Overview**: This function zoomOut in canvas

## Example

minus()

*/
function minus(){
             theCanvas = document.getElementById("myCanvas");
             countMinus++;
             widthCanvas=widthCanvas*0.9;
             heightCanvas=heightCanvas*0.9;
             theCanvas.width = widthCanvas;
             theCanvas.height = heightCanvas;
             //theCanvasCrop.width = widthCanvas;
             //theCanvasCrop.height = heightCanvas;
              for (var i = 0; i < countPlus; i++) {
                $('canvas').scaleCanvas({
                    x: 0,
                    y: 0,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    autosave: true
                });
             }
              for (var i = 0; i < countMinus; i++) {
                $('canvas').scaleCanvas({
                    x: 0,
                    y: 0,
                    scaleX: 0.9,
                    scaleY: 0.9,
                    autosave: true
                });
             }
            //window.location.hash = '#myCanvas';
            $("#myCanvas").mousemove();
           // var url = window.location.toString();
           // window.location = url.replace(/#myCanvas/, '');



}

/*
# plus function
window.location.href
**Overview**: This function zoomIn in canvas

## Example

plus()

*/
function plus(){
    theCanvas = document.getElementById("myCanvas");
    countPlus++;
         widthCanvas=widthCanvas*1.1;
             heightCanvas=heightCanvas*1.1;
             theCanvas.width = widthCanvas;
             theCanvas.height = heightCanvas;
       for (var i = 0; i < countPlus; i++) {

                $('#myCanvas').scaleCanvas({
                    x: 0,
                    y: 0,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    autosave: true
                });
             }

              for (var i = 0; i < countMinus; i++) {
                $('#myCanvas').scaleCanvas({
                    x: 0,
                    y: 0,
                    scaleX: 0.9,
                    scaleY: 0.9,
                    autosave: true
                });

             }
             //window.location.hash = '#myCanvas';
             $("#myCanvas").mousemove();
            // window.history.pushState(data, "Titulo", "nueva_url.html");
         //   var url = window.location.toString();
          //  window.location = url.replace(/#myCanvas/, '');
}

/*
# fit function

**Overview**: This function reduces the width to the required number

Parameters:

- ventana: Numbre variable.

## Example

fit(1500)

*/
 function fit(ventana){
     while(widthCanvas>=ventana){
         minus();
     //    console.log("widthCanvas: "+widthCanvas + "\nVentana : "+ventana);
     }
     console.log("imagen con: \n "+widthCanvas+" px,"+heightCanvas+" px");
 }

 /*
# preview function

**Overview**: This function shows a preview image

## Example

preview();

*/
 function preview() {
    window.open(document.getElementById("myCanvas").toDataURL(), "canvasImage", "left=0,top=0,width=" +
        widthCanvas + ",height=" + heightCanvas + ",toolbar=0,resizable=0");
}
function disableCrop() //{{{
    {
     JcropAPI = $('#canvasCrop').data('Jcrop');
     JcropAPI.destroy();
     try{
      options.disabled = true;
      Selection.disableHandles();
      Selection.setCursor('default');
      Tracker.setCursor('default');
    }catch(e){
      console.log(e);
    }
    }
