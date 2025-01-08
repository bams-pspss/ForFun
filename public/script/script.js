let button = document.getElementById("btn");
let counter = document.getElementById("cnt");
let header = document.getElementById("h");
let restart = document.getElementById("rst");
let colorCode = document.getElementById("cc");
let reward = document.getElementById("rwd");

//I hope this work

function getRandomColor() {
    // Generate a random color in hexadecimal format
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let count = 0;


button.addEventListener("click", function() {
    let randomColor = getRandomColor();
    if(count == 5){
        randomColor = '#000000';
    }

    if(count > 200){
        getALife();
    }

    colorCode.innerHTML = randomColor;
    if (randomColor === '#000000') {
        document.body.style.backgroundColor = randomColor;
        foundBlack();
    }
    else{
        document.body.style.backgroundColor = randomColor;
        count++;
        counter.innerHTML = count;
    }
});


restart.addEventListener("click", function() {
    reward.style.display = "flex";
    reward.play();

    
    //location.reload();
});

function foundBlack() {
    header.innerHTML = "WOW! YOU FOUND ME!";
    header.style.color = "white";
    counter.style.color = "white";
    counter.style.fontSize = "120px";
    restart.style.display = "flex";
    button.style.display = "none";

}

function getALife() {
    


}