// Homework #7

const keyboard = {
    topRow: 'qwertyuiop[]',
    middleRow: 'asdfghjkl;\'\\',
    bottomRow: 'zxcvbnm,./'
}

const createButton = (content, classNames) => {
    const button = document.createElement('button');
    button.classList.add(classNames);
    button.innerText = content;
    return button;
}

const createRow = () => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');
    return row;
}

const createKeyboard = (keyboard) => {
    const keyboardElement = document.createElement('div');
    keyboardElement.classList.add('keyboard');

    for (key in keyboard) {
        const keyRow = createRow();

        for (let i = 0; i < keyboard[key].length; i++) {
            const button = createButton(keyboard[key][i], 'keyboard__button');
            keyRow.append(button);
        }

        keyboardElement.append(keyRow);
    }

    document.body.append(keyboardElement);
}

createKeyboard(keyboard);
