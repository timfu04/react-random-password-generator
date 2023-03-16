
import video from '../assets/blue_matrix_4K.mp4';
import refresh_icon from '../assets/refresh_icon.svg';
import copy_icon from '../assets/copy_icon.svg';
import { useState } from 'react';
import Generate from './Generate';
// React copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [passwordType, setPasswordType] = useState("Password");
    const [sliderValue, setSliderValue] = useState(8);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);
    const [_, setRefresh] = useState(""); // Interact with refresh icon (update state and trigger re-render for each on click)
    const customId = 201311483163; // randomly generated custom id to prevent duplicate toast

    // State changes will re-render Home component and rerun this code
    const generatedPassword = Generate(passwordType, isNumbers, isSymbols, sliderValue);

    const notify = () => {
        toast.success('Password copied!', {
            toastId: customId, // provide toast id to prevent duplicate toast
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });  
    }

    return (
        <div className="home">

            {/* Video background */}
            <div className="video_bg">
                <video src={video} autoPlay loop muted></video>
            </div>

            {/* Password generator area */}
            <div className="password_generator">
                <label className="generated_label">Generated password:</label>

                <div className="content_group_1">
                    <div className="display_box">{generatedPassword}</div>
                    <button className="refresh_button">
                        {/* Password generated here does not matter, just to update state and trigger re-render */}
                        <img src={refresh_icon} alt="refresh_icon" className="refresh_icon" onClick={() => {setRefresh(Generate(passwordType, isNumbers, isSymbols, sliderValue))}}/>
                    </button>

                    {/* Wrap button inside "CopyToClipboard" to enable copy to clipboard function */}
                    <CopyToClipboard text={generatedPassword}>
                        <button className="copy_button">
                            <img src={copy_icon} alt="copy_icon" className="copy_icon" onClick={notify}/>
                        </button>
                    </CopyToClipboard>
                </div>

                <label className="type_label">Password type:</label>

                <div className="content_group_2">
                    <select className="password_type" value={passwordType} 
                    onChange={(e) => 
                        {
                            setPasswordType(e.target.value);
                            {passwordType === "Password" ? ( // "Password" and "PIN" is reversed in this case, because latest value still not updated (still using previous value)
                                setSliderValue(3) // "PIN" initial length
                            ) : (
                                setSliderValue(8) // "Password" initial length
                            )}
                        }
                    }>
                        <option value="Password">Password</option>
                        <option value="PIN">PIN</option>
                    </select>

                    <div className="slider_container">
                        <div className="slider_content">
                            <label className="length">Length</label>
                            {passwordType === "Password" ? (
                                <input type="range" min="8" max="50" className='slider' value={sliderValue} onChange={(e) => setSliderValue(e.target.value)}/>
                            ) : (
                                <input type="range" min="3" max="12" className='slider' value={sliderValue} onChange={(e) => setSliderValue(e.target.value)}/>
                            )}
                            <label className="slider_value">{sliderValue}</label>
                        </div>
                    </div>
                </div>
                
                {passwordType === "Password" && 
                    <div className="content_group_3">
                        <div className="checkbox_label">
                            <input type="checkbox" className="numbers_checkbox" checked={isNumbers} onChange={(e) => setIsNumbers(e.target.checked)}/>
                            <label className="number_label">Numbers</label>
                        </div>
                        <div className="checkbox_label">
                            <input type="checkbox" className="symbols_checkbox" checked={isSymbols} onChange={(e) => setIsSymbols(e.target.checked)}/>
                            <label className="symbol_label">Symbols</label>
                        </div>
                    </div>
                }
            </div>
            <ToastContainer className="toast_position"/>
        </div>        
    );
}
 
export default Home;


