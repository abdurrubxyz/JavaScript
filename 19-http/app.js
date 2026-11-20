class Easyhttp {

    // get
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("SomeThing went wrong"))
        })
    }


    // post
    post(url,data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("SomeThing went wrong"))
        })
    }

    // put
    put(url,data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("SomeThing went wrong"))
        })
    }

    // delete
    delet(url,data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("SomeThing went wrong"))
        })
    }
}


let http = new Easyhttp()

http.get("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users")
.then(data => console.log(data))
.catch(err => console.log(err))

userData = {
    name:"abdur rub"
}

updateData = {
    name:"Jayaram M"
}

http.post("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users", userData)
.then(data => console.log(data))
.catch(err => console.log(err))

http.put("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users/2", updateData)
.then(data => console.log(data))
.catch(err => console.log(err))

http.delet("https://6af4643755a1de7dcf03f5d8.mockapi.io/app/v1/users/5")
.then(data => console.log(data))
.catch(err => console.log(err))

