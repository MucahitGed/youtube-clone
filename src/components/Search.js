import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/fontawesome-free-solid'
import '../style/App.css'
import '../style/Video.css'
import '../style/Responsive.css';

const Search = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const navigate = useNavigate()


  const handleSubmit = e =>{
    e.preventDefault()
    console.log(searchTerm)
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('')
    }
  }
  return (
    <div className='Search'>
      <form className='form' 
      onSubmit={handleSubmit}>
        <input type="text" className='input' value={searchTerm} placeholder='Search...' onChange={e => setSearchTerm(e.target.value) }/>
        <button type="submit"><FontAwesomeIcon icon={faSearch} className='submitBtn'/></button>
      </form>
    </div>
  )
}

export default Search