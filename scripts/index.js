

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



const interval = setInterval(() => {
    //clearInterval(interval);
    //btndocument.children[0].style.display = 'block'
}, 5000);


const images = {
    hamburg_kharkiv: "../images/hamburg-kharkiv.png",
    kharkiv_venezia: "../images/kharkiv-venezia.png",
    krakow_odessa: "../images/krakow-odessa.png",
    kyiv_berlin: "../images/kyiv-berlin.png",
    lviv_warsaw: "../images/lviv-warsaw.png",
    prague_chernihiv: "../images/prague-chernihiv.png",
    rivne_lublin: "../images/rivne-lublin.png",
    wroclaw_lutsk: "../images/wroclaw-lutsk.png",
    star: "../images/filled-star.png",
    feedback: "../images/feedback-img.png"
}
class PopularTrip {
    constructor(fromTo, cost, image) {
        this.FromTo = fromTo;
        this.Cost = cost;
        this.Image = image;
    }
}


class Feedback {
    constructor(id, name, fromTo, date, text, stars) {
        this.id = id
        this.FromTo = fromTo;
        this.Name = name;
        this.Date = date;
        this.Text = text;
        this.Stars = stars;

    }
}

const feedbacks = [
    new Feedback(0, "Тетяна", "Харків - Берлін", "10 лютого, 2022",
        "Дякую Вам велике, поїздка пройшла комфортно. Водій акуратно, чемно та професійно керував автобусом. Дякую йому! Я Вас рекомендуватиму, однозначно.)", 5),
    new Feedback(1, "Андрій", "Варшава - Рівне", "12 грудня, 2021 ",
        "Блестящий сервис. Приветливый водитель. Хороший автобус с кондиционером. Автобус был вовремя. Цена очень хорошая.", 5),
    new Feedback(2, "Володимир", "Харків - Берлін", "10 лютого, 2022",
        "Непогано", 4),
    new Feedback(3, "Владислав", "Варшава - Рівне", "12 грудня, 2021 ",
        "Непогано", 4),
    new Feedback(4, "Микола", "Варшава - Рівне", "18 лютого, 2022",
        "Погано", 3),
    new Feedback(5, "Петро", "Харків - Берлін", "10 лютого, 2022",
        "Жахливо", 2)

]

const popularTrips = [
    new PopularTrip("Київ - Берлін", 2000, images.kyiv_berlin),
    new PopularTrip("Львів - Варшава", 1000, images.lviv_warsaw),
    new PopularTrip("Харків - Венеція", 2500, images.kharkiv_venezia),
    new PopularTrip("Рівне - Люблін", 1750, images.rivne_lublin),
    new PopularTrip("Гамбург - Харків", 2900, images.hamburg_kharkiv),
    new PopularTrip("Вроцлав - Луцьк", 1320, images.wroclaw_lutsk),
    new PopularTrip("Прага - Чернігів", 2100, images.kyiv_berlin),
    new PopularTrip("Краків - Одеса", 3730, images.krakow_odessa),
]




const InitFeedbacks = () => {
    feedbacks
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

const createFeedbackCard = (feedback,container) => {
    let divColumn = document.createElement("div");
    divColumn.classList.add("col-3");

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
    h3FeedbackDate.innerText = feedback.FromTo;

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

InitPopular();