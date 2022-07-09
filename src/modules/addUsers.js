import {
    render
} from "./render"

export const addUsers = () => {
    const form = document.querySelector('form')
    const nameInput = form.querySelector('#form-name')
    const emailInput = form.querySelector('#form-email')
    const childCheck = form.querySelector('#form-children')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const user = {
            "name": nameInput.value,
            "email": emailInput.value,
            "children": childCheck.checked,
            "permissions": false
        }

        userService.addUser(user).then(() => {
            userService.getUsers().then(users => {
                render(users)
            })
        })
    })
}