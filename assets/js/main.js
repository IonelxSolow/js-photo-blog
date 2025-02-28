


fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        console.log(response)

        return response.json()
    })
    .then(data => {
        console.log(data)
        if(data.success) {
            document.writeln(data.response)
        }
    })

     .catch(error => console.error('Error', error))
