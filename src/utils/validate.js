
export const checkValidData= (email, password, name) => {

    const isEmailValid = /^\S+@\S+\.\S+$/.test(email); // returns boolean
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); // returns boolean
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailValid){
        return "Email Id is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }
    // if(!isNameValid){
    //     return "Enter a valid name"
    // }
    return null;

}

