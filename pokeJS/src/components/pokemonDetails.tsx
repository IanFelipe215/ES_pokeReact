import { useEffect, useState } from 'react'
import axios from 'axios'
import './pokeDetails.css'


function PokemonDetails() {

  const [estado,setEstado] = useState<string>('none')
  const [loading,setLoading] = useState<string>('none')
  
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

  function atualizar(){
    resposta()
  }

  // Função que faz a requisição para a API
  async function resposta(){
    try{
      const entrada = document.getElementById('num').value

      // Condição que checa se o valor do input está dentro do range válido para a API
      if(0< entrada && entrada <= 1010){
        
        setInput(entrada)
        setLoading('')
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+input)
        
        setLoading('none')
        setPokeName(response.data.name)
        setImg(response.data.sprites.front_default)
        setTipo(response.data.types[0].type.name)
        setEstado('none')

      // condições para quando a entrada tiver o valor vazio ou quando maior que 1010
      }else if(entrada == ''){
        setEstado('none')
      }
      else{
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
          <button onClick={atualizar}>Atualizar</button>
        </div>

        <main id='main_details'>
          <div style={{display:estado}} className='msgError'>Número do pokemon é maior que o limite de 1010</div>
          <p style={{display:loading}}>Carregando</p>
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
