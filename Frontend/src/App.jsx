import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrompetPage from './Pages/PrompetPage'
import Images from './components/Images'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
   <div>

    <Toaster />
    <PrompetPage />
    <Images />

   </div>
  )
}

export default App
