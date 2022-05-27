import { isFunctionExpression } from "typescript"

const gatos:string[] = [
    'lora',
    'logan',
    'lebau'
]

// gatos.push(5); //not possible

function exibeGatos(gatos: string[]){

    return `Os gatos são: ${gatos.join(', ')}`;

}

exibeGatos(gatos);