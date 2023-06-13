import styled from 'styled-components';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const SocialMediasWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LinkedinLogo = styled(BsLinkedin)`
  color: #333;
  height: 48px;
  width: 48px;
`;

export const GithubLogo = styled(BsGithub)`
  color: #333;
  height: 48px;
  width: 48px;
`;

export const SocialMediaLink = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;
