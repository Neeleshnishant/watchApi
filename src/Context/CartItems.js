import React from 'react'

const CartItems = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})

export default CartItems
