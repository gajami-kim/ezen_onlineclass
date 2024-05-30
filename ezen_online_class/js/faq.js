let a = document.getElementById('main'); // 공지사항 눌렀을 때
let b = document.getElementById('faq'); // QNA 눌렀을때
let c = document.getElementById('user'); // 문의사항 남길 떄
let d = document.getElementById('question'); // 문의사항 확인 할 때

a.style.backgroundColor = "#3E9AE5";
a.style.color = "white";

a.addEventListener('click', () => {
    let str = ` <h1>공지사항</h1>
    <table border="1" class="main2">
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>날짜</th>
</tr>
<tr>
    <td>공지</td>
    <td>24년도 평생교육바우처 신청 가능한 과목 리스트 입니다.</td>
    <td>운영자</td>
    <td>2024-09-17</td>
</tr>
<tr>
    <td>공지</td>
    <td>고객센터 운영 시간 안내</td>
    <td>운영자</td>
    <td>2024-02-28</td>
</tr>
<tr>
    <td>공지</td>
    <td>[사이트이용] 수강코드(쿠폰) 입력 방법</td>
    <td>운영자</td>
    <td>2024-02-25</td>
</tr>
<tr>
    <td>공지</td>
    <td>[사이트이용] 내 강의실 이용 방법 (강좌 찾기, 강좌 시청하기 등)</td>
    <td>운영자</td>
    <td>2024-02-22</td>
</tr>
<tr>
    <td>공지</td>
    <td>멘토씨리즈 교재 주문 및 수업 자료(교안) 안내</td>
    <td>운영자</td>
    <td>2024-02-15</td>
</tr>
<tr>
    <td>공지</td>
    <td>[안내] YBM 신규 강좌 런칭 안내</td>
    <td>운영자</td>
    <td>2024-01-12</td>
</tr>
<tr>
    <td class="no">1</td>
    <td class="no">따즈아 3월 5주차 정기 업데이트 안내</td>
    <td class="no">운영자</td>
    <td class="no">2024-03-29</td>
</tr>
<tr>
    <td class="no">2</td>
    <td class="no">따즈아 3월 4주차 정기 업데이트 안내</td>
    <td class="no">운영자</td>
    <td class="no">2024-03-22</td>
</tr>
<tr>
    <td class="no">3</td>
    <td class="no">따즈아 3월 3주차 정기 업데이트 안내</td>
    <td class="no">운영자</td>
    <td class="no">2024-03-15</td>
</tr>
    </tr>
</table>`;

    document.getElementById('main1').innerHTML = str;

    // 버튼 색 변경
    a.style.backgroundColor = "#3E9AE5";
    a.style.color = "white";
    b.style.backgroundColor = "";
    b.style.color = "black";
    c.style.backgroundColor = "";
    c.style.color = "black";
    d.style.backgroundColor = "";
    d.style.color = "black";
});

b.addEventListener('click', () => {

    let str = `<h1>FAQ</h1>
<table border='1' class="faq">
        <tr>
        <td class="hi">1</td>
        <td>
            최근에 온라인 사기가 많이 당하고 있는데 그럴 때는 어디에서 어떻게 대응해야 하나요?
        </td>
    </tr>
    <tr>
    <td class="hi">2</td>
    <td id=>
        문제가 생겼을시에는 고객센터에 연락을주세요 고객센터 번호는 사이트 하단페이지에 나와 있습니다.
    </td>
</tr>
<tr>
<td class="hi">3</td>
<td>
    카드로 긁은거 환불 받고 싶은데 어디에서 해야하나요?
</td>
</tr>
<tr>
<td class="hi">4</td>
<td>
    환불 규정을 알고 싶습니다.
</td>
</tr>
<tr>
<td class="hi">5</td>
<td>
    이메일 회원가입이 되지 않습니다.
</td>
</tr>
<tr>
<td class="hi">6</td>
<td>
    무통장입금은 현금 영수증 발급이 가능한가요?
</td>
</tr>
</table>
</div>
`;

    document.getElementById('main1').innerHTML = str;

    // 버튼 색 변경
    b.style.backgroundColor = "#3E9AE5";
    b.style.color = "white";
    a.style.backgroundColor = "";
    a.style.color = "black";
    c.style.backgroundColor = "";
    c.style.color = "black";
    d.style.backgroundColor = "";
    d.style.color = "black";
});

c.addEventListener('click', () => {
    let text = `<h1>이용문의</h1>`;
    text += `<textarea name="inquiry" id="inquiry" cols="80" rows="20" ></textarea>`;
    text += `<button type="button" class="button1" id="check1">확인</button>`;
    text += `</div>`;
    document.getElementById("main1").innerHTML = text;

    document.getElementById("check1").addEventListener('click', () => {

        let inquiryText = document.getElementById("inquiry").value;

        if(inquiryText.length > 0){
            alert("확인하였습니다");
            document.getElementById("inquiry").value = "";
        }

        const questionSection = document.getElementById('question');
        let str = `<h1>문의내역</h1>`;
        str += `<p>사용자의 문의 : ${inquiryText}</p>`;
        document.getElementById('main1').innerHTML = str;

        // 버튼 색 변경
        d.style.backgroundColor = "#3E9AE5";
        d.style.color = "white";
        a.style.backgroundColor = "";
        a.style.color = "black";
        b.style.backgroundColor = "";
        b.style.color = "black";
        c.style.backgroundColor = "";
        c.style.color = "black";
    });

    // 버튼 색 변경
    c.style.backgroundColor = "#3E9AE5";
    c.style.color = "white";
    a.style.backgroundColor = "";
    a.style.color = "black";
    b.style.backgroundColor = "";
    b.style.color = "black";
    d.style.backgroundColor = "";
    d.style.color = "black";

    // 버튼 내려가게 하기
    let button1 = document.getElementById("check1");
    button1.style.marginTop = "10px";
});

d.addEventListener('click', () => {
    d.style.backgroundColor = "#3E9AE5";
    d.style.color = "white";
    a.style.backgroundColor = "";
    a.style.color = "black";
    c.style.backgroundColor = "";
    c.style.color = "black";
    b.style.backgroundColor = "";
    b.style.color = "black";

    let str = `<h1>문의내역</h1>`;
    str += `문의내역이 없습니다`;
    document.getElementById('main1').innerHTML = str;
});
