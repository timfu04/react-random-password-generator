import video from '../assets/blue_matrix_4K.mp4'
import refresh_icon from '../assets/refresh_icon.svg'
import copy_icon from '../assets/copy_icon.svg'
import { useState } from 'react'
import useGenerate from './useGenerate'

const Home = () => {

    const [passwordType, setPasswordType] = useState("Password");
    const [sliderValue, setSliderValue] = useState(8);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);

    const generatedPassword = useGenerate(passwordType, isNumbers, isSymbols, sliderValue);

    return (
        <div className="home">
            <div className="video_bg">
                <video src={video} autoPlay loop muted></video>
            </div>

            <div className="password_generator">
                <label className="generated_label">Generated password:</label>

                <div className="content_group_1">
                    <div className="display_box">{generatedPassword}</div>
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

                    <div className="slider_container">
                        <div className="slider_content">
                            <label className="length">Length</label>
                            <input type="range" min="8" max="50" className='slider' value={sliderValue} onChange={(e) => setSliderValue(e.target.value)}/>
                            <label className="slider_value">{sliderValue}</label>
                        </div>
                    </div>
                </div>

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
            </div>
        </div>        
    );
}
 
export default Home;