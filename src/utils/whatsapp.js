export const navigateWhatsapp = (data) => {
    const { fields, from } = data;
    const space = "%20";
    const newLine = "%0a";
    let baseURL = "https://api.whatsapp.com/send/?phone=%2B919843052580&text=";
    baseURL = `${baseURL}*From${space}:${space}${from}*${newLine}${newLine}`;
    for (let [name, value] of Object.entries(fields)) {
        baseURL += `*${ name.charAt(0).toUpperCase() + name.slice(1)}*${space}:${space}${value}.${newLine}`
    }
    baseURL = `${baseURL}${newLine}`
    baseURL = `${baseURL}*Thankyou*${newLine}`;
    window.location = baseURL
}

export const navigateWhatsappBuy = (data) => {
    const { fields, from } = data;
    const space = "%20";
    const newLine = "%0a";
    let baseURL = "https://api.whatsapp.com/send/?phone=%2B919843052580&text=";
    baseURL = `${baseURL}*From${space}:${space}${from}*${newLine}${newLine}`;
    baseURL = `${baseURL}${newLine}`
    for (let [name, value] of Object.entries(fields)) {
        if(!(name==="image") && !(name==="null") && !(name==="amt")){
            baseURL += `*${value}*.${newLine}`
        }
    }
    baseURL = `${baseURL}${newLine}`
    baseURL = `${baseURL}*I Want to Buy This Product*${newLine}`;
    baseURL = `${baseURL}*Please Share Product Details*${newLine}`;
    baseURL = `${baseURL}*And I Also Want More Products From Your Kadai*${newLine}`;
    baseURL = `${baseURL}${newLine}`
    baseURL = `${baseURL}*Thankyou*${newLine}`;
    window.location = baseURL
}