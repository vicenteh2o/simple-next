async function fetchData() {
    const response = await fetch("http://localhost:3000/api/todoItem", {
        method: "GET"
    });
    return response.json();
}

const Page = async () => {
    const data = await fetchData();

    console.log(data)

    return <div>
        <h1>Todo Item</h1>
    </div>
}

export default Page