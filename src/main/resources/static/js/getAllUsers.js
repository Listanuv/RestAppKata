async function getUsers() {
    let temp = '';
    const table = document.querySelector('#listUsers tbody');
    await userFetch.findAllUsers()
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                temp += `
                <tr id="column${user.id}">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.lastName}</td>
                    <td>${user.age}</td>
                    <td>${user.role}</td>
                    <td><a id="editButton" onclick="searchAndUpdate(${user.id})" href="${user.id}"  data-target="#userEdit1"  data-toggle="modal"  class="btn btn-primary">Edit</a></td>
                    <td><a id="deleteButton" href="${user.id}" data-id="${user.id}" onclick="searchUser(${user.id})" data-target="#deleteUser" data-toggle="modal" class="btn btn-danger">Delete</a></td>
                </tr>
               `;
            })
            table.innerHTML = temp;
        })
}

