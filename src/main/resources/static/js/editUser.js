let currentUserId;
let currentUser;
let newRole;

async function searchAndUpdate(userId) {
    currentUserId = userId;
    await userFetch.findOneUser(currentUserId)
        .then(resp=>resp.json())
        .then(user=>currentUser=user)
    delete currentUser.authorities;
    document.getElementById('id').value=currentUser.id
    document.getElementById('firstName1').value=currentUser.name
    document.getElementById('lastName1').value=currentUser.lastName
    document.getElementById('age1').value=currentUser.age
    document.getElementById('username1').value=currentUser.username
    document.getElementById('password1').value='*****'
   // document.getElementById('password1').value=currentUser.password
}

const editUser = document.querySelector('#userEdit1');
editUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    currentUser.name=document.getElementById('firstName1').value
    currentUser.lastName=document.getElementById('lastName1').value
    currentUser.age=document.getElementById('age1').value
    currentUser.username=document.getElementById('username1').value
    if(document.getElementById('password1').value!=='*****') {
        currentUser.password = document.getElementById('password1').value
    }
    await userFetch.findRoleById(document.getElementById('listRole1').value)
        .then(resp=>resp.json())
        .then(role=>newRole=role)
    currentUser.roles.pop()
    currentUser.roles.push(newRole)
    await userFetch.editUser(currentUserId,currentUser)
        .then(user=>console.log(user))
    await getUsers();
    closeModal();
})




