
$(async function () {
    await checkCurrentUserRole();
    await getUsers();
})

const userFetch = {
    head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': null
    },
    findAllUsers: async () => await fetch('api/users'),
    editUser: async (updateId,user)=>await fetch('api/users/'+updateId,{
        method:'PUT',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }),
    findLastUser: async () => await fetch('api/users/lastuser',{method:'GET'}),
    checkCurrentUserRole: async ()=> await fetch('api/users/actuser',{method:'GET'}),
    findRoleById: async (roleId)=>await fetch('api/roles/'+roleId,{method:'GET'}),
    findOneUser: async (oneUserId)=>await fetch('api/users/'+oneUserId,{method:'GET'}),
    deleteUser: async (deleteId)=>await fetch('api/users/'+deleteId,{method:'DELETE'}),
    createUser:async (nameValue,lastname,age,username,password,roleArray)=>await fetch("api/users/", {
        method: 'POST',
        body: JSON.stringify({
            name: nameValue.value,
            lastName: lastname.value,
            age: age.value,
            username: username.value,
            password: password.value,
            roles: roleArray
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })

}
function closeModal(){
    $("[data-dismiss=modal]").trigger({ type: "click" });}

function clearTable(){
    const table = document.querySelector('#listUsers tbody');
    table.innerHTML="";
}
