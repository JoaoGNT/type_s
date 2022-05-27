"use strict";
let isActive;
//..
function mapStatus(status) {
    if (status) {
        return `Usuário Ativo`;
    }
    else {
        return `Não está Ativo`;
    }
}
mapStatus(false);
