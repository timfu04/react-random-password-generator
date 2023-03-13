const useGenerate = () => {

    const uppercase_alphabets = String.fromCharCode(...Array.from(new Array(26), (_, i) => 65 + i))
    const lowercase_alphabets = String.fromCharCode(...Array.from(new Array(26), (_, i) => 97 + i))
    const numbers = String.fromCharCode(...Array.from(new Array(10), (_, i) => 48 + i))
    const symbols = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/"

    console.log(uppercase_alphabets)
    console.log(lowercase_alphabets)
    console.log(numbers)
    console.log(symbols)









    
}
 
export default useGenerate;