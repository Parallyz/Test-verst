import images from '../modules/imagesPath.js';
import feedbacks from '../modules/feedBack.js';
import popularTrips from '../modules/popularTrips.js';

const firstRowPopularOfferContainer = document.querySelector("#firstrow-popular-section");
const secondRowPopularOfferContainer = document.querySelector("#second-popular-section");


const btnDocumentNeed = document.querySelector("#btn-document-need");
const textDocumentNeed = document.querySelector("#text-document-need");

const btnTransfer = document.querySelector("#btn-transfer");
const textTransfer = document.querySelector("#text-transfer");


const btnCanChange = document.querySelector("#btn-can-change");
const textCanChange = document.querySelector("#text-can-change");

const btnCanPost = document.querySelector("#btn-can-post");
const textCanPost = document.querySelector("#text-can-post");

const btnTimeArrive = document.querySelector("#btn-time-arrive");
const textTimeArrive = document.querySelector("#text-time-arrive");

const btnLeaveFeedback = document.querySelector("#btn-leave-feedback");
const textLeaveFeedback = document.querySelector("#text-leave-feedback");

const btnHowPay = document.querySelector("#btn-how-pay");
const textHowPay = document.querySelector("#text-how-pay");

const btnCantFindRace = document.querySelector("#btn-cant-find-race");
const textCantFindRace = document.querySelector("#text-cant-find-race");

const btnWithPets = document.querySelector("#btn-with-pets");
const textWithPets = document.querySelector("#text-with-pets");

const btnBaggage = document.querySelector("#btn-baggage");
const textBaggage = document.querySelector("#text-baggage");


btnWithPets.addEventListener('click', (event) => {
    if (btnWithPets.children[0].style.display === "" ||
        btnWithPets.children[0].style.display === "block") {

        btnWithPets.children[0].style.display = 'none'
        textWithPets.style.color = "#006A66"

    }
    else {
        btnWithPets.children[0].style.display = 'block'

        textWithPets.style.color = "#393939"
    }



})
btnBaggage.addEventListener('click', (event) => {
    if (btnBaggage.children[0].style.display === "" ||
        btnBaggage.children[0].style.display === "block") {

        btnBaggage.children[0].style.display = 'none'
        textBaggage.style.color = "#006A66"

    }
    else {
        btnBaggage.children[0].style.display = 'block'

        textBaggage.style.color = "#393939"
    }



})
btnDocumentNeed.addEventListener('click', (event) => {
    if (btnDocumentNeed.children[0].style.display === "" ||
        btnDocumentNeed.children[0].style.display === "block") {

        btnDocumentNeed.children[0].style.display = 'none'
        textDocumentNeed.style.color = "#006A66"

    }
    else {
        btnDocumentNeed.children[0].style.display = 'block'

        textDocumentNeed.style.color = "#393939"
    }



})


btnTransfer.addEventListener('click', (event) => {
    if (btnTransfer.children[0].style.display === "" ||
        btnTransfer.children[0].style.display === "block") {
        btnTransfer.children[0].style.display = 'none'
        textTransfer.style.color = "#006A66"
    }
    else {
        btnTransfer.children[0].style.display = 'block'

        textTransfer.style.color = "#393939"
    }



})

btnCanChange.addEventListener('click', (event) => {
    if (btnCanChange.children[0].style.display === "" ||
        btnCanChange.children[0].style.display === "block") {
        btnCanChange.children[0].style.display = 'none'
        textCanChange.style.color = "#006A66"
    }
    else {
        btnCanChange.children[0].style.display = 'block'

        textCanChange.style.color = "#393939"
    }



})

btnCanPost.addEventListener('click', (event) => {
    if (btnCanPost.children[0].style.display === "" ||
        btnCanPost.children[0].style.display === "block") {
        btnCanPost.children[0].style.display = 'none'
        textCanPost.style.color = "#006A66"
    }
    else {
        btnCanPost.children[0].style.display = 'block'

        textCanPost.style.color = "#393939"
    }



})

btnTimeArrive.addEventListener('click', (event) => {
    if (btnTimeArrive.children[0].style.display === "" ||
        btnTimeArrive.children[0].style.display === "block") {
        btnTimeArrive.children[0].style.display = 'none'
        textTimeArrive.style.color = "#006A66"
    }
    else {
        btnTimeArrive.children[0].style.display = 'block'

        textTimeArrive.style.color = "#393939"
    }



})

btnLeaveFeedback.addEventListener('click', (event) => {
    if (btnLeaveFeedback.children[0].style.display === "" ||
        btnLeaveFeedback.children[0].style.display === "block") {
        btnLeaveFeedback.children[0].style.display = 'none'
        textLeaveFeedback.style.color = "#006A66"
    }
    else {
        btnLeaveFeedback.children[0].style.display = 'block'

        textLeaveFeedback.style.color = "#393939"
    }



})

btnHowPay.addEventListener('click', (event) => {
    if (btnHowPay.children[0].style.display === "" ||
        btnHowPay.children[0].style.display === "block") {
        btnHowPay.children[0].style.display = 'none'
        textHowPay.style.color = "#006A66"
    }
    else {
        btnHowPay.children[0].style.display = 'block'

        textHowPay.style.color = "#393939"
    }



})

btnCantFindRace.addEventListener('click', (event) => {
    if (btnCantFindRace.children[0].style.display === "" ||
        btnCantFindRace.children[0].style.display === "block") {
        btnCantFindRace.children[0].style.display = 'none'
        textCantFindRace.style.color = "#006A66"
    }
    else {
        btnCantFindRace.children[0].style.display = 'block'

        textCantFindRace.style.color = "#393939"
    }



})

// let counterCarousel = 0;
// const containerCarouselCirlce = document.querySelector("#carouselContainerFeedbackCircle");
// const interval = setInterval(() => {
//     if (counterCarousel == 3) counterCarousel = 0;
//     for (let i = 0; i < 3; i++) {
//         containerCarouselCirlce.children[i].classList.remove("filled-circle");
//     }
//     containerCarouselCirlce.children[counterCarousel++].classList.add("filled-circle");


// }, 1000);






const firstFeedbackSlide = document.querySelector("#firstFeedbackSlide");
const secondFeedbackSlide = document.querySelector("#secondFeedbackSlide");
const thirdFeedbackSlide = document.querySelector("#thirdFeedbackSlide");

const InitFeedbacks = () => {
    for (let index = 0; index < feedbacks.length; index++) {
        const element = feedbacks[index];
        switch (index) {

            case 0: {
                createFeedbackCard(feedbacks[index], firstFeedbackSlide);
            }
                break;
            case 1: {
                createFeedbackCard(feedbacks[index], firstFeedbackSlide);
            }
                break;
            case 2: {
                createFeedbackCard(feedbacks[index], secondFeedbackSlide);
            }
                break;
            case 3: {
                createFeedbackCard(feedbacks[index], secondFeedbackSlide);
            }
                break;
            case 4: {
                createFeedbackCard(feedbacks[index], thirdFeedbackSlide);
            }
                break;
            case 5: {
                createFeedbackCard(feedbacks[index], thirdFeedbackSlide);
            }
                break;
        }

    }


}



const InitPopular = () => {
    for (let i = 0; i < popularTrips.length; i++) {
        if (i < 4) {
            createPopularCard(popularTrips[i], firstRowPopularOfferContainer);
        }
        else {
            createPopularCard(popularTrips[i], secondRowPopularOfferContainer);

        }
    }
}

const createPopularCard = (trip, row) => {

    let divColumn = document.createElement("div");
    divColumn.classList.add("col-3");

    let divPopularCard = document.createElement("div");
    divPopularCard.classList.add("popular-card");
    divPopularCard.style.backgroundImage = "url(" + trip.Image + ")";

    let divPopularTextRectangle = document.createElement("div");
    divPopularTextRectangle.classList.add("popular-text-rectangle");

    let pPopularText = document.createElement("p");
    pPopularText.innerText = "Популярний";

    divPopularTextRectangle.appendChild(pPopularText);


    let h3FromToText = document.createElement("h3");
    h3FromToText.classList.add("from-to-text");
    h3FromToText.innerText = trip.FromTo

    let h4MinCost = document.createElement("h4");
    h4MinCost.classList.add("min-costs");
    h4MinCost.innerText = "від " + trip.Cost + " грн.";


    divPopularCard.appendChild(divPopularTextRectangle);
    divPopularCard.appendChild(h3FromToText);
    divPopularCard.appendChild(h4MinCost);

    divColumn.appendChild(divPopularCard);

    row.appendChild(divColumn);

}

const createFeedbackCard = (feedback, container) => {

    let divColumn = document.createElement("div");
    divColumn.classList.add("col-6");

    let divSlide = document.createElement("div");
    divSlide.classList.add("wiper-slide");

    let divFeedbackRect = document.createElement("div");
    divFeedbackRect.classList.add("feedback-rectangle");

    let divFeedbackContent = document.createElement("div");
    divFeedbackContent.classList.add("feedback-content");

    let h2FeedbackOwner = document.createElement("h2");
    h2FeedbackOwner.classList.add("feedback-owner");
    h2FeedbackOwner.innerText = feedback.Name;

    let h4FeedbackFromTo = document.createElement("h4");
    h4FeedbackFromTo.classList.add("owner-from-to");
    h4FeedbackFromTo.innerText = feedback.FromTo;

    let h3FeedbackDate = document.createElement("h3");
    h3FeedbackDate.classList.add("datetime-feedback");
    h3FeedbackDate.innerText = feedback.Date;

    let hr = document.createElement("hr");

    let pFeedbackText = document.createElement("p");
    pFeedbackText.classList.add("feedback-text");
    pFeedbackText.innerText = feedback.Text;

    let imgFeedback = document.createElement("img");
    imgFeedback.classList.add("feedback-img");
    imgFeedback.src = images.feedback;

    let divStarContainer = document.createElement("div");
    divStarContainer.classList.add("row");
    divStarContainer.classList.add("star-container");

    let divColStarContainer = document.createElement("div");
    divColStarContainer.classList.add("col");

    for (let i = 0; i < feedback.Stars; i++) {

        let imgFeedback = document.createElement("img");

        imgFeedback.src = images.star;
        imgFeedback.alt = "star";

        divColStarContainer.appendChild(imgFeedback);

    }

    divStarContainer.appendChild(divColStarContainer);

    divFeedbackContent.appendChild(h2FeedbackOwner);
    divFeedbackContent.appendChild(h4FeedbackFromTo);
    divFeedbackContent.appendChild(h3FeedbackDate);
    divFeedbackContent.appendChild(hr);
    divFeedbackContent.appendChild(pFeedbackText);
    divFeedbackContent.appendChild(imgFeedback);
    divFeedbackContent.appendChild(divStarContainer);

    divFeedbackRect.appendChild(divFeedbackContent);
    // divSlide.appendChild(divFeedbackRect);
    divColumn.appendChild(divFeedbackRect);

    container.appendChild(divColumn);
    //  container.parentNode.insertBefore(divColumn,leaveFeedbackBlock.nextSibling)
}

let datetime = document.querySelector("#datetime");

datetime.addEventListener('focus', (event) => {
    datetime.type = 'date';
    try {
        datetime.showPicker();
    } catch (error) {
        
    }


});




InitPopular();
InitFeedbacks();