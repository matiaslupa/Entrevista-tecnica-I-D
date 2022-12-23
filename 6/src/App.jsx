import './App.css'
import ProductsContainer from './components/ProductsContainer'
import Search from './components/Search'
import TagsContainer from './components/TagsContainer'



function App() {

  return (
    <div className="App pt-16 px-20 pb-16">
      <Search/>
      <TagsContainer/>
      <ProductsContainer/>
    </div>
  )
}

export default App
