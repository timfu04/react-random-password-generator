import video from '../assets/blue_matrix_4K.mp4'

const Home = () => {
    return (
        <div className="home">
            <div className="video-bg">
                <video src={video} autoPlay loop muted></video>
            </div>
        </div>
    );
}
 
export default Home;


