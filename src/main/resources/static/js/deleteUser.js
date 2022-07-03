let boy='';
let user='';
let temp = '';
    const table = document.querySelector('#deleteUser form');


const deleteUser = document.querySelector('#deleteUser');
deleteUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    await userFetch.deleteUser(boy)
        .then(res => res.json())
        .then(user => console.log(user))
})

async function searchUser(userId) {
    boy = userId;
    await userFetch.findOneUser(userId)
        .then(res => res.json())
        .then(user => {
            temp = `
               <label class="col-form-label" for="id" >ID</label>
                                                    <input class="form-control" readonly type="number" value="${user.id}" id="id" placeholder="ID">
                                                    <br/>
                                                    <label class="col-form-label" for="firstName1">First name</label>
                                                    <input class="form-control" readonly type="text" value="${user.name}" id="firstName1" placeholder="First Name">
                                                    <br/>
                                                    <label class="col-form-label" for="lastName1">Last name</label>
                                                    <input class="form-control" readonly type="text" value="${user.lastName}"  id="lastName1" placeholder="Last Name">
                                                    <br/>
                                                    <label class="col-form-label" for="age1">Age</label>
                                                    <input class="form-control" readonly type="text" value="${user.age}"  id="age1"  placeholder="Age">
                                                    <br/>
                                                    <label class="col-form-label" for="age1">Username</label>
                                                    <input class="form-control" readonly type="text" value="${user.username}" id="username1"  placeholder="Age">
                                                    <br/>
                                                    <label class="col-form-label" for="age1">Password</label>
                                                    <input class="form-control" readonly type="text" value="${user.password}"  id="password1"  placeholder="Password">
                                                    <br/>
                                                    <div class="modal-footer">
                                                        <button type="button" id="closeBtn" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="submit"  onclick="document.location.reload()"  class="btn btn-danger" >Delete</button>
                                                    </div>
               `;
            table.innerHTML = temp;

        })
}
