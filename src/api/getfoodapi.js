export const getAPIAdress = async () => {
    try{
        return await fetch("https://68a190506f8c17b8f5da289c.mockapi.io/foods/foods")
    } catch(error) {
        return error
    }
}