export const updateAPI = (object, id) => {
const options = {
method: "PATCH",
body: JSON.stringify(object),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};
fetch(`http://localhost:3000/food/${id}`, options)
}