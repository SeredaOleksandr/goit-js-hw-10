import"./assets/styles-f3635d75.js";import{f as h,i as S}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let c;e.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(e.disabled=!0,t[0]>=new Date)c=t[0],e.disabled=!1;else{S.show({maessage:"Please choose a date in the future",backgroundColor:"#EF4040",borderBottom:"2px solid #FFBEBE",borderRadius:"4px",messageColor:"#FFF"});return}}};h(r,C);function q(t){const u=String(Math.floor(t/864e5)).padStart(2,"0"),l=String(Math.floor(t%864e5/36e5)).padStart(2,"0"),m=String(Math.floor(t%864e5%36e5/6e4)).padStart(2,"0"),f=String(Math.floor(t%864e5%36e5%6e4/1e3)).padStart(2,"0");return{days:u,hours:l,minutes:m,seconds:f}}function d(t){const{days:n,hours:o,minutes:a,seconds:s}=q(t);y.textContent=n,b.textContent=o,p.textContent=a,g.textContent=s}function i(t){const n=setInterval(()=>{const o=t-Date.now();o>0?d(o):(clearInterval(n),d(0),r.disabled=!1,e.disabled=!1)},1e3)}e.addEventListener("click",()=>{i&&(r.disabled=!0,e.disabled=!0,i(c))});
//# sourceMappingURL=commonHelpers.js.map