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
        <h1>TARANTINO`S <br /> MOVIES</h1>
      </div>
      <div className="description-project">
        <h2>IMMERSE YOURSELF IN QUENTIN TARANTINO`S WORLD, <br />ONE OF THE ALL-TIME GREATS IN THE FILM INDUSTRY</h2>
      </div>
      <button className="button-movie"> GO WATCH
  <div className="button-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div>
</button>
    </div>
  );
}

export default HomePage;

