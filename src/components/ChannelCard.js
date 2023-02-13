import React from 'react'
import {Link} from 'react-router-dom'
import '../style/App.css'
import '../style/Responsive.css';

const ChannelCard = ({channelDetail}) => {
  return (
    <div className='ChannelCard'>
      <div className="cardCon">
        <Link  to={`/channel/${channelDetail?.id?.channelId}`}>
          <div className="channelImg">
            <img src={channelDetail?.snippet?.thumbnails?.high?.url || ''}  alt={channelDetail?.snippet?.title} />
          </div>

          <div className="channelContent">
            <div className="channelName">
             {channelDetail?.snippet?.title}{' '}
             </div>
          
          <div className="subscriber-con">
            {channelDetail?.statistics?.subscriberCount && (
            <div className="subscriber">
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</div>
            )}
          </div>
          </div>
        </Link>
      </div>  
    </div>
  )
}

export default ChannelCard