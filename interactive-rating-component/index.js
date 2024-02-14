
// set the rating according to submitted value
let rating = null;
const buttonContainer = document.getElementById("rating-buttons");
const submitButton = document.getElementById("submit");
let rating_card = document.querySelector(".rating-card");
let loading_card = document.querySelector(".loading-card");
let thanks_card = document.querySelector(".thanks-card");
let ratingContainer = document.querySelector("#rating-value");

buttonContainer.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        const value = event.target.innerText;
        rating = value;
    }
})
const setRating = (rating_value) => {

    ratingContainer.innerText = rating_value;
}

const toggleCards = () => {

    rating_card.classList.toggle("hidden");
    loading_card.classList.toggle("hidden");

    setTimeout(() => {
        loading_card.classList.toggle("hidden");
        thanks_card.classList.toggle("hidden");
    }, 300);
}

function submit() {
    if (rating === null) {
        alert("Please select a rating");
        return;
    }
    setRating(rating);
    toggleCards();
}

submitButton.addEventListener("click", submit)
