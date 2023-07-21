import "../NavBar/NavBarStyle.scss"
import logo from "../../assets/LOGO2.png";

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
      alt="Logo Website"
      onClick={() => window.location.href = "/"} 
      style={{ cursor: 'pointer' }}
    />
  <input type='checkbox' id='responsive-menu' onClick={updatemenu} /><label></label>
  <ul>
    <li><a href='/'>Home</a></li>
    <li><a className='dropdown-arrow' href='/movies'>Movies</a>
      <ul className='sub-menus'>
        <div className="addmovie">
        </div>
        <li><a href='https://www.google.com/search?q=regarder+pulp+fiction&oq=PULP+FICTION+&aqs=chrome..69i57j69i59j69i64j69i60l3.2596j0j4&sourceid=chrome&ie=UTF-8&si=ACFMAn_x2-xz_F0e8b-cgxhBBubfHJBhW_rbJJFJakc_SPi4BwDfBzG8_1JF0SDV0YSHS25qcpzekhHCVoq06UE1sDMowDz_8rlkcrBJTw2OapRLVqzbCrHegnyVmY_FN2gttxage734&ictx=1&ved=2ahUKEwjn9-C7t5-AAxX_SKQEHWIaCQsQyNoBKAB6BAgVEAA'>Pulp Fiction</a></li>
        <li><a href='https://www.google.com/search?q=regarder+jackie+brown&sxsrf=AB5stBgnWPUZLvxlj3_eXs-24kqy5Qy8Lw%3A1689929904153&ei=sEi6ZPnnCKahkdUPlNqsqAc&oq=JACKI&gs_lp=Egxnd3Mtd2l6LXNlcnAiBUpBQ0tJKgIIADIEECMYJzIHECMYigUYJzIEECMYJzIKEC4YigUYsQMYQzILEC4YgAQYsQMYgwEyCxAuGIAEGLEDGIMBMgcQABiKBRhDMgoQABiKBRixAxhDMggQLhiABBixAzILEC4YgAQYsQMYgwFIqxJQAFjMC3ACeAGQAQCYAXugAYYFqgEDNS4yuAEDyAEA-AEBwgIHEC4YigUYQ8ICCxAuGIoFGLEDGIMBwgIFEC4YgATCAg0QLhiKBRixAxiDARhDwgIKEC4YigUY1AIYQ8ICCxAuGIMBGLEDGIAEwgIKEC4YgAQY1AIYCsICBRAAGIAEwgIHEC4YgAQYCsICChAuGNQCGIAEGArCAggQABiABBjLAcICBxAAGIAEGArCAhkQLhiABBjUAhgKGJcFGNwEGN4EGOAE2AEBwgINEC4Y1AIYsQMYgAQYCsICChAuGLEDGIAEGArCAgoQLhiABBixAxgKwgIcEC4Y1AIYsQMYgAQYChiXBRjcBBjeBBjgBNgBAeIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp&si=ACFMAn-toXUfrJ5acLyAS3jypTnGDN32MqABYv6BZHdQVwunYWVmxkCMy_60WzBtdNl0ug6_TUz64cWlqZt-BApvT8EKatrA_ARSxz49yOH4qYALQ-TxB7VpNCLF0JIxGLhBC5eVvaJB&ictx=1&ved=2ahUKEwiVt-nCt5-AAxUsVKQEHWAkBAkQyNoBKAB6BAgSEAA'>Jackie Brown</a></li>
        <li><a href='https://www.google.com/search?q=regarder+kill+bill+vol+1&sxsrf=AB5stBiYdauHKssudTK6dZQYCF0zvBo3TQ%3A1689929932528&ei=zEi6ZKnpH6-gkdUPi7qakAk&oq=regarder+kill+bil&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXJlZ2FyZGVyIGtpbGwgYmlsKgIIADIEECMYJzIHECMYigUYJzIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSIwRUIIEWNMLcAF4AZABAJgBTaAB3QOqAQE4uAEDyAEA-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp'>Kill Bill Volume 1</a></li>
      </ul>
    </li>
    <li><a href='https://fr.wikipedia.org/wiki/Quentin_Tarantino'>About Quentin Tarantino</a></li>
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
          height="24"src={logo}
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