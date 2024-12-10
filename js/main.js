const container = document.getElementById('header');
const firstDiv = document.getElementById('firstdiv');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let div5 = document.getElementById('div5');
let titlePhoto = document.getElementById('titlePhoto');
let info = document.getElementById('info');
let infEnd = document.getElementById('infEnd');
let infEndd = document.getElementById('infEndd');
let arrow1 =  document.getElementById('arrow1');
const text1 = document.getElementById('text1');
const container1 = document.getElementById('container1');

let arrow2 =  document.getElementById('arrow2');
const text2 = document.getElementById('text2');
const container2 = document.getElementById('container2');

let arrow3 =  document.getElementById('arrow3');
const text3 = document.getElementById('text3');
const container3 = document.getElementById('container3');

const text4 = document.getElementById('text4');
let arrow4 =  document.getElementById('arrow4');

const text5 = document.getElementById('text5');
let arrow5 =  document.getElementById('arrow5');
let isArrow = false;

container.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV') {
    const divs = container.querySelectorAll('div');
    divs.forEach((div) => {
      div.classList.remove('active');
    });
    event.target.classList.add('active');
  }
});


firstDiv.classList.add('active');

firstDiv.addEventListener('click', function() {
  titlePhoto.scrollIntoView({ behavior: 'smooth' });
});

div2.addEventListener('click', function() {
  info.scrollIntoView({ behavior: 'smooth' });
});

div3.addEventListener('click', function() {
  infEnd.scrollIntoView({ behavior: 'smooth' });
});

div4.addEventListener('click', function() {
  infEndd.scrollIntoView({ behavior: 'smooth' });
});

div5.addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
});
});


function aye(arrow, container, text, tt) {
  if (isArrow == false) {
    
    arrow.style.transform = 'translateX(-100px)';

    // Изменяем цвет фона
    container.style.backgroundColor = '#b6cbe8';

    // Пропадаем текст
    text.style.opacity = '0';

    // Заменяем текст через 0.5 секунды (время, чтобы текст пропал)
    setTimeout(() => {
        text.textContent = 'GO OVER';
        text.style.opacity = '1'; 
        text.style.backgroundColor = '#941212';
        text.style.padding = '10px';
    }, 500);

    isArrow = true;
  } 
  else {
    
    arrow.style.transform = 'translateX(0px)';

    // Изменяем цвет фона
    container.style.backgroundColor = '#941212';

    // Пропадаем текст
    text.style.opacity = '0';

    // Заменяем текст через 0.5 секунды (время, чтобы текст пропал)
    setTimeout(() => {
        text.textContent = tt;
        text.style.opacity = '1'; 
        text.style.backgroundColor = '#941212';
        text.style.padding = '10px';
    }, 500);

    isArrow = false;
  }
};

arrow1.onclick = function() {
  aye(arrow1, container1, text1, 'BRANDS');
}

arrow2.onclick = function() {
  aye(arrow2, container2, text2, 'STORES');
}

arrow3.onclick = function() {
  aye(arrow3, container3, text3, 'DESIGNERS');
}

infEnd.onclick = function() {
  aye(arrow4, infEnd, text4, 'BLOG');
}

infEndd.onclick = function() {
  aye(arrow5, infEndd, text5, 'NEWS');
}
