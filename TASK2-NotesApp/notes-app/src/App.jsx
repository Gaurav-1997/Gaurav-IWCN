import './App.css'
import Notes from './components/Notes/Notes'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <div>
        <Notes/>
        <Toaster/>
      </div>
    </>
  )
}

export default App
