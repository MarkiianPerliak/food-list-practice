import { error } from "console";

export const updateAPI = async (object, id) => {
const options = {
method: "PUT",
body: JSON.stringify(object),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};

try {
    return await fetch(`https://68a190506f8c17b8f5da289c.mockapi.io/foods/foods/${id}`, options)
} catch(error) {
    return error
}

}