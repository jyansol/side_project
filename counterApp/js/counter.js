    const minus = document.querySelector('.decrement');
    const plus = document.querySelector('.increment');
    const value = document.querySelector('.couter-value');
    const resetbtn = document.querySelector('.reset');

    let num = 0;

    const increment = function (){
        num++;
        value.innerHTML = num;
    }

    const decrement = function (){
        num--;
        value.innerHTML = num;
    }

    const reset = function (){
        num = 0;
        value.innerHTML = num;
    }

    minus.addEventListener('click',decrement);
    plus.addEventListener('click',increment);
    resetbtn.addEventListener('click',reset);