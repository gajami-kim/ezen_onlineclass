let floatId = document.getElementById('floatId');
let floatPw = document.getElementById('floatPw');
let floatName = document.getElementById('floatName');
let floatPhone = document.getElementById('floatPhone');
let floatPwC = document.getElementById('floatPwC');
labelp = document.getElementById('labelP');
labelpw = document.getElementById('labelPW');
labelPN = document.getElementById('labelPN');
labelPP = document.getElementById('labelPP');
labelPWC = document.getElementById('labelPWC');
let signupBtn = document.querySelector('.signupBtn');
const ch1 = document.querySelector('.ch1');
const ch2 = document.querySelector('.ch2');

function changeValue(){
    if(!floatId.value==''){
        labelp.style.transform = `translate(${-5}px, ${-35}px)`;
        labelp.style.fontSize = `${13}px`;
    }
    if(!floatPw.value==''){
        labelpw.style.transform = `translate(${-5}px, ${-35}px)`;
        labelpw.style.fontSize = `${13}px`;
    }
    if(!floatName.value==''){
        labelPN.style.transform = `translate(${-5}px, ${-35}px)`;
        labelPN.style.fontSize = `${13}px`;
    }
    if(!floatPhone.value==''){
        labelPP.style.transform = `translate(${-5}px, ${-35}px)`;
        labelPP.style.fontSize = `${13}px`;
    }
    if(!floatPwC.value==''){
        labelPWC.style.transform = `translate(${-5}px, ${-35}px)`;
        labelPWC.style.fontSize = `${13}px`;
    }
}

function selectAll(selectAll) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) =>{
        checkbox.checked = selectAll.checked;
    })
}

function checkSelectAll(){
    const checkboxes = document.querySelectorAll('input[name="check"]');
    const checked = document.querySelectorAll('input[name="check"]:checked');
    const selectAll = document.querySelector('input[name="checkAll"]');
    
    if(checkboxes.length==checked.length){
      selectAll.checked=true;
    } else {
        selectAll.checked=false;
    }

}

function chageOpacity(){
    const selectAll = document.querySelector('input[name="checkAll"]');
    
    if(!floatId.value=='' && !floatPw.value=='' && !floatName.value==''
    && !floatPhone.value=='' && !floatPwC.value==''){
        if(selectAll.checked==true) {
            signupBtn.style.opacity = "1";
            // console.log('투명도 변경');
            signupBtn.addEventListener('click',()=>{
                alert('반갑습니다! 회원가입이 완료되었습니다!');
                console.log(floatId.value);
                floatId.value='';
                floatPw.value='';
                floatName.value='';
                floatPhone.value='';
                floatPwC.value='';
                selectAll.checked=false;
                ch1.checked=false;
                ch2.checked=false;
                location.href='../html/login.html';
            })
        } else {
            signupBtn.style.opacity = "0.5";
        }
    }
}




let regName = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);
let regPhone = new RegExp(/[09]/);
let regId = new RegExp(/^[a-z | A-Z]{3,6}[0-9]{3,6}$/);
let regPw = new RegExp(/^.*(?=.{6,15})(?=.*[0-9])(?=.*[a-zA-Z]).*$/);
let pwCheck = '';