import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import '../style/App.css';
import '../style/Responsive.css';
import '../style/Video.css';
const Videos = ({videos , direction , widthLi}) => {
  
  if(videos === null) return

  return (
    <div className='videos-con'>
      <nav>
        <ul  style={{flexDirection: direction || 'row'}}>
        {videos.map((item , idx)=>(
          <li className='li item' key={idx} style={{width: widthLi || '%20'}}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Videos
//direction={direction || 'row'}
//direction