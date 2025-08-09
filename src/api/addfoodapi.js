export const addProduct = (product) => {
const options = {
method: "POST",
body: JSON.stringify(product),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};
    fetch("http://localhost:3000/food", options)
}