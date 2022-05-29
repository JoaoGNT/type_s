"use strict";
//classes e funççoes
//js
// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Player{
//     constructor(name,age,game){
//         super(name,age);
//         this.game = game;
//     }
// }
// const jogador = new Player('Anna',25, 'Red Dead');
// const user = new User('José',23);
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOjogoAtual() {
        return `Estou jogando no momento: ${this.jogo}`;
    }
    static queHorasSao() {
        /*         metodos estaticos são os que podemos acessar
                diretamente da nossa classe sem precisar de um objeto */
        return Date();
    }
}
const jogador = new Player('Anna', 25, 'Red Dead');
console.log(jogador.dizerOjogoAtual());
console.log(Player.queHorasSao());
