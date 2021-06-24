export default async function formSend(apiLink,...params) {

    let items = {...params};
    let result = fetch(`http://localhost:8080/api/${apiLink}`, {
        method: 'POST',

        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(items)
    });
    result = await (await result).json();

}