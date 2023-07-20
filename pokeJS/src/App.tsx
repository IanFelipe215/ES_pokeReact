import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function PokemonDetails() {

  const [estado,setEstado] = useState<string>('none')
  const [estadoBody,setBody] = useState<string>('')
  const [img,setImg] = useState<any>()
  const [input,setInput] = useState<string>('')
  const [pokeName,setPokeName] = useState<string>('')
  const [tipo,setTipo] = useState<string>('')

  useEffect(() =>{
    if (input){
      resposta()
    }else{
      setInput('')
      setPokeName('')
      setTipo('')
      setImg('')
    }
  },[input])


  async function resposta(){
    try{
      const entrada = document.getElementById('num').value

      if(0< entrada && entrada <= 1010){
        
        setInput(entrada)
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+input)

        setPokeName(response.data.name)
        setImg(response.data.sprites.front_default)
        setTipo(response.data.types[0].type.name)
        setEstado('none')
        // console.log(response.data.types)
      }else if(entrada == null){
        setEstado('none')
      }else{
        setEstado('')
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
        <div style={{display:estado}} className='msgError'>Número do pokemon é maior que o limite de 1010</div>
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
