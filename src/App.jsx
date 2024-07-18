import { createGlobalStyle } from "styled-components"
import Input from "./Components/Input/input.jsx"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  
  return (
    <>
    <GlobalStyle/>
    <Input/>
    </>
  )
}

export default App
