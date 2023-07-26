import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function PokemonDetails() {

  const [error, setError] = useState<any>(null)
  const [erroImg, setErroImg] = useState<any>(null)
  const [img,setImg] = useState<any>()
  const [input,setInput] = useState<string>('')
  const [pokeName,setPokeName] = useState<any>('')
  const [tipo,setTipo] = useState<any>('')

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
        setError(null)
        setErroImg(null)
        // console.log(response.data.types)
      }
      else{
        setError('Erro: Pokemon não encontrado, tente um número menor que 1010')
        setErroImg('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19a8dbd-b9e4-4ce8-9726-5a1412453ce7/dadvg7c-92aa3e4d-5e02-42c6-9049-9db201adaece.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWE4ZGJkLWI5ZTQtNGNlOC05NzI2LTVhMTQxMjQ1M2NlN1wvZGFkdmc3Yy05MmFhM2U0ZC01ZTAyLTQyYzYtOTA0OS05ZGIyMDFhZGFlY2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-PiSP0S2ClhwixO30UgeOpYzsQ3b5Pbxk54lupy8hHs')
        setPokeName(null)
        setTipo(null)
        setImg(null)
      }
    }catch (error){
      console.log(error)
    }
  }

  return (
    <body>
      <div className='header'>
        <h2 className='titulo'>Pesquisa Pokemon :)</h2>
        <input type="" id='num' placeholder='type a number' autoComplete='off' onChange={resposta}/>
      </div>

      <main>

        <p>{error}</p>
        <img src={erroImg} alt="" className='errorIMG'/>
        <div className='pokeInfo'>
          <h2>{pokeName}</h2>
          <p className='tipo'>{tipo}</p>
        </div>
      <div className='img'>
      <img src={img} alt="" className='pokeIMG'/>
      </div>

      </main>
    </body>
  )
}

export default PokemonDetails
