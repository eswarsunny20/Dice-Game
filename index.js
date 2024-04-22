function randomSelect() {
    var img = document.querySelector(".img1");
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    img.src = "images/dice" + randomNumber1 + ".png";
    var img2 = document.querySelector(".img2");
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    img2.src = "images/dice" + randomNumber2 + ".png";
    var title = document.querySelector("h1");
    if(randomNumber1 == randomNumber2){
        title.innerHTML = "Draw !";
    }else if (randomNumber1 > randomNumber2){
        title.innerHTML = "Player 1 Wins !"
    }else if(randomNumber1 < randomNumber2){
        title.innerHTML = "Player 2 Wins !"
    }

}

randomSelect();