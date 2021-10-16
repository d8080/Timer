const countdown = () => {
const daysContainer = document.querySelector('#days');
const hrsContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

let date = new Date('jan 09 2022 00:05:00').getTime();
let now = new Date().getTime();
let gap = date - now ;
//simplifing things up 
const seconds = 1000 ;
const minutes = seconds * 60 ;
const hours = minutes * 60 ;
const day = hours * 24 ;
// calculations
let dayinsert = Math.floor(gap / day);;
let hourinsert = Math.floor((gap % day) / hours);
let minuteinsert = Math.floor((gap % hours) / minutes);
let secondinsert = Math.floor((gap % minutes) / seconds);
//conditions
 let ayinsert = (dayinsert < 10) ? `0${dayinsert}`:dayinsert;
 let ourinsert = (hourinsert < 10) ? `0${hourinsert}`:hourinsert;
 let inuteinsert = (minuteinsert < 10) ? `0${minuteinsert}`:minuteinsert;
 let econdinsert = (secondinsert < 10) ? `0${secondinsert}`:secondinsert;
//finals
daysContainer.innerText = ayinsert;
hrsContainer.innerText = ourinsert;
minutesContainer.innerText = inuteinsert;
secondsContainer.innerText = econdinsert;
}
const int1 = setInterval(countdown,1000)
// beautifing the content
const phoneCode = window.matchMedia('(max-width : 700px)');
(phoneCode.matches) ? (
    () => {
        const bod = document.getElementById('body');
        return bod.style.backgroundImage = "url('./images/images (3).jpeg')"
    }
):null