import video from '../assets/blue_matrix_4K.mp4'
import refresh_logo from '../assets/refresh_logo.svg'

const Home = () => {
    return (
        <div className="home">
            <div className="video-bg">
                <video src={video} autoPlay loop muted></video>
            </div>

            <div className="password-generator">
                <label>Generated password:</label>

                <div className="content-group-1">
                    <div className="display-box">display</div>
                    <button className="refresh-button">
                        refresh
                        <img src={refresh_logo} alt="refresh logo"/>
                    </button>
                    <button className="copy-button">
                        copy
                    </button>
                </div>




                {/* <label>Password type:</label>
                <div className="password-generator-content-group-2">
                </div> */}

                
            </div>
        </div>
    );
}
 
export default Home;


