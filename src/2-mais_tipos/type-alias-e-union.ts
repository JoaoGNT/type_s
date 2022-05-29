type User = {
    name: string;
    lastName: string;
    birthday:string;
    age?: string;
}

const Gabriel: User ={
    name:'Gabriel',
    lastName: 'Ramos',
    birthday:'29/01/1996'
}

//unions types
//| (como se fosse or)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message:string,level:LogLevel){
    console.log(`[${level}]-${message}`);
}
logMessage('Uma mensagem info','error');

//interssecion types: &

type About={
    bio:string,
    interests:string[]
}

type Profile = User & About;

const userWithProfile:Profile = {
    name:'Gabriel',
    lastName: 'Ramos',
    birthday:'29/01/1996',
    bio:'',
    interests:['']
}

type ComposedProfile = User &{log:LogLevel};

