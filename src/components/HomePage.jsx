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
      <div className="title-name-project">
        <h1>Tarantino`s <br /> Project</h1>
      </div>
    </div>
  );
}

export default HomePage;

