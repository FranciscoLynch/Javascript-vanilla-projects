// Eventos de html y como se relacionan con js, onclick, onkeypress, etc
const text = document.querySelector('#text');
const viewDoc = document.querySelector('#view');

const update = () => {
    viewDoc.srcdoc = text.value;
    console.log(text.value);  
}