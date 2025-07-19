const list = document.querySelector(".list")

function createHtml(data) {
    console.log(data)
    const elements = data.map(food => {
    const html = `
    <li class="item">
        <h2 class="title">${food.title}</h2>
        <p class="price">Price: ${food.price}</p>
        <img class="img" src="${food.photo}" alt="${food.title}">
        <p class="rating">Rating: ${food.rating}/10</p>
    </li>
    `
    list.insertAdjacentHTML("beforeend", html)
    })
}

function getAPIAdress() {
    return fetch("http://localhost:3000/food")
}

getAPIAdress().then((result) => result.json()).then((resultdata) => createHtml(resultdata))