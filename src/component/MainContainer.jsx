import React from 'react'
import Buttons from './Buttons'
import Cards from './Cards'
import { btnobj } from '../utils/constant'

const MainContainer = () => {
  return (
    <div className=' w-full h-full  overflow-y-scroll  '>

    <div>
        <Buttons obj={btnobj}/>
        <Cards/>
    </div>
       
</div>
  )
}

export default MainContainer