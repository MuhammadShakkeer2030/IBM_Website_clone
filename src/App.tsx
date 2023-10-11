
import './App.css'
import { ProductCardList } from './components/ProductCardList'
import { Footer, Header, HomeBanner } from './paths'

function App() {

  return (
   <div>
    <Header/>
    <HomeBanner/>
    <ProductCardList/>
    <Footer/>
   </div>
  )
}

export default App
