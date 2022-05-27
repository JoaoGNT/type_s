"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gatos = [
    'lora',
    'logan',
    'lebau'
];
// gatos.push(5); //not possible
function exibeGatos(gatos) {
    return `Os gatos são: ${gatos.join(', ')}`;
}
exibeGatos(gatos);
