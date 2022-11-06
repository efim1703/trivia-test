import { types } from './types'

const actions = {
    updateUser({ commit, state }, item) {
        const users = [...state.users]
        users.forEach(user => {
            if (user.id === item.id) {
                user.name = item.name
                user.dateOfBirth = item.dateOfBirth
                user.company = item.company
            }
        })
        commit(types.SET_USERS, users)
    },
    deleteUser({ commit, state }, id) {
        let users = [...state.users]
        users = users.filter(user => user.id !== id)
        commit(types.SET_USERS, users)
    },
    addUser({ commit, state }, item) {
        const users = [...state.users]
        const user = {
            id: item.id,
            name: item.name,
            dateOfBirth: item.dateOfBirth,
            company: item.company
        }
        users.push(user)
        commit(types.SET_USERS, users)
    },
}

export default actions 