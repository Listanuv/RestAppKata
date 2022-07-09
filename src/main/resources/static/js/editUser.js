let currentUserId;
let currentUser;
let newRole;

async function searchAndUpdate(userId) {
    currentUserId = userId;
    await userFetch.findOneUser(currentUserId)
        .then(resp => resp.json())
        .then(user => currentUser = user)
    delete currentUser.authorities;
    document.getElementById('id').value = currentUser.id
    document.getElementById('firstName1').value = currentUser.name
    document.getElementById('lastName1').value = currentUser.lastName
    document.getElementById('age1').value = currentUser.age
    document.getElementById('username1').value = currentUser.username
    document.getElementById('password1').value = '*****'
    // document.getElementById('password1').value=currentUser.password
}


const editUser = document.querySelector('#userEdit1');
editUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    currentUser.name = document.getElementById('firstName1').value
    currentUser.lastName = document.getElementById('lastName1').value
    currentUser.age = document.getElementById('age1').value
    currentUser.username = document.getElementById('username1').value
    if (document.getElementById('password1').value !== '*****') {
        currentUser.password = document.getElementById('password1').value
    }

    // var options = document.getElementById('listRole1').selectedOptions;
    // var values = Array.from(options).map(({ value }) => value);
    // var mySet=new Set();
    // currentUser.roles.pop()
    // values.forEach(value=>{
    //     userFetch.findRoleById(value)
    //         .then(resp=>resp.json())
    //         .then(role=>mySet.add(role))
    //     })
    // currentUser.roles=mySet;
    // console.log(currentUser)
    // var options = document.getElementById('listRole1').selectedOptions;
    // Array.from(options).map(async ({value}) => await userFetch.findRoleById(value)
    //     .then(resp => resp.json())
    //     .then(role => currentUser.roles.push(role)))
    // currentUser.role="ROLE_ADMIN ";

    const saveFunc = async () => {
        currentUser.roles.pop();
        var values = $('#listRole1').val();
        for (var i = 0; i < values.length; i++) {
            await userFetch.findRoleById(values[i])
                .then(resp => resp.json())
                .then(role => currentUser.roles.push(role))
        }

        await userFetch.editUser(currentUserId, currentUser)
            .then(user => console.log(user))

        await getUsers();

        closeModal();

        console.log(currentUser)
    }

    await saveFunc();

})
