import state from './common/state'
import actions from './common/actions'
import mutations from './common/mutations'

const usersModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default usersModule