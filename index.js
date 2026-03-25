
// // function scope 
// function user1(){
//     let user = "sunnat"
//     console.log(user)
// }

// user1()
// // globall


// let user2 = "sunnat"

// function user3(){
//     console.log(user2)
// }

// user3()


// console.log(user)




function salomlar(name){
    console.log("salom," + name + "")
}

function saloml(calbek){
    const name = "sunnat"
    calbek(name)
}
saloml(salomlar)