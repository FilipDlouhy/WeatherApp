(()=>{"use strict";let e;function n(){e=document.querySelector("#cityName").value,e?e.trim():console.log("neslonic")}function a(){fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=5&appid=b19b9f3943e89c6e025fcbf777476da2`).then((e=>e.json())).then((n=>{fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n[0].lat}&lon=${n[0].lon}&exclude=hourly,minutely,current&appid=b19b9f3943e89c6e025fcbf777476da2`).then((e=>e.json())).then((n=>{console.log(n),console.log(n.daily[0].feels_like.day),function(e){let n=document.querySelector("#unit").innerHTML,a=document.querySelector(".other-days");a.innerHTML=" ";for(let o=1;o<e.daily.length;o++){let r=e.daily[o].temp.max,s=e.daily[o].temp.min,u=t(s),c=t(r),p=i(s),f=i(r),y=Math.round(u),h=Math.round(c),m=Math.round(p),M=Math.round(f),T=e.daily[o].dt,$=new Date(1e3*T),L=l(e.daily[o].weather[0].main.toString()),H=("Mon"===(d=$.toDateString().slice(0,3))?d="Monday":"Tue"===d?d="Tuesday":"Wed"===d?d="Wednesday":"Thu"===d?d="Thursday":"Fri"===d?d="Friday":"Sat"===d?d="Saturday":"Sun"===d&&(d="Sunday"),d),S=document.createElement("div");S.classList.add("day"),"C"===n?S.innerHTML=`<h1>${H}</h1>\n          <p>${h}°C-${y}°C</p>\n     \n          <i class="fa-solid  ${L}"></i>`:"F"===n&&(S.innerHTML=`<h1>${H}</h1>\n          <p>${M}F-${m}F</p>\n     \n          <i class="fa-solid  ${L}"></i>`),a.appendChild(S)}var d}(n),function(n){let a=document.querySelector("#unit").innerHTML,l=document.querySelector(".today"),d=document.createElement("div"),o=n.daily[0].temp.day,r=t(o),s=i(o),u=Math.round(r),c=Math.round(s),p=n.daily[0].feels_like.day,f=t(p),y=i(p),h=Math.round(f),m=Math.round(y),M=n.daily[0].wind_speed,T=n.daily[0].humidity;l.innerHTML=" ","C"===a?(d.innerHTML=` <h1> Today in ${e} <i class="fa-solid fa-house"></i></h1>\n  <p>Temperature <i class="fa-solid fa-temperature-empty"></i>: ${u} °C</p>\n  <p>Fells like <i class="fa-solid fa-sun"></i>: ${h} °C</p>\n  <p>Humidity <i class="fa-solid fa-droplet"></i>:${T} %</p>\n  <p>Wind <i class="fa-solid fa-wind"></i>: ${M} km/h</p> `,l.appendChild(d)):"F"===a&&(d.innerHTML=` <h1> Today in ${e} <i class="fa-solid fa-house"></i></h1>\n  <p>Temperature <i class="fa-solid fa-temperature-empty"></i>: ${c} F</p>\n  <p>Fells like <i class="fa-solid fa-sun"></i>: ${m} F</p>\n  <p>Humidity <i class="fa-solid fa-droplet"></i>:${T} %</p>\n  <p>Wind <i class="fa-solid fa-wind"></i>: ${M} km/h</p> `,l.appendChild(d))}(n)}))}))}function i(e){return 1.8*((e=parseFloat(e))-273.15)+32}function t(e){return(e=parseFloat(e))-273.15}function l(e){let n;return"Rain"===e?n="fa-cloud-showers-heavy":"Clouds"===e?n="fa-cloud":"Clear"===e?n="fa-sun":"Snow"===e&&(n="fa-snowflake"),n}let d=document.querySelector("#searchBTN"),o=document.querySelector(".other-days"),r=document.querySelector(".today"),s=document.querySelector("#unit");s.addEventListener("click",(()=>{r.innerHTML=" ",o.innerHTML=" ","C"===s.innerHTML?(s.innerHTML="F",n(),a()):"F"===s.innerHTML&&(s.innerHTML="C",n(),a())})),d.addEventListener("click",(()=>{r.innerHTML=" ",o.innerHTML=" ",n(),a()}))})();