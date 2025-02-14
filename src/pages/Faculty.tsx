import React from 'react'
import Faculties from '../data/factulty'
import FacultyProfile from '../components/faculty-profile'
import { Faculty } from '../types'

const FacultyPage = () => {
  return (
    <div>
      {
        Faculties.map((f_item,index)=>(
          <FacultyProfile faculty={f_item} key={index}/>
        ))
      }
    </div>
  )
}

export default FacultyPage

// px-[500px] py-20 -mx-80 
