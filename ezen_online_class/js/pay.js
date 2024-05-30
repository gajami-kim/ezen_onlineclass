

const Uname = document.getElementById('cusName');
const email = document.getElementById('cusEmail');
const phone = document.getElementById('cusPhone');
const failE = document.querySelector('.failE');
const failP = document.querySelector('.failP');
const failN = document.querySelector('.failN');
const payBtn = document.getElementById('payBtn');
const selectpay = document.querySelector('.selectpay');
const ratiopay = document.querySelector('.ratiopay');
const totalpay = document.querySelector('.totalpay');
const cou1 = document.querySelector('.cou1');
const cou2 = document.querySelector('.cou2');
const cou3 = document.querySelector('.cou3');
const checkAll = document.querySelector('.checkAll');
// const check = document.getElementsByName('check');
const checkObj = document.querySelectorAll('.checkObj');

function checkCourse(){ //강의 선택에 따른 가격변경
  // console.log(checkAll.checked);
  // console.log(cou1.checked);
  // console.log(cou2.checked);
  // console.log(cou3.checked);

  if(checkAll.checked) { //모두선택
    selectpay.innerHTML='164,000원';
    ratiopay.innerHTML='39,600원';
    totalpay.innerHTML='124,400원';
  } else if(cou1.checked) { //1번 수업 선택
    selectpay.innerHTML='88,000원';
    ratiopay.innerHTML='26,400원';
    totalpay.innerHTML='61,600원';
    if(cou2.checked){ // 1번&2번 수업 선택
      // checkAll.checked=false;
      selectpay.innerHTML='132,000원';
        ratiopay.innerHTML='39,600원';
        totalpay.innerHTML='92,400원';
        if(cou3.checked) { //1번&2번&3번 수업 선택
          checkAll.checked==true;
          selectpay.innerHTML='164,000원';
          ratiopay.innerHTML='39,600원';
          totalpay.innerHTML='124,400원';
          checkAll.checked=true;
        }
      } else if(cou3.checked){ // 1번&3번수업 선택
        selectpay.innerHTML='120,000원';
        ratiopay.innerHTML='26,400원';
        totalpay.innerHTML='93,600원';
      }
    } else if(cou2.checked){ //2번 수업 선택
      selectpay.innerHTML='44,000원';
      ratiopay.innerHTML='13,200원';
      totalpay.innerHTML='30,800원';
      if(cou3.checked){ //2번&3번 수업 선택
        selectpay.innerHTML='76,000원';
        ratiopay.innerHTML='13,200원';
        totalpay.innerHTML='62,800원';
      }
  } else if(cou3.checked) { //3번 수업 선택
    selectpay.innerHTML='32,000원';
    ratiopay.innerHTML='0원';
    totalpay.innerHTML='32,000원';
  } else if(!checkAll.checked){ //선택안함
    selectpay.innerHTML='0원';
    ratiopay.innerHTML='0원';
    totalpay.innerHTML='0원';
  }
}

function selectAll(selectAll){ //전체선택 클릭시 모두 선택됨
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
    checkCourse();
  }
}

function uncheckedAll(){
  selectpay.innerHTML='0원';
  ratiopay.innerHTML='0원';
  totalpay.innerHTML='0원';
}

// 체크된 것만 선택삭제
document.addEventListener('click',(e)=>{
  // console.log(e.target.classList);
  if(e.target.classList.contains('delete')){
    checkCourse();
    checkAll.checked=false;
    if(cou1.checked=true){
      if(cou2.checked=true){
        cou2.checked =false;
        checkCourse();
      }
      cou1.checked = false;
      checkCourse();
    } 
    if(cou2.checked=true){
      if(cou3.checked=true){
        cou3.checked = false;
        checkCourse();
      }
      cou2.checked = false;
      checkCourse();
    }
    if(cou3.checked=true){
      cou3.checked =false;
      checkCourse();
    }
  }
})


payBtn.addEventListener('click',()=>{
  valid();
  reset();
});

const regEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
const regPhone = new RegExp(/[09]/);
const regName = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);

function valid(){ //이름,이메일,번호 유효성검사
  // console.log(regEmail.test(email.value));
  if(Uname.value ==''){
    failN.innerHTML = '이름을 입력해주세요.';
    Uname.style.border = "1px solid rgb(212,2,2)";
  } else if(!regName.test(Uname.value)) {
    failN.innerHTML = '한글만 입력해주세요.';
    Uname.style.border = "1px solid rgb(212,2,2)";
    
  }

  if(email.value==''){
    failE.innerHTML='이메일을 입력해주세요.';
    email.style.border = "1px solid rgb(212,2,2)";
  } else if(!regEmail.test(email.value)){
    failE.innerHTML='잘못된 이메일 형식입니다.';
    email.style.border = "1px solid rgb(212,2,2)";
  }

  if(phone.value==''){
    failP.innerHTML='숫자를 입력해주세요.';
    phone.style.border = "1px solid rgb(212,2,2)";
  } else if(!regPhone.test(phone.value)){
    failP.innerHTML='숫자만 입력해주세요.';
    phone.style.border = "1px solid rgb(212,2,2)";
  }

}

function reset(){
  if(regPhone.test(phone.value)&&regEmail.test(email.value)&&regName.test(Uname.value)){
    if(cou1.checked==true || cou2.checked==true || cou3.checked==true) {
      alert('결제가 완료되었습니다.');
      Uname.value='';
      email.value='';
      phone.value='';
      failN.innerHTML='';
      failE.innerHTML='';
      failP.innerHTML='';
      checkAll.checked=false;
      cou1.checked=false;
      cou2.checked=false;
      cou3.checked=false;
      checkCourse();
      Uname.style.border = "1px solid gainsboro";
      email.style.border = "1px solid gainsboro";
      phone.style.border = "1px solid gainsboro";
    } else {
      alert('결제할 금액이 없습니다.');
    }
  } 
}



// 수강신청 클릭했을 때
const btn = document.getElementById('applybtn');
const cour1 = document.querySelector('cour1');

console.log(btn);
console.log(cour1);
