function getTasks() {
    const tasks = fetch('http://localhost:3000/todo').then(response => response.json());

    let li = document.createElement("li");
    document.getElementById('app').appendChild(li);
};