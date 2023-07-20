import "./NavBarStyle.scss"
import logo from "../assets/LOGO2.png";

function updatemenu() {
  if (document.getElementById('responsive-menu').checked === true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

const Navbar = () => {
  return (
  <div>
    <nav id='menu'>
    <img
      className="logo"
      src={logo}
      alt="HomePage"
      onClick={() => window.location.href = "/"} 
      style={{ cursor: 'pointer' }}
    />
  <input type='checkbox' id='responsive-menu' onClick={updatemenu} /><label></label>
  <ul>
    <li><a href='http://'>Home</a></li>
    <li><a className='dropdown-arrow' href='http://'>Movies</a>
      <ul className='sub-menus'>
        <div className="addmovie">
        </div>
        <li><a href='http://'>Pulp Fiction</a></li>
        <li><a href='http://'>Jackie Brown</a></li>
        <li><a href='http://'>Kill Bill Volume 1</a></li>
      </ul>
    </li>
    <li><a href='http://'>About Quentin Tarantino</a></li>
  </ul>
  <li>
    <button type="button" className="button">
      <span className="button__text">Add movie</span>
      <span className="button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          className="svg"
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    </button>
  </li>
</nav>

    
    </div>
  );
};

export default Navbar;