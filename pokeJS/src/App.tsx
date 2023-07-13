import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function PokemonDetails() {

  const [img,setImg] = useState()
  const [input,setInput] = useState('')
  const [pokeName,setPokeName] = useState('')

  useEffect(() =>{
    if (input){
      resposta()
    }else{
      setInput('')
      setPokeName('')
      setImg(undefined)
    }
  },[input])

  async function resposta(){
    try{
      const entrada = document.getElementById('num').value
      setInput(entrada)
      // setpokeNum(entrada.value)
      // console.log(typeof(entrada.value))
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+input)
      // console.log(response.data.name)
      // console.log(response.data.sprites.front_default)
      if(0< entrada && entrada <= 1010){
        setPokeName(response.data.name)
        setImg(response.data.sprites.front_default)
      }
    }catch (error){
      console.log(error)
    }
  }

  return (
    <>
    <body>

      <main>

      <div>
        <input type="" id='num' placeholder='tpye a number' onChange={resposta}/>
      </div>
      <h2>{pokeName}</h2>
      <div className='img'>
      <img src={img} alt="" />
      </div>

      </main>


    </body>
    </>
  )
}

export default PokemonDetails
