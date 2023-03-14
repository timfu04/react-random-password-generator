const Generate = (passwordType, isNumbers, isSymbols, length) => {

    const uppercase_alphabets = String.fromCharCode(...Array.from(new Array(26), (_, i) => 65 + i))
    const lowercase_alphabets = String.fromCharCode(...Array.from(new Array(26), (_, i) => 97 + i))
    const numbers = String.fromCharCode(...Array.from(new Array(10), (_, i) => 48 + i))
    const symbols = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/"

    let temp_password = "";
    let final_password = "";

    if (passwordType === "Password") {
        temp_password += uppercase_alphabets
        temp_password += lowercase_alphabets

        if (isNumbers) {
            temp_password += numbers
        }

        if (isSymbols) {
            temp_password += symbols
        }

    } else if (passwordType === "PIN") {
        temp_password += numbers
    }

    for (let i = 0; i < length; i++) {
        final_password += temp_password.charAt(Math.floor(Math.random() * temp_password.length));
    }

    return final_password
}
 
export default Generate;