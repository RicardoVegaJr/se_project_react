import avatar from "../../assets/avatar.svg";
import "./SideBar.css"

function SideBar () {
    return (
    <div className="sidebar">
    <img className="sidebar__avatar" src={avatar} alt="default avatar" />
    <p className="sidebar__username">User Name</p>
    </div>
    )
   }
   
   export default SideBar;