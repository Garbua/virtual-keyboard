let keyboardEn = {
    0: {code: 'Backquote', key1: '`', key2: '~', key3: 'ё'},
    1: {code: 'Digit1', key1: '1', key2: '!'},
    2: {code: 'Digit2', key1: '2', key2: '@', key4: '\"'},
    3: {code: 'Digit3', key1: '3', key2: '#', key4: '№'},
    4: {code: 'Digit4', key1: '4', key2: '$', key4: ';'},
    5: {code: 'Digit5', key1: '5', key2: '%'},
    6: {code: 'Digit6', key1: '6', key2: '^', key4: ':'},
    7: {code: 'Digit7', key1: '7', key2: '&', key4: '?'},
    8: {code: 'Digit8', key1: '8', key2: '*'},
    9: {code: 'Digit9', key1: '9', key2: '('},
    10: {code: 'Digit0', key1: '0', key2: ')'},
    11: {code: 'Minus', key1: '-', key2: '_'},
    12: {code: 'Equal', key1: '=', key2: '+'},
    13: {code: 'Backspace', name: 'Backspace', class: 'backspace'},
    14: {code: 'Tab', name: 'Tab', class: 'tab'},
    15: {code: 'KeyQ', key1: 'q', key3: 'й'},
    16: {code: 'KeyW', key1: 'w', key3: 'ц'},
    17: {code: 'KeyE', key1: 'e', key3: 'у'},
    18: {code: 'KeyR', key1: 'r', key3: 'к'},
    19: {code: 'KeyT', key1: 't', key3: 'е'},
    20: {code: 'KeyY', key1: 'y', key3: 'н'},
    21: {code: 'KeyU', key1: 'u', key3: 'г'},
    22: {code: 'KeyI', key1: 'i', key3: 'ш'},
    23: {code: 'KeyO', key1: 'o', key3: 'щ'},
    24: {code: 'KeyP', key1: 'p', key3: 'з'},
    25: {code: 'BracketLeft', key1: '[', key2: '{', key3: 'х'},
    26: {code: 'BracketRight', key1: ']', key2: '}', key3: 'ъ'},
    27: {code: 'Backslash', key1: '\\', key2: '|', key4: '\/'},
    28: {code: 'Delete', name: 'Del', class: 'del'},
    29: {code: 'CapsLock', name: 'Caps Lock', class: 'caps-lock'},
    30: {code: 'KeyA', key1: 'a', key3: 'ф'},
    31: {code: 'KeyS', key1: 's', key3: 'ы'},
    32: {code: 'KeyD', key1: 'd', key3: 'в'},
    33: {code: 'KeyF', key1: 'f', key3: 'а'},
    34: {code: 'KeyG', key1: 'g', key3: 'п'},
    35: {code: 'KeyH', key1: 'h', key3: 'р'},
    36: {code: 'KeyJ', key1: 'j', key3: 'о'},
    37: {code: 'KeyK', key1: 'k', key3: 'л'},
    38: {code: 'KeyL', key1: 'l', key3: 'д'},
    39: {code: 'Semicolon', key1: ';', key2: ':', key3: 'ж'},
    40: {code: 'Quote', key1: '\'', key2: '\"', key3: 'э'},
    41: {code: 'Enter', name: 'Enter', class: 'enter'},
    42: {code: 'ShiftLeft', name: 'Shift', class: 'shift-left', location: 1},
    43: {code: 'KeyZ', key1: 'z', key3: 'я'},
    44: {code: 'KeyX', key1: 'x', key3: 'ч'},
    45: {code: 'KeyC', key1: 'c', key3: 'с'},
    46: {code: 'KeyV', key1: 'v', key3: 'м'},
    47: {code: 'KeyB', key1: 'b', key3: 'и'},
    48: {code: 'KeyN', key1: 'n', key3: 'т'},
    49: {code: 'KeyM', key1: 'm', key3: 'ь'},
    50: {code: 'Comma', key1: ',', key2: '<', key3: 'б'},
    51: {code: 'Period', key1: '.', key2: '>', key3: 'ю'},
    52: {code: 'Slash', key1: '/', key2: '?', key3: '.', key4: ','},
    53: {code: 'ArrowUp', name: 'ᐃ', class: 'arrow-up'},
    54: {code: 'ShiftRight', name: 'Shift', class: 'shift-right', location: 2},
    55: {code: 'ControlLeft', name: 'Ctrl', class: 'ctrl-left', location: 1},
    56: {code: 'MetaLeft', name: 'Win', class: 'win', location: 1},
    57: {code: 'AltLeft', name: 'Alt', class: 'alt-left', location: 1},
    58: {code: 'Space', name: '', class: 'space'},
    59: {code: 'AltRight', name: 'Alt', class: 'alt-right', location: 2},
    60: {code: 'ArrowLeft', name: 'ᐊ', class: 'arrow-left'},
    61: {code: 'ArrowDown', name: 'ᐁ', class: 'arrow-down'},
    62: {code: 'ArrowRight', name: 'ᐅ', class: 'arrow-right'},
    63: {code: 'ControlRight', name: 'Ctrl', class: 'ctrl-left', location: 2},
}

let main = document.createElement('main');
main.className = 'main';
document.body.prepend(main);

// Input___________________________________
let result = document.createElement('div');
result.className = 'result';
main.prepend(result);
let textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.autofocus = 'true';
result.prepend(textarea);

// Keyboard_________________________________
let keyboard = document.createElement('div');
keyboard.id = 'keyboard';
main.append(keyboard);
keyboard.prepend(getRowAll());

// Readme___________________________________
let readme = document.createElement('div');
readme.className = 'readme';
readme.insertAdjacentHTML('beforeend', '<p>CtrlRight + AltRight = En-Ru</p>');
readme.insertAdjacentHTML('beforeend', '<p>OS Windows</p>');
main.append(readme);

// Отображение клавиш______________________________________________________
let keyList = document.getElementById('keyboard').querySelectorAll('.key');
let ctrlAlt = sessionStorage.getItem('ctrlAlt');
for(let k = 0; k < keyList.length; k++) {
    let key = keyList[k];
    let keyKeyboardEn = keyboardEn[k];
    if('class' in keyKeyboardEn ) {
        key.classList.add(keyKeyboardEn['class']);
    }
    key.setAttribute('code', keyKeyboardEn['code']);
    if('key1' in keyKeyboardEn) {
        key.setAttribute('key1', keyKeyboardEn['key1']);
        if(ctrlAlt === 'false' || ctrlAlt === null) {
            key.insertAdjacentHTML('beforeend', `<span>${keyKeyboardEn['key1']}</span>`);
        }
        if(ctrlAlt === 'true') {
            if(k > 0 && k <= 12 || k === 27) {
                key.insertAdjacentHTML('beforeend', `<span>${keyKeyboardEn['key1']}</span>`);
            }
        }
    }
    if('key2' in keyKeyboardEn) {
        key.setAttribute('key2', keyKeyboardEn['key2']);
    }
    if('name' in keyKeyboardEn) {
        key.setAttribute('name', keyKeyboardEn['name']);
        key.insertAdjacentHTML('beforeend', `<span>${keyKeyboardEn['name']}</span>`);
    }
    if('key3' in keyKeyboardEn) {
        key.setAttribute('key3', keyKeyboardEn['key3']);
        if(ctrlAlt === 'true') {
            key.insertAdjacentHTML('beforeend', `<span>${keyKeyboardEn['key3']}</span>`);
        }
    }
    if('key4' in keyKeyboardEn) {
        key.setAttribute('key4', keyKeyboardEn['key4']);
    }
}
    
// Функция для создания рядов клавиш
function getRowAll() {
    let fragmentRowAll = new DocumentFragment();
    for(let a = 1; a <= 5; a++) {
        let row = document.createElement('div');
        row.className = 'row';
        if(a == 1) {
            row.append(getRow(14));
            fragmentRowAll.append(row);
            continue;
        }
        if(a == 2) {
            row.append(getRow(15));
            fragmentRowAll.append(row);
            continue;
        }
        if(a == 3 || a == 4) {
            row.append(getRow(13));
            fragmentRowAll.append(row);
            continue;
        }
        row.append(getRow(9));
        fragmentRowAll.append(row);
    }
    return fragmentRowAll;
}
// Функция для создания одного ряда клавиш
function getRow(n) { 
    let fragmentRow = new DocumentFragment();
    for(let i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.className = 'key';
        fragmentRow.append(div);
    }
    return fragmentRow;
}

// Отображение нажатий на клавиатуре
keyDown();

function keyDown() {
    let capsLock = false;
    let shift = false;
    let pressed = new Set();

    document.querySelector('.main').addEventListener('keydown', function(event) {
        event.preventDefault();
        addDown(event);
        ctrAltDown(event, pressed, ctrlAlt, 'ControlLeft', 'AltLeft');
        writeResult(event);
    })
    document.querySelector('.main').addEventListener('keyup', function(event) {
        event.preventDefault();
        removeDown(event);
    });
    document.getElementById('keyboard').addEventListener('mousedown', function(e) {
        e.preventDefault();
        addDown(e);
        ctrAltDown(e, pressed, ctrlAlt, 'ControlLeft', 'AltLeft');
        writeResult(e);
    });
    document.getElementById('keyboard').addEventListener('mouseup', function(e) {
        e.preventDefault();
        removeDown(e);
    });

    function addDown(e) { // добавление класса активности клавиши
        let code = checkMouseKeyboard(e, 'mousedown', 'keydown');

        for(let i = 0; i < keyList.length; i++) {
            let el = keyList[i];
            if(code === el.getAttribute('code')) {
                if(code === 'CapsLock' || code === 'ShiftLeft' || code === 'ShiftRight') {
                    switch (code) {
                        case 'CapsLock':
                            el.classList.toggle('down');
                            capsLock = !capsLock;
                            upperCase(capsLock);
                            break;
                        case 'ShiftLeft':
                            if(!shift) {
                                el.classList.add('down');
                                shift = true;
                                shiftDown(shift, ctrlAlt);
                            }
                            break;
                        case 'ShiftRight':
                            if(!shift) {
                                el.classList.add('down');
                                shift = true;
                                shiftDown(shift, ctrlAlt);
                            }
                            break;
                        default:
                            break;
                    }
                }else {
                    el.classList.add('down');
                }
                return;
            }
        }
    }

    function removeDown(e) { // удаление класса активности клавиши
        let code = checkMouseKeyboard(e, 'mouseup', 'keyup');
        for(let i = 0; i < keyList.length; i++) {
            let el = keyList[i];
            if(code=== el.getAttribute('code')) {
                if(code=== 'CapsLock' || code=== 'ShiftLeft' || code=== 'ShiftRight') {
                    switch (code) {
                        case 'CapsLock':
                            return;
                        case 'ShiftLeft':
                            el.classList.remove('down');
                            shift = false;
                            shiftUp(shift, ctrlAlt);
                            break;
                        case 'ShiftRight':
                            el.classList.remove('down');
                            shift = false;
                            shiftUp(shift, ctrlAlt);
                            break;
                        default:
                            break;
                    }
                    return;
                }else {
                    el.classList.remove('down');
                }
                return;
            }
        }
    }

    function upperCase(capsL) { // Вкл.-Откл. капс лока
        if(capsL) {
            for(let i = 0; i < keyList.length; i++) {
                let elem = keyList[i];
                toUppCase(elem);
            }
        }else {
            for(let i = 0; i < keyList.length; i++) {
                let elem = keyList[i];
                toLowCase(elem);
        }
    }
}

function shiftDown(shift, ctrlAlt) { // нажатие клавиши Shift
    ctrlAlt = sessionStorage.getItem('ctrlAlt');
    for(let i = 0; i < keyList.length; i++) {
        let elem = keyList[i];
        if(shift == true && capsLock == false) {
            toUppCase(elem);
            ctrAltOnOffShiftDown(elem);
        }
        if(shift == true && capsLock == true) {
            toLowCase(elem);
            ctrAltOnOffShiftDown(elem);
        }
    }

    function ctrAltOnOffShiftDown(elem) {
        if(ctrlAlt === 'false') {
            if(elem.hasAttribute('key2')) {
                elem.textContent = elem.getAttribute('key2');
            }
        }
        if(ctrlAlt === 'true') {
            if(elem.hasAttribute('key4')) {
                elem.textContent = elem.getAttribute('key4');
            }else {
                if(elem.hasAttribute('key2')) {
                    elem.textContent = elem.getAttribute('key2');
                }
            }
        }
    }
}

function shiftUp(shift, ctrlAlt) { // отпускание клавиши Shift
    ctrlAlt = sessionStorage.getItem('ctrlAlt');
    for(let i = 0; i < keyList.length; i++) {
        let elem = keyList[i];
        if(shift == false && capsLock == false) {
            ctrAltOnOffShiftUp(elem, i);
            toLowCase(elem);
        }
        if(shift == false && capsLock == true) {
            ctrAltOnOffShiftUp(elem, i);
            toUppCase(elem);
        }
    }

    function ctrAltOnOffShiftUp(elem, k) {
        if(ctrlAlt === 'false') {
            if(elem.hasAttribute('key1')) {
                elem.textContent = elem.getAttribute('key1');
            }
        }
        if(ctrlAlt === 'true') {
            if(k > 0 && k <= 12 || k === 27) {
                elem.textContent = elem.getAttribute('key1');
            }else{
                if(elem.hasAttribute('key3')) {
                    elem.textContent = elem.getAttribute('key3');
                }
            }
        }
    }
}

function toLowCase(elem) { 
    if(elem.classList.length <= 1) {
        elem.textContent = elem.textContent.toLowerCase();
    }
}
function toUppCase(elem) { 
    if(elem.classList.length <= 1) {
        elem.textContent = elem.textContent.toUpperCase();
    }
}

function ctrAltDown(event, pressed, ctrlAlt, ...codes) { // переключение языка
    if(event.ctrlKey || event.altKey) {
        pressed.add(event.code);
    for (let code of codes) { 
        if (!pressed.has(code)) { // нажаты ли клавиши Ctr + Alt?
            return;
        }
    }
    pressed.clear();
    ctrlAlt = sessionStorage.getItem('ctrlAlt');
    if(ctrlAlt === null || ctrlAlt === 'false') {
        sessionStorage.setItem('ctrlAlt', true);
    }
    if(ctrlAlt === 'true') {
        sessionStorage.setItem('ctrlAlt', false);
    }
    ctrlAlt = sessionStorage.getItem('ctrlAlt');

    for(let i = 0; i < keyList.length; i++) {
        let el = keyList[i];
        if(ctrlAlt === 'true') {
            if(el.hasAttribute('key3')) {
                el.textContent = (capsLock) ? el.getAttribute('key3').toUpperCase() : el.getAttribute('key3');
            }
        }
        if(ctrlAlt === 'false') {
            if(el.hasAttribute('key1')) {
                el.textContent = (capsLock) ? el.getAttribute('key1').toUpperCase() : el.getAttribute('key1');
            }
        }
    }
    }
}
}

// Запись в result
function writeResult(event) {
    let resultText = document.querySelector('.textarea');
    let text = '';
    let code = checkMouseKeyboard(event, 'mousedown', 'keydown');
    for(let i = 0; i < keyList.length; i++) {
        if(code === keyList[i].getAttribute('code')) {
            if(code === 'Backspace') {
                resultText.value = resultText.value.substring(0, resultText.value.length - 1);
                continue;
            }
            if(code === 'Tab') {
                resultText.value = resultText.value + '    ';
                continue;
            }
            if(code === 'Enter') {
                text = '\n';
                continue;
            }
            if(code === 'Space') {
                text = ' ';
                continue;
            }
            if(code === 'MetaLeft') {
                continue;
            }
            if(code === 'Delete' || code === 'CapsLock' || code === 'ControlLeft' 
            || code === 'ControlRight' || code === 'AltLeft' || code === 'AltRight' 
            || code === 'ShiftLeft' || code === 'ShiftRight') {
                continue;
            }
            text = keyList[i].textContent;
        }
    }
    resultText.value += text;
    
}

//MouseClick
function mouseConverterCode(event) {
    let code;
    let content = event.target.textContent;
    for(let i = 0; i < keyList.length; i++) {
        let elem = keyList[i];
        if(content === elem.textContent) {
           return code = elem.getAttribute('code');
        }
    }
}

function checkMouseKeyboard(e, checkMouse, checkKb) {
    if(e.type === checkMouse) {
        return mouseConverterCode(e);
    }
    if(e.type === checkKb) {
        return e.code;
    }
}