import "./NavBarStyle.scss"

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
    <nav id='menu'>
      <input type='checkbox' id='responsive-menu' onClick={updatemenu} /><label></label>
      <ul>
        <li><a href='http://'>Home</a></li>
        <li><a className='dropdown-arrow' href='http://'>Movies</a>
          <ul className='sub-menus'>
            <li><a href='http://'>Pulp Fiction</a></li>
            <li><a href='http://'>Jackie Brown</a></li>
            <li><a href='http://'>Kill Bill Volume 1</a></li>
          </ul>
        </li>
        <li><a href='http://'>About Quentin Tarantino</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
