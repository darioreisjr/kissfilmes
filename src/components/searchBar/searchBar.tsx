import { useState } from 'react'

import { ImSearch } from "react-icons/im";
import { useNavigate, Link } from 'react-router-dom';


import './searchBar.css'

export const SearchBar = (props:any) => {
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

            <nav className='container-navegacao'>
                <ul className='menu'>
                    <Link  to={'/atores'} style={{textDecoration: 'none'}} >
                        <li className='menu-item'>
                            Atores
                        </li>
                    </Link>
                </ul>

                <div className='container-input'>
                    <input className='input-pesquisa' type="text" ref={props.children} value={searchedString} onChange={(e) => setSearchedString(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && searchedString !== '' ? props.action(searchedString) : void 0} />

                    <button className='btn-pesquisa' onClick={() => searchedString !== '' ? props.action(searchedString) : void 0} >
                        <ImSearch />
                    </button>
                </div>
            </nav>


        </header>

    </>)
}