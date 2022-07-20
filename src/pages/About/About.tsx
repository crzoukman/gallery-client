import { FC } from 'react';
import { InfoStyled, WrapperStyled } from './About.styled';

const About: FC = () => {
  return (
    <WrapperStyled>
      <InfoStyled>
        <h2>Position</h2>
        <div>Frontend Developer</div>
      </InfoStyled>

      <InfoStyled>
        <h2>Stack</h2>
        <div>TypeScript, React, Redux, Node.js, Express, MongoDB</div>
      </InfoStyled>

      <InfoStyled>
        <h2>About</h2>
        <div>
          I'm a frontend developr. But, I also understand how backend works. I'm able to create
          fullstack application using Node.js + Express + MongoDB
        </div>
      </InfoStyled>

      <InfoStyled>
        <h2>English</h2>
        <div>
          I speak english. More than 130 hours of speaking with native speakers using platform
          Cambly. You're free to check my{' '}
          <a href="https://www.cambly.com/en/certificate/verify/4e8f73a5" target="_blank">
            certificate
          </a>
        </div>
      </InfoStyled>

      <InfoStyled>
        <h2>More</h2>
        <div>
          Check my{' '}
          <a href="https://hh.ru/resume/ec3a49c4ff09bac6e10039ed1f3934564c7247" target="_blank">
            resume
          </a>{' '}
          (russian) to get more information about me!
        </div>
      </InfoStyled>
    </WrapperStyled>
  );
};

export default About;
