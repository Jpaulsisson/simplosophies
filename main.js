/* VARIABLE BANK */
const popOutNav = document.getElementById('pop-out-nav');
const hamburger = document.getElementById('hamburger');
const burgerSpan = document.getElementsByClassName('burger-span');





/* A POSITIVE MESSAGE GENERATOR */


const start = ['I', 'We'];
const second = ['can be', 'will be', 'should be', 'may be'];
const third = ['better', 'the best', 'amazing', 'world-changing', 'life-changing', 'beautiful', 'loving', 'compassionate', 'understanding'];
const fourth = 'but first,';
const fifth = start;
const sixth = ['must', 'will', 'have to', 'need to']
const end = ['work hard', 'put in the work', 'put in the time', 'make the sacrifices needed', 'see myself truthfully', 'be the change I want to see', 'be willing to see where I am wrong', 'grow my understanding of others', 'stop believing I deserve more than I do', 'stop procrastinating', 'stop blaming others', 'stop hating', 'believe in the good of others', 'learn to disagree, without conflict', 'learn to open my eyes to the ways of others', 'learn to love better', 'win the fight against my inner pride', 'win the fight against my inner anger', 'win the fight against my inner rage', 'win the fight against my low self-esteem', 'win the fight against self-loathing', 'win the fight against self-hatred', 'forgive the wrongs already done', 'swallow the desire for revenge and set a new path', 'move forward with love and not pride'];

const selectRandom = (array) => { 
    let i = Math.floor(Math.random() * array.length);
return array[i];}

const generatePositiveMessage = () => {         //WILL ADD MORE PHRASE POSSIBILITIES LATER
    let message = '';                           //WILL ALSO ADD TERNARY STATEMENT TO MAKE SURE CORRECT GRAMMAR IS USED
    const a = selectRandom(start);
    const b = selectRandom(second);
    const c = selectRandom(third);
    const d = fourth;
    const e = a === 'I' ? 'I' : 'we';
    const f = selectRandom(sixth);
    const g = selectRandom(end);
    message = `${a} ${b} ${c} ${d} ${e} ${f} ${g}!`;
    console.log(message);
};
generatePositiveMessage();

function popOut() {
    burgerSpan.classList.add('active');
}

hamburger.onclick = popOut();