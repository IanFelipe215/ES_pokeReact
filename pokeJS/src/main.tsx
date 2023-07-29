import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonDetails from './components/pokemonDetails.tsx'
import './index.css'
import PokemonList from './components/pokemonList.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='detalhes_lista'>

    <div className='elemento_details'>
    <PokemonDetails />
    </div>

    <div className='elemento_list'></div>
    <PokemonList/>
    </div>
  </React.StrictMode>,
)
