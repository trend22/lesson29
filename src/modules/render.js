export const render = (users) => {
    const tableBody = document.querySelector('#table-body')
    //очищение таблицы пользователей после добавления нового
    tableBody.innerHTML = ''

    users.forEach(user => {
        tableBody.insertAdjacentHTML('beforeend', `
            <tr>
                <th scope="row">${user.id +1}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.children ? 'есть' : 'нет'}</td>
                <td>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"
                            id="form-children" ${user.permissions ? 'checked' : ''}>
                    </div>
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-warning">
                            <i class="bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn btn-danger">
                            <i class="bi-person-x"></i>
                        </button>
                     </div>
                </td>
             </tr>
        `)
    });
}