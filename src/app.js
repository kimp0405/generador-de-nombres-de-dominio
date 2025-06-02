import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io', '.es'];

  function generateDomains() {
    let domains = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          let base = p + a + n;
          // Dominios normales
          for (let ext of extensions) {
            
            if (base.endsWith(ext.replace('.', ''))) {
              domains.push(base.slice(0, -ext.length + 1) + ext);
            } else {
              domains.push(base + ext);
            }
          }
        }
      }
    }
    return domains;
  }

 
   let allDomains = generateDomains();
   let domainList = document.getElementById("domain-list");
   allDomains.forEach(domain => {
     let li = document.createElement("li");
     li.textContent = domain;
     domainList.appendChild(li);
})};