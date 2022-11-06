import { types } from './types'

const actions = {
    updateUser({ commit, state }, item) {
        const users = [...state.users]
        users.forEach(user => user.id === item.id ? user.name = item.name : false)
        commit(types.SET_USERS, users)
    },
    deleteUser({ commit, state }, id) {
        let users = [...state.users]
        users = users.filter(user => user.id !== id)
        commit(types.SET_USERS, users)
    },
}

export default actions 