/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { CssVarsProvider } from '@mui/joy/'
import { TopBar } from '../components/TopBar/TopBar'
import CssBaseline from '@mui/joy/CssBaseline'
import { Versions } from '../components/Versions/Versions'
import '@fontsource/space-grotesk'

const App = (): JSX.Element => {
  return (
    <>
      <CssVarsProvider>
        <CssBaseline />
        <TopBar />
        <Versions />
      </CssVarsProvider>
    </>
  )
}

export default App
