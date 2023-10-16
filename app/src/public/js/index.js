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
