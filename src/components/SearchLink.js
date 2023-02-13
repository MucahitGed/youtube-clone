import React , {useState , useEffect} from 'react'
import { fetchFromAPI } from '../uti/fetchFromAPI'
import Videos from './Videos'
import { useParams } from 'react-router'
import '../style/App.css'
import '../style/Video.css'
import '../style/Responsive.css';

const SearchLink = () => {
  const [videos , setVideos] = useState(null)
  const {searchTerm} = useParams()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      console.log(searchTerm)
  } , [searchTerm])
  
  if(!searchTerm) return

  return (
    <div className='Search'>
      <span className='resultName'>Result for {searchTerm}</span>
      <div className="result">{<Videos videos={videos}/> }</div>
    </div>
  )
}

export default SearchLink