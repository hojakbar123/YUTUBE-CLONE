import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import { logo } from '../utils/constant'



export default function Navbar() {
  return (
     <nav className=' bg-black p-4 flex justify-between fixed w-full top-0 z-50'>
       <Link to='/'>
         <img width='45' src={logo} alt="logopng" /> 
        </Link>

        <div>
           <SearchBar/> 
        </div>         
     </nav>
  );
}
