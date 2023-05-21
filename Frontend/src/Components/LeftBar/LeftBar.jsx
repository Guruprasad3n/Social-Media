import ProfileCard from "./ProfileCard/ProfileCard"
import Search from "./Search/Search"
import "./leftBar.css"
function LeftBar(){
    return(
        <div className="profileSide">
            <Search/>
            <ProfileCard/>
        </div>
    )
}

export default LeftBar