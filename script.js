setInterval(() => {
time=new Date();
let h=time.getHours();

let m=time.getMinutes();
let s=time.getSeconds();
// console.log(time);
hr=30*h+m/2;
mr=6*m;
sr=6*s;
hour=document.getElementById('hour');
minute=document.getElementById('minute');
second=document.getElementById('second');
hour.style.transform=`rotate(${hr}deg)`;
minute.style.transform=`rotate(${mr}deg)`;
second.style.transform=`rotate(${sr}deg)`;
    
}, 1000);
