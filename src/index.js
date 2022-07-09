import {
    render
}
from "./modules/render";
import {
    UserService
} from './modules/userService'
import {
    addUsers
} from './modules/addUsers'

//для того, чтобы работать во всех модулях с userService
window.userService = new UserService

userService.getUsers().then(data => {
    render(data)
})

addUsers()