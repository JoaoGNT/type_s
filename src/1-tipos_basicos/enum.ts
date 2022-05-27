enum Permissoes{
    admin, // posso usar também admin = 'ADMIN' - atribuindo uma string ao estado
    editor,
    comum
};

enum Cores{
    red = '#ff000',
    black = '#000'
};

const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.admin
};

console.log(usuario);