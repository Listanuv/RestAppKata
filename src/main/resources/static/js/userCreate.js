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
        .then(user => console.log(user))
})