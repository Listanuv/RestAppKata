const addUser = document.querySelector('#newUser');
addUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameValue = document.getElementById('firstName')
    const lastname = document.getElementById('lastName')
    const age = document.getElementById('age')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const role=document.getElementById('listRole');
    await userFetch.createUser(nameValue, lastname, age, username, password,role)
        .then(res => res.json())
    await userFetch.findLastUser().then(res => res.json()).then(user => console.log(user))
})

async function listUsers() {
    $("[data-random=hz]").trigger({type: "click"});
    // const table = document.querySelector('#listUsers tbody');
    // let temp = ``;
    // table.innerHTML=temp;
    console.log("Hello");
    setTimeout(() => {  getUsers() }, 100);
}