let floatId = document.getElementById('floatId');
let floatPw = document.getElementById('floatPw');
labelp = document.getElementById('labelP');
labelpw = document.getElementById('labelPW');
let id = document.querySelector('.id');
// console.log(labelp);
// console.log(labelpw);

function changeValue(){
    if(!floatId.value==''){
        labelp.style.transform = `translate(${-5}px, ${-35}px)`;
        labelp.style.fontSize = `${13}px`;
    }
    if(!floatPw.value==''){
        labelpw.style.transform = `translate(${-5}px, ${-35}px)`;
        labelpw.style.fontSize = `${13}px`;
    }
}


document.querySelector('.signupBtn').addEventListener('click',()=>{
    location.href='signup.html';
})