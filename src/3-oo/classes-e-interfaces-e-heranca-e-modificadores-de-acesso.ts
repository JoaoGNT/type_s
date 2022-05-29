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
    public nome;
    public idade;
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario{
    public jogo;
    constructor(nome:string,idade:number,jogo:string){
        super(nome,idade);
        this.jogo = jogo;
    }

    dizerOjogoAtual(){ 
        
        return `Estou jogando no momento: ${this.jogo}`;
    }

    static queHorasSao(){

/*         metodos estaticos são os que podemos acessar 
        diretamente da nossa classe sem precisar de um objeto */
    
        return Date();

    }
}
const jogador = new Player('Anna',25, 'Red Dead');
console.log(jogador.dizerOjogoAtual());
console.log(Player.queHorasSao());

//private,protected,public

/* public:acessível de forma geral, dentro e fora da classe;
private:acessível apenas dentro da classe onde o campo foi criado
protected: acessível apenas dentro da classe e sobcclasses onde o campo foi criado */



/*  class Jogo{
    public nome;
    constructor(nome:string){
        this.nome = nome;    
    }
    dizerNome(){

        return `O nome do jogo é ${this.nome}`
    }
}
const ghost = new Jogo('Ghost of Tsushima')
ghost.nome = 'The sims';
console.log(ghost.nome)
possbiliat a troca do this.nome */

 class Jogo{
    protected nome;
    constructor(nome:string){
        this.nome = nome;    
    }
    dizerNome(){
        //tipo um getter
        return `O nome do jogo é ${this.nome}`
    }
}
//const ghost = new Jogo('Ghost of Tsushima')
// console.log(ghost.dizerNome())

/* class JogoComDescricao extends Jogo{
    private descricao;

    constructor(nome:string, descricao:string){
        super(nome);
        this.descricao = descricao;
    }
    dizerNome(){
        //tipo um getter
        return `O nome do jogo é ${this.nome}` // não consgio por ser um campo privado, apenas se nome na classe anterior fosse protected
    }
}
const ghost = new JogoComDescricao('Ghost of Tsushima',"É um jogo muito bom")
console.log(ghost.dizerNome()) */

 
//Interfaces: formas de garantir funcoes e metodos das classes

interface IJogoComDescricao{
    // nome:string;
    // descricao:string;
    dizerNomeComDescricao():string;
}

class JogoComDescricao extends Jogo implements IJogoComDescricao{
    private descricao;

    constructor(nome:string, descricao:string){
        super(nome);
        this.descricao = descricao;
    }
    dizerNomeComDescricao(): string {
        
    
        //tipo um getter
        return `O nome do jogo é ${this.nome}` // não consgio por ser um campo privado, apenas se nome na classe anterior fosse protected
    }
}

