import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: ${({ theme }) => theme.colors.background.primary};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.sizes.header.desktopHeight};

  padding: 0 64px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding: 0 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.sizes.header.tabletHeight};

    padding: 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.sizes.header.mobileHeight};

    padding: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 0 16px;
  }
`;
// export const HeaderContainer = styled.div`
//   max-width: ${({ theme }) => theme.sizes.layout.contentWidth};

//   height: ${({ theme }) => theme.sizes.header.desktopHeight};

//   margin: 0 auto;

//   padding: 0 48px;

//   display: grid;

//   grid-template-columns: auto 1fr auto;

//   align-items: center;

//   gap: 48px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     padding: 0 32px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     grid-template-columns: auto 1fr auto;

//     height: ${({ theme }) => theme.sizes.header.tabletHeight};

//     padding: 0 24px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     height: ${({ theme }) => theme.sizes.header.mobileHeight};

//     padding: 0 20px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     padding: 0 16px;
//   }
// `;

export const Logo = styled.a`
  display: flex;

  align-items: center;

  img {
    height: 58px;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-self: center;

    img {
      height: 46px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;

  justify-content: center;

  gap: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavigationLink = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};

  font-size: ${({ theme }) => theme.fontSizes.text_16};

  font-weight: ${({ theme }) => theme.fontWeights.medium};

  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const Actions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 12px;
`;

export const ActionButton = styled.button`
  width: 42px;

  height: 42px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  border-radius: 50%;

  background: transparent;

  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;

  font-size: 22px;

  transition: background 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.softBlue};
  }
`;

export const MobileMenuButton = styled(ActionButton)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;
