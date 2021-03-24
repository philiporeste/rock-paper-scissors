// get the input

// get the value

// store the value in memory
var userName = document.getElementById("username")
console.dir(userName)
userName.addEventListener("input", function(event){
    var value = event.target.value;
    window.localStorage.setItem("name", value)
})
