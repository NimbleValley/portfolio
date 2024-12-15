const cloudContainer = document.getElementById('page-title');
export var currentText = '';

export function setText(text) {
    currentText = text;
    cloudContainer.innerHTML = '';
    for(let i = 0; i < text.length; i ++) {
        let tempSpan = document.createElement('span');
        tempSpan.innerText = text.substring(i, i+1);
        tempSpan.style.animationDuration = `${Math.random() * 5 + 3}s`;
        if(tempSpan.innerText == '_') {
            tempSpan.style.color = 'transparent';
        }
        cloudContainer.appendChild(tempSpan);
    }
}

setText('Mason_McManus');