import AppClima from "./components/AppClima";
import {ClimaProvider} from "./context/ClimaProvider"

function App() {

  return (
    
     <ClimaProvider>


        <header>
          <h1>Weather <span className="spanH1">api</span></h1>
        </header>
        <AppClima/>


     </ClimaProvider>
  )
}

export default App
