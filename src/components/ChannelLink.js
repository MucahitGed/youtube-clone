import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import '../style/App.css'
import '../style/Responsive.css';
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../uti/fetchFromAPI'

const ChannelLink = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null)

  const {id} = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);
      
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div className='channelContainer'>
      <div className="channel">
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div className="videos">
        <Videos videos={videos}/> 
      </div>
    </div>
  )
}

export default ChannelLink