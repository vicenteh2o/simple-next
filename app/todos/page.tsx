async function fetchData() {
    const response = await fetch("http://localhost:3000/api/todoItem", {
        method: "GET"
    });
    return response.json();
}

interface NewTodo {
    id: string;
    title: string;
    completed: boolean;
}

async function postData(newTodo: NewTodo) {
    const response = await fetch("http://localhost:3000/api/todoItem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    return await response.json();
}

const Page = async () => {
    const newTodo = {
        id: "4",
        title: "New todo testing",
        completed: false
    }

    const createdTodo = await postData(newTodo);
    console.log("Created todo: ", createdTodo);

    const data = await fetchData();
    console.log(data)

    return <div>
        <h1>Todo Item</h1>
    </div>
}

export default Page