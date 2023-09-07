import { ThemeProvider } from "styled-components"

import EstiloGlobal, { Container } from "./styles"
import Sidebar from "./containers/Siderbar"
import Sobre from "./containers/sobre"
import Projetos from "./containers/Projetos"
import temaLight from "./themes/light"
import temaDark from "./themes/dark"
import { useState } from "react"

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false)

  function changeTheme() {
    setUseDarkTheme(!useDarkTheme)
  }

  return (
    <ThemeProvider theme={useDarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={changeTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
