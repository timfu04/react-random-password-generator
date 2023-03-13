import video from '../assets/blue_matrix_4K.mp4'
import refresh_icon from '../assets/refresh_icon.svg'
import copy_icon from '../assets/copy_icon.svg'
import { useState } from 'react'
import useGenerate from './useGenerate'

const Home = () => {

    useGenerate();

    const [passwordType, setPasswordType] = useState("Password");

    const [isUppercase, setIsUppercase] = useState(false);
    const [isLowercase, setIsLowercase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);

    return (
        <div className="home">
            <div className="video_bg">
                <video src={video} autoPlay loop muted></video>
            </div>

            <div className="password_generator">
                <label className="generated_label">Generated password:</label>

                <div className="content_group_1">
                    <div className="display_box">this is display box</div>
                    <button className="refresh_button">
                        <img src={refresh_icon} alt="refresh_icon" className="refresh_icon"/>
                    </button>
                    <button className="copy_button">
                        <img src={copy_icon} alt="copy_icon" className="copy_icon"/>
                    </button>
                </div>

                <label className="type_label">Password type:</label>

                <div className="content_group_2">
                    <select className="password_type" value={passwordType} onChange={(e) => setPasswordType(e.target.value)}>
                        <option value="Password">Password</option>
                        <option value="PIN">PIN</option>
                    </select>
                    <div className="slider">
                        hello
                    </div>
                </div>

                <div className="content_group_3">
                    <div className="checkbox_label">
                        <input type="checkbox" className="uppercase_checkbox" checked={isUppercase} onChange={(e) => setIsUppercase(e.target.checked)}/>
                        <label className="uppercase_label">Uppercase</label>
                    </div>
                    <div className="checkbox_label">
                        <input type="checkbox" className="lowercase_checkbox" checked={isLowercase} onChange={(e) => setIsLowercase(e.target.checked)}/>
                        <label className="lowercase_label">Lowercase</label>
                    </div>
                    <div className="checkbox_label">
                        <input type="checkbox" className="numbers_checkbox" checked={isNumbers} onChange={(e) => setIsNumbers(e.target.checked)}/>
                        <label className="number_label">Numbers</label>
                    </div>
                    <div className="checkbox_label">
                        <input type="checkbox" className="symbols_checkbox" checked={isSymbols} onChange={(e) => setIsSymbols(e.target.checked)}/>
                        <label className="symbol_label">Symbols</label>
                    </div>
                </div>
            </div>
        </div>        
    );
}
 
export default Home;


