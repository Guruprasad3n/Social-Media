import Profile from "../../Components/Profile/Profile"
import "./home.css"

function Home(){
    return(
        <div className="Home" >
          <Profile/>
          <div className="postSide" >Post</div>
          <div className="rightSide" >Right Side</div>
        </div>
    )
}
export default Home