let listShower = document.querySelector("#nav-hider");

listShower.onclick = function ayman() {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  document.body.appendChild(popup);

  let a1 = document.createElement("a");
  a1.innerHTML = "English";
  popup.appendChild(a1);

  let a3 = document.createElement("a");
  a3.innerHTML = "Country";
  popup.appendChild(a3);

  let a4 = document.createElement("a");
  a4.innerHTML = "Branches";
  popup.appendChild(a4);

  let a2 = document.createElement("a");
  a2.innerHTML = "Help";
  popup.appendChild(a2);

  let a5 = document.createElement("a");
  a5.innerHTML = "Favorite";
  popup.appendChild(a5);

  let a6 = document.createElement("a");
  a6.innerHTML = "Delivery";
  popup.appendChild(a6);

  let a7 = document.createElement("a");
  a7.innerHTML = "Sign In OR Login";
  popup.appendChild(a7);

  a1.onclick = function () {
    popup.remove();
  };
  a2.onclick = function () {
    popup.remove();
  };
  a3.onclick = function () {
    popup.remove();
  };
  a4.onclick = function () {
    popup.remove();
  };
  a5.onclick = function () {
    popup.remove();
  };
  a6.onclick = function () {
    popup.remove();
  };
  a7.onclick = function () {
    popup.remove();
  };

  listShower.onclick = function () {
    popup.remove();
    listShower.onclick = function () {
      ayman();
    };
  };
};

let landingPage = document.querySelector(".landing .container");

let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgs.length);
  landingPage.style.backgroundImage = 'url("./imgs/' + imgs[randomNumber] + '")';
}, 10000);

//
//
//
//
//


let categories = document.querySelector(".header .header-tab .categories")

categories.onclick = function thing() {

  let catHolder = document.createElement("div")
  catHolder.classList.add("cat-holder")
  document.body.appendChild(catHolder)

  let e1 = document.createElement("div")
  e1.classList.add("insider", "a1")
  e1.innerHTML = "Thing"
  catHolder.appendChild(e1)

  let e2 = document.createElement("div")
  e2.classList.add("insider", "e2")
  e2.innerHTML = "Thing"
  catHolder.appendChild(e2)

  let e3 = document.createElement("div")
  e3.classList.add("insider", "e3")
  e3.innerHTML = "Thing"
  catHolder.appendChild(e3)

  let e4 = document.createElement("div")
  e4.classList.add("insider", "e4")
  e4.innerHTML = "Thing"
  catHolder.appendChild(e4)

  let e5 = document.createElement("div")
  e5.classList.add("insider", "e5")
  e5.innerHTML = "Thing"
  catHolder.appendChild(e5)

  let e6 = document.createElement("div")
  e6.classList.add("insider", "e6")
  e6.innerHTML = "Thing"
  catHolder.appendChild(e6)

  e1.onclick = function () {
    catHolder.remove();
  };
  e2.onclick = function () {
    catHolder.remove();
  };
  e3.onclick = function () {
    catHolder.remove();
  };
  e4.onclick = function () {
    catHolder.remove();
  };
  e5.onclick = function () {
    catHolder.remove();
  };
  e6.onclick = function () {
    catHolder.remove();
  };

  categories.onclick = function () {
    catHolder.remove();
    categories.onclick = function () {
      thing();
    };
  };

}

let shop = document.querySelector(".header .header-tab .shop")

shop.onclick = function thing2() {

  let shopHolder = document.createElement("div")
  shopHolder.classList.add("shop-holder")
  document.body.appendChild(shopHolder)

  let e1 = document.createElement("div")
  e1.classList.add("insider", "a1")
  e1.innerHTML = "Thing"
  shopHolder.appendChild(e1)

  let e2 = document.createElement("div")
  e2.classList.add("insider", "e2")
  e2.innerHTML = "Thing"
  shopHolder.appendChild(e2)

  let e3 = document.createElement("div")
  e3.classList.add("insider", "e3")
  e3.innerHTML = "Thing"
  shopHolder.appendChild(e3)

  let e4 = document.createElement("div")
  e4.classList.add("insider", "e4")
  e4.innerHTML = "Thing"
  shopHolder.appendChild(e4)

  let e5 = document.createElement("div")
  e5.classList.add("insider", "e5")
  e5.innerHTML = "Thing"
  shopHolder.appendChild(e5)

  let e6 = document.createElement("div")
  e6.classList.add("insider", "e6")
  e6.innerHTML = "Thing"
  shopHolder.appendChild(e6)

  e1.onclick = function () {
    shopHolder.remove();
  };
  e2.onclick = function () {
    shopHolder.remove();
  };
  e3.onclick = function () {
    shopHolder.remove();
  };
  e4.onclick = function () {
    shopHolder.remove();
  };
  e5.onclick = function () {
    shopHolder.remove();
  };
  e6.onclick = function () {
    shopHolder.remove();
  };

  shop.onclick = function () {
    shopHolder.remove();
    shop.onclick = function () {
      thing2();
    };
  };

}






















let req = new XMLHttpRequest();
req.open("GET", "Application_info.json")
req.send()
console.log(req)
req.onreadystatechange = function () {

  if (this.readyState === 4 && this.status === 200) {

    data = JSON.parse(this.responseText)
    console.log(data)

    let mainDiv = document.createElement("div")
    mainDiv.classList.add("boxes")

    let tall = data.length

    for (let i = 0; i < tall; i++) {

      document.body.appendChild(mainDiv)

      let box = document.createElement("div")
      box.classList.add("box")
      mainDiv.appendChild(box)

      let img = document.createElement("img")
      img.src = ""
      box.appendChild(img)

      let text = document.createElement("div")
      text.classList.add("text")
      box.appendChild(text)

      let h2 = document.createElement("h2")
      h2.innerHTML = data[i].word_part1 + " " + data[i].word_part2
      text.appendChild(h2)

      let disc = document.createElement("p")
      disc.innerHTML = data[i].discerption
      disc.classList.add("disc")
      text.appendChild(disc)

      let save = document.createElement("p")
      save.innerHTML = "Save: " + data[i].save + "%"
      save.classList.add("save")
      box.appendChild(save)

      let rate = document.createElement("p")
      rate.innerHTML = "<i class='fa-solid fa-comment'></i>" + data[i].rate
      rate.classList.add("rate")
      text.appendChild(rate)

      let price = document.createElement("p")
      price.innerHTML = "Price: " + data[i].price
      price.classList.add("price")
      text.appendChild(price)
    }
  }
}




// let footer = document.createElement("div")
// footer.classList.add("footer")
// document.body.appendChild(footer)

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// show Testimonials <[-?>

// let myFirstBox = document.querySelector(".testimonials .first-box");
// let mySecondBox = document.querySelector(".testimonials .second-box");
// let myThirdBox = document.querySelector(".testimonials .third-box");
// let myAllBoxes = document.querySelectorAll(".testimonials .box");

// myArray = [myFirstBox, mySecondBox, myThirdBox];

// function test() {
//   myFirstBox.style.display = "none";
//   mySecondBox.style.display = "none";
//   myThirdBox.style.display = "none";
//   let our = Math.floor(Math.random() * myAllBoxes.length);
//   let value = (myArray[our].style.display = "grid");

//   let dot1 = document.querySelector(`.testimonials #one`);
//   let dot2 = document.querySelector(`.testimonials #second`);
//   let dot3 = document.querySelector(`.testimonials #third`);

//   if (our === 0) {
//     dot1.style.cssText = "opacity:1";
//     dot2.style.cssText = "opacity:0.3";
//     dot3.style.cssText = "opacity:0.3";
//   } else if (our === 1) {
//     dot1.style.cssText = "opacity:0.3";
//     dot2.style.cssText = "opacity:1";
//     dot3.style.cssText = "opacity:0.3";
//   } else if (our === 2) {
//     dot1.style.cssText = "opacity:0.3";
//     dot2.style.cssText = "opacity:0.3";
//     dot3.style.cssText = "opacity:1";
//   }
// }
// setTimeout(test, 0);
