import React from 'react'
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@iotabots/components'

const ThemeProvider: React.FC = (props) => {
  const { children } = props

  return (
    <MuiThemeProvider>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
