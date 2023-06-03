
const names = ['Trevor', 'Carty', 'Jay'];

function writeCards(names){
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(){
    let i = 0
    while (i < 11){
        console.log(i)
        i++
    }
}
