let users = [
    { id: 1, name: 'mabi', email: 'mabi@gmail.com' },
    { id: 2, name: 'palaka', email: 'palaka@gmail.com' }
]

module.exports = {
    index: function (request, response) {
        if (users.length > 0) {
            response.json({
                status: true,
                data: users,
                method: request.method,
                url: request.url
            })
        } else {
            response.json({
                status: false,
                message: 'Data users masih kosong'
            })
        }
    },

    store: function (request, response) {
        users.push(request.body)
        // console.log(request.body)
        response.json({
            status: true,
            data: users,
            message: 'Data user berhasil disimpan',
            method: request.method,
            url: request.url
        })
    },

    update: function (request, response) {
        const id = request.params.id
        users.filter(user => {
            if (user.id == id) {
                user.id = id,
                    user.name = request.body.name,
                    user.email = request.body.email

                return user
            }
            // else{
            //     response.json('Data tidak tersedia')
            // }
        })

        response.json({
            status: true,
            data: users,
            message: 'Data user berhasil diedit',
            method: request.method,
            url: request.url
        })
    },

    delete: function (request, response) {
        let id = request.params.id
        users = users.filter(user => user.id != id)
        response.json({
            status: true,
            data: users,
            message: 'Data user berhasil dihapus',
            method: request.method,
            url: request.url
        })
    }


}