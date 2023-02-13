import React, { useState , useEffect} from 'react'
import {useParams , Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {fetchFromAPI} from '../uti/fetchFromAPI'
import Videos from './Videos'
import '../style/Video.css';
import '../style/App.css';
import '../style/Responsive.css';
const VideoLink = () => {
  const [videoDetail , setVideoDetail] = useState(null || {})
  const [videos , setVideos] = useState(null)
  const {id} = useParams();
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail.snippet) return;

  let {snippet : {title , channelId , channelTitle} , statistics : {viewCount , likeCount}} = videoDetail

  return (
      <div className='VideoLink'>
        <div className="videoDetails">
          <div className="youVideo">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='player' width='100%'
            height='100%'
            controls={true}/>
              <div className="videoName">{title}</div>
              <div className="bottomContent">
                <Link to={`/channel/${channelId}`}>
               
              <div className="videoChannel">{channelTitle}</div>
                </Link>
                <div className="viewLike">
                  <div className="viewers">{parseInt(viewCount).toLocaleString()} Views</div>
                  <div className="likes">{parseInt(likeCount).toLocaleString()} Likes</div>
                </div>
                </div>
              </div>
            </div>
            <div className="otherVideos">
                <Videos videos={videos} direction={'column'} widthLi={'80%'}/>
        </div>
    </div>
  )
}

export default VideoLink