import { useEffect, useState } from 'react'
import axios from 'axios'
import './pokeLista.css'



function PokemonList() {

  const [pokeLista,setPokeLista] = useState<any[]>([])

  async function requisicao(input:number){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+input)
    return response.data.sprites.front_default
  }

  useEffect(() =>{
    async function gera_lista(){
      let lista_aux = []
      for(let i= 1; i<=20;i++){
        let pokeURL = await requisicao(i)
        lista_aux.push(pokeURL)
      }
      setPokeLista(lista_aux)
    }
    gera_lista()
  },[])


  return(
    <main id='main_list'>
      {pokeLista.map((pokeURL,index) =>(
        <img key={index} src={pokeURL} alt="" />
      ))}
    </main>
  )
}

export default PokemonList
