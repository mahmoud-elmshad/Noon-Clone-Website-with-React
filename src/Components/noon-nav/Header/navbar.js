import React from 'react';
import Elec from '../navdrop/Electronics';
import Mobiles from './../navdrop/Mobiles';

const NoonNavbar=() => {
  return (
    <nav style={{index:'1'}} className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      <div className="cat">
          <a className="navbar-brand text-primary cat-text" href="#">ALL CATEGORIES<span className=".vertical"></span></a>
      </div>
	
	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="main_nav">
		<ul className="navbar-nav">
			<li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> ELECTRONICS  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Elec/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> MOBILES  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Mobiles/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> MEN  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Elec/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> WOMEN  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Mobiles/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> HOME  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Elec/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> BEAUTY & HEALTH  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Mobiles/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> BABY & TOYS  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Elec/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> SUPERMARKET  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Mobiles/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown"> SELL ON NOON  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Elec/>

                </div>
			</li>

            <li className="navitem dropdown has-megamenu">
				<a className="navlink " href="#" data-bs-toggle="dropdown" style={{color:'red'}}> DEALS  </a>
				<div className="dropdown-menu megamenu" role="menu"  >
                <Mobiles/>

                </div>
			</li>
		</ul>
		{/* <ul className="navbar-nav ms-auto">
			<li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
			<li className="nav-item dropdown">
				<a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown right </a>
			    <ul className="dropdown-menu dropdown-menu-end">
				  <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
				  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
			    </ul>
			</li>
		</ul> */}
	</div>
</div> 
</nav>

  )
}

export default NoonNavbar;
