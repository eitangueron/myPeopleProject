const source = $('#user-template').html()
const template = Handlebars.compile(source)


$.ajax({
    method: "GET",
    url: "https://randomuser.me/api/?inc=name,email&nat=gb&results=10",
    success: (users) => {
        for (user of users.results) {
            let userName = `${user.name.title} ${user.name.first} ${user.name.last}`
            $('#users-conatiner').append(template({ name: userName, email: user.email }))
        }
    }
})

