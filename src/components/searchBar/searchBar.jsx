import { useState } from 'react'

import { ImSearch } from "react-icons/im";
import { useNavigate } from 'react-router-dom';


import './searchBar.css'

export const SearchBar = (props) => {
    const [searchedString, setSearchedString] = useState("")

    const navigate = useNavigate()

    function handleHome() {
        navigate('/')
    }

    return (<>
        <header className='container-header'>

            <button onClick={handleHome} className='btn-logo'>
                <h1 className='logo'>Kiss<span>Filmes</span></h1>
            </button>

            <div className='container-input'>
                <input className='input-pesquisa' type="text" ref={props.children} value={searchedString} onChange={(e) => setSearchedString(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && searchedString !== '' ? props.action(searchedString) : void 0}/> 
                
                <button className='btn-pesquisa' onClick={() => searchedString !== '' ? props.action(searchedString) : void 0} >
                    <ImSearch/>
                </button>
            </div>
            
        </header>
       
    </>)
}