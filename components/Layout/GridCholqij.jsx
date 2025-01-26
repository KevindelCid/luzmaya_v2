import React from 'react'
import { View } from 'react-native'

export const GridCholqij = ({ children }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent:'space-around', marginBottom:20 }}>{ children }</View>
  )
}
