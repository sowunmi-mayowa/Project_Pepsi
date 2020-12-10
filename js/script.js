const bluePepsi = document.querySelector("#img1");
const redPepsi = document.querySelector("#img2");
const blackPepsi = document.querySelector("#img3");

bluePepsi.addEventListener("click" , () => {
    document.querySelector("body").classList.add("blue-pepsi-background");
    document.querySelector("body").classList.remove("black-pepsi-background");
    document.querySelector("body").classList.remove("red-pepsi-background");
    document.querySelector("#pepsi-image").src = "img/pepsi001.png";
});

redPepsi.addEventListener("click" , () => {
    document.querySelector("body").classList.add("red-pepsi-background");
    document.querySelector("body").classList.remove("blue-pepsi-background");
    document.querySelector("body").classList.remove("black-pepsi-background");
    document.querySelector("#pepsi-image").src = "img/pepsi002.png";
});

blackPepsi.addEventListener("click" , () => {
    document.querySelector("body").classList.add("black-pepsi-background");
    document.querySelector("body").classList.remove("blue-pepsi-background");
    document.querySelector("body").classList.remove("red-pepsi-background")
    document.querySelector("#pepsi-image").src = "img/pepsi003.png";
});