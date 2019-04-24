const saveToCookie = document.getElementById('saveToCookie');
const saveToLocalStorage = document.getElementById('saveToLocalStorage');
const testMaxLength = document.getElementById('testMaxLength');

saveToCookie.addEventListener('keydown', saveInputToCookie);
saveToLocalStorage.addEventListener('keydown', saveInputToLocalStorage);
window.addEventListener('load', loadDataFromStorage);
testMaxLength.addEventListener('click', testMaxCookieLength);

function saveInputToCookie(event) {
    console.log(event.code);
    document.cookie = "saveToCookie=" + saveToCookie.value;
}

function saveInputToLocalStorage() {
    window.localStorage.setItem('saveToLocalStorage', saveToLocalStorage.value);
}

function loadDataFromStorage() {
    console.log(document.cookie);
    let regex = new RegExp('.*=');
    saveToCookie.value = document.cookie.replace(regex, '');
    saveToLocalStorage.value = window.localStorage.getItem('saveToLocalStorage');
}

function testMaxCookieLength() {
    let val = '';
    saveToCookie.removeEventListener('keydown', saveInputToCookie);
    for (let i = 0; i < 10000; i++) {
        val += 'x';
        saveToCookie.value = i;
        document.cookie = "saveToCookie=" + val;
        try {
            document.cookie.length >= i;

        } catch (error) {
            console.log('Storing cookie failed at this length: ' + i);
        }
    }
}
