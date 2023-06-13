import {
  Projeto,
  GithubLogo,
  ProjetosWrapper,
  ProjetoDescricao,
  ProjetoLink,
} from './styles';

const Projects = ({ projetos }) => (
  <ProjetosWrapper>
    {projetos.map((val) => (
      <Projeto>
        <img src={val.img} alt="Foto do projeto" />
        <ProjetoDescricao>
          <ProjetoLink href={val.link} rel="noreferrer" target="_blank">
            <GithubLogo />
            {val.nome}
          </ProjetoLink>
        </ProjetoDescricao>
      </Projeto>
    ))}
  </ProjetosWrapper>
);

export default Projects;
