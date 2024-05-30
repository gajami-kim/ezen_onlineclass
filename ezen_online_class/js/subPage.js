const btn1 = document.getElementById('btn1'); //강의소개 버튼
const btn2 = document.getElementById('btn2'); //커리큘럼 버튼
const applybtn = document.getElementById('applybtn'); // 수강신청하기 버튼

const story = document.querySelector('.story_box'); //강의 소개 div
const curri = document.querySelector('.curriculum'); // 커리큘럼 div 

btn2.addEventListener('click',()=>{
    btn1.style.backgroundColor = '#0f426c';
    story.style.display = 'none';
    btn1.style.fontFamily = 'NanumSquareR';
    curri.style.display = 'block';
    btn2.style.fontFamily = 'NanumSquareEB';
    btn2.style.backgroundColor = '#3e9ae5';
});

btn1.addEventListener('click',()=>{
    btn1.style.backgroundColor = '#3e9ae5';
    curri.style.display = 'none';
    btn1.style.fontFamily = 'NanumSquareEB';
    story.style.display = 'block';
    btn2.style.fontFamily = 'NanumSquareR';
    btn2.style.backgroundColor = '#0f426c';
});


const section = document.querySelectorAll('.section');
const curriOn = document.querySelectorAll('.section_on');
const curriOff = document.querySelectorAll('.section_off');

function sectionOnOff(e){
    curriOn[e].style.display = 'none';
    section[e].addEventListener('click',()=>{
        if(curriOn[e].style.display = 'none'){
            curriOn[e].style.display = 'block';
        }
    })
}

function sectionOffOn(a,b){
    curriOff[a].style.display = 'block';
    section[b].addEventListener('click',()=>{
        if(curriOff[a].style.display = 'block'){
            curriOff[a].style.display = 'none';
        }
    })
}

section[0].addEventListener('click',()=>{
    sectionOnOff(0);
});
section[1].addEventListener('click',()=>{
    sectionOnOff(1)
});
section[2].addEventListener('click',()=>{
    sectionOnOff(2)
});

section[3].addEventListener('click',()=>{
    sectionOffOn(0,3);
});
section[4].addEventListener('click',()=>{
    sectionOffOn(1,4);
});
section[5].addEventListener('click',()=>{
    sectionOffOn(2,5);
});

