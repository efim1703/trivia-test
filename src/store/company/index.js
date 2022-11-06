import state from './common/state'
import actions from './common/actions'
import mutations from './common/mutations'

const companyModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default companyModule