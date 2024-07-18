import { createGlobalStyle } from "styled-components"
// import Form from "./Components/Form/form.jsx"
import Button from "./Components/Button/button.jsx"

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
    {/* <Form/> */}
    <Button/>
    </>
  )
}

export default App
