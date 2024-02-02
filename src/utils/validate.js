export const validateFields = (data) => {
    let error = false;
    data.forEach(element => {
        if(!element.trim() || element.trim()==="null" ){
            error= true;
        }
    });
    return error;
}

export const validateUsername = (inputUsername) => {
    const re = /\S+@\wibetec\.com/;
    return re.test(inputUsername);
  };
  
  export const validatePassword = (inputPassword) => {
    return inputPassword.length >= 6;
  };
  
  export const validateAccesskey = (inputAccesskey) => {
    return inputAccesskey === 'PK3275KALAM' && inputAccesskey.length >= 6;
  };
  