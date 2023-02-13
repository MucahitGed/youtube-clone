import React, { useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube } from '@fortawesome/fontawesome-free-brands'
import '../style/App.css';
import '../style/Video.css';
import '../style/Responsive.css';
import Search from './Search';
import Videos from './Videos';
import Categories from './Categories'
import {fetchFromAPI} from '../uti/fetchFromAPI'

const Main = () => {
  const [selectedCategory , setSelectedCategory] = useState("New")
  const [videos , setVideos] = useState(null)

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div className='container'>
      <div className='navbar'>
        {/* <div className="header-navbar">
          <FontAwesomeIcon icon={faYoutube} className='youIcon icon'/>
          <h1 className='youName'>ITube</h1> 
        </div> */}
        <div className="buttons">
          <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
    </div>
    <div className='main'>
      <div className="header-main">

      </div>
      <div className="videos">
        <Videos videos={videos} direction={'row'} widthLi={'20%'}/>
        </div>
      </div>
    </div>
  )
}

export default Main