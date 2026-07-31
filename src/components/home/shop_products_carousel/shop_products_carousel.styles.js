import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopProductsSection = styled.section`
  width: 100%;

  padding: 64px 32px;

  background: ${({ theme }) => theme.colors.background.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding: 72px 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 60px 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 56px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 44px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 40px 16px;
  }
`;

export const ShopProductsContainer = styled.div`
  width: 100%;
  max-width: 1840px;

  margin: 0 auto;
  padding: 28px 36px 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.background.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding: 32px 44px 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 26px 28px 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 24px 22px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 22px 18px 18px;

    border-radius: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;

    border: none;
    border-radius: 0;
  }
`;

export const ShopProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  margin-bottom: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-end;

    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 22px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.text_24};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.text_22};
  }
`;

export const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-size: ${({ theme }) => theme.fontSizes.text_14};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 1.2;
  text-decoration: none;

  transition: opacity 180ms ease;

  &:hover {
    opacity: 0.76;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const ViewAllIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: transform 180ms ease;

  ${ViewAllLink}:hover & {
    transform: translateX(3px);
  }
`;

export const CarouselLayout = styled.div`
  position: relative;

  width: 100%;
`;

export const CarouselViewport = styled.div`
  width: 100%;

  margin: -10px 0 -14px;
  padding: 10px 0 14px;

  overflow-x: auto;
  overflow-y: hidden;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  overscroll-behavior-inline: contain;
  touch-action: pan-x pan-y;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    padding: 0;

    overflow: visible;

    scroll-snap-type: none;
    touch-action: auto;
  }
`;

export const ProductsTrack = styled.div`
  display: flex;
  align-items: stretch;
  gap: 18px;

  width: max-content;

  padding: 2px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    width: 100%;

    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 16px;
  }
`;

export const ProductCard = styled.article`
  flex: 0 0 clamp(220px, 15vw, 270px);

  min-width: 0;

  overflow: hidden;

  scroll-snap-align: start;
  scroll-snap-stop: always;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.primary};

  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(22, 70, 172, 0.3);

    box-shadow: 0 14px 30px rgba(19, 41, 83, 0.09);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    flex-basis: clamp(240px, 14.5vw, 290px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-basis: clamp(210px, 20vw, 250px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-basis: clamp(205px, 27vw, 235px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: clamp(220px, 43vw, 280px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;

    border-radius: 16px;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    border-radius: 14px;
  }
`;

export const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;

  min-height: 100%;

  color: inherit;
  text-decoration: none;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.primary};
    outline-offset: -3px;
    border-radius: inherit;
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 210px;

  padding: 22px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.background.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    height: 230px;

    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 200px;

    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 190px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 360px;

    padding: 34px 28px 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 310px;

    padding: 30px 22px 22px;
  }
`;
export const ProductImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center;

  transform: translate(
      ${({ $imageOffsetX = 0 }) => `${$imageOffsetX}px`},
      ${({ $imageOffsetY = 0 }) => `${$imageOffsetY}px`}
    )
    scale(${({ $imageScale = 1 }) => $imageScale});

  transform-origin: center;
  transition: transform 220ms ease;

  user-select: none;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: translate(
        ${({ $imageOffsetX = 0 }) => `${$imageOffsetX}px`},
        ${({ $imageOffsetY = 0 }) => `${$imageOffsetY}px`}
      )
      scale(${({ $imageScale = 1 }) => $imageScale});
  }
`;

export const ProductInformation = styled.div`
  width: 100%;

  padding: 18px;

  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 18px 14px;
  }
`;

export const ProductTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;

  text-align: left;
`;

export const ProductBadge = styled.span`
  position: absolute;
  z-index: 2;

  top: 16px;
  left: 16px;

  display: inline-flex;
  align-items: center;

  min-height: 24px;

  padding: 5px 9px;

  border-radius: 6px;

  background: rgba(255, 173, 51, 0.16);
  color: #b85e00;

  font-size: 0.68rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 18px;
    left: 16px;

    min-height: 26px;

    padding: 6px 10px;

    font-size: 0.72rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    top: 14px;
    left: 14px;
  }
`;
export const ProductFavoriteButton = styled.button`
  position: absolute;
  z-index: 3;

  top: 14px;
  right: 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  padding: 0;

  border: 1px solid
    ${({ theme, $favorite }) =>
      $favorite ? theme.colors.brand.primary : theme.colors.border.light};

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.background.primary};

  color: ${({ theme, $favorite }) =>
    $favorite ? theme.colors.brand.primary : theme.colors.text.secondary};

  cursor: pointer;

  transition: color 180ms ease, border-color 180ms ease, background 180ms ease,
    transform 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.brand.primary};

    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.55;
    cursor: wait;
  }

  &:focus-visible {
    outline: 3px solid rgba(22, 70, 172, 0.22);
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 16px;
    right: 16px;

    width: 44px;
    height: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    top: 12px;
    right: 12px;

    width: 42px;
    height: 42px;
  }
`;

export const ProductName = styled.h3`
  font-size: 2.25rem; // was around 2rem
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 0.35rem;

  color: ${({ theme }) => theme.colors.brand.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 1.7rem;
  }
`;

export const ProductDescription = styled.p`
  width: 100%;

  margin: 0 0 14px;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: ${({ theme }) => theme.fontSizes.text_14};
  line-height: 1.35;
  text-align: left;

  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    white-space: normal;
  }
`;

export const ProductDetailsPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  width: 100%;

  margin-bottom: 13px;
  padding: 11px 12px;

  border-radius: 10px;

  background: rgba(22, 70, 172, 0.055);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;

    padding: 12px 13px;
  }
`;

export const ProductAttributeRow = styled.div`
  display: grid;
  grid-template-columns: 78px auto;
  align-items: center;
  column-gap: 10px;
`;

export const ProductAttributeLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: 0.82rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
`;

export const ProductAttributeValue = styled.span`
  color: ${({ theme, $soldOut }) =>
    $soldOut ? theme.colors.text.secondary : theme.colors.brand.primary};

  font-size: 0.82rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.25;
`;

export const ProductStockDot = styled.span`
  flex-shrink: 0;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: ${({ theme, $status }) => {
    switch ($status) {
      case "soldOut":
        return theme.colors.text.tertiary || "#9CA3AF";

      case "low":
        return "#F59E0B";

      default:
        return theme.colors.brand.primary;
    }
  }};
`;

export const ProductAttributes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;

  width: 100%;

  margin-bottom: 10px;
`;

export const ProductSize = styled.p`
  width: 100%;

  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 1.25;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.84rem;
  }
`;

export const ProductRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  width: 100%;
  min-height: 19px;

  margin-bottom: 11px;
`;

export const ProductStars = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1px;
`;

export const ProductStar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ $filled }) => ($filled ? "#f4b000" : "#c8cfdd")};
`;

export const ProductReviewCount = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
`;

export const ProductNotReviewed = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.2;
`;

export const ProductPurchaseRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: 100%;

  margin-top: auto;
`;

export const ProductPrice = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-size: ${({ theme }) => theme.fontSizes.text_18};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.15;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.text_20};
  }
`;

export const AddToCartButton = styled.button`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.brand.primary};
  color: #ffffff;

  cursor: pointer;

  transition: opacity 180ms ease, transform 180ms ease;

  &:hover:not(:disabled) {
    opacity: 0.88;

    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid rgba(22, 70, 172, 0.25);
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 44px;
    height: 44px;
  }
`;

export const CarouselArrow = styled.button`
  position: absolute;
  z-index: 4;

  top: 50%;

  ${({ $position }) =>
    $position === "left" ? "left: -24px;" : "right: -24px;"}

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  padding: 0;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.brand.primary};

  box-shadow: 0 8px 20px rgba(19, 41, 83, 0.1);

  cursor: pointer;

  transform: translateY(-50%);

  transition: opacity 180ms ease, transform 180ms ease, background 180ms ease,
    color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.brand.primary};
    color: #ffffff;

    transform: translateY(-50%) scale(1.04);
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:focus-visible {
    outline: 3px solid rgba(22, 70, 172, 0.25);
    outline-offset: 3px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    ${({ $position }) =>
      $position === "left" ? "left: -28px;" : "right: -28px;"}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 42px;
    height: 42px;

    ${({ $position }) =>
      $position === "left" ? "left: -18px;" : "right: -18px;"}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    ${({ $position }) =>
      $position === "left" ? "left: -15px;" : "right: -15px;"}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const CarouselDot = styled.button`
  width: ${({ $active }) => ($active ? "11px" : "9px")};
  height: ${({ $active }) => ($active ? "11px" : "9px")};

  padding: 0;

  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.brand.primary : theme.colors.border.light};

  border-radius: 50%;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.brand.primary : "transparent"};

  cursor: pointer;

  transition: width 180ms ease, height 180ms ease, background 180ms ease,
    border-color 180ms ease;

  &:focus-visible {
    outline: 2px solid rgba(22, 70, 172, 0.25);
    outline-offset: 3px;
  }
`;
