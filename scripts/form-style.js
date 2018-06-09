//event for inputs with .style-animation

let stAnm = document.getElementsByClassName('style-animation');

for (let i=0; i<stAnm.length; i++){
    stAnm[i].addEventListener('focus', function(){onEvnt(this, '150%', '#fff')});
    stAnm[i].addEventListener('blur', function(){onEvnt(this, '100%', 'rgba(240, 255, 240, 0.65)')});

}

function onEvnt(element, height, color){
    element.style.height=height;
    element.style.backgroundColor=color;
}

//event for textarea with #textarea_addition_info

let textAdditionInfo = document.getElementById('textarea_addition_info');

textAdditionInfo.addEventListener('focus', function(){onEvnt(this, '200px', '#fff')});
textAdditionInfo.addEventListener('blur', function(){onEvnt(this, '100%', 'rgba(240, 255, 240, 0.65)')});


