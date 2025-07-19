const list = document.querySelector(".list")
const foodAddButton = document.querySelector(".foodadd")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")
const closeModal = document.querySelector(".close-modal")

function createHtml(data) {
  console.log(data);
  data.food.forEach(food => {
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
    return fetch("https://raw.githubusercontent.com/MarkiianPerliak/food-list-practice/main/db.json")
}

getAPIAdress().then((result) => result.json()).then((resultdata) => createHtml(resultdata))

foodAddButton.addEventListener("click", (event) => {
    backdrop.classList.remove("hidden")
})

closeModal.addEventListener("click", (event) => {
    backdrop.classList.add("hidden")
})

const showdiv1 = document.querySelector(".dv1");
const showdiv2 = document.querySelector(".dv2");
const showdiv3 = document.querySelector(".dv3");
const showdiv4 = document.querySelector(".dv4");



setInterval(() => {
const inputforshow1 = document.querySelector(".title").value;
const inputforshow2 = document.querySelector(".price").value;
const inputforshow3 = document.querySelector(".imglink").value;
const inputforshow4 = document.querySelector(".rating").value;
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
}, 1000)