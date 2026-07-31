import { MainHeader } from "../../components/main_header/main_header.component";
import { Hero } from "../../components/home/hero/hero.component";
import { BrandBenefits } from "../../components/home/brand_benefits/brand_benefits.component";
import { ShopByProduct } from "../../components/home/shop_by_product/shop_by_product.component";
import { BrandStory } from "../../components/home/brand_story/brand_story.component";
import { WhyFamiliesChooseUs } from "../../components/home/why_families_choose_us/why_families_choose_us.component";
export const HomeScreen = () => {
  return (
    <>
      <MainHeader />
      <Hero />
      <BrandBenefits />
      <ShopByProduct />
      <BrandStory />
      <WhyFamiliesChooseUs />
    </>
  );
};
