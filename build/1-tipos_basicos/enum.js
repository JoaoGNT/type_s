"use strict";
var Permissoes;
(function (Permissoes) {
    Permissoes[Permissoes["admin"] = 0] = "admin";
    Permissoes[Permissoes["editor"] = 1] = "editor";
    Permissoes[Permissoes["comum"] = 2] = "comum";
})(Permissoes || (Permissoes = {}));
;
var Cores;
(function (Cores) {
    Cores["red"] = "#ff000";
    Cores["black"] = "#000";
})(Cores || (Cores = {}));
;
const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.admin
};
console.log(usuario);
