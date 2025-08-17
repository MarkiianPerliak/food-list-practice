export const startInterval = () => {
const showdiv1 = document.querySelector(".dv1");
const showdiv2 = document.querySelector(".dv2");
const showdiv3 = document.querySelector(".dv3");
const showdiv4 = document.querySelector(".dv4");
const closeModal = document.querySelector(".close-modal")
const dataSendButton = document.querySelector('.datasend')
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