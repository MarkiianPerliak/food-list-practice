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
    const foodRating2Input = event.target.elements.rating2;
    
    console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/${foodRating2Input.value}`)
})

// dataSendButton.addEventListener("click", (event) => {
//     const foodTitleInput = document.querySelector(".title");
//     const foodPriceInput = document.querySelector(".price");
//     const foodImageInput = document.querySelector(".imglink");
//     const foodRatingInput = document.querySelector(".rating");
//     const foodRating2Input = document.querySelector(".rating2");

//     console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/${foodRating2Input.value}`)
// })