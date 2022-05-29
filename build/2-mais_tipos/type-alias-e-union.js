"use strict";
const Gabriel = {
    name: 'Gabriel',
    lastName: 'Ramos',
    birthday: '29/01/1996'
};
function logMessage(message, level) {
    console.log(`[${level}]-${message}`);
}
logMessage('Uma mensagem info', 'error');
const userWithProfile = {
    name: 'Gabriel',
    lastName: 'Ramos',
    birthday: '29/01/1996',
    bio: '',
    interests: ['']
};
