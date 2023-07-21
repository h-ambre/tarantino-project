
import "../../components/MoviePage/MoviePageStyle.scss";
import NavBar from '../NavBar/NavBar'; 
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import imageSlide1 from '../../assets/pulp-fiction.jpg';
import imageSlide2 from '../../assets/jbrown.jpg';
import imageSlide3 from '../../assets/killbill1.jpg';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

  const handleButtonClick = () => {
    window.location.href = 'https://fr.wikipedia.org/wiki/Quentin_Tarantino';
  };

function MoviePage() {
  const slide1Link = "https://fr.wikipedia.org/wiki/Quentin_Tarantino";
  const slide2Link = "https://exemple.com/slide2";
  const slide3Link = "https://exemple.com/slide3";

  return (
    <div className="movie-page">
      <NavBar /> 

      <div className="image-background">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* Slide 1 */}
            <img className="img-movie" src={imageSlide1} alt="Slide 1" />
            <a href={slide1Link} className="centered-button">WATCH</a>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 2 */}
            <img className="img-movie" src={imageSlide2} alt="Slide 2" />
            <a href={slide2Link} className="centered-button">WATCH</a>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 3 */}
            <img className="img-movie" src={imageSlide3} alt="Slide 3" />
            <a href={slide3Link} className="centered-button">WATCH</a>
            <button onClick={handleButtonClick}>Mon bouton avec lien</button>
          </SwiperSlide> 
        </Swiper>
      </div>
    </div>
  );
}

export default MoviePage;
