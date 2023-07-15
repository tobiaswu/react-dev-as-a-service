import { HeaderButtonContainer, HeaderContainer, HeaderDescription, HeaderPrimaryButton, HeaderSecondaryButton, HeaderText, HeaderTextAnimation, TextContainer } from './Header.styled'

export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderText>Hi, I'm Tobias Wupperfeld</HeaderText>
        <HeaderTextAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "I'm a Software Engineer", // initially rendered starting point
            1000,
            "I'm an IT Consultant",
            1000,
            "I'm a React TS Veteran",
            1000,
            "I'm an AI Enthusiast",
            500,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <HeaderDescription>I'm a Full Stack Software Engineer empowering your business with scalable web solutions available for contract work and freelance projects</HeaderDescription>
        <HeaderButtonContainer>
          <HeaderPrimaryButton href="mailto:mail@tobiaswupperfeld.com">Get in touch</HeaderPrimaryButton>
          <HeaderSecondaryButton href="230710-CV-WUPPERFELD-TOBIAS-EN.pdf" target="_blank"
            rel="noreferrer">Download CV</HeaderSecondaryButton>
        </HeaderButtonContainer>
      </TextContainer>
    </HeaderContainer>
  )
}
