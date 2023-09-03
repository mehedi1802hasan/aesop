import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";

const ThirdNavbar = () => {
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="flex-none">
  
  </div>
  <div className="flex-1 ml-7 ">
  <ul className="list-none gap-5  flex items-center"> {/* Apply the "list-none" class to remove list decoration */}
    <li><Link to='/'>Skin Care</Link></li>
    <li><Link to=''>Body & Hand</Link></li>
    <li><Link to=''>Hair</Link></li>
    <li><Link to=''>Fragrance</Link></li>
    <li><Link to='/'>Home</Link></li>
    <li><Link to=''>Kits & Travel</Link></li>
    <li><Link to=''>Gifts</Link></li>
    <li><Link to=''>Read</Link></li>
    <li><Link to=''>Stores</Link></li>
    <li><Link to=''>Facial Appointments</Link></li>
    <li><AiOutlineSearch></AiOutlineSearch></li>
   
  </ul>
</div>

  <div className="flex-none hidden md:block lg:block">
  <ul class="list-none  gap-5 mr-9  flex">
    <li><Link to=''>Log in
</Link></li>
    <li><Link to=''>Cabinet
</Link></li>
    <li><Link to=''>Cart</Link></li>
  </ul>
  </div>
</div>
        </div>
    );
};

export default ThirdNavbar;