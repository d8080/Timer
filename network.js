const div = document.getElementById('ONOFFline')
const icon = document.getElementById('icon')
const Networkint = setInterval(() => {
    (navigator.onLine) ? (
        div.style.opacity ='0'
    ):(
        div.style.opacity = '1');
}, 1000);
console.log(document.getAnimations());
