let year = 2024;
    let monthTime = document.querySelector('.month_time_de');
    let studyTime = document.querySelector('.study_time_de');
    let noteDe = document.querySelector('.note_de');
    let graph = document.querySelector('.graph');
    function decreaseYear(){
      year--;
      document.querySelector('.midyear').innerHTML=year+"년";
      if(year==2023){
        monthTime.innerHTML='63분';
        studyTime.innerHTML='200일 3시간 10분';
        noteDe.innerHTML = '27개';
        graph.src = "../image/그래프2.png"
        graph.style.width="700px"
        graph.style.height="97px"
      } else if(year==2022){
        monthTime.innerHTML='58분';
        studyTime.innerHTML='173일 8시간 43분';
        noteDe.innerHTML = '19개';
        graph.src = "../image/그래프3.png"
        graph.style.height="97px"
        graph.style.width="700px"
      } else {
        monthTime.innerHTML='';
        studyTime.innerHTML='';
        noteDe.innerHTML = '';
        graph.src='';
      }
    }
    function increaseYear(){
      year++;
      if(year>=2024){
        year=2024;
        graph.src = "../image/그래프1.png"
        graph.style.width="197px"
        monthTime.innerHTML='33분';
        studyTime.innerHTML='10시간 52분';
        noteDe.innerHTML = '3개';
      } else if(year==2023){
        graph.src = "../image/그래프2.png"
        graph.style
        monthTime.innerHTML='63분';
        studyTime.innerHTML='200일 3시간 10분';
        noteDe.innerHTML = '27개';
      } else if(year==2022){
        graph.src = "../image/그래프3.png width=600px height=97px";
        graph.style.height="97px"
        graph.style.width="700px"
        monthTime.innerHTML='58분';
        studyTime.innerHTML='173일 8시간 43분';
        noteDe.innerHTML = '19개';
      }
      document.querySelector('.midyear').innerHTML=year+"년";
    }