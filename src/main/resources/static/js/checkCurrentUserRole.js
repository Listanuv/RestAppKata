async function checkCurrentUserRole() {
    const navbar = document.querySelector("#navBarUA");
    const mainPage = document.querySelector('#admindiv');
    const userPage=document.querySelector('#userdiv');
    let userHtml;
    let currentUser;
    await userFetch.checkCurrentUserRole()
        .then(res => res.json())
        .then(user => {
            if (user.role.includes("ROLE_USER")) {
                //document.getElementById('admindiv').style.display='none';
                userHtml = `<div class="tabbable" id="tabs-397422">
                <h2 th:style="'background: whitesmoke'">User</h2>
                <ul class="nav nav-tabs">
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="list">
                        <table class="table">
                            <h4 th:style="'background:whitesmoke'">About user</h4>
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Username</th>
                                <th scope="col">Role</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.lastName}</td>
                                <td>${user.age}</td>
                                <td>${user.username}</td>
                                <td>${user.role}</td>

                            </tr>
                            </tbody>
                        </table >
                    </div>
                    </form>
                </div>
            </div>`

                mainPage.innerHTML = userHtml;

                navbar.innerHTML = '<ul class="nav flex-column nav-pills">\n' +
                    '                <li class="nav-item">\n' +
                    '                    <a class="nav-link active" id="userPage">User</a>\n' +
                    '                </li>\n' +
                    '            </ul>\n'
            } else {
                navbar.innerHTML = '<ul class="nav flex-column nav-pills">\n' +
                    '                <li class="nav-item">\n' +
                    '                    <a class="nav-link active" data-toggle="tab" href="#tab3" onclick="adminClick()">Admin</a>\n' +
                    '                </li>\n' +
                    '                <li class="nav-item">\n' +
                    '                    <a class="nav-link" id="userPage" href="#" data-toggle="tab" onclick="userClick()" >User</a>\n' +
                    '                </li>\n' +
                    '            </ul>\n'

                userPage.innerHTML=`<div class="tabbable" id="tabs-397422">
                <h2 th:style="'background: whitesmoke'">User</h2>
                <ul class="nav nav-tabs">
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="list">
                        <table class="table">
                            <h4 th:style="'background:whitesmoke'">About user</h4>
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Username</th>
                                <th scope="col">Role</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.lastName}</td>
                                <td>${user.age}</td>
                                <td>${user.username}</td>
                                <td>${user.role}</td>

                            </tr>
                            </tbody>
                        </table >
                    </div>
                    </form>
                </div>
            </div>
`
            }

        })
}