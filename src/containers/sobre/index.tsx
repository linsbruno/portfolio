import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GuithubSection } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati illum
      consequuntur repudiandae. Fuga quasi harum ipsa officiis quae dolore natus
      explicabo ab doloremque magnam veritatis dolores nemo libero, recusandae
      saepe.
    </Paragrafo>
    <GuithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=linsbruno&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=linsbruno&layout=compact&langs_count=7&theme=dracula" />
    </GuithubSection>
  </section>
)

export default Sobre
