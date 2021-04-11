import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg'
import MyVideo from './MyVideo.mp4'


function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100"}}/>
     <h1> Insaf </h1>
     <br/>
     <img src="./imageInSrc.jpg" alt ='imageInSrc'/>
       <br/>
       <img src="/imageInPublic.jpg" alt="imageInPublic"/>
       <video width="320" height="240" controls><source src={MyVideo.mp4} type="video/mp4" />
       </video>
       
       
    </div>
      
    
  );
}

export default App;
