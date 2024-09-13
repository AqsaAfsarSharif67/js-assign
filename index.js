

function registrationForm(){
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const password = document.formfill.password.value;
    const cPassword = document.formfill.CPassword.value; 
   
    const result = document.getElementById("result");
        result.innerHTML = "";
        if (username === "") {
            result.innerHTML = "Enter Username*";
            return false;
        } else if (username.length < 6) {
            result.innerHTML = "At least six letters*";
            return false;
        }
        if (email === "") {
            result.innerHTML = "Enter your Email*";
            return false;
        }

    result.innerHTML = "";
    if (password === "") {
        result.innerHTML = "Enter your password*";
        return false;
    } else if (password.length < 6) {
        result.innerHTML = "Password must be at least 6 characters long*";
        return false;
    }
    if (cPassword === "") {
        result.innerHTML = "Enter confirm password*";
        return false;
    } else if (cPassword !== password) {
        result.innerHTML = "Passwords do not match*";
        return false;
    }
    return true; 
}
