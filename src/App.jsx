
import { Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProsuctDetailes from './pages/ProsuctDetailes'
import CartProvider from './context/CartContext'


function App() {
  
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element = {<Auth/>}/>
          <Route path="/checkout" element = {<Checkout/>} />
          <Route path='/products/:id' element={<ProsuctDetailes/>}/>
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
