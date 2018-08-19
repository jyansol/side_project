
const input = document.querySelector('.new-diary');
const list = document.querySelector('.diary-list');

const key = function (e){ 
  if (e.which !== 13) return; // ??

    console.log(e.target.value);

    const lists = e.target.value; //lists에 input value값 할당
    const addLi = document.createElement("LI");

    addLi.textContent = lists;

    list.appendChild(addLi); ///ul의 자식으로 addLi(li)추가

    e.target.value = "";
}


  input.addEventListener('keypress', key);
