let intro = document.getElementById('intro');
let input = document.getElementById('input');
let answer = document.getElementById('answer');
let container = document.getElementById('container');

let loading = document.getElementById('loading');

// Event listener for the submit button
document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the user's input
    let userInput = input.value;

    // Validate input
    if (!isNaN(userInput) && userInput.trim() !== "") {
        // Show loading spinner
        intro.style.display = "none";
        loading.style.display = "block";
        answer.textContent = ""; 
       
        setTimeout(() => {
            loading.style.display = "none"; 
            container.style.display = "block";
            answer.textContent = ` ${userInput}!`;
            
            //Surprise
            setTimeout(() => {
                let iframe = document.querySelector("iframe");
                let videoSrc = iframe.getAttribute("src");
                iframe.setAttribute("src", `${videoSrc}&autoplay=1`);
             }, 1000);



        }, 2000); 
        answer.textContent = "Please enter a valid number.";
    }
});
