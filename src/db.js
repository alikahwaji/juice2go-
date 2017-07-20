module.exports = {
    getUser: getUser,
    getUsers: getUsers,
    getOrder: getOrder
}

function getUsers(connection) {
    return connection('users').select()
}

function getUser(id, connection) {
    return connection('users').where('id', id)
}

function getOrder(id, connection) {
    return connection('orders').where('id', id)
}
