import React from 'react'
import {Link} from 'react-router-dom' 
import '../style/App.css'
import '../style/Video.css';
import '../style/Responsive.css';
const VideoCard = ({video : {id: {videoId} , snippet }}) => (
    <div className='videoCard'>
      <div className='videoImage'>
          <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} >
            <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
          </Link>
      </div>
      <div className="videoContent">
          <Link to={videoId ? `/video/${videoId}` : 'UNKNOWN'}> 
            <div className="VideoTitle1">{snippet?.title.slice(0 , 60)}</div>
          </Link>
        <div className="channelContent">
          <Link  to={snippet?.channelId ? `/channel/${snippet?.channelId}` : 'UNKNOWN'} >
            <div className="channelTitle">
              {snippet?.channelTitle}
            </div>
          </Link>
        </div>
      </div>
    </div>
)
export default VideoCard

