import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider,  ColorModeScript } from '@chakra-ui/react'
import App from './App'
import './index.css'
import theme from './Theme'
import 'react-medium-image-zoom/dist/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
     <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
