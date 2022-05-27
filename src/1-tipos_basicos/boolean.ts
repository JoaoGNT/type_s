let isActive: boolean;

//..

function mapStatus(status: boolean){

    if(status){
        return `Usuário Ativo`
    }else{
        return `Não está Ativo`
    }
}

mapStatus(false);