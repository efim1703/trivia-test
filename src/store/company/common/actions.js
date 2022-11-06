import { types } from './types'

const actions = {
    updateCompany({ commit, state }, item) {
        const company = [...state.company]
        company.forEach(company => company.id === item.id ? company.name = item.name : false)
        commit(types.SET_COMPANY, company)
    },
    deleteCompany({ commit, state }, id) {
        let company = [...state.company]
        company = company.filter(company => company.id !== id)
        commit(types.SET_COMPANY, company)
    },
}

export default actions 