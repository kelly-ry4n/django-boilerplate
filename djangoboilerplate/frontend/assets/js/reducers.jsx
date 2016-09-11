exports = module.exports = {};
const ipsumActions = require('./actions')

const initalState = {
    ipsumsLoaded: false,
    ipsums: [],
}


exports.Reducer = (state=initalState, action) => {

    console.log('action: ', action)
    switch (action.type) {

        case ipsumActions.BEGIN_LOAD:
            return state

        case ipsumActions.LOAD_SUCCESS:

            return Object.assign({},state, {
                ipsums: action.ipsums,
                ipsumsLoaded: true,
            })
        default:
            return state
    }
}
