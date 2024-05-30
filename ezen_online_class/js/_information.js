//전체 강의 파트
let pra = document.getElementById('pr');
let gamea = document.getElementById('game');
let doa = document.getElementById('do');
let maa = document.getElementById('ma');
let coa = document.getElementById('co');
let check=document.getElementById('check')


document.getElementById('pr').addEventListener('click', () => {

    let pras = `<p><button type="button" class="color" value='1'>자바</button></p>`;
    pras += `<p><button type="button"class="color" value='2'>javascript</button></p>`;
    pras += `<p><button type="button" class="color" value='3'>html</button></p>`;
    pras += `<p><button type="button" class="color" value='4'>css</button></p>`;
    pras += `<p><button type="button" class="color" value='5'>Python</button></p>`;
    document.getElementById("result2").innerHTML = pras;
    
    pra.style.backgroundColor = '#cae7ff';
    gamea.style.backgroundColor = '#fff';
    doa.style.backgroundColor = '#fff';
    maa.style.backgroundColor = '#fff';
    coa.style.backgroundColor = '#fff';

    const bgcolor = document.querySelectorAll('.color');
    function colorchage(e){
        bgcolor[e].style.backgroundColor = '#0f426c';
        bgcolor[e].style.color = '#fff';
        bgcolor[e].style.fontFamily = 'NanumSquareB' ;  
    }
    function colorchage2(a){
        bgcolor[a].style.backgroundColor = 'rgb(230, 244, 255)';
        bgcolor[a].style.color = '#000';
        bgcolor[a].style.fontFamily = 'NanumSquareR' ;    
    }

    bgcolor[0].addEventListener('click',()=>{
        colorchage(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);   
    })

    bgcolor[1].addEventListener('click',()=>{
        colorchage(1);
        colorchage2(0);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[2].addEventListener('click',()=>{
        colorchage(2);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[3].addEventListener('click',()=>{
        colorchage(3);
        colorchage2(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(4);      
    })
    bgcolor[4].addEventListener('click',()=>{
        colorchage(4);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(2);      
    })

})

document.getElementById('game').addEventListener('click', () => {

    let gameas = `<p><button type="button" class="color">베이커리</button></p>`;
    gameas += `<p><button type="button" class="color">케이크</button></p>`;
    gameas += `<p><button type="button" class="color">아시안푸드</button></p>`;
    gameas += `<p><button type="button" class="color">와인</button></p>`;
    gameas += `<p><button type="button" class="color">칵테일</button></p>`;
    document.getElementById("result2").innerHTML = gameas;
    
    gamea.style.backgroundColor = '#cae7ff';
    pra.style.backgroundColor = '#fff';
    doa.style.backgroundColor = '#fff';
    maa.style.backgroundColor = '#fff';
    coa.style.backgroundColor = '#fff';

    const bgcolor = document.querySelectorAll('.color');
    function colorchage(e){
        bgcolor[e].style.backgroundColor = '#0f426c';
        bgcolor[e].style.color = '#fff';
        bgcolor[e].style.fontFamily = 'NanumSquareB' ;  
    }
    function colorchage2(a){
        bgcolor[a].style.backgroundColor = 'rgb(230, 244, 255)';
        bgcolor[a].style.color = '#000';
        bgcolor[a].style.fontFamily = 'NanumSquareR' ;    
    }

    bgcolor[0].addEventListener('click',()=>{
        colorchage(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);   
    })

    bgcolor[1].addEventListener('click',()=>{
        colorchage(1);
        colorchage2(0);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[2].addEventListener('click',()=>{
        colorchage(2);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[3].addEventListener('click',()=>{
        colorchage(3);
        colorchage2(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(4);      
    })
    bgcolor[4].addEventListener('click',()=>{
        colorchage(4);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(2);      
    })
})

document.getElementById('do').addEventListener('click', () => {

    let doas = `<p><button type="button" class="color">UX/UI</button></p>`;
    doas += `<p><button type="button" class="color">그래픽 디자인</button></p>`;
    doas += `<p><button type="button" class="color">사진·영상</button></p>`;
    doas += `<p><button type="button" class="color">3D 모델링·CAD</button></p>`;
    doas += `<p><button type="button" class="color">자격증(디자인)</button></p>`;
    document.getElementById("result2").innerHTML = doas;

    doa.style.backgroundColor = '#cae7ff';
    pra.style.backgroundColor = '#fff';
    gamea.style.backgroundColor = '#fff';
    maa.style.backgroundColor = '#fff';
    coa.style.backgroundColor = '#fff';

    const bgcolor = document.querySelectorAll('.color');
    function colorchage(e){
        bgcolor[e].style.backgroundColor = '#0f426c';
        bgcolor[e].style.color = '#fff';
        bgcolor[e].style.fontFamily = 'NanumSquareB' ;  
    }
    function colorchage2(a){
        bgcolor[a].style.backgroundColor = 'rgb(230, 244, 255)';
        bgcolor[a].style.color = '#000';
        bgcolor[a].style.fontFamily = 'NanumSquareR' ;    
    }

    bgcolor[0].addEventListener('click',()=>{
        colorchage(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);   
    })

    bgcolor[1].addEventListener('click',()=>{
        colorchage(1);
        colorchage2(0);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[2].addEventListener('click',()=>{
        colorchage(2);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[3].addEventListener('click',()=>{
        colorchage(3);
        colorchage2(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(4);      
    })
    bgcolor[4].addEventListener('click',()=>{
        colorchage(4);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(2);      
    })
})
document.getElementById('ma').addEventListener('click', () => {

    let maas = `<p><button type="button" class="color">재테크</button></p>`;
    maas += `<p><button type="button"class="color" >비트코인</button></p>`;
    maas += `<p><button type="button"class="color" >자산관리</button></p>`;
    maas += `<p><button type="button" class="color">금융투자</button></p>`;
    maas += `<p><button type="button" class="color">금융언어</button></p>`;
    document.getElementById("result2").innerHTML = maas;

    maa.style.backgroundColor = '#cae7ff';
    pra.style.backgroundColor = '#fff';
    gamea.style.backgroundColor = '#fff';
    doa.style.backgroundColor = '#fff';
    coa.style.backgroundColor = '#fff';

    const bgcolor = document.querySelectorAll('.color');
    function colorchage(e){
        bgcolor[e].style.backgroundColor = '#0f426c';
        bgcolor[e].style.color = '#fff';
        bgcolor[e].style.fontFamily = 'NanumSquareB' ;  
    }
    function colorchage2(a){
        bgcolor[a].style.backgroundColor = 'rgb(230, 244, 255)';
        bgcolor[a].style.color = '#000';
        bgcolor[a].style.fontFamily = 'NanumSquareR' ;    
    }

    bgcolor[0].addEventListener('click',()=>{
        colorchage(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);   
    })

    bgcolor[1].addEventListener('click',()=>{
        colorchage(1);
        colorchage2(0);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[2].addEventListener('click',()=>{
        colorchage(2);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[3].addEventListener('click',()=>{
        colorchage(3);
        colorchage2(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(4);      
    })
    bgcolor[4].addEventListener('click',()=>{
        colorchage(4);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(2);      
    })
})
document.getElementById('co').addEventListener('click', () => {

    let coas = `<p><button type="button"class="color" >피부관리</button></p>`;
    coas += `<p><button type="button" class="color">메이크업</button></p>`;
    coas += `<p><button type="button"class="color" >네일</button></p>`;
    coas += `<p><button type="button" class="color">속눈썹</button></p>`;
    coas += `<p><button type="button" class="color">경락·마사지</button></p>`;
    document.getElementById("result2").innerHTML = coas;

    coa.style.backgroundColor = '#cae7ff';
    pra.style.backgroundColor = '#fff';
    gamea.style.backgroundColor = '#fff';
    doa.style.backgroundColor = '#fff';
    maa.style.backgroundColor = '#fff';

    const bgcolor = document.querySelectorAll('.color');
    function colorchage(e){
        bgcolor[e].style.backgroundColor = '#0f426c';
        bgcolor[e].style.color = '#fff';
        bgcolor[e].style.fontFamily = 'NanumSquareB' ;  
    }
    function colorchage2(a){
        bgcolor[a].style.backgroundColor = 'rgb(230, 244, 255)';
        bgcolor[a].style.color = '#000';
        bgcolor[a].style.fontFamily = 'NanumSquareR' ;    
    }

    bgcolor[0].addEventListener('click',()=>{
        colorchage(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);   
    })

    bgcolor[1].addEventListener('click',()=>{
        colorchage(1);
        colorchage2(0);
        colorchage2(2);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[2].addEventListener('click',()=>{
        colorchage(2);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(4);      
    })
    bgcolor[3].addEventListener('click',()=>{
        colorchage(3);
        colorchage2(0);
        colorchage2(1);
        colorchage2(2);
        colorchage2(4);      
    })
    bgcolor[4].addEventListener('click',()=>{
        colorchage(4);
        colorchage2(0);
        colorchage2(1);
        colorchage2(3);
        colorchage2(2);      
    })
})

const btn = document.getElementById("check");

btn.addEventListener('click',()=>{
    alert('상담 신청 완료');
});
