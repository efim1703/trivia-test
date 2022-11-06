import { types } from './types'

const actions = {
    updateCompany({ commit, state }, item) {
        const company = [...state.company]
        company.forEach(companyItem =>  companyItem.id === item.id ? companyItem = item : false)
        commit(types.SET_COMPANY, company)
    },
    deleteCompany({ commit, state }, id) {
        let company = [...state.company]
        company = company.filter(company => company.id !== id)
        commit(types.SET_COMPANY, company)
    },
    addCompany({ commit, state }, item) {
        const company = [...state.company]
        const companyItem = {
            id: item.id,
            name: item.name,
        }
        company.push(companyItem)
        commit(types.SET_COMPANY, company)
    },
}

export default actions 