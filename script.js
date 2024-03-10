document.getElementById("submit-button").addEventListener("click", function() {
    var name = document.getElementById("name-input").value;
    var response = document.getElementById("response-input").value.toLowerCase(); // Get the user's response and convert it to lowercase
    var outputMessage = document.getElementById("output-message");
    
    if (response === "yes") {
        outputMessage.innerHTML = "Hello, " + name + "! Thank you for your positive response. <br> Enjoy this message: <audio autoplay><source src='perfect.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
        document.getElementById("input-section").style.display = "none";
        document.getElementById("output-section").style.display = "block";
        setTimeout(function() {
            showLoveMessage();
        }, 2000); // Show love message after 2 seconds
    } else if (response === "no") {
        outputMessage.textContent = "Hello, " + name + "! It's okay if you're not ready. Feel free to reach out anytime.";
        document.getElementById("input-section").style.display = "none";
        document.getElementById("output-section").style.display = "block";
    } else {
        alert("Please respond with either 'yes' or 'no'.");
    }
});

function showLoveMessage() {
    var loveMessage = document.getElementById("love-message");
    loveMessage.style.display = "block";
    var heart = document.getElementById("heart");
    var loveText = document.getElementById("love-text");
    heart.style.animation = "heartBeat 1s infinite";
    loveText.style.animation = "heartBeat 1s infinite";
}
