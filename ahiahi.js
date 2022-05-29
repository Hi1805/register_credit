var codes = '';
var listCode = '';
const inputs = document.querySelectorAll('.txt');
var index = 0;
const content = document.querySelector('.cont-vn');
const style = document.createElement('style');
function inputClass() {
  index = 0;
  codes = prompt('Mời bạn nhập danh sách các lớp , cách nhau bằng dấu phẩy');
  listCode = codes
    .split(',')
    .map((code) => code.replaceAll(',', '').trim())
    .filter((code) => code !== '');
  inputs[0].value = listCode[index];
}

inputClass();

// 2 box input

style.innerHTML = `
  #previous,#next{
    background-color: #00800073;
    height: 50px;
    width: 100px;
    outline: none;
    border: none;
    margin: 15px;
    border-radius: 10px;
    cursor: pointer;
  }
  #reset{
    position:absolute;
    right:50px;
    background-color: #00800073;
    height: 50px;
    width: 100px;
    outline: none;
    border: none;
    margin: 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const previous = document.createElement('button');
previous.innerText = 'Previous';
previous.setAttribute('id', 'previous');

previous.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Run previous');
  if (index === 0) {
    index = listCode.length - 1;
    inputs[0].value = listCode[index];
  } else {
    --index;
    inputs[0].value = listCode[index];
  }
});

const next = document.createElement('button');
next.innerText = 'Next';
next.setAttribute('id', 'next');

next.addEventListener('click', (event) => {
  event.preventDefault();
  if (index === listCode.length - 1) {
    index = 0;
    inputs[0].value = listCode[index];
  } else {
    ++index;
    inputs[0].value = listCode[index];
  }
});

const resetListCode = document.createElement('button');
resetListCode.innerText = 'reset';
resetListCode.setAttribute('id', 'reset');

resetListCode.onclick = (event) => {
  event.preventDefault();
  inputClass();
};
content.append(style);
content.append(previous);
content.append(next);
content.append(resetListCode);
 ◦