import { addProduct } from "./api/addfoodapi"
import { getAPIAdress } from "./api/getfoodapi"
import { deleteProduct } from "./api/deletefoodapi"
import { startInterval } from "./js/startinterval"
import { updateAPI } from "./api/updatefoodapi"

const list = document.querySelector(".list")
const foodAddButton = document.querySelector(".foodadd")
const backdrop = document.querySelector(".backdrop")
const closeModal = document.querySelector(".close-modal")
const dataSendButton = document.querySelector('.datasend')
const modalForm = document.querySelector(".modal-form");

const backdrop2 = document.querySelector(".backdrop2")
const closeModal2 = document.querySelector(".close-modal2")
const dataSendButton2 = document.querySelector('.datasend2')
const modalForm2 = document.querySelector(".modal-form2");

function createHtml(data) {
    const final = data.map(food => {
        const html = `
      <li class="item">
        <button type="button" class="delete">Delete</button>
        <button type="button" class="update">Update</button>
        <h2 class="title">${food.title}</h2>
        <p class="price">Price: ${food.price}</p>
        <img class="img" src="${food.photo}" alt="${food.title}">
        <p class="rating">Rating: ${food.rating}/10</p>
        <p class="price id">${food.id}</p>
      </li>
    `;
    return html
    });
    const string = final.join(``)
    list.innerHTML = string;
}

getAPIAdress().then((result) => result.json()).then((resultdata) => {
    createHtml(resultdata)
    const deletebtns = document.querySelectorAll(".delete")
    const updatebtns = document.querySelectorAll(".update")
    console.log(deletebtns)
    deletebtns.forEach(button => {
        button.addEventListener("click", (event) => {
            const theid = button.parentElement.querySelector(".id").textContent;
            deleteProduct(theid)
        })
    })
    updatebtns.forEach(button => {
        button.addEventListener("click", (event) => {
            backdrop2.classList.remove("hidden")
            modalForm2.addEventListener("submit", (event) => {
            event.preventDefault()
            const theid = button.parentElement.querySelector(".id").textContent;
            const title = event.target.elements.title2;
            const price = event.target.elements.price2;
            const photo = event.target.elements.imglink2;
            const number = event.target.elements.rating2;
            const object = {
                "title": `${title.value}`,
                "price": `${price.value}$`,
                "photo": `${photo.value}`,
                "rating": `${Number(number.value)}`
            }
            updateAPI(object, theid)
            getAPIAdress().then((result) => result.json()).then((resultdata) => createHtml(resultdata))
            })
        })
    })
    
})



modalForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const foodTitleInput = event.target.elements.title;
    const foodPriceInput = event.target.elements.price;
    const foodImageInput = event.target.elements.imglink;
    const foodRatingInput = event.target.elements.rating;
    const newProduct = {
        "title": `${foodTitleInput.value}`,
        "price": `${foodPriceInput.value}`,
        "photo": `${foodImageInput.value}`,
        "rating": Number(foodRatingInput.value),
    }
    addProduct(newProduct)
})

foodAddButton.addEventListener("click", (event) => {
    backdrop.classList.remove("hidden")
    startInterval()
})

closeModal.addEventListener("click", (event) => {
    backdrop.classList.add("hidden")
})


closeModal2.addEventListener("click", (event) => {
    backdrop2.classList.add("hidden")
})

dataSendButton.addEventListener("click", (event) => {
    backdrop.classList.add("hidden")
})

dataSendButton2.addEventListener("click", (event) => {
    backdrop2.classList.add("hidden")
})

// cmnts modalform:

// if (foodTitleInput.value, foodPriceInput.value, foodImageInput.value, foodRatingInput.value === "✓") {
//   console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/10`)
// } else {
//   console.log("nuh uh")
// }
// if (foodTitleInput || foodPriceInput || foodImageInput || foodRatingInput  === "") {
//   console.log("nuh uh")
// } else {
//   console.log(`${foodTitleInput.value}, ${foodPriceInput.value}, ${foodImageInput.value}, ${foodRatingInput.value}/10`)
// }

