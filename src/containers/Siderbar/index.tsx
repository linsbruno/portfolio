import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Bruno Lins</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        linsbruno
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
