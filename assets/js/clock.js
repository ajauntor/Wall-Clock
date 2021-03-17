const clockSecound = document.querySelector("[data-second-hand]");
const clockMinit = document.querySelector("[data-minute-hand]");
const clockHour = document.querySelector("[data-hour-hand]");


function setClock(){
    const currentDate= new Date();

    const secound = currentDate.getSeconds();
    const minit = currentDate.getMinutes();
    const hour = currentDate.getHours();

    const secoundRatio = secound / 60;
    const minitRatio = (secoundRatio + minit) / 60;
    const hourRatio = (minitRatio + hour) / 12;

    setRatio(clockSecound, secoundRatio);
    setRatio(clockMinit, minitRatio);
    setRatio(clockHour, hourRatio);
 }

 function setRatio (element, rotaionRatio){
    element.style.setProperty("--rotation", rotaionRatio * 360);
 }
 

 setInterval(setClock, 1000);
 setClock();