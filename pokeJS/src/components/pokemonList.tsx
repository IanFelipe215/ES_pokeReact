import { useEffect, useState } from 'react'
import axios from 'axios'
import './pokeLista.css'



function PokemonList() {

  const [pokeLista,setPokeLista] = useState<any[]>([])
  const [qtdPokemons,setQtd] = useState<number>(20)

  async function requisicao(input:number){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+input)
    return response.data.sprites.front_default
  }

  // Função responsável por fazer as requisições e adicionar na pokeLista
  async function gera_lista(){
    
    let lista_aux = []
    for(let i = 1; i<=qtdPokemons;i++){
      let pokeURL = await requisicao(i)
      lista_aux.push(pokeURL)
    }
    setPokeLista(lista_aux)
  }
  
  useEffect(() =>{
    gera_lista()
  },[qtdPokemons])

  async function scrolled(){
    const parent:any = document.querySelector('#main_list')
    if ((parent?.scrollTop + parent?.clientHeight)>= parent?.scrollHeight - 10){
      setQtd(qtdPokemons+20)
    }
  }


  return(
    <main id='main_list' onScroll={scrolled}>
      {pokeLista.map((pokeURL,index) =>(
        <img key={index} src={pokeURL} alt="" />
      ))}
    </main>
  )
}

export default PokemonList