import React from 'react'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Main from '../components/Main'
import VideoLink from '../components/VideoLink'
import ChannelLink from '../components/ChannelLink'
import SearchLink from '../components/SearchLink'
import '../style/App.css';
import Navbar from '../components/Navbar'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />  
        <Routes>
             <Route  path='/' element={<Main/>}/>
             <Route  path='/video/:id' element={<VideoLink/>}/>
             <Route  path='/channel/:id' element={<ChannelLink/>}/>
             <Route  path='/search/:searchTerm' element={<SearchLink/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default Router