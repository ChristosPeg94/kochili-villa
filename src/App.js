import { Home, Location, Services, Navbar, Footer} from './components'
import './App.css'

export const App = () => {
  return (
    <div className="App">
        <div>
            <Navbar />
            <Home />
            <Services />
            <Location />
            <Footer />
        </div>
    </div>
  )
}
 export default App;