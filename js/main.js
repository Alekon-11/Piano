'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const whiteKey = document.querySelectorAll('.white__key'),
          blackKey = document.querySelectorAll('.black__key');

    const keyWhiteArr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'z', 'x'];
    const keyBlackArr = ['2', '3', '5', '6', '7', '9', '0', '-', 'a', 's'];

    function setEventElements(i ,arr ,elem, activeClass){
        elem.textContent = arr[i];

        document.addEventListener('keydown', (e) => {
            if(arr[i] === e.key){
                elem.classList.add(activeClass);
            }
        });
        document.addEventListener('keyup', (e) => {
            if(arr[i] === e.key){
                elem.classList.remove(activeClass);
            }
        });
    }

    blackKey.forEach((item, i) => setEventElements(i, keyBlackArr, item, 'black-active'));

    whiteKey.forEach((item, i) => setEventElements(i, keyWhiteArr, item, 'white-active'));
});