import webpackLogo from "../images/webpack.png";
const description = document.querySelector("p");

const webLogo = new Image();
webLogo.src = webpackLogo;
webLogo.alt = "webpack logo";
webLogo.style.float = "right";
webLogo.width = 200;
webLogo.height = 200;

description.prepend(webLogo);
