import React, {useState, useRef, useEffect} from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AddIcon from "@material-ui/icons/Add";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import Search from "./Search"
import "../styles/Header.css";

function Header() {
  const [hide, setHide] = useState(false);
  const [searchStyle, setSearchStyle] = useState('inline-flex')
  const click = () =>{
    setHide(prev => !prev);
    setSearchStyle('none')
  }
  const ref = useRef()

  useEffect(() =>{
    const checkClickOutside = e=>{
      if(hide && ref.current && !ref.current.contains(e.target)){
        setHide(false)
        setSearchStyle('inline-flex')
      }
    }

    document.addEventListener("mousedown", checkClickOutside)
    return () =>{
      document.removeEventListener("mousedown", checkClickOutside)
    }
  }, [hide])

  return (
    <div className="Header" ref = {ref}>
      <div className="Header__left">
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" />
        <Button className="search__button" onClick = {click}  style = {{display:`${searchStyle}`}}>
          <SearchIcon className="Header__left"/>
        </Button>
          {hide&&(<Search/>)}
      </div>
      <div className="Header__middle">
        <Button>
          <HomeOutlinedIcon alt="Home" className="Header_middle__icon" />
        </Button>
        <Button>
          <FlagOutlinedIcon alt="Page" className="Header_middle__icon" />
        </Button>
        <Button>
          <OndemandVideoIcon alt="Videos" className="Header_middle__icon" />
        </Button>
        <Button>
          <PeopleAltOutlinedIcon alt="Friend" className="Header_middle__icon" />
        </Button>
        <Button>
          <DehazeIcon alt="More" className="Header_middle__icon" />
        </Button>
      </div>
      <div className="Header__right">
      <Button className="Button_radius">
            <AddIcon className="Header_right__icon" />
        </Button>
        <Button className="Button_radius">
            <ChatOutlinedIcon className="Header_right__icon" />
        </Button>
        <Button className="Button_radius">
            <NotificationsOutlinedIcon className="Header_right__icon" />
        </Button>
        <Button className="Button_radius">
            <ExpandMoreIcon className="Header_right__icon" />
        </Button>
        
      </div>
    </div>
  );
}

export default Header;
