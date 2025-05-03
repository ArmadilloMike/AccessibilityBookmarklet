javascript:!function(){function t(t){document.head.appendChild(t)}function e(e,l){let o=document.createElement("link");o.rel=e,o.href=l,t(o)}!function l(){let o=prompt("Choose an option. contrast, grayscale, textToSpeech, or fontChange?");"contrast"===o?function t(){let e="high-contrast",l=document.body.classList.contains(e);if(l){document.body.classsList.remove(e);let o=document.querySelectorAll("*");o.forEach(t=>{t.style.backgroundColor="",t.style.color=""})}else{document.body.classList.add(e);let n=document.querySelectorAll("*");n.forEach(t=>{let e=window.getComputedStyle(t),l=e.backgroundColor,o=e.color;t.style.backgroundColor=a(l),t.style.color=a(o)})}function a(t){let e=t.match(/\d+/g);return!e||e.length<3?t:`rgb(${255-e[0]}, ${255-e[1]}, ${255-e[2]})`}}():"fontChange"===o?(e("preconnect","https://fonts.googleapis.com"),e("preconnect","https://fonts.gstatic.com"),e("stylesheet","https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"),function e(l){let o=document.createElement("style");o.innerHTML=l,t(o)}(`
        * {
            font-family: Arial !important;
        }
        .lato-regular {
            font-family: Arial !important;
        }
        [style*="Lato"] {
            font-family: Arial !important;
        }
    `)):"grayscale"===o?function t(){let e="grayscale-mode";if(document.body.classList.contains(e))document.body.classList.remove(e);else{document.body.classList.add(e);let l=document.createElement("style");l.id="grayscale-style",l.textContent=`
                .grayscale-mode * {
                    filter: grayscale(100%) !important;
                }
            `,document.head.appendChild(l)}}():"textToSpeech"===o?function t(){let e=document.querySelectorAll("*");e.forEach(t=>{let e=document.createElement("span");e.textContent="\uD83C\uDFA4",e.style.cursor="pointer",e.style.marginLeft="8px",e.title="Click to read text",e.addEventListener("click",()=>{let e=new SpeechSynthesisUtterance(t.textContent);e.lang="en-US",e.rate=1,e.pitch=1,window.speechSynthesis.speak(e)}),t.appendChild(e)})}():alert("Invalid name")}()}();
