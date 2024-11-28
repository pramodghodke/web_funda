
document.getElementById('loginForm').addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("name", name);
    console.log("email", email);
    console.log("password", password);

    if(password.length > 5 ){
        if(name === "Pratiksha" && password === "123456"){
            alert('Login Successful')
        }
        else{
            alert('Invalid Credentials')
        }
    }
    else{
        alert("Please enter password greater than 5 digit");
    }
})