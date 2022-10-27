let imageData=[
    {image:"img1"},
    {image:"img2"},
    {image:"img3"},
    {image:"img4"},
]
let imagesbox =document.querySelector(".images")
let smallImagesbox =document.querySelector(".small-images")
let imageDotsbox =document.querySelector(".image-dots")
// let imagesbox =document.querySelector(".")
// let imagesbox =document.querySelector(".")

function setImage(images){
    let imagehtml="";
    let smallImageHtml="";
    let imageDots ="";
    images.forEach((img, index) =>{
        imagehtml +=` <img class="corosol-img" id="img${index + 1}" src="images/${img.image}.jpg" alt="mountain">`
        smallImageHtml +=`<img class="small-img" id="smallimg${index + 1}" src="images/${img.image}.jpg" alt="">`
        imageDots +=`<span  class="btn" id="btn${img.image}">.</span>`
    })
    // imagesbox.innerHTML=imagehtml
    // smallImagesbox.innerHTML=smallImageHtml
    // imageDotsbox.innerHTML = imageDots
}
setImage(imageData)

let corosolImage1 =document.getElementById("img1")
let corosolImage2 =document.getElementById("img2")
let corosolImage3 =document.getElementById("img3")
let corosolImage4 =document.getElementById("img4")
let smallimage1 = document.getElementById("smallimg1")
let smallimage2 = document.getElementById("smallimg2")
let smallimage3 = document.getElementById("smallimg3")
let smallimage4 = document.getElementById("smallimg4")
smallImagesbox.addEventListener("click", function (e) {
    let elem =e.target;
    let elemid = elem.getAttribute("id")
    if(elemid =="smallimg1"){
        imagesbox.style.transform ="translateX(0px)"
    }else if(elemid =="smallimg2"){
        imagesbox.style.transform ="translateX(-100%)"
    }else if(elemid =="smallimg3"){
        imagesbox.style.transform ="translateX(-200%)"
    }else if(elemid =="smallimg4"){
        imagesbox.style.transform ="translateX(-300%)"
    }
    
  })