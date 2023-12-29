const wrapper = document.querySelector(".sliderWrapper");

const menuButtons = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColor = document.querySelectorAll(".color")
const currentProductSize = document.querySelectorAll(".size")

menuButtons.forEach((opt, index) => {
  opt.addEventListener("click", () => {
    wrapper.style.transform = `translatex(${-100 * index}vw)`;

    //change the choosen product

    chosenProduct = products[index]

    //change the current product details

    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price
    currentProductImg.src = chosenProduct.colors[0].img;


    //assining color

    currentProductColor.forEach((color, index) => {
      color.style.bacgroundColor = chosenProduct.colors[index].code

    })
  });
});

currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img
  })
})

// Assuming currentProductSize is an array of elements
currentProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    // Reset styles for all sizes
    currentProductSize.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });

    // Apply styles for the clicked size
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const buy = document.querySelector(".buyButton")
const payment = document.querySelector(".payment")
const closes = document.querySelector(".close")


buy.addEventListener("click", () => {
  payment.style.display = "flex"
})
closes.addEventListener("click", () => {
  payment.style.display = "none"
})