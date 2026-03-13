
import { HiMoon, HiSun, HiBell } from "react-icons/hi";
import './Header.css';
import { HiBars3BottomLeft } from "react-icons/hi2";

function Header({ darkMode, toggleDarkMode, search, setSearch, toggleSidebar }) {

    return (

        <div className="header">

         {<HiBars3BottomLeft className="burgermenu"  size={25} 
                             onClick={toggleSidebar}
                             style={{cursor:"pointer"}}
          />}

          <h2 className="logo">FlowCRM</h2>

            <form 
                onSubmit={(e)=> {
                    e.preventDefault();
                    const value = e.target.search.value;
                    console.log(value);
                }}
                >
                <input 
                   type="search" name="search" 
                   className="input" 
                   placeholder="search a client..." 
                   value={search}
                   onChange={(e)=> setSearch(e.target.value)}
                 />
            </form>

            <div className="right-icons">
              <HiBell size={25} style={{cursor: "pointer"}} />

            {darkMode ? (<HiSun size={25} style={{cursor: "pointer"}} onClick={toggleDarkMode} />) :  ( <HiMoon size={25} style={{cursor: "pointer"}} onClick={toggleDarkMode} />) }
            </div>
        </div>
    )
}

export default Header;