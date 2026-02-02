import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { AppReducer } from './Reducer'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'

const mystore = createStore(AppReducer)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={mystore}>
       <App />
    </Provider>  
    </BrowserRouter>
  </StrictMode>,
)
