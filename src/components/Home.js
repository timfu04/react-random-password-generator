import video from '../assets/blue_matrix_4K.mp4'
import refresh_icon from '../assets/refresh_icon.svg'
import copy_icon from '../assets/copy_icon.svg'

const Home = () => {
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
                    <select name="" id="" className="password_type">
                        <option value="">Password</option>
                        <option value="">PIN</option>
                    </select>
                    <div className="slider">
                        hello
                    </div>
                </div>

                <div className="content_group_3">
                </div>

                
                          
            </div>


            
        </div>
    );
}
 
export default Home;