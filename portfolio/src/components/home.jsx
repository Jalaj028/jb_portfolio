import { useEffect } from 'react'
import '../App.css'
// import CLOUDS from "vanta/src/vanta.clouds";
import NET from "vanta/src/vanta.net";

function Home() {
    useEffect(() => {
        NET({
          el: '#vanta',
          backgroundColor: 0*0,
          spacing: 20,
          maxDistance:23,
          color: 0x202ee5,
          points:10
        })
      },[])

    return(
        <div className="app">
      <div className="bg" id="vanta">
        <div className='hero'>
          <h1 className='heading'>JALAJ BHATT <br></br><br></br><p className='heading' style={{fontSize:"1.5rem"}}>Full Stack developer | MERN Stack | Java | OpenSource</p></h1>
        </div>
      </div>
    </div>
    )
}


export default Home;