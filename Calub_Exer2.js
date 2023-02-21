//function for checking if there is an upper case character 
function isUpper(password){
    var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hasUpper = 0;

    for(var i = 0; i<upCharacters.length; i++){
        for(var j = 0; j<password.length; j++){
            if(password[j] === upCharacters[i]){
                hasUpper = 0;
                return true;
            
            }
            else{
                hasUpper = 1;
            }
        }
    }

    if(hasUpper === 1){
        return false;
    }
     
}

//function for checking if there is a lower case character 
function isLower(password){
    var lowCharacters = "abcdefghijklmnopqrstuvwxyz";
    var hasLower = 0;
    for(var i = 0; i<lowCharacters.length; i++){
        for(var j = 0; j<password.length; j++){
            if(password[j] === lowCharacters[i]){
                hasLower = 0;
                return true;
            
            }
            else{
                hasLower = 1;
            }
        }
    }

    if(hasLower === 1){
        return false;
    }
  

}

//function for checking if there is a number
function isNumber(password){
    var numbers = "012345689";
    var hasNumber = 0;

    for(var i = 0; i<numbers.length; i++){
        for(var j = 0; j<password.length; j++){
            if(password[j] === numbers[i]){
                numbers = 0;
                return true;
            
            }
            else{
                hasNumber = 1;
            }
        }
    }

    if (hasNumber === 1){
        return false;
    }
    
}

//function for validating if 2 passwords match
function validatePassword(pass1, pass2){
    if((pass1 === pass2) && (pass1.length >= 8 && pass2.length >= 8) && (isUpper(pass1) === true && isLower(pass1) === true) && (isUpper(pass2) === true && isLower(pass2) === true) && (isNumber(pass1) === true && isNumber(pass2)===true)){
        return true;
    }
    else{
        return false;
    }
}

//function for reversing the password
function reversing(password){
    var newPassword = "";

    for(var i=password.length-1; i>=0; i--){
        newPassword += password[i];
    }

    return newPassword;
}


//function for storing the password to the object
function storing(name,pass1,pass2){
    if(pass1 === pass2){
        const user = {
            name: name,
            newpassword: reversing(pass1),
        }
        return user;
    }

    else{
        const user = {
            name: name,
            newpassword: pass1,
        }

        return user
    }

};

console.log(validatePassword("Hello1234","Hello1234"));
