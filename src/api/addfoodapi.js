export const addProduct = async (product) => {
const options = {
method: "POST",
body: JSON.stringify(product),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};
    return await fetch("https://68a190506f8c17b8f5da289c.mockapi.io/foods/foods", options)
}