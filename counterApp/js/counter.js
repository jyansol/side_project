    const minus = document.querySelector('.decrement');
    const plus = document.querySelector('.increment');
    const value = document.querySelector('.couter-value');
    const resetbtn = document.querySelector('.reset');


    let num = 0;

    const sum = function(){
        value.textContent = num;
    }

    const increment = function (){
        num++;
        sum();
    }

    const decrement = function (){
        num--;
        sum();
    }

    const reset = function (){
        num = 0;
        sum();
    }

    minus.addEventListener('click',decrement);
    plus.addEventListener('click',increment);
    resetbtn.addEventListener('click',reset);




