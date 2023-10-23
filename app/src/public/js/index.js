"use strict";


// <li> 요소들을 선택합니다.
const listItems = document.querySelectorAll('.gnb>li');

// 각 <li> 요소를 순회하면서 클릭 이벤트 핸들러를 추가합니다.
listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // 기본 링크 동작을 막습니다.

    // 클릭한 <li> 요소의 자식 <a> 요소의 href 값을 가져옵니다.
    const targetAnchor = item.querySelector('a').getAttribute('href');

    // 해당 앵커로 스크롤 이동합니다.
    document.querySelector(targetAnchor).scrollIntoView({
      behavior: 'smooth', // 스무스 스크롤을 적용하려면 추가
    });
  });
});



// 모든 팝업 요소와 닫기 버튼 요소를 가져옵니다.
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.closePopup');

// 각 <li> 요소에 대한 클릭 이벤트 핸들러를 등록합니다.
document.querySelectorAll('.s_list>li').forEach((li, index) => {
    li.addEventListener('click', () => {
        // 해당 인덱스의 팝업을 표시합니다.
        popups[index].style.display = 'block';
    });
});

// 각 팝업의 닫기 버튼에 대한 클릭 이벤트 핸들러를 등록합니다.
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // 해당 인덱스의 팝업을 숨깁니다.
        popups[index].style.display = 'none';
    });
});



const s_info = document.querySelectorAll(".s_info");

s_info.forEach(function (li, idx){
    li.addEventListener("click", () => {
        popups[idx].style.display = 'block';
    });
});

// 이미지 교체를 처리하는 함수
function changeImage() {
    const img = document.getElementById("title01");
    
    if (window.innerWidth < 480) {
        img.src = "/images/m_title1.png"; // 화면 너비가 600px 미만이면 작은 이미지로 교체
    } else {
        img.src = "/images/title1.png"; // 화면 너비가 600px 이상이면 큰 이미지로 교체
    }
}


// 아코디언
// 페이지 로드 시 이미지 초기화
window.addEventListener('load', changeImage);

// 창의 크기가 변경될 때 이미지 변경
window.addEventListener('resize', changeImage);

// 패널 헤더 요소에 클릭 이벤트 리스너 추가
const panelHeaders = document.querySelectorAll(".tbox .img");
const panels = document.querySelectorAll(".add_info");

panelHeaders.forEach((panelHeader, index) => {
    panelHeader.addEventListener("click", function () {
    const panel = panels[index];

    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block";
        panelHeader.style.transform = "rotate(180deg)";
    } else {
        panel.style.display = "none";
        panelHeader.style.transform = "rotate(0deg)";
    }
    });
});



var urlParams = new URLSearchParams(window.location.search);
var paramValue = urlParams.get("AccessRoute");

// 파라미터 값을 활용
if (paramValue === "SAP") {
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=SAP`;
    document.getElementById('regiLink').setAttribute('href', newURL);
} else if(paramValue === "Air_Canada"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=Air_Canada`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "Concur_CSP"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=Concur_CSP`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "Concur_MDR"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=Concur_MDR`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "Concur_partner"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=Concur_partner`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "Concur_RSE"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=Concur_RSE`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "ISBN_CSP"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=ISBN_CSP`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "ISBN_Sales"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=ISBN_Sales`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "SAP_AE"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=SAP_AE`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "SAP_partner"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=SAP_partner`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}else if(paramValue === "WebTour"){
    // 다른 동작 수행
    var newURL = `https://event.keystonellc.kr/registrations/SAP_1121_SAP_Spend_Management_Summit,Seoul/?accessRoute=WebTour`;
    document.getElementById('regiLink').setAttribute('href', newURL);
}
