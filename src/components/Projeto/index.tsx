import { Card, LinkButton } from "./styles"

import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VUEjs</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Projeto
