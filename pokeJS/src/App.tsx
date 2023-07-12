import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'


function PokemonDetails() {
  const [pokeNum,setpokeNum] = useState()
  const [conteudo,setConteudo] = useState()
  
  // function bola(){
    //   const entrada = document.getElementById('num')
    //   // console.log(entrada.value)
    //   return setpokeNum(entrada.value)
    // }
    
    async function resposta(){
      
      try{
      const entrada = document.getElementById('num').value
      // setpokeNum(entrada.value)
      // console.log(typeof(entrada.value))
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+entrada)
      // console.log(response.data.name)
      // console.log(response.data.sprites.front_default)
      setConteudo(response.data.sprites.front_default)
    }catch (error){
      console.log(error)
    }

  }

  return (
    <>
    <body>
      <input type="" id='num' placeholder='tpye a number' onChange={resposta}/>
      <img src={conteudo} alt="" />
    </body>
    </>
  )
}

export default PokemonDetails
