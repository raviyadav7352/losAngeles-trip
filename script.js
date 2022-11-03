let imageData = [
    { image: "img8" },
    { image: "img9" },
    { image: "img3" },
    { image: "img10" },
]
let datePlace = [
    { date: "25 Nov 2022", place: "new delhi" },
    { date: "28 Nov 2022", place: "Chennai" },
    { date: "18 Dec 2022", place: "Ranchi" },
    { date: "07 Jan 2022", place: "Jaipur" },
]
let datePlace2 = [
    { date: "12 Jun 2022", place: "chandigarh" },
    { date: "18 Aug 2022", place: "haryana" },
    { date: "18 Dec 2022", place: "poundycherry" },
    { date: "07 May 2022", place: "gujrat" },
]
let textOverData = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat temporibus quam quo? Facere, facilis vero nihil enim, assumenda voluptas, ipsum eveniet perspiciatis labore quibusdam cupiditate exercitationem nesciunt dignissimos fugit? Praesentium.",
    "ipsum dolor sit, amet consectetur adipisicing elit. Fugiat temporibus quam quo? Facere, facilis vero nihil enim, assumenda voluptas, ipsum eveniet perspiciatis labore quibusdam cupiditate exercitationem nesciunt .",
    "Facilis vero nihil enim, assumenda voluptas, ipsum eveniet perspiciatis labore quibusdam cupiditate exercitationem nesciunt dignissimos fugit? Praesentium.",
    "Elit. Fugiat temporibus quam quo? Facere, facis perspiciatis labore quibusdam cupiditate exercitationem nesciunt dignissimos fugit? Praesentium.",
]

let imagesbox = document.querySelector(".images")
let smallImagesbox = document.querySelector(".small-images")
let indicatorBox = document.querySelector(".image-indicator")
let mountainImg1 = document.querySelector("#mountain1")
let mountainImg2 = document.querySelector("#mountain2")

setImage(imageData)

let indicator1 = document.getElementById("indiactor1")
let indicator2 = document.getElementById("indiactor2")
let indicator3 = document.getElementById("indiactor3")
let indicator4 = document.getElementById("indiactor4")
let smallimage1 = document.getElementById("smallimg1")
let smallimage2 = document.getElementById("smallimg2")
let smallimage3 = document.getElementById("smallimg3")
let smallimage4 = document.getElementById("smallimg4")
let tripSchedule = document.querySelector(".trip-schedule")
let sectionImageText = document.querySelector(".section-img-text")

indicator1.classList.add("indicator-show")
smallimage1.classList.add("blurred")
// function for set image data
function setImage(images) {
    let imagehtml = "";
    let smallImageHtml = "";
    let imageIndicator = "";
    images.forEach((img, index) => {
        imagehtml += `<div class="single-image" ><img class="corosol-img" id="img${index + 1}" src="images/${img.image}.jpg" alt="mountain"></div>`
        smallImageHtml += `<img class="small-img" id="smallimg${index + 1}" src="images/${img.image}.jpg" alt="">`
        imageIndicator += `<span  class="indicator" id="indiactor${index + 1}">.</span>`
    })
    imagesbox.innerHTML = imagehtml
    smallImagesbox.innerHTML = smallImageHtml
    indicatorBox.innerHTML = imageIndicator
}
// indicator change function
function indicatorShow(indicat, imageName) {
    let indcators = [indicator1, indicator2, indicator3, indicator4]
    indcators.forEach(indiactor => {
        indiactor.classList.remove("indicator-show")
    })
    indicat.classList.add("indicator-show")
    let smallimage=[smallimage1, smallimage2, smallimage3, smallimage4]
    smallimage.forEach(image =>{
        image.classList.remove("blurred")
    })
    imageName.classList.add("blurred")
}
// footer page changer function
function changePage(page) {
    if (page == "showpage1") {
        document.getElementById("showpage1").classList.add("mountainbtn")
        document.getElementById("showpage2").classList.remove("mountainbtn")
        mountainImg1.classList.add("show")
        mountainImg2.classList.remove("show")
        triplist(datePlace)

    } else if (page == "showpage2") {
        document.getElementById("showpage2").classList.add("mountainbtn")
        document.getElementById("showpage1").classList.remove("mountainbtn")
        mountainImg2.classList.add("show")
        mountainImg1.classList.remove("show")
        triplist(datePlace2)
    }
}
// footer trip list show function
function triplist(datas) {
    let listdata = "<h3>SCHEDULE</h3>";
    datas.forEach(data => {
        listdata += `<div class="date">${data.date}
                        <span class="place">${data.place}</span>
                    </div>`
    })
    tripSchedule.innerHTML = listdata
}
triplist(datePlace)

// section image text overlaped function
function TextOverImage(i) {
    let html = "";
    html +=`<div class="section-bold-text">
                <span class="bold-text1">0${i + 1}.</span>
                <span class="bold-text2">HISTORY</span>
            </div>
            <p class="section-text">${textOverData[i]}</p>`
    sectionImageText.innerHTML = html
}

TextOverImage(0)
 
// event binder function
document.addEventListener("click", function (e) {
    let elem = e.target;
    let elemid = elem.getAttribute("id")
    if (elemid == "smallimg1" || elemid == "indiactor1") {
        imagesbox.style.transform = "translateX(0px)"
        indicatorShow(indicator1, smallimage1 )
        TextOverImage(0)

    } else if (elemid == "smallimg2" || elemid == "indiactor2") {
        imagesbox.style.transform = "translateX(-100%)"
        indicatorShow(indicator2, smallimage2)
        TextOverImage(1)

    } else if (elemid == "smallimg3" || elemid == "indiactor3") {
        imagesbox.style.transform = "translateX(-200%)"
        indicatorShow(indicator3, smallimage3)
        TextOverImage(2)

    } else if (elemid == "smallimg4" || elemid == "indiactor4") {
        imagesbox.style.transform = "translateX(-300%)"
        indicatorShow(indicator4, smallimage4)
        TextOverImage(3)
    }
    if (elemid == "showpage1" || elemid == "showpage2") {
        changePage(elemid)
    }
})
