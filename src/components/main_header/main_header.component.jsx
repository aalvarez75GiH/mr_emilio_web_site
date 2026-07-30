import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";

import logo from "../../assets/branding/logo.jpeg";

import {
  Header,
  HeaderContainer,
  Logo,
  Navigation,
  NavigationLink,
  Actions,
  ActionButton,
  MobileMenuButton,
} from "./main_header.styles";

const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Recipes",
    path: "/recipes",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const MainHeader = () => {
  return (
    <Header>
      <HeaderContainer>
        <MobileMenuButton>
          <FiMenu />
        </MobileMenuButton>

        <Logo as={Link} to="/">
          <img src={logo} alt="Mr Emilio" />
        </Logo>

        <Navigation>
          {navigation.map((item) => (
            <NavigationLink key={item.path} as={Link} to={item.path}>
              {item.label}
            </NavigationLink>
          ))}
        </Navigation>

        <Actions>
          <ActionButton>
            <FiUser />
          </ActionButton>

          <ActionButton>
            <FiShoppingCart />
          </ActionButton>
        </Actions>
      </HeaderContainer>
    </Header>
  );
};
