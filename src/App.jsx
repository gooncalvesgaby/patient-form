import { createGlobalStyle } from "styled-components"
import Form from "./Components/Form/form.jsx"


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
    <Form/>
    </>
  )
}

export default App
