import EstiloGlobal, { Container } from "./styles"
import Sidebar from "./containers/Siderbar"
import Sobre from "./containers/sobre"
import Projetos from "./containers/Projetos"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
