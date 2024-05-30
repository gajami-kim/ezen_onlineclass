let pages = 0; //현재 인덱스 번호
let positionValue = 0; //이미지 위치값
const imgWidth = 1100; //한번 이동 시 imgWidth만큼 이동(이미지width값)
const leftBtn = document.querySelector('.leftBtn'); //왼쪽 버튼
const rightBtn = document.querySelector('.rightBtn'); //왼쪽 버튼
const slideImgInner = document.querySelector('.slideImgInner');

function next(){
    if(pages<2){
        // 뒤로 이동해 더 이상 disabled가 아니기 때문에 속성 삭제
        leftBtn.removeAttribute('disabled');
        // 이미지width 증감을 저장
        console.log(positionValue);
        positionValue -= imgWidth;
        console.log(positionValue);
        // x축으로 positionValue만큼의 px 이동
        slideImgInner.style.transform = `translateX(${positionValue}px)`;
        slideImgInner.style.transition = 'transform 1.5s';
        // 다음 페이지로 이동해서 pages를 1증가시킴
        pages += 1;
    }
    if(pages === 2){
        // 마지막장일때 rigth버튼 disabled처리
        rightBtn.setAttribute('disabled', 'true');
    }
}

function back(){
    if(pages>0){
        rightBtn.removeAttribute('disabled');
        positionValue += imgWidth;
        slideImgInner.style.transform = `translateX(${positionValue}px)`;
        slideImgInner.style.transition = 'transform 1.5s';
        // 이전 페이지로 이동해서 pages를 1감소시킴
        pages -= 1;
    }
    if(pages === 0){
        // 마지막장일때 left버튼 disabled처리
        leftBtn.setAttribute('disabled', 'true');
    }
}

// 초기화면 상태
function init(){
    // 속성이 disabled가 됨
    leftBtn.setAttribute('disabled', 'true');
    leftBtn.addEventListener('click', back);
    rightBtn.addEventListener('click', next);
}
init();

// dot버튼
let slideDotBtn = document.querySelector('.slideDotBtn');
let DotBtn = document.getElementsByClassName('DotBtn');
let DotBtn1 = document.querySelector('.DotBtn1');
let DotBtn2 = document.querySelector('.DotBtn2');
let DotBtn3 = document.querySelector('.DotBtn3');
const imgTag = document.getElementById('img');

DotBtn1.addEventListener('click',()=>{
    imgTag.src="../image/banner_event1.jpg";
    DotBtn1.style.filter = `opacity(0.5) drop-shadow(0 0 0 #ffffff90)`;
});
DotBtn2.addEventListener('click',()=>{
    imgTag.src="../image/banner_event2.jpg";
    DotBtn2.style.filter = `opacity(0.5) drop-shadow(0 0 0 #ffffff90)`;
});
DotBtn3.addEventListener('click',()=>{
    imgTag.src="../image/banner_event3.jpg";
    DotBtn3.style.filter = `opacity(0.5) drop-shadow(0 0 0 #ffffff90)`;
});

// function dotColor(event){
//     console.log(event.target);
//     console.log(event.target.classList);
//     if(event.target.classList[1]==='clicked'){
//         event.target.classList.remove('clicked');
//         console.log(event.target.classList);
//     }else{
//         for(let i=0; i<DotBtn.length; i++){
//             DotBtn[i].classList.remove('clicked');
//         }
//         event.target.classList.add('clicked');
//     }
// }

// function init2(){
//     for(let i=0; i<DotBtn.length; i++){
//         DotBtn[i].addEventListener('click', dotColor);
//     }
// }
// init2();
