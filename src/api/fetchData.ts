export async function fetchData() {
    // await new Promise(r => setTimeout(r,6000))
    const dataJson = await fetch("https://jsonplaceholder.typicode.com/posts")
    return dataJson.json()
}