import "../components/HomePageStyle.scss"
import backgroundVideo from "../assets/tarantino-video.mp4";
import NavBar from './NavBar'; 
function HomePage() {
  return (
    <div className="home-page">
      <NavBar /> 
      <div className="video-background">
        <video autoPlay loop muted className="video-background">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomePage;

