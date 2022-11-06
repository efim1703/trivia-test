import { types } from './types'

const mutations = {
    [types.SET_USERS]: (state, users) => state.users = users,
}

export default mutations 