const list = document.querySelector(".list")
const foodAddButton = document.querySelector(".foodadd")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")
const closeModal = document.querySelector(".close-modal")
const dataSendButton = document.querySelector('.datasend')

function createHtml(data) {
  console.log(data);
  data.forEach(food => {
    const html = `
      <li class="item">
        <h2 class="title">${food.title}</h2>
        <p class="price">Price: ${food.price}</p>
        <img class="img" src="${food.photo}" alt="${food.title}">
        <p class="rating">Rating: ${food.rating}/10</p>
      </li>
    `;
    list.insertAdjacentHTML("beforeend", html);
  });
}

function getAPIAdress() {
    return fetch("http://localhost:3000/food")
}

getAPIAdress().then((result) => result.json()).then((resultdata) => createHtml(resultdata))

foodAddButton.addEventListener("click", (event) => {
    backdrop.classList.remove("hidden")
})

closeModal.addEventListener("click", (event) => {
    backdrop.classList.add("hidden")
})


const modalForm = document.querySelector(".modal-form");

modalForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const foodTitleInput = event.target.elements.title;
    const foodPriceInput = event.target.elements.price;
    const foodImageInput = event.target.elements.imglink;
    const foodRatingInput = event.target.elements.rating;
    // if (foodTitleInput.value, foodPriceInput.value, foodImageInput.value, foodRatingInput.value === "✓") {
    //   console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/10`)
    // } else {
    //   console.log("nuh uh")
    // }
    if (foodTitleInput || foodPriceInput || foodImageInput || foodRatingInput  === "") {
      console.log("nuh uh")
    } else {
      console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/10`)
    }
})

// dataSendButton.addEventListener("click", (event) => {
//     const foodTitleInput = document.querySelector(".title");
//     const foodPriceInput = document.querySelector(".price");
//     const foodImageInput = document.querySelector(".imglink");
//     const foodRatingInput = document.querySelector(".rating");
//     const foodRating2Input = document.querySelector(".rating2");

//     console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/${foodRating2Input.value}`)
// })



function startInterval() {
const showdiv1 = document.querySelector(".dv1");
const showdiv2 = document.querySelector(".dv2");
const showdiv3 = document.querySelector(".dv3");
const showdiv4 = document.querySelector(".dv4");

const updateInterval = setInterval(() => {
const inputforshow1 = document.querySelector(".name").value;
const inputforshow2 = document.querySelector(".pric").value;
const inputforshow3 = document.querySelector(".imglink").value;
const inputforshow4 = document.querySelector(".rate").value;

if (inputforshow1 === "") {
    showdiv1.textContent = "X"
} else {
    showdiv1.textContent = "✓"
}
if (inputforshow2 === "") {
    showdiv2.textContent = "X"
} else {
    showdiv2.textContent = "✓"
}
if (inputforshow3 === "") {
    showdiv3.textContent = "X"
} else {
    showdiv3.textContent = "✓"
}
if (inputforshow4 === "") {
    showdiv4.textContent = "X"
} else {
    showdiv4.textContent = "✓"
}
}, 500)

closeModal.addEventListener("click", (event) => {
    clearInterval(updateInterval)
})

dataSendButton.addEventListener("click", (event) => {
    clearInterval(updateInterval)
})

}



foodAddButton.addEventListener("click", (event) => {
    startInterval()
})

