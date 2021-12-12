'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const whiteKey = document.querySelectorAll('.white__key'),
          blackKey = document.querySelectorAll('.black__key');

    const keyWhiteArr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'z', 'x'];
    const keyBlackArr = ['2', '3', '5', '6', '7', '9', '0', '-', 'a', 's'];

    function setKeysEvent(arr, eventUp, eventDown, elem, activeClass){
        elem.forEach((item, i) => {
            item.textContent = arr[i];
            item.id = arr[i];

            document.addEventListener(eventDown, (e) => {
                if(arr[i] === e.key){
                    item.classList.add(activeClass);
                }
            });
            document.addEventListener(eventUp , (e) => {
                if(arr[i] === e.key){
                    item.classList.remove(activeClass);
                }
            });
        });
    }

    function setMouseEvent(arr, eventUp, eventDown, elem, activeClass){
        elem.forEach((item, i) => {
            item.addEventListener(eventDown, (e) => {
                if(arr[i] === e.target.id){
                    item.classList.add(activeClass);
                }
            });
            item.addEventListener(eventUp , (e) => {
                if(arr[i] === e.target.id){
                    item.classList.remove(activeClass);
                }
            });
        });
    }

    setKeysEvent(keyWhiteArr, 'keyup', 'keydown', whiteKey, 'white-active');
    setKeysEvent(keyBlackArr, 'keyup', 'keydown', blackKey, 'black-active');

    setMouseEvent(keyWhiteArr, 'mouseup', 'mousedown', whiteKey, 'white-active');
    setMouseEvent(keyBlackArr, 'mouseup', 'mousedown', blackKey, 'black-active');
});