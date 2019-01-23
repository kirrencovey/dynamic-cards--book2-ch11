// Challenge: Dynamic Cards
// The learning objective for this challenge is to practice event listeners for click events. You will also practice adding elements to the DOM, and removing elements from the DOM with the removeChild() method. You will even need to use the split() method on a string.


// Requirements
// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
// Insert that new component into the DOM.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
// Pro tip: The card's id attribute, and the button's id attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the split() method on a string? That will be helpful.


// Set a counter to use in labeling cards and buttons as they're made:
let counter = 0;

// Set targeted elements to variables:
const cardContainer = document.querySelector("#card--container");
const createButton = document.querySelector("#create--button");

// Function to create DOM representation of new card:
const cardFactory = (text) => {
return `
<article class="card" id="card--${counter}">
    <div>${text}</div>
    <div>
    <button id="delete--${counter}">Delete This Card</button>
    </div>
</article>
`
}

// Function to handle clicks on Create button:
const clickHandler = (event) => {
    counter++;
    let textInput = document.querySelector("#text--area").value;
    let newCard = cardFactory(textInput);
    // Add new card to DOM:
    cardContainer.innerHTML += newCard;
}


// Add an event listener on Create button to capture text area input & turn it into a new card:
createButton.addEventListener("click", clickHandler);





