const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>100);
});
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');   
}
function copyText() {
    const textToCopy = document.getElementById('text-to-copy').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    const copyButton = document.getElementById('copy-button');
    copyButton.textContent = 'Copied';
}
