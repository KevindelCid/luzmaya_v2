import React from 'react'
import { View } from 'react-native'

export const ContentContainer = ({children}) => {
  return (
    <View style={{ paddingHorizontal:15 }}>{children}</View>
  )
}
