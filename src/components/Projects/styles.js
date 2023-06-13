import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

export const ProjetosWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`;

export const Projeto = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
  gap: 8px;
`;

export const ProjetoDescricao = styled.div`
  display: flex;
  gap: 8px;
`;

export const GithubLogo = styled(BsGithub)`
  color: #333;
`;

export const ProjetoLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #333;
  &:hover {
    opacity: 0.8;
  }
`;
