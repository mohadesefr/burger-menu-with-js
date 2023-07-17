const menu = [
  {
    id: 1,
    img: "assets/burger1.JPG",
    name: "burger 1",
    price: "23 dollar",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, qui et? Sequi cum sed natus minima voluptatem optio aspernatur, ducimus cumque. Delectus est beatae soluta dolorum quasi obcaecati, doloribus totam?",
  },

  {
    id: 2,
    img: "assets/burger2.jpg",
    name: "burger 2",
    price: "25 dollar",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, qui et? Sequi cum sed natus minima voluptatem optio aspernatur, ducimus cumque. Delectus est beatae soluta dolorum quasi obcaecati, doloribus totam?",
  },

  {
    id: 3,
    img: "assets/burger3.jpg",
    name: "burger 3",
    price: "21 dollar",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, qui et? Sequi cum sed natus minima voluptatem optio aspernatur, ducimus cumque. Delectus est beatae soluta dolorum quasi obcaecati, doloribus totam?",
  },

  {
    id: 4,
    img: "assets/burger4.jpg",
    name: "burger 4",
    price: "28 dollar",
    explanation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, qui et? Sequi cum sed natus minima voluptatem optio aspernatur, ducimus cumque. Delectus est beatae soluta dolorum quasi obcaecati, doloribus totam?",
  },
];

let burgerImg = document.getElementById("img-container");
const burgerName = document.getElementById("name-burger");
const burgerPrice = document.getElementById("price-burger");
const burgerExplanation = document.getElementById("explanation-burger");

let currentUser = 0;
const setSlideData = (burgerUse) => {
  const burger = menu[burgerUse];
  burgerImg.src = burger.img;
  burgerName.textContent = burger.name;
  burgerPrice.textContent = burger.price;
  burgerExplanation.textContent = burger.explanation;
};
document.addEventListener("DOMContentLoaded", function () {
  setSlideData(0);
});

//button click actions
document.getElementById("next-btn").addEventListener("click", function () {
  if (currentUser >= 0 && currentUser < menu.length - 1) {
    currentUser++;
    setSlideData(currentUser);
  } else if (currentUser >= menu.length - 1) {
    currentUser = 0;
    setSlideData(currentUser);
  }
});

document.getElementById("back-btn").addEventListener("click", function () {
  if (currentUser >= 1) {
    currentUser--;
    setSlideData(currentUser);
  } else {
    currentUser = menu.length - 1;
    setSlideData(currentUser);
  }
});

const randomSelect = () => {
  const randomUser = Math.floor(Math.random() * (menu.length - 1));
  currentUser = randomUser;
  setSlideData(currentUser);
  console.log(randomUser);
};
