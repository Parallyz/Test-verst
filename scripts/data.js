const images = {
    hamburg_kharkiv: "../images/hamburg-kharkiv.png",
    kharkiv_venezia: "../images/kharkiv-venezia.png",
    krakow_odessa: "../images/krakow-odessa.png",
    kyiv_berlin: "../images/kyiv-berlin.png",
    lviv_warsaw: "../images/lviv-warsaw.png",
    prague_chernihiv: "../images/prague-chernihiv.png",
    rivne_lublin: "../images/rivne-lublin.png",
    wroclaw_lutsk: "../images/wroclaw-lutsk.png",
}

class PopularTrip {
  constructor(fromTo, cost,image) {
    this.FromTo = fromTo;
    this.Cost = cost;
    this.Image = image;
  }
}

class Feedback {
    constructor(name, fromTo,date,text,stars) {
      this.FromTo = fromTo;
      this.Name = name;
      this.Date = date;
      this.Text = text;
      this.Stars = stars;

    }
  }

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



const feedbacks = [
    new Feedback("Тетяна","Харків - Берлін","10 лютого, 2022",
     "Дякую Вам велике, поїздка пройшла комфортно. Водій акуратно, чемно та професійно керував автобусом. Дякую йому! Я Вас рекомендуватиму, однозначно.)",5),
    new Feedback("Андрій","Варшава - Рівне","12 грудня, 2021 ",
    "Блестящий сервис. Приветливый водитель. Хороший автобус с кондиционером. Автобус был вовремя. Цена очень хорошая.",5),
    new Feedback("Володимир","Харків - Берлін","10 лютого, 2022",
    "Непогано",4),
    new Feedback("Владислав","Варшава - Рівне","12 грудня, 2021 ",
    "Непогано",4),
    new Feedback("Микола","Варшава - Рівне","18 лютого, 2022",
    "Погано",3),
    new Feedback("Петро","Харків - Берлін","10 лютого, 2022",
    "Жахливо",2)
   
]
