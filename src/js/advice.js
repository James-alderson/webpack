const PARAGRAPH = document.querySelector("p");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.adviceslip.com/advice");
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    let adv = JSON.parse(this.responseText);

    console.log(adv.slip.advice);
    PARAGRAPH.textContent = adv.slip.advice;
  }
};
