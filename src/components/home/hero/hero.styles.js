import styled from "styled-components";

import { Section } from "../../layout/section/section.component";

export const HeroSection = styled(Section)`
  width: 100%;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.background.primary};
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(520px, 42%) minmax(0, 58%);

  width: 100%;
  min-height: 610px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns: minmax(600px, 42%) minmax(0, 58%);

    min-height: 650px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: minmax(480px, 43%) minmax(0, 57%);

    min-height: 570px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: minmax(400px, 42%) minmax(0, 58%);

    min-height: 520px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;

    min-height: auto;
  }
`;

export const HeroCopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid green; */
  min-width: 0;

  padding: 56px 48px 56px 64px;

  background: ${({ theme }) => theme.colors.background.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding: 64px 56px 64px 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 48px 40px 48px 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 40px 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;

    padding: 48px 48px 32px;
  }
  /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 24px 32px;
  } */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;

    padding: 36px 20px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 28px 16px 20px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 590px;
  gap: 22px;

  h1 {
    width: 100%;
    max-width: 590px;

    color: ${({ theme }) => theme.colors.brand.primary};

    font-size: clamp(3.6rem, 4.4vw, 4.8rem);
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  p {
    width: 100%;
    max-width: 440px;

    color: ${({ theme }) => theme.colors.text.primary};

    font-size: ${({ theme }) => theme.fontSizes.text_16};
    line-height: 1.65;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 650px;

    h1 {
      max-width: 650px;
      font-size: 5rem;
    }

    p {
      max-width: 470px;
      font-size: ${({ theme }) => theme.fontSizes.text_18};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 520px;

    h1 {
      max-width: 520px;
      font-size: clamp(3.2rem, 4.2vw, 4.1rem);
    }

    p {
      max-width: 400px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 380px;
    gap: 18px;

    h1 {
      max-width: 380px;
      font-size: clamp(2.7rem, 4.2vw, 3.3rem);
    }

    p {
      max-width: 340px;
      font-size: ${({ theme }) => theme.fontSizes.text_14};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;

    width: 100%;
    max-width: 560px;

    margin: 0;

    text-align: left;

    h1 {
      max-width: 560px;
      font-size: clamp(3rem, 7.5vw, 3.8rem);
    }

    p {
      max-width: 500px;
      font-size: ${({ theme }) => theme.fontSizes.text_16};
    }
  }
  /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;

    max-width: 560px;

    margin: 0 auto;

    text-align: left;

    h1 {
      max-width: 560px;
      font-size: clamp(3rem, 7.5vw, 3.8rem);
    }

    p {
      max-width: 500px;
      font-size: ${({ theme }) => theme.fontSizes.text_16};
    }
  } */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;

    h1 {
      max-width: 420px;
      font-size: clamp(2.65rem, 10vw, 3.2rem);
      line-height: 1;
    }

    p {
      max-width: 370px;
      font-size: ${({ theme }) => theme.fontSizes.text_14};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 16px;

    h1 {
      max-width: 340px;
      font-size: clamp(2.2rem, 10vw, 2.6rem);
    }

    p {
      max-width: 320px;
    }
  }
`;

export const HeroActions = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;

  margin-top: 8px;
`;

export const HeroProductsContainer = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;
  height: 100%;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.background.primary};

  &::before {
    content: "";

    position: absolute;
    z-index: 2;

    top: 0;
    bottom: 0;
    left: 0;

    width: 96px;

    pointer-events: none;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background.primary} 0%,
      rgba(255, 255, 255, 0.86) 30%,
      rgba(255, 255, 255, 0.34) 68%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    &::before {
      width: 112px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &::before {
      width: 88px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    &::before {
      width: 120px;

      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.background.primary} 0%,
        rgba(255, 255, 255, 0.94) 28%,
        rgba(255, 255, 255, 0.58) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 460px;

    &::before {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 340px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 300px;
  }
`;

export const HeroProductsImage = styled.img`
  display: block;

  width: 112%;
  max-width: none;
  height: 100%;

  object-fit: cover;
  object-position: right center;

  transform: translateX(-6%);

  user-select: none;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: 108%;

    transform: translateX(-4%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 116%;

    transform: translateX(-8%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 124%;

    object-position: 62% center;

    transform: translateX(-10%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 118%;

    object-fit: cover;
    object-position: 58% center;

    transform: translateX(-9%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 122%;

    object-position: 57% center;

    transform: translateX(-11%);
  }
`;
