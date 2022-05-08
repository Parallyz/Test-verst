import images from "./imagesPath.js";
class PopularTrip {
    constructor(fromTo, cost,image) {
      this.FromTo = fromTo;
      this.Cost = cost;
      this.Image = image;
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

export default popularTrips