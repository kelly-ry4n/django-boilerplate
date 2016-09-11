
exports = module.exports = {};

exports.BEGIN_LOAD = 'BEGIN_LOAD'
exports.LOAD_SUCCESS = 'LOAD_SUCCESS'


exports.loadSuccess = (ipsums) => {
    return {
        type: exports.LOAD_SUCCESS,
        ipsums: ipsums,
    }
}

exports.beginLoad = (page=1) => {

    const success = (data) => {
        console.log('success', data)
        store.dispatch(exports.loadSuccess(data.results))
    }


    $.ajax('/api/v1/ipsums/', {
        success: success,
    })


    return {
        type: exports.BEGIN_LOAD,
    }
}
