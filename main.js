const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");

content1.addEventListener("mouseover", () => {
    content1.innerText = "React & 인터랙티브 웹";
  });

content1.addEventListener("mouseout", () => {
    content1.innerText = '# Interests';
});


content2.addEventListener("mouseover", () => {
  content2.innerText = "성장하는 개발자가 되는 것.";
});
//   REACT와 인터랙티브 웹에 관심이 있어요!
content2.addEventListener("mouseout", () => {
  content2.innerText = '# What to expect';
});

content3.addEventListener("mouseover", () => {
  content3.innerText = "우리 6개월간 열심히 해봐요 !";
});
//   REACT와 인터랙티브 웹에 관심이 있어요!
content3.addEventListener("mouseout", () => {
  content3.innerText = '# To Racers';
});

content4.addEventListener("mouseover", () => {
  content4.innerText = "백예린 노래들, The Volunteers";
});
//   REACT와 인터랙티브 웹에 관심이 있어요!
content4.addEventListener("mouseout", () => {
  content4.innerText = '# Things i love';
});

var audio = new Audio('Late.mp3');

/*종료되면 처음부터 다시 재생*/
audio.addEventListener('ended', function() { 
    this.currentTime = 0;
    this.play();
}, false);