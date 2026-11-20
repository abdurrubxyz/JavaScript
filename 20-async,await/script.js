

class Easyhtpp {
    // Get
    async get(url) {
        try {
            let api = await fetch(url)
            let res = await api.json()
            return res
        } catch (error) {
            throw "somthing went wrong"
        }
    }

    // Post
    async post(url,postdata) {
        try {
            let api = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(postdata)
            })
            let res = await api.json()
            return res
        } catch (error) {
            throw "somthing went wrong"
        }
    }

    // Put
    async put(url,putdata) {
        try {
            let api = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(postdata)
            })
            let res = await api.json()
            return res
        } catch (error) {
            throw "somthing went wrong"
        }
    }

    // Delete
    async delete(url,putdata) {
        try {
            let api = await fetch(url,{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(postdata)
            })
            let res = await api.json()
            return res
        } catch (error) {
            throw "somthing went wrong"
        }
    }
}

let http = new Easyhtpp()

http.get("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users")
.then(data => console.log(data))
.catch(err => console.log(err))

updatedPostData = {
    name:"abdulRahman"
}

updatePutData = {
    name:"lorem20"
}


http.post("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users",updatedPostData)
.then(data => console.log(data))
.catch(err => console.log(err))

http.put("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users/2", updatePutData)
.then(data => console.log(data))
.catch(err => console.log(err))

http.delete("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users/5")
.then(data => console.log(data))
.catch(err => console.log(err))

