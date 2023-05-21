import "./search.css"
import {BiSearchAlt} from "react-icons/bi"
import ChatApp from "../../../Assets/chat-box.png"
function Search(){
    return(
        <div className="search">
            <img src={ChatApp} alt="Icon" />
            <div className="SearchInput">
                <input type="text" placeholder="Search Here" />
                <div className="searchIcons">
                    <BiSearchAlt/>
                </div>
            </div>
        </div>
    )
}
export default Search