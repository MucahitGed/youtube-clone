import './style/App.css';
import Router from './router/Router'
function App() {
  // const [posts , setPosts] = useState([])
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     url: 'https://youtube-v31.p.rapidapi.com/search',
  //     params: {
  //       relatedToVideoId: '7ghhRHRP6t4',
  //       part: 'id,snippet',
  //       type: 'video',
  //       maxResults: '50'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': 'f1b04ebde5msh31788495a6f70f1p18a475jsnc3a9009d69c5',
  //       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //     }
  //   };
  //   axios.request(options).then(function (response) {
  //     setPosts(response.data)
  //     console.log(posts)
  //     console.log(response.data)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // } , [])

  return (
    <div className="App">
        <Router/>
    </div>
  );
}

export default App;


