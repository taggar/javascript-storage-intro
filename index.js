const saveToCookie = document.getElementsByClassName('saveToCookie');
const saveToLocalStorage = document.getElementsByClassName('saveToLocalStorage');
const testMaxLength = document.getElementById('testMaxLength');
const deleteButtons = document.querySelectorAll('button[type=button]');

[...saveToCookie].forEach(function (input) { input.addEventListener('keyup', saveInputToCookie) });
[...saveToLocalStorage].forEach(function (input) { input.addEventListener('keyup', saveInputToLocalStorage); });
[...deleteButtons].forEach(function (button) { button.addEventListener('click', deleteStoredData); });
window.addEventListener('load', loadDataFromStorage);
//testMaxLength.addEventListener('click', testMaxCookieLength);

function saveInputToCookie(event) {
    console.log(event.code);
    docCookies.setItem('cookiefield' + [...saveToCookie].indexOf(event.target), event.target.value);
}

function saveInputToLocalStorage() {
    window.localStorage.setItem('saveToLocalStorage' + [...saveToLocalStorage].indexOf(event.target), event.target.value);
}

function loadDataFromStorage() {
    // load cookies from storage
    console.log(document.cookie);
    //let regex = new RegExp('.*=');
    [...saveToCookie].forEach(function (i) {
        i.value = docCookies.getItem('cookiefield' + [...saveToCookie].indexOf(i));
    });
    // load local storage 
    [...saveToLocalStorage].forEach(function (i) {
        i.value = window.localStorage.getItem('saveToLocalStorage' + [...saveToLocalStorage].indexOf(i));
    });
}

function deleteStoredData(event) {
    let input = event.target.previousElementSibling;
    if (input.className == 'saveToCookie') {
        docCookies.removeItem('cookiefield' + [...saveToCookie].indexOf(input));
    }
    else {
        window.localStorage.removeItem('saveToLocalStorage' + [...saveToLocalStorage].indexOf(input));
    }
    input.value = '';

}

// function testMaxCookieLength() {
//     let val = '';
//     saveToCookie.removeEventListener('keyup', saveInputToCookie);
//     for (let i = 0; i < 10000; i++) {
//         val += 'x';
//         saveToCookie.value = i;
//         document.cookie = "saveToCookie=" + val;
//         try {
//             document.cookie.length >= i;

//         } catch (error) {
//             console.log('Storing cookie failed at this length: ' + i);
//         }
//     }
// }
