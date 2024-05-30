const localPw = document.getElementById('floatPw');
const localId = document.getElementById('floatId');
const loginBtn = document.querySelector('loginBtn');
let BooleanloginState = false;

document.querySelector('.signupBtn').addEventListener('click',()=>{
    setUserInfo();
})

function setUserInfo() {
    let userid = localId.value;
    let userpw = localPw.value;
    localStorage.setItem("userid",userid);
}
// document.write(checkId);


function Userlogin(){
    const inputid = document.querySelector('.inputId').value;
    const inputpw = document.querySelector('.inputPw').value;
    
    let userid1 = localId.value;

    console.log(localStorage.getItem("userid"));
    if(localStorage.getItem("userid")==inputid) {
        alert('로그인이 완료되었습니다!')
        localId.value='';
        localPw.value='';
        location.href ='../html/main.html'
        BooleanloginState = true;
        sessionStorage.setItem("userid",userid1);
        console.log(BooleanloginState);
    }  else {
        alert('아이디 또는 비밀번호가 맞지 않습니다')
        localId.value='';
        localPw.value='';
        console.log(BooleanloginState);
    }

}
    // else if(localId.value='' || localPw.value='') {
    //     //     alert('아이디와 비밀번호 모두 입력해주세요');
    //     // }
        
    
    function showMypage(){
        // let mypageBtn = document.getElementById('mypageBtn');
        if(sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")) {
            location.href='../html/mypage.html';
        } else {
            alert('로그인 후 이용가능합니다.');
        }
    }
    