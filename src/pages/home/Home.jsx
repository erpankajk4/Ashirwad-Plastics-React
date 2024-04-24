import  { Fragment } from 'react';
import LayoutOne from "../../layouts/LayoutOne";
import SEO from '../components/seo';
import BannerSlider from "../components/HomeSlider/BannerSlider";
import ServiceSlider from "../components/HomeSlider/ServicesSlider";
import Section1 from './Section1';
import ProductsSection from '../components/HomeSlider/ProductsSection';
import Section2 from './Section2';
import Section3 from './Section3';
import Testimonials from "../components/Testimonials";
import VerifiedSection from '../components/VerifiedSection';
export default function Home() {
  return (
    <Fragment>
      <SEO
        titleTemplate="Ashirwad Plastics – Liquid Dispensing and Packaging Solutions"
        description="Ashirwad Plastics – Liquid Dispensing and Packaging Solutions"
      />
      <LayoutOne>
        <BannerSlider />
        <Section2 />
        <Section3 />
        <VerifiedSection />
        <ServiceSlider />
        <Section1 />
        <ProductsSection category="all" />
        <Testimonials />
      </LayoutOne>
    </Fragment>
  );
}
