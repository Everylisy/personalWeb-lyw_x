const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");


//1번 컨텐츠

function textChange1() {
  content1.innerText = "React & 인터랙티브 웹";
}

function textChange2() {
  content1.innerText = '# Interests';
}

content1.addEventListener("mouseover", textChange1);
content1.addEventListener("mouseout", textChange2);

//2번 컨텐츠

function textChange3() {
  content2.innerText = "성장하는 개발자가 되는 것.";
}

function textChange4() {
  content2.innerText = '# What to expect';
}

content2.addEventListener("mouseover", textChange3);
content2.addEventListener("mouseout", textChange4);

//3번 컨텐츠

function textChange5() {
  content3.innerText = "우리 6개월간 열심히 해봐요 !";
}

function textChange6() {
  content3.innerText = '# To Racers';
}

content3.addEventListener("mouseover", textChange5);
content3.addEventListener("mouseout", textChange6);

//4번 컨텐츠

function textChange7() {
  content4.innerText = "백예린 노래들, The Volunteers";
}

function textChange8() {
  content4.innerText = '# Things i love';
}

content4.addEventListener("mouseover", textChange7);
content4.addEventListener("mouseout", textChange8);

// 음악
const audio = new Audio('Late.mp3');

// 종료되면 다시 재생
audio.addEventListener('ended', function() { 
    this.currentTime = 0;
    this.play();
}, false);