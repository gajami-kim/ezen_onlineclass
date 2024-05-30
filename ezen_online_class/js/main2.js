const sectionBox2 = document.getElementById('.sectionBox2');
const slideImg = document.getElementById('.slideImg'); //이미지 보여지는 영역
const slideImgInner = document.getElementById('.slideImgInner'); //이미지 움직이는 영역
const slide = document.getElementById('.slide'); //개별 이미지
const sectionSlideBtn = document.getElementById('.sectionSlideBtn a'); //버튼
const slideDotBtn = document.getElementById('.slideDotBtn');

let cnt = 0; //현재 보이는 이미지
let imgCnt = slide.length; //이미지 개수
let slideTime = 5000; //이미지 변경 시간 간격(0.5초)
let slideWidth = slide[0].offsetWidth; //이미지 가로값
let dotIdx = '';

function intDot(){
    // 이미지 개수만큼 dot 생성
    slide.forEach(()=>dotIdx += '<a href="#" class="dot">이미지</a>');
    slideDotBtn.innerHTML = dotIdx;

    // 첫번째 dot에 활성화 표시
    slideDotBtn.firstChild.classList.add('active');
}
intDot();

// 이미지 이동
function move(num){
    slideImgInner.style.transition = 'all 400ms';
    slideImgInner.style.transition = 'translateX('+ -(slideWidth*num) + 'px)';
    cnt = num;
    
    // dot 활성화
    let dotActive = document.querySelectorAll('.slideDotBtn .DotBtn');
    dotActive.forEach((active) => active.classList.remove('active'));
    dotActive[num].classList.add('active');
}

// 이동 버튼 클릭
sectionSlideBtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        let leftIdx = (cnt+(imgCnt-1)) % imgCnt; //3210, 3210, 3210..
        let rigthIdx = (cnt+(imgCnt+1)) % imgCnt; //1230, 1230, 1230..

        if(btn.classList.contain('left')){
            move(leftIdx);
        }else{
            move(rigthIdx);
        }
    });
});

// dot 버튼 클릭
let dotClick = document.querySelectorAll('.slideDotBtn .DotBtn');
dotClick.forEach((active, i) => {
    active.addEventListener('click',()=>{
        move(i);
        console.log(i);
    });
});
