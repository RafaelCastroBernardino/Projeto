import {
  LinkedinLogo,
  GithubLogo,
  SocialMediasWrapper,
  SocialMediaLink,
} from './styles';

const SocialMedias = ({ linkedin, github }) => (
  <SocialMediasWrapper>
    <SocialMediaLink href={linkedin} rel="noreferrer" target="_blank">
      <LinkedinLogo />
    </SocialMediaLink>
    <SocialMediaLink href={github} rel="noreferrer" target="_blank">
      <GithubLogo />
    </SocialMediaLink>
  </SocialMediasWrapper>
);

export default SocialMedias;
