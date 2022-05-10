import images from '../modules/imagesPath.js';
import feedbacks from '../modules/feedBack.js';
import popularTrips from '../modules/popularTrips.js';
import './select.js';
import './accordion.js';

const firstRowPopularOfferContainer = document.querySelector("#firstrow-popular-section");
const secondRowPopularOfferContainer = document.querySelector("#second-popular-section");

const firstFeedbackSlide = document.querySelector("#firstFeedbackSlide");
const secondFeedbackSlide = document.querySelector("#secondFeedbackSlide");
const thirdFeedbackSlide = document.querySelector("#thirdFeedbackSlide");

const InitFeedbacks = () => {
    for (let index = 0; index < feedbacks.length; index++) {
        
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
        console.log(feedbacks);
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
    divSlide.classList.add("swiper-slide");

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
    divColumn.appendChild(divFeedbackRect);

    container.appendChild(divColumn);
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
//InitFeedbacks();