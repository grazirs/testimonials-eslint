const testimonials = [
  {
    id: 0,
    name: "Varsha Adhikari",
    img: "https://tudocommoda.com/wp-content/uploads/2022/01/pessoa-interessante.png",
    text:
      `I am satisfied with the training given by XYZ Pvt. Ltd on Web Designing. During training, the faculty was
able to clear my doubts regarding design process.`,
  },
  {
    id: 1,
    name: "susan smith",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled co.",
  },
  {
    id: 3,
    name: "peter jones",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  },
  {
    id: 4,
    name: "bob L.",
    img: "https://dergreif-online.de/www/wp-content/uploads/2016/07/Timothy_hoch.jpg",
    text:
      `I am satisfied with the training given by XYZ Pvt. Ltd on Web Designing. During training, the faculty was
able to clear my doubts regarding design process.`,
  },
  {
    id: 5,
    name: "anna johnson",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel.",
  },
  {
    id: 6,
    name: "Drika P.",
    img: "http://www.martacitterio.it/wp-content/uploads/2019/01/person2.jpg",
    text:
      `I am satisfied with the training given by XYZ Pvt. Ltd on Web Designing. During training, the faculty was
able to clear my doubts regarding design process.`,
  },
  {
    id: 7,
    name: "peter jones",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  },
  {
    id: 8,
    name: "bill anderson",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz.",
  },
  {
    id: 9,
    name: "Luana Silva",
    img:"http://www.martacitterio.it/wp-content/uploads/2019/01/person5.jpg",
    text:
      "fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz.",
  },
  {
    id: 10,
    name: "Anderson",
    img:
      "http://www.martacitterio.it/wp-content/uploads/2019/01/person6.jpg",
    text:
      "Edison casa paty dasijdasnp saodf blebrag, marfa pok pok heirlolly seitan. VHS farm-to-table schlitz.",
  },
  {
    id: 11,
    name: "Clara Fagundes",
    img:
      "https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg",
    text:
      "oòdk jnhsbau abhfralco òpvgdsnis ion axe cray stumptown venmo actually seitan-to-table schlitz.",
  },
  {
    id: 12,
    name: "Noah plokdaij",
    img: "https://cdn.vnda.com.br/cobogo/2021/10/29/19_10_3_309_site_autor_PatrickPessoa.jpg?v=1638557521",
    text:
      "farm-to-table schlit but ofd port.",
  },
  {
    id: 13,
    name: "victor jones",
    img:
      "https://m.media-amazon.com/images/I/61ghD4JuExL._SX450_.jpg",
    text:
      "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  }
];

const img = document.querySelector(".person-img");
const author = document.querySelector(".review__author");
const info = document.querySelector(".review__info");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const randomBtn = document.querySelector(".btn--random");
const moon = document.querySelector(".review__xs-circle");

let currentItem = 0;
let currentAngle = 3/4 * Math.PI;
let moonLeft = -60;
let moonTop = -60;
const moonSize = 120;
const PARENT_SIZE = 300;

function render() {
  const item = testimonials[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;

  const coordinate = radianToPosition(currentAngle);
  console.log(currentAngle,coordinate)
  moon.style.top = `${coordinate.y}px`;
  moon.style.left = `${coordinate.x}px`;

  if (currentItem == 0) {
    prevButton.disabled = true;
    prevButton.classList.add("btn--disabled");
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove("btn--disabled");
  }
  if (currentItem === testimonials.length - 1) {
    nextButton.disabled = true;
    nextButton.classList.add("btn--disabled");
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove("btn--disabled");
  }
}

prevButton.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--
    currentAngle += Math.PI / 4;
    render();
  }
});

nextButton.addEventListener("click", function () {
  if (currentItem < testimonials.length - 1) {
    currentItem++;
    currentAngle -= Math.PI / 4;
    render()
  }
});

randomBtn.addEventListener("click", function () {

infiniteRotation();
});

function infiniteRotation(){
  const randomInt = getRandomInteger(0, 100);
  if(currentItem == testimonials.length -1) currentItem = 0;
  else currentItem++;
  currentAngle -= Math.PI / 80
  render();
  if(randomInt !== 9) setTimeout(infiniteRotation, 10);
}

function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function radianToPosition (radiants) {
  const cos = Math.cos(radiants);
  const sin = Math.sin(radiants)
    console.log(radiants, sin, cos);
  console.log(radiants, sin, cos);



  let y;

  if(sin >=0) y = (PARENT_SIZE/2 * (1 - sin))  - moonSize / 2;
  else y = (PARENT_SIZE/2 + (PARENT_SIZE/2) * (sin*-1) ) - moonSize / 2;

  return {
    x: (1 + Math.cos(radiants)) * PARENT_SIZE/2 - moonSize / 2,
    y
  }
}
render()
