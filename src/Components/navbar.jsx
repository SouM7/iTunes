import React from 'react'
import './navstyle.css'
import imgPanier from './imgs/add-to-basket.png'
import imgRemove from './imgs/remove.png'
import imgLogo from './imgs/itunes.png'
import imgSearch from './imgs/search.png'
import {useState} from 'react'

function navbar({SendValue}) {
 const [Value, setValue] = useState("")
  const handlechange = (e)=>{
      setValue(e.target.value)
  }
  const  handleSubmit = (e)=>{
      e.preventDefault();
      SendValue(Value)
  }

  return (
    <nav>
        <img src={imgLogo}/>
        <form  onSubmit={handleSubmit} > 

            <input type="text" placeholder='Recherche...'   onChange={handlechange} />

            <button className='recherche' type='submit'>
                <img src={imgSearch} />
            </button>

            <button className='deleteButton'>
                <img src={imgRemove}/>
            </button>

        </form>
        
        <button className='panier'>
             <img src={imgPanier} /> 
        </button>

    </nav>
  )
}

export default navbar


   
        

      