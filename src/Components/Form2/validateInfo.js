export default function validateInfo(values){
    let errors = {}

    if(!values.username){
        errors.username = "username required"
    }

    // Email
    if(!values.email){
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Emal address is invalid";
    }

    if(!values.password){
        errors.password = "Password required";
    } else if(values.password[0].length < 6){
        errors.password = "Password needs to be 6 characters or more";
    }

    if(!values.password2){
        errors.password2 = "Password is required";
    } else if (values.password2[0] !== values.password[0]){
        errors.password2 = "Password do not match";
    }

    return errors;
}