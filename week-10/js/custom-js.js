// ----------------------------
// Vanilla JavaScript Interactions
// ----------------------------
// 1. Greet the user when the "Greet Me" button is clicked
document.getElementById('greetBtn').addEventListener('click', function(){
    //get the value entered in the input field and remove extra spaces
    const name = document.getElementById('nameInput').value.trim();

    // If the user entered a name, display a greeting message
    // Otherwise, prompt the user to enter a name
    document.getElementById('greetingOutput').textContent = name
        ? `Hello, ${name}! `
        : "Please enter your name.";
});
// 2. Change the background color of the page randomly
document.getElementById('changeBgBtn').addEventListener('click', function(){
    // define a list of color options
    const colors = ['#ffebee', '#e8f5e9', '#e3f5e9', '#fff3e0',"#f3e5f5"];
    // pick a random number from the array
    const random  = colors[Math.floor(Math.random() * colors.length)];
    // apply the selected color as the background of the page
    document.body.style.backgroundColor = random;
});
// 3. Count characters in a textarea as the user types
document.getElementById('textArea').addEventListener('input', function(){
    // this.value refers to the current value of the textarea
    const text = this.value;
    // update the character count display
    document.getElementById('charCount').textContent = `Characters: ${text.length}`;
})
// ------------------------------
// jQuery Interactions
// ------------------------------
$(document).ready(function() {
    let jqueryCounter = 0;
    // 4. Increase the counter when the "Increase" button is clicked
    $('#jqueryInc').click(function () {
        jqueryCounter++; // add 1 to the counter per click
        $('#jqueryCounter').text(jqueryCounter);
    });
    // 4. Decrease the counter when the "Decrease" button is clicked
    $('#jqueryDec').click(function () {
        jqueryCounter--; // subtract when the button is clicked
        $('#jqueryCounter').text(jqueryCounter);
    });
    // 5. Show or hide the message when the "Toggle Message" button is clicked
    $('#toggleBtn').click(function () {
        // use jQuerys fadeToggle to smoothly show and hide
        $('#jqMessage').fadeToggle();
    });
});