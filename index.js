function validation() {
    var id = document.login.user.value;
    var ps = document.login.passw.value;
    
    if (id.length == "" && ps.length == "") {
        alert("Username and password fields are empty")
        return false;
    } 
    
    else {
        if (id.length == "") {
            alert("Username field is empty")
            return false;
        }
        if (ps.length == "") {
            alert("Password field is empty")
            return false;
        }
    }
}

function clicked() {
    var id = document.login.user.value;
    var ps = document.login.passw.value;

    txtSQL = "SELECT * FROM users, passwords WHERE "
}