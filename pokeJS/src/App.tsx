import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function PokemonDetails() {

  const [img,setImg] = useState()
  const [input,setInput] = useState('')
  const [pokeName,setPokeName] = useState('')
  const [tipo,setTipo] = useState('')

  useEffect(() =>{
    if (input){
      resposta()
    }else{
      setInput('')
      setPokeName('')
      setTipo('')
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
      console.log(response.data.name)
      // console.log(response.data.sprites.front_default)
      if(0< entrada && entrada <= 1010){
        setPokeName(response.data.name)
        setImg(response.data.sprites.front_default)
        setTipo(response.data.types[0].type.name)
        // console.log(response.data.types)
      }
    }catch (error){
      console.log(error)
    }
  }

  return (
    <>
    <body>

      <div className='header'>
        <h2 className='titulo'>Pesquisa Pokemon :)</h2>
        <input type="" id='num' placeholder='tpye a number' autoComplete='off' onChange={resposta}/>
      </div>

      <main>
        <div className='pokeInfo'>
          <h2>{pokeName}</h2>
          <p className='tipo'>{tipo}</p>
        </div>
      <div className='img'>
      <img src={img} alt="" />
      </div>

      </main>


    </body>
    </>
  )
}

export default PokemonDetails
