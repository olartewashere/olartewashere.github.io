/*
 * abierto en Netbeans
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function drawRiboswith(id, xBase, yBase, wBase, hBase, xSteam, ySteam, wSteam, hSteam, xCircle1, yCircle1, wCricle1, hCircle2, Tooltip, link, r, g, b, name, posXText, posYText) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
        strokeWidth: 0,
        x1: xSteam, y1: ySteam,
        x2: (xSteam + wSteam), y2: ySteam,
        x3: (xSteam + wSteam), y3: (ySteam + hSteam),
        x4: (xSteam), y4: (ySteam + hSteam),
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
        cursors: {
            mouseover: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
        strokeWidth: 0,
        x1: xBase, y1: yBase,
        x2: (xBase + wBase), y2: yBase,
        x3: (xBase + wBase), y3: (yBase + hBase),
        x4: (xBase), y4: (yBase + hBase),
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
        cursors: {
            mouseover: 'pointer',
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });
    $('#myCanvas').drawEllipse({
        layer: true,
        fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
        x: xCircle1, y: yCircle1,
        width: wCricle1 - 1,
        height: hCircle2 - 1,
        groups: [id, 'Riboswitch', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        },
        restrictDragToAxis: 'x'
    });
//    Actualmente Riboswitch no lleva el nombre escrito pero se deja la funcion
//    en comentarios, por si se llegase a necesitar a futuro.
//    $('#myCanvas').drawText({
//    fillStyle: 'rgb(0,0,0)',
//    fontSize: '12pt',
//    fontFamily: 'Arial',
//    text: name,
//    x: posXText,
//    y: posYText,
//    maxWidth: 300,
//    lineHeight: 1,
//    groups: [id,'Riboswitch'],'all',
//    restrictDragToAxis: 'x'
//    });
}
function riboswitchArm(id, x1, y1, x2, y2, x3, y3, x4, y4, xCircle3, yCircle3, wCircle3, Tooltip, iStroke, link, r, g, b) {
    $('#myCanvas').drawEllipse({
        layer: true,
        fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
        strokeStyle: '#000',
        strokeWidth: 0,
        x: xCircle3, y: yCircle3,
        width: wCircle3 - 1,
        height: wCircle3 - 1,
        groups: [id, 'Riboswitch', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        },
        restrictDragToAxis: 'x'
    });
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
        strokeWidth: 0,
        x1: x1, y1: y1,
        x2: x2, y2: y2,
        x3: (x3), y3: y3,
        x4: x4, y4: (y4 + 2),
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        }
    });
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x1: x1, y1: y1,
        x2: x2, y2: y2,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all']
    });
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        x1: x3, y1: y3,
        x2: (x4), y2: (y4 + 2),
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all']
    });
}
/**
 * Draw Line  stroke for Riboswitch just forward
 * @param {String} id Name of objetc
 * @param {int} xCircle1 point X of central circle of Riboswitch
 * @param {int} yCircle1 point Y of central circle of Riboswitch
 * @param {int} wCricle1 Width of central circle of Riboswitch
 * @param {int} bx1 point A of Stalk (figure 1.0)
 * @param {int} by1 point A of Stalk (figure 1.0)
 * @param {int} bx2 point B of Stalk (figure 1.0)
 * @param {int} by2 point B of Stalk (figure 1.0)
 * @param {int} bx3 point C of Base (figure 1.0)
 * @param {int} by3 point C of Base (figure 1.0)
 * @param {int} bx4 point D of Base (figure 1.0)
 * @param {int} by4 point D of Base (figure 1.0)
 * @param {int} bx5 point E of Base (figure 1.0)
 * @param {int} by5 point E of Steam (figure 1.0)
 * @param {int} bx6 point F of Steam (figure 1.0)
 * @param {int} by6 point F of Steam (figure 1.0)
 * @param {int} bx7 point G of Steam (figure 1.0)
 * @param {int} by7 point G of Steam (figure 1.0)
 * @param {int} bx8 point H of Steam (figure 1.0)
 * @param {int} by8 point H of Steam (figure 1.0)
 * @param {int} xCircle3 point X of right circle of Riboswitch
 * @param {int} yCircle3 point Y of right circle of Riboswitch
 * @param {int} wCircle3 Width & Height of rigth circle of Riboswitch
 * @param {int} xCircle2 point X of central left of Riboswitch
 * @param {int} yCircle2 point Y of central left of Riboswitch
 * @param {int} wCircle2 Width & Height of left circle of Riboswitch
 * @param {int} iStroke
 * @returns {Riboswitch into canvas}
 */
function riboswitchStrokeForward(id, xCircle1, yCircle1, wCricle1, bx1, by1, bx2, by2,
                                 bx3, by3, bx4, by4, bx5, by5, bx6, by6, bx7, by7, bx8,
                                 by8, xCircle3, yCircle3, wCircle3, xCircle2, yCircle2,
                                 wCircle2, iStroke) {
    /*
     * Draw stroke for central circle of Riboswitch
     * from 315� to 45�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        x: xCircle1, y: yCircle1,
        radius: wCricle1 / 2,
        start: 315, end: 45,
        strokeDash: [iStroke],
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all']
    });
    /*
     * Draw stroke for central circle of Riboswitch
     * from 100� to 145�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle1, y: yCircle1,
        radius: wCricle1 / 2,
        start: 99, end: 145,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for central circle of Riboswitch
     * from 210� to 260�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle1, y: yCircle1,
        radius: wCricle1 / 2,
        start: 210, end: 260,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for right circle of Riboswitch
     * from 315� to 195�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle3, y: yCircle3,
        radius: wCircle3 / 2,
        start: 315, end: 195,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for left circle of Riboswitch
     * from 160� to 30�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle2, y: yCircle2,
        radius: wCircle2 / 2,
        start: 150, end: 45,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all']
    });
    /*
     * Draw stroke for Base and Steam of Riboswitch
     * from point A to point H
     */
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        closed: false,
        x1: bx1, y1: by1,
        x2: bx2, y2: by2,
        x3: bx3, y3: by3,
        x4: bx4, y4: by4,
        x5: bx5, y5: by5,
        x6: bx6, y6: by6,
        x7: bx7, y7: by7,
        x8: bx8, y8: by8,
        groups: [id, 'Riboswitch', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        restrictDragToAxis: 'x'
    });
}
/**
 * Draw Line  stroke for Riboswitch just reverse
 * @param {String} id Name of objetc
 * @param {int} xCircle1 point X of central circle of Riboswitch
 * @param {int} yCircle1 point Y of central circle of Riboswitch
 * @param {int} wCricle1 Width of central circle of Riboswitch
 * @param {int} bx1 point A of Stalk (figure 1.0)
 * @param {int} by1 point A of Stalk (figure 1.0)
 * @param {int} bx2 point B of Stalk (figure 1.0)
 * @param {int} by2 point B of Stalk (figure 1.0)
 * @param {int} bx3 point C of Base (figure 1.0)
 * @param {int} by3 point C of Base (figure 1.0)
 * @param {int} bx4 point D of Base (figure 1.0)
 * @param {int} by4 point D of Base (figure 1.0)
 * @param {int} bx5 point E of Base (figure 1.0)
 * @param {int} by5 point E of Steam (figure 1.0)
 * @param {int} bx6 point F of Steam (figure 1.0)
 * @param {int} by6 point F of Steam (figure 1.0)
 * @param {int} bx7 point G of Steam (figure 1.0)
 * @param {int} by7 point G of Steam (figure 1.0)
 * @param {int} bx8 point H of Steam (figure 1.0)
 * @param {int} by8 point H of Steam (figure 1.0)
 * @param {int} xCircle3 point X of right circle of Riboswitch
 * @param {int} yCircle3 point Y of right circle of Riboswitch
 * @param {int} wCircle3 Width & Height of rigth circle of Riboswitch
 * @param {int} xCircle2 point X of central left of Riboswitch
 * @param {int} yCircle2 point Y of central left of Riboswitch
 * @param {int} wCircle2 Width & Height of left circle of Riboswitch
 * @param {int} iStroke
 * @returns {Riboswitch into canvas}
 */
function riboswitchStrokeReverse(id, xCircle1, yCircle1, wCricle1, bx1, by1, bx2, by2,
                                 bx3, by3, bx4, by4, bx5, by5, bx6, by6, bx7, by7, bx8,
                                 by8, xCircle3, yCircle3, wCircle3, xCircle2, yCircle2,
                                 wCircle2, iStroke) {
    /*
     * Draw stroke for central circle of Riboswitch
     * from 315� to 45�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        x: xCircle1, y: yCircle1,
        radius: wCricle1 / 2,
        start: 140, end: 225,
        strokeDash: [iStroke],
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for central circle of Riboswitch
     * from 100� to 145�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle1, y: yCircle1,
        radius: wCricle1 / 2,
        start: 279, end: 325,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for left circle of Riboswitch
     * from 210� to 260�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle1, y: yCircle1,
        radius: wCricle1 / 2,
        start: 35, end: 85,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for right circle of Riboswitch
     * from 315� to 195�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle3, y: yCircle3,
        radius: wCircle3 / 2,
        start: 313, end: 224,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all'],
    });
    /*
     * Draw stroke for left circle of Riboswitch
     * from 160� to 30�
     */
    $('#myCanvas').drawArc({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        strokeDash: [iStroke],
        x: xCircle2, y: yCircle2,
        radius: wCircle2 / 2,
        start: 110, end: 33,
        restrictDragToAxis: 'x',
        groups: [id, 'Riboswitch', 'all']
    });
    /*
     * Draw stroke for Base and Steam of Riboswitch
     * from point A to point H
     */
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 2,
        strokeDash: [iStroke],
        closed: false,
        x1: bx2, y1: by2,
        x2: bx1, y2: by1,
        x3: bx4, y3: by4,
        x4: bx3, y4: by3,
        x5: bx6, y5: by6,
        x6: bx5, y6: by5,
        x7: bx8, y7: by8,
        x8: bx7, y8: by7,
        groups: [id, 'Riboswitch', 'all'],

        cursors: {
            mouseover: 'pointer',

            mouseup: 'pointer'
        },
        restrictDragToAxis: 'x'
    });
}
/**
 * #function drawTranscriptionalAttenuator
 *  Draw Transcriptional Attenuator
 * @param {String} id Name of objetc
 * @param {int} r Red color from fill
 * @param {int} g Green color from fill
 * @param {int} b Blue color from fill
 * @param {int} rLine Red color from stroke
 * @param {int} gLine Green color from stroke
 * @param {int} bLine Blue color from stroke
 * @param {int} iXStem point x for Steam figure 2.0
 * @param {int} iYStem point y for Steam figure 2.0
 * @param {int} iWStem width for Steam figure 2.0
 * @param {int} iHStem height for Steam figure 2.0
 * @param {int} iXRect2 point E figure 2.0
 * @param {int} iYRect2 point E figure 2.0
 * @param {int} iHRect2 Height for Steam2 figure 2.0
 * @param {int} iWCirc Width for Circle figure 2.0
 * @param {int} iHCirc Height for Circle figure 2.0
 * @param {String} Tooltip contains the tooltip of the object
 * @param {char} strand ('s'|'r') strand or reverse
 * @param {inmt} iStrokeDash line continuos or dotted
 * @param {String} link to next figure
 * @returns no return
 *
 */
function drawTranscriptionalAttenuator(id, r, g, b, rLine, gLine, bLine, iXStem, iYStem, iWStem, iHStem, iXRect2, iYRect2, iHRect2, iWCirc, iHCirc, Tooltip, strand, iStrokeDash, link) {
    if (strand === "f") {
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgb(' + rLine + ',' + gLine + ',' + bLine + ')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
            x1: iXStem, y1: iYStem,
            x2: (iXStem + iWStem), y2: iYStem,//point B figure 2.0
            x3: (iXStem + iWStem), y3: (iYStem + iHStem + 5),//point C figure 2.0
            x4: (iXStem), y4: (iYStem + iHStem + 5),//point D figure 2.0
            closed: true,
            restrictDragToAxis: 'x',
            groups: [id, 'TranscriptionalAttenuator', 'all'],

            cursors: {
                mouseover: 'pointer',

                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
        });
        $('#myCanvas').drawLine({
            strokeStyle: 'rgb(' + rLine + ',' + gLine + ',' + bLine + ')',
            layer: true,
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
            x1: iXRect2, y1: iYRect2,//point E figure 2.0
            x2: (iXRect2 + iWStem), y2: (iYRect2),//point F figure 2.0
            x3: (iXRect2 + iWStem), y3: (iYRect2 + iHRect2 + 5),//point G figure 2.0
            x4: (iXRect2), y4: (iYRect2 + iHRect2 + 5),//point H figure 2.0
            closed: true,
            restrictDragToAxis: 'x',
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeStyle: '#000',
            strokeDash: [iStrokeDash],
            strokeWidth: 1,
            x: iXStem + (iWStem / 2), y: iYStem - 10,
            width: iWCirc,
            height: iHCirc,
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeStyle: '#000',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            x: iXRect2 + (iWStem / 2), y: iYRect2 - 10,
            width: iWCirc,
            height: iHCirc,
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });


    } else {
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgb(' + rLine + ',' + gLine + ',' + bLine + ')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
            x1: iXStem, y1: (iYStem - 5),
            x2: (iXStem + iWStem), y2: (iYStem - 5),
            x3: (iXStem + iWStem), y3: (iYStem + iHStem),
            x4: (iXStem), y4: (iYStem + iHStem),
            closed: true,
            restrictDragToAxis: 'x',
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },

        });
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgb(' + rLine + ',' + gLine + ',' + bLine + ')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
            x1: iXRect2, y1: (iYRect2 - 5),
            x2: (iXRect2 + iWStem), y2: (iYRect2 - 5),
            x3: (iXRect2 + iWStem), y3: (iYRect2 + iHRect2),
            x4: (iXRect2), y4: (iYRect2 + iHRect2),
            closed: true,
            restrictDragToAxis: 'x',
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeStyle: '#000',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            x: (iXStem + iWStem) - (iWStem / 2), y: (iYStem + iHStem) + 10,
            width: iWCirc,
            height: iHCirc,
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeStyle: '#000',
            strokeDash: [iStrokeDash],
            strokeWidth: 1,
            x: (iXRect2 + iWStem) - (iWStem / 2), y: (iYRect2 + iHRect2) + 10,
            width: iWCirc,
            height: iHCirc,
            groups: [id, 'TranscriptionalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });
    }
}
/**
 *
 * @param {int} r Red color from fill
 * @param {int} g Green color from fill
 * @param {int} b Blue color from fill
 * @param {int} border width from figure
 * @param {int} rLine Red color from border
 * @param {int} gLine Green color from border
 * @param {int} bLine Blue color from border
 * @param {int} px1
 * @param {int} py1
 * @param {int} px2
 * @param {int} py2
 * @param {int} px3
 * @param {int} py3
 * @param {int} px4
 * @param {int} py4
 * @param {int} px5
 * @param {int} py5
 * @param {int} px6
 * @param {int} py6
 * @param {int} px7
 * @param {int} py7
 * @param {int} iStrokeDash line continuos or dotted
 * @param {String} name Gene's Label
 * @param {int} pxName point x from Label name
 * @param {int} pyName point y from Label name
 * @param {String} Tooltip contains the tooltip of the object
 * @param {String} link to next figure
 * @returns {undefined}
 */
function drawGene(r, g, b, border, rLine, gLine, bLine, px1, py1, px2, py2, px3, py3, px4, py4, px5, py5, px6, py6, px7, py7, iStrokeDash, name, pxName, pyName, Tooltip, link) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.9)',
        fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
        strokeWidth: border,
        x1: px1, y1: py1,
        x2: px2, y2: py2,
        x3: px3, y3: py3,
        x4: px4, y4: py4,
        x5: px5, y5: py5,
        x6: px6, y6: py6,
        x7: px7, y7: py7,
        strokeDash: [iStrokeDash],
        closed: true,
        restrictDragToAxis: 'x',
        groups: [name, 'Gene', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },

        mouseover: function (layer) {
            innterTooltipClass(Tooltip, layer);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
        mousemove: function (layer) {
            //innterTooltipClass(Tooltip,layer);
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });
    $('#myCanvas').drawText({
        layer: true,
        fillStyle: 'rgb(0,0,0)',
        fontStyle: 'bold',
        fontSize: '12pt',
        fontFamily: 'Arial',
        strokeWidth: 1,
        text: name,
        x: pxName,
        y: pyName,
        maxWidth: 300,
        lineHeight: 1,
        groups: [name, 'Gene', 'all'],
        restrictDragToAxis: 'x'
    });
}
/**
 *
 * @param {int} px1
 * @param {int} py1
 * @param {int} px2
 * @param {int} py2
 * @param {int} px3
 * @param {int} py3
 * @param {int} px4
 * @param {int} py4
 * @param {int} px5
 * @param {int} py5
 * @param {int} px6
 * @param {int} py6
 * @param {int} px7
 * @param {int} py7
 * @param {String} name
 * @param {int} iStrokeDash
 * @param {String} appertain
 * @returns {no retunts}
 */
function drawIncomplete(px1, py1, px2, py2, px3, py3, px4, py4, px5, py5, px6, py6, px7, py7, name, iStrokeDash, appertain) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        fillStyle: 'rgba(0,0,0,0.9)',
        strokeWidth: 1.0,
        x1: px1, y1: py1,
        x2: px2, y2: py2,
        x3: px3, y3: py3,
        x4: px4, y4: py4,
        x5: px5, y5: py5,
        x6: px6, y6: py6,
        x7: px7, y7: py7,
        strokeDash: [iStrokeDash],
        closed: false,
        restrictDragToAxis: 'x',
        groups: [name, appertain, 'all']
    });
}
/**
 *
 * @param {int} lineX1 point of Base line
 * @param {int} lineY1 point of Base line
 * @param {int} lineX2 point of Base Line
 * @param {int} lineY2 point of Base Line
 * @param {int} iStrokeDash if the Base Line will be continuous: 0 = _______  1= _ _ _ _ _
 * @param {String} fontType type font of labels
 * @param {String} textLegLeft text of Left label
 * @param {int} xLegLeft point X legend right
 * @param {int} yLegLeft point Y legend left
 * @param {int} xLegRight point X legend right
 * @param {int} yLegRight point Y legend righ
 * @param {String} textLegRigth text of Right label
 * @param {String} tooltip text of Right label
 * @param {String} link text of Right label
 */
function drawBaseLine(lineX1, lineY1, lineX2, lineY2, iStrokeDash, fontType, textLegLeft, xLegLeft, yLegLeft, textLegRigth, xLegRight, yLegRight, Tooltip, link) {

    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 1,
        x1: lineX1,
        y1: lineY1,
        x2: lineX2,
        y2: lineY2,
        strokeDash: [iStrokeDash],
        groups: ['BaseLine', 'all'],
        restrictDragToAxis: 'x',
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        }

    });
    $('#myCanvas').drawText({
        layer: true,
        fillStyle: 'rgb(0,0,0)',
        fontSize: '11pt',
        fontFamily: fontType,
        text: textLegLeft,
        x: xLegLeft,
        y: yLegLeft,
        maxWidth: 300,
        lineHeight: 1,
        groups: ['BaseLine', 'all'],
        restrictDragToAxis: 'x',
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        }
    });
    $('#myCanvas').drawText({
        layer: true,
        fillStyle: 'rgb(0,0,0)',
        fontSize: '11pt',
        fontFamily: fontType,
        text: textLegRigth,
        x: xLegRight,
        y: yLegRight,
        maxWidth: 300,
        lineHeight: 1,
        groups: ['BaseLine', 'all'],
        restrictDragToAxis: 'x',
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
    });
}
function drawRectWithPoints(r, g, b, x1, y1, width, height, id, Tooltip, appertain, link) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
        strokeWidth: 0,
        x1: x1, y1: y1,
        x2: (x1 + width), y2: y1,
        x3: (x1 + width), y3: (y1 + height),
        x4: (x1), y4: (y1 + height),
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, appertain, 'all'],
        cursors: {
            mouseover: 'pointer',
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
        click: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });

}
function drawString(id, pxName, pyName, sText, appertain, sizeText, Font) {
    $('#myCanvas').drawText({
        layer: true,
        fillStyle: 'rgb(0,0,0)',
        fontSize: sizeText + 'pt',
        strokewidth: 1,
        fontStyle: 'bold',
        fontFamily: Font,
        text: sText,
        x: pxName,
        y: pyName,
        maxWidth: 300,
        lineHeight: 1,
        groups: [id, appertain, 'all'],
        restrictDragToAxis: 'x'
    });
}
function drawTFBingdingSite(r, g, b, x1, y1, width, height, id, Tooltip, appertain, link, border, istrokeDash) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
        strokeWidth: border,
        strokeDash: [istrokeDash],
        x1: x1, y1: y1,
        x2: (x1 + width), y2: y1,
        x3: (x1 + width), y3: (y1 + height),
        x4: (x1), y4: (y1 + height),
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, appertain, 'all'],
        cursors: {
            mouseover: 'pointer',
            mouseup: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
        dblclick: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });

}
/**
 *
 * @param {String} id
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} x1
 * @param {int} y1
 * @param {int} width
 * @param {int} height
 * @param {String} Tooltip
 * @param {String} link
 * @param {int} border
 * @param {int} iStrokeDash
 * @param {int} textSize
 * @param {String} strand
 * @returns {no return}
 */
function drawsRNA(id, r, g, b, x1, y1, width, height, Tooltip, link, border, iStrokeDash, textSize, strand) {
    if (strand === "f") {
        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'rgb(0,0,0)',
            fontSize: textSize + 'pt',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            text: id,
            x: (x1), y: (y1 + height - 15),
            maxWidth: 300,
            lineHeight: 1,
            groups: [id, 'SRNA', 'all'],
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
        });
    } else {
        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'rgba(0,0,0,1)',
            fontSize: textSize + 'pt',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            text: id,
            x: (x1 + (width / 2)), y: (y1 + (height * 2.5)),
            maxWidth: 300,
            lineHeight: 1,
            groups: [id, 'SRNA', 'all'],
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });
    }
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: '#000',
        strokeDash: [iStrokeDash],
        fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.9)',
        strokeWidth: border,
        x1: x1, y1: y1,
        x2: (x1 + width), y2: y1,
        x3: (x1 + width), y3: (y1 + height),
        x4: (x1), y4: (y1 + height),
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, 'SRNA', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
        dblclick: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        },
        rounded: true
    });
}
/**
 *
 * @param {type} r
 * @param {type} g
 * @param {type} b
 * @param {type} id
 * @param {type} x1
 * @param {type} y1
 * @param {type} x2
 * @param {type} y2
 * @param {type} appertain
 * @param {type} iStrokeDash
 * @returns {undefined}
 */
function drawLine(r, g, b, id, x1, y1, x2, y2, appertain, iStrokeDash) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
        // fillStyle: 'rgb('+r+','+g+','+b+')',
        strokeWidth: 1,
        strokeDash: [iStrokeDash],
        x1: x1, y1: y1,
        x2: x2, y2: y2,
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, appertain, 'all'],
        cursors: {
            mouseover: 'pointer',
            mouseup: 'pointer'
        }
    });
}
/**
 *
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} x1 //
 * @param {int} y1
 * @param {int} x2
 * @param {int} y2
 * @param {int} h
 * @param {int} w
 * @param {type} id
 * @param {int} sizeText
 * @param {int} iStrokeDash
 * @param {int} link
 * @param {String} Tooltip
 * @param {String} strand
 * @returns {no return}
 */
function drawPromoter(r, g, b, x1, y1, x2, y2, h, w, id, sizeText, iStrokeDash, link, Tooltip, strand) {
    if (strand === "f") {
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: '#000',//'rgb('+r+','+g+','+b+')',
            //  fillStyle: 'rgb('+r+','+g+','+b+')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            closed: false,
            x1: x1, y1: y1,
            x2: x1, y2: y2,
            x3: (x2 + w), y3: (y2),
            restrictDragToAxis: 'x',
            groups: [id, 'Promoter', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
        });
//Flecha
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            closed: false,
            x1: (x2 + w) - 10, y1: (y2 + 10),
            x2: (x2 + w), y2: y2,
            x3: (x2 + w) - 10, y3: (y2 - 10),
            restrictDragToAxis: 'x',
            groups: [id, 'Promoter', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
        });
        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'rgb(0,0,0)',
            fontSize: sizeText + 'pt',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            text: id,
            x: (x1 + 25),
            y: (y2) - 18,
            maxWidth: 300,
            lineHeight: 1,
            groups: [id, 'Promoter', 'all'],
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });
    } else {
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            closed: false,
            x1: (x2 + w), y1: y2,
            x2: (x2 + w), y2: y1,
            x3: (x1), y3: (y1),
            restrictDragToAxis: 'x',
            groups: [id, 'Promoter', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
        });
//Flecha
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            strokeWidth: 1,
            strokeDash: [iStrokeDash],
            closed: false,
            x1: (x1) + 10, y1: (y1 + 10),
            x2: (x1), y2: y1,
            x3: (x1) + 10, y3: (y1 - 10),
            restrictDragToAxis: 'x',
            groups: [id, 'Promoter', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
        });
        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'rgb(0,0,0)',
            fontSize: sizeText + 'pt',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            text: id,
            x: (x1 + 25),
            y: (y1) + 18,
            maxWidth: 300,
            lineHeight: 1,
            groups: [id, 'Promoter', 'all'],
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });
    }
}
/**
 *
 * @param {String} id
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} border
 * @param {int} rLine
 * @param {int} gLine
 * @param {int} bLine
 * @param {int} iXBase
 * @param int} iYBase
 * @param {int} iWBase
 * @param {int} iHBase
 * @param {int} iXStem
 * @param {int} iYStem
 * @param {int} iWStem
 * @param {int} iHStem
 * @param {int} iXCirc1
 * @param {int} iYCirc1
 * @param {int} iWCirc
 * @param {int} iHCirc
 * @param {int} iStrokeDash
 * @param {String} strand
 * @param {String} link
 * @param {String} Tooltip
 * @returns {no return}
 */
function drawTerminator(id, r, g, b, border, rLine, gLine, bLine, iXBase, iYBase, iWBase, iHBase, iXStem, iYStem, iWStem, iHStem, iXCirc1, iYCirc1, iWCirc, iHCirc, iStrokeDash, strand, link, Tooltip) {
    if (strand === 'f') {
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',1)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
            strokeWidth: border,
            strokeDash: [iStrokeDash],
            x1: (iXStem + iWStem), y1: iYStem, //A
            x2: (iXStem + iWStem), y2: (iYStem + iHStem),//B
            x3: (iXBase + iWBase), y3: iYBase,//C
            x4: (iXBase + iWBase), y4: (iYBase + iHBase),//D
            x5: (iXBase), y5: (iYBase + iHBase),//E
            x6: iXBase, y6: iYBase,//F
            x7: (iXStem), y7: (iYStem + iHStem),//G
            x8: iXStem, y8: iYStem,//H
            closed: true,
            groups: [id, 'Terminator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawArc({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',1)',
            strokeWidth: border,
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
            x: (iXStem + (iWCirc / 4)), y: (iYStem - (iWCirc / 4)),
            radius: iWCirc / 2,
            start: 205, end: 150,
            strokeDash: [iStrokeDash],
            restrictDragToAxis: 'x',
            groups: [id, 'Terminator', 'all'],
        });
    } else {
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',1)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
            strokeWidth: border,
            strokeDash: [iStrokeDash],
            x1: (iXStem + iWStem), y1: (iYStem + iHStem),
            x2: (iXStem + iWStem), y2: iYStem,
            x3: (iXBase + iWBase), y3: (iYBase + iHBase),
            x4: (iXBase + iWBase), y4: iYBase,
            x5: iXBase, y5: iYBase,
            x6: (iXBase), y6: (iYBase + iHBase),
            x7: iXStem, y7: iYStem,
            x8: (iXStem), y8: (iYStem + iHStem),
            closed: false,
            restrictDragToAxis: 'x',
            groups: [id, 'Terminator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mousedown: 'move',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawArc({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',1)',
            strokeWidth: border,
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
            x: (iXStem + (iWCirc / 4)), y: ((iYStem + iHStem) + (iWCirc / 4)),
            radius: iWCirc / 2,
            start: 40, end: 335,
            strokeDash: [iStrokeDash],
            restrictDragToAxis: 'x',
            groups: [id, 'Terminator', 'all']
        });
    }
}
function drawppGpp(id, r, g, b, rLine, gLine, bLine, istrokeWidth, iStrokeDash, iX, iY, ppGpp1, type, ppGpp2, link, Tooltip) {
    if (type === 'd') {

        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'rgba(0,255,255,0.01)',
            restrictDragToAxis: 'x',
            groups: [id, 'FigppGpp', 'all'],
            name: id,
            strokeDash: [iStrokeDash],
            x: iX + 10,
            y: iY,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            fontSize: '10pt',
            fontFamily: 'Arial',
            text: ppGpp1
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.9)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.7)',
            groups: [id, 'FigppGpp', 'all'],
            restrictDragToAxis: 'x',
            layer: true,
            strokeWidth: istrokeWidth,
            x: (iX) + 10,
            y: iY,
            width: $('#myCanvas').measureText(id).width + 15,
            height: $('#myCanvas').measureText(id).height + 5,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawText({
            layer: true,
            fontFamily: 'arial',
            fillStyle: '#000',
            restrictDragToAxis: 'x',
            groups: [id, 'FigppGpp', 'all'],
            strokeDash: [iStrokeDash],
            x: (( $('#myCanvas').measureText(id).x)), y: iY,
            fontSize: '10pt',
            text: ppGpp1
        });

        $('#myCanvas').drawText({
            layer: true,
            restrictDragToAxis: 'x',
            groups: [id, 'FigppGpp', 'all'],
            name: id,
            strokeDash: [iStrokeDash],
            x: (iX - ($('#myCanvas').measureText(id).width)),
            y: iY,
            fontSize: '10pt',
            fontFamily: 'Arial',
            text: ppGpp2
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.9)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.7)',
            groups: [id, 'FigppGpp', 'all'],
            restrictDragToAxis: 'x',
            setLayer: 1,
            layer: true,
            strokeWidth: istrokeWidth,
            x: (iX - ($('#myCanvas').measureText(id).width)),
            y: iY,
            width: $('#myCanvas').measureText(id).width + 15,
            height: $('#myCanvas').measureText(id).height + 5,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawText({
            layer: true,
            fontFamily: 'Arial',
            fillStyle: '#000',
            restrictDragToAxis: 'x',
            groups: [id, 'FigppGpp', 'all'],
            strokeDash: [iStrokeDash],
            x: (iX - ($('#myCanvas').measureText(id).width)), y: iY,
            fontSize: '10pt',
            text: ppGpp2,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
    }
    else {
        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'rgba(255,255,255,0.01)',
            restrictDragToAxis: 'x',
            groups: [id, 'FigppGpp', 'all'],
            name: id,
            //strokeWidth: istrokeWidth,
            strokeDash: [iStrokeDash],
            x: iX,
            y: iY,
            fontSize: '10pt',
            fontFamily: 'Arial',
            text: ppGpp1,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawEllipse({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.9)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.7)',
            groups: [id, 'FigppGpp', 'all'],
            restrictDragToAxis: 'x',
            layer: true,
            strokeWidth: 1,
            x: (iX),//-( $('#myCanvas').measureText(id).width/2)),
            y: iY,
            width: $('#myCanvas').measureText(id).width + 15,
            height: $('#myCanvas').measureText(id).height + 5,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawText({
            layer: true,
            fontFamily: 'Arial',
            //strokeStyle: '#000',
            fillStyle: '#000',
            restrictDragToAxis: 'x',
            groups: [id, 'FigppGpp', 'all'],
            strokeWidth: istrokeWidth,
            strokeDash: [iStrokeDash],
            x: iX, y: iY,
            fontSize: '10pt',
            text: ppGpp1,
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
    }
}
/**
 * Representacion grafica del  Operon dentro del DNA abarca el espacio de los
 * genes y subconjuntos de ellos que lo conforman, tiene una similitud con el
 * dibujado del Gene, pero sin las puntas que caracterizan a la flecha.
 * @param {type} id
 * @param {type} r
 * @param {type} g
 * @param {type} b
 * @param {type} rLine
 * @param {type} gLine
 * @param {type} bLine
 * @param {type} px1
 * @param {type} py1
 * @param {type} px2
 * @param {type} py2
 * @param {type} px3
 * @param {type} py3
 * @param {type} px4
 * @param {type} py4
 * @param {type} px5
 * @param {type} py5
 * @param {type} px6
 * @param {type} py6
 * @param {type} px7
 * @param {type} py7
 * @param {type} iStrokeWidth
 * @param {type} iStrokeDash
 * @param {type} tooltip
 * @param {type} link
 * @param {type} labelFont
 * @param {type} labelSize
 * @returns {undefined}
 */
function drawOperon(id, r, g, b, rLine, gLine, bLine, px1, py1, px2, py2, px3, py3, px4, py4, px5, py5, px6, py6, px7, py7, iStrokeWidth, iStrokeDash, tooltip, link, labelFont, labelSize, labelName) {
    $('#myCanvas').drawLine({
        layer: true,
        strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.7)',
        fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',0.7)',
        strokeWidth: iStrokeWidth,
        x1: px1, y1: py1,
        x2: px2, y2: py2,
        x3: px3, y3: py3,
        x4: px4, y4: py4,
        x5: px5, y5: py5,
        x6: px6, y6: py6,
        x7: px7, y7: py7,
        strokeDash: [iStrokeDash],
        closed: true,
        restrictDragToAxis: 'x',
        groups: [id, 'Operon', 'all'],
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
        dblclick: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });
    $('#myCanvas').drawText({
        layer: true,
        fillStyle: 'rgb(0,0,0)',
        fontStyle: 'bold',
        fontSize: labelSize + 'pt',
        fontFamily: labelFont,
        strokeWidth: 1,
        text: labelName,
        x: ((px1 + px2) / 2),
        y: py4,
        maxWidth: 300,
        lineHeight: 1,
        groups: [id, 'Operon', 'all'],
        restrictDragToAxis: 'x',
        cursors: {
            mouseover: 'pointer',
            mousedown: 'move',
            mouseup: 'pointer'
        },
        mouseover: function (layer) {
            innterTooltipClass(Tooltip);
        },
        mouseout: function (layer) {
            hideToolTip();
        },
        dblclick: function (layer) {
            if (link === "" | typeof (link) === "undefined") {
                link = "#";
            } else {
                redirect(link);
            }
        }
    });
}
/**
 *
 * @param {String} id
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} rLine
 * @param {int} gLine
 * @param {int} bLine
 * @param {int} iXBase
 * @param {int} iYBase
 * @param {int} iWBase
 * @param {int} iHBase
 * @param {int} iXStem
 * @param {int} iYStem
 * @param {int} iWStem
 * @param {int} iHStem
 * @param {int} iXRect2
 * @param {int} iYRect2
 * @param {int} iHRect2
 * @param {int} iWcircle
 * @param {String} strand
 * @param {int} lineWidth
 * @param {int} iStrokeDash
 * @param {int} Tooltip
 * @param {int} link
 * @returns {no return}
 */
function drawTranslationalAttenuator(id, r, g, b, rLine, gLine, bLine, iXBase, iYBase, iWBase, iHBase, iXStem, iYStem, iWStem, iHStem, iHRect2, iWcircle, strand, lineWidth, iStrokeDash, Tooltip, link) {
    drawRectWithPoints(r, g, b, iXStem, iYStem, iWStem, iHStem, id, '', 'TranslationalAttenuator', '');
    drawRectWithPoints(r, g, b, iXBase, iYBase, iWBase, iHBase, id, '', 'TranslationalAttenuator', '');
    if (strand === "f") {
        $('#myCanvas').drawEllipse({
            fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            layer: true,
            strokeStyle: 'rgb(' + rLine + ',' + gLine + ',' + bLine + ')',
            strokeWidth: lineWidth,
            strokeDash: [iStrokeDash],
            x: (iXStem + (iWStem / 2)), y: iYStem - (10),
            width: iWcircle,
            height: iWcircle,
            groups: [id, 'TranslationalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.9)',
            // fillStyle: 'rgba('+r+','+g+','+b+',1)',
            strokeWidth: lineWidth,
            strokeDash: [iStrokeDash],
            x1: (iXStem), y1: (iYStem),
            x2: (iXStem), y2: (iYStem + iHStem),
            x3: (iXBase), y3: (iYBase),
            x4: (iXBase), y4: (iYBase + iHBase),
            x5: (iXBase + iWBase), y5: (iYBase + iHBase),
            x6: (iXBase + iWBase), y6: (iYBase),
            x7: (iXStem + iWStem), y7: (iYStem + iHStem),
            x8: (iXStem + iWStem), y8: (iYStem),
            closed: false,
            restrictDragToAxis: 'x',
            groups: [id, 'TranslationalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawLine({
            layer: true,
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',2)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
            strokeWidth: lineWidth,
            strokeDash: [iStrokeDash],
            x1: (iXStem + (iWStem / 2)), y1: (iYStem + (iHStem / 4)),
            x2: ((iXStem + (iWStem / 2)) + iWStem), y2: (iYStem + (iHStem / 4)),
            x3: ((iXStem + (iWStem / 2)) + iWStem), y3: (iYStem + (iHStem / 4)) + iHRect2,
            x4: (iXStem + (iWStem / 2)), y4: (iYStem + (iHStem / 4)) + iHRect2,
            closed: true,
            restrictDragToAxis: 'x',
            groups: [id, 'TranslationalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });

    } else {
        $('#myCanvas').drawEllipse({
            fillStyle: 'rgb(' + r + ',' + g + ',' + b + ')',
            layer: true,
            strokeStyle: 'rgb(' + rLine + ',' + gLine + ',' + bLine + ')',
            strokeWidth: lineWidth,
            strokeDash: [iStrokeDash],
            x: (iXStem + (iWStem / 2)), y: (iYStem + iHStem + 10),
            width: iWcircle,
            height: iWcircle,
            groups: [id, 'TranslationalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            click: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            touchstar: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
            restrictDragToAxis: 'x'
        });
        $('#myCanvas').drawLine({
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',0.9)',
            layer: true,
            // fillStyle: 'rgba('+r+','+g+','+b+',1)',
            strokeWidth: lineWidth,
            strokeDash: [iStrokeDash],
            x1: (iXStem), y1: (iYStem + iHStem),
            x2: (iXStem), y2: (iYStem),
            x3: (iXBase), y3: (iYBase + iHBase),
            x4: (iXBase), y4: (iYBase),
            x5: (iXBase + iWBase), y5: (iYBase),
            x6: (iXBase + iWBase), y6: (iYBase + iHBase),
            x7: (iXStem + iWStem), y7: (iYStem),
            x8: (iXStem + iWStem), y8: (iYStem + iHStem),
            closed: false,
            restrictDragToAxis: 'x',
            groups: [id, 'TranslationalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            }
        });
        $('#myCanvas').drawLine({
            strokeStyle: 'rgba(' + rLine + ',' + gLine + ',' + bLine + ',2)',
            fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
            layer: true,
            strokeWidth: lineWidth,
            strokeDash: [iStrokeDash],
            x1: (iXStem + (iWStem / 2)), y1: (iYStem + (iHStem / 4)),
            x2: ((iXStem + (iWStem / 2)) + iWStem), y2: (iYStem + (iHStem / 4)),
            x3: ((iXStem + (iWStem / 2)) + iWStem), y3: (iYStem + (iHStem / 4)) + iHRect2,
            x4: (iXStem + (iWStem / 2)), y4: (iYStem + (iHStem / 4)) + iHRect2,
            closed: true,
            restrictDragToAxis: 'x',
            groups: [id, 'TranslationalAttenuator', 'all'],
            cursors: {
                mouseover: 'pointer',
                mouseup: 'pointer'
            },
            mouseover: function (layer) {
                innterTooltipClass(Tooltip);
            },
            mouseout: function (layer) {
                hideToolTip();
            },
            dblclick: function (layer) {
                if (link === "" | typeof (link) === "undefined") {
                    link = "#";
                } else {
                    redirect(link);
                }
            },
        });
    }
}
/**
 *
 * @param {String} writte Title
 * @returns {no return}
 */
function drawTitle(title) {
    if (title === "" | typeof (title) === "undefined" | title === "null") {
    }
    else {
        $('#myCanvas').drawText({
            fillStyle: 'rgb(0,0,0)',
            fontStyle: 'bold',
            fontSize: '12pt',
            fontFamily: 'Arial',
            strokeWidth: 1,
            text: title,
            x: ($('#myCanvas').width() / 2),
            y: (10),
            groups: ['Title', 'all'],
            layer: true
        });
    }
}
/**
 *
 * @param {String} legend writte legend
 * @returns {no return}
 */
function drawLegend(legend) {
    if (legend === "" | typeof (legend) === "undefined" | legend === "null") {
    }
    else {
        $('#myCanvas').drawText({
            layer: true,
            fillStyle: 'GRAY',
            fontStyle: 'bold',
            fontSize: '8pt',
            fontFamily: 'Arial',
            strokeWidth: 1,
            text: legend,
            x: ($('#myCanvas').width() / 2),
            y: ($('#myCanvas').height() - 40),
            groups: ['Legend', 'all']
        });
    }
}
/**
 *
 * @returns {no return}
 */
function WaterMark() {
    $('#myCanvas').drawText({
        fillStyle: 'rgba(200,200,200,.9)',
        fontStyle: 'bold',
        fontSize: '10pt',
        fontFamily: 'Arial',
        strokeWidth: 1,
        text: "Power By RegulonDB",
        x: ($('#myCanvas').width() - 100),
        y: ($('#myCanvas').height() - 20),
        groups: ['WaterMark', 'all'],
        layer: true
    });
    //  $('#myCanvas').drawImage({
    //      layer:true,
    //      source: 'images/c.png',
    //      x: ($('#myCanvas').width()-15),
    //      y: ($('#myCanvas').height()-25),
    //      width: 20,
    //      height: 20
    //  });

}
