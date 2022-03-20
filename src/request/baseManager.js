import { View, Text } from 'react-native'
import React from 'react'
import { API_URL } from '../env/config'

const baseManager = {
  getAll:async(url)=>{
      let response=[]
   await fetch(API_URL + url)
    .then((res)=>res.json())
    .then((data)=>{
        response=data
    })
    return response
  }
}

export default baseManager