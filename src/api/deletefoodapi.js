export const deleteProduct = (posthid) => {
    fetch(`http://localhost:3000/food/${posthid}`, {method: "DELETE",})
}