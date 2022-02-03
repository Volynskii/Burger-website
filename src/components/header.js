import React,{useState} from 'react';
import { Link} from "react-scroll";
import logo from "../pictures/logo.png"
import navItems from "../mocks/navigation";

const Header = () => {
    const activeSearchClassNames = {
      searchIcon: {
          active: 'fa-times',
          disabled: ''
      },
        form: {
            active: 'active',
            disabled: ''
        }
    };
    const [isActiveSearch,setIsActiveSearch] = useState(false);
    const toggleSearch = () => {
        if (!isActiveSearch) {
            setIsActiveMenu(false);
        }
        setIsActiveSearch(!isActiveSearch);
    };

    const activeNavBarClassNames = {
        menuIcon: {
            active: 'fa-times',
            disabled: ''
        },
        menuBar: {
            active: 'active',
            disabled: ''
        }
    };
    const [isActiveMenu,setIsActiveMenu] = useState(false);
    const toggleMenu = () => {
        if (!isActiveMenu) {
            setIsActiveSearch(false);
        }
        setIsActiveMenu(!isActiveMenu);
    };

    const defineKey = (state,classNamesValues,key) => {
      return   state ? classNamesValues[key].active
            : classNamesValues[key].disabled;
    };
    const activeSearch = defineKey(isActiveSearch,activeSearchClassNames,'searchIcon');
    const activeForm = defineKey(isActiveSearch,activeSearchClassNames,'form');

    const activeMenuIcon = defineKey(isActiveMenu,activeNavBarClassNames,'menuIcon');

    const activeMenuClassName = isActiveMenu ? 'active': '';

    return (
<>
            <header className="header">
                <div onClick={toggleMenu} id="menu-btn" className={`fas fa-bars icons
                 ${activeMenuIcon}`}/>
                <div onClick={toggleSearch} id="search-btn" className={`fas fa-search icons
                ${activeSearch}`}/>

                <nav className={`navbar ${activeMenuClassName}`}>
                    <a href={`#${navItems.home}`}>home</a>
                    <a href={`#${navItems.menu}`}>menu</a>
                    <a href={`#${navItems.about}`}>about</a>
                    <span className="space"/>
                    <a href={`#${navItems.reviews}`}>reviews</a>
                    <a href={`#${navItems.contact}`}>contact</a>
                    <a href={`#${navItems.blogs}`}>blogs</a>
                </nav>

                <Link to="#" className="fas fa-shopping-cart icons"/>
                <Link to="#home" className="logo">
                    <img src={logo} alt=""/></Link>

                    <form  action="" className={`search-form ${activeForm}`}>
                        <input type="search" name="" placeholder="search here..." id="search-box"/>
                        <label htmlFor="search-box" className="fas fa-search icons"/>
                    </form>
            </header>
        </>
    );
};

export default Header;
