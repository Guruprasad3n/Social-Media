import LeftBar from "../../Components/LeftBar/LeftBar"
import "./home.css"

function Home(){
    return(
        <div className="Home" >
          <LeftBar/>
          <div className="postSide" >Post</div>
          <div className="rightSide" >Right Side</div>
        </div>
    )
}
export default Home