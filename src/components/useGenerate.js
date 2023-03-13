const useGenerate = () => {

    const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
    console.log(alphabet);


}
 
export default useGenerate;