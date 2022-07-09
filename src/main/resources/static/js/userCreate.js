const addUser = document.querySelector('#newUser');
addUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameValue = document.getElementById('firstName')
    const lastname = document.getElementById('lastName')
    const age = document.getElementById('age')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    var values = $('#listRole').val();
    var roleArray=[];
    for (var i = 0; i < values.length; i++) {
        await userFetch.findRoleById(values[i])
            .then(resp => resp.json())
            .then(role => roleArray.push(role))
    }
    await userFetch.createUser(nameValue, lastname, age, username, password,roleArray)
        .then(res => res.json())
    await userFetch.findLastUser().then(res => res.json()).then(user => console.log(user))
})

async function listUsers() {
    $("[data-random=hz]").trigger({type: "click"});
    // const table = document.querySelector('#listUsers tbody');
    // let temp = ``;
    // table.innerHTML=temp;
1
    setTimeout(() => {  getUsers() }, 200);
}