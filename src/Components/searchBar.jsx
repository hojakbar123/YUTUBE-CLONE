import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm,setSearchTerm]=useState("");
  const navigate=useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(searchTerm.length>0){
      navigate(`search/${searchTerm}`);
      setSearchTerm("");
    }
  };
   
  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center px-5 py-2 bg-white w-[300px] md:w-[400px] pag-4 h-[50px] rounded-full '
    >
      <input 
        onChange={({target})=>setSearchTerm(target.value)}
        value={searchTerm}
        className='border-none focus-within:outline-none w-full text-lg'
        type='text'
        placeholder='Search...'
      />
      <div className="cursor-pointer w-10 h-full items-center justify-center rounded-full bg-blue-50">
        <FaSearch className='text-lg mt-2 ml-2'/>
      </div>

    </form>
  )
}

export default SearchBar