const user_1 =  {
    firtsName:"abdul",
    lastName:"rub",
    age:21,
    email:"abdurrub2006@gmail",
    hadDinner:true,
    address:{
        city:"trichy",
        state:"tamil nadu",
        pincode:620001
    },
    greet: function () {
        return "hello world"
        // console.log("lorem")
    },
    getFullName: function () {
        console.log(this)
        // return `${this.firtsName} ${this.lastName}`
    }
}

let result;
result = user_1

result = user_1.firtsName
result = user_1.lastName
result = user_1.age
result = user_1.email
result = user_1.hadDinner
result = user_1.address
result = user_1.address.pincode
result = user_1.address.state
result = user_1.greet()
result = user_1.getFullName()

console.log(result)