import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Element: <App/>
  },
  {
    path: "home",
    Element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
