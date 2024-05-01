import  { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./common/ScrollToTop";
import Loading from "./common/Loading";
import MouseBounce from "./utils/MouseBounce";

const Home = lazy(() => import("./pages/home/Home"));
const ProductPage = lazy(() => import("./pages/productPage/ProductPage"));
const Sustainability = lazy(() => import("./pages/sustainabilityPage/Sustainability"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const MarketSectorPage = lazy(() => import("./pages/marketSector/MarketSectorPage"));
const ManufacturingPage = lazy(() => import("./pages/manufacturingPage/ManufacturingPage"));
const ContactPage = lazy(() => import("./pages/contactPage/ContactPage"));
const InnovationPage = lazy(() => import("./pages/innovationPage/InnovationPage"));
const ResearchDevelopmentPage = lazy(() => import("./pages/researchDevelopmentPage/researchDevelopmentPage"));
const GlobalPresencePage = lazy(() => import("./pages/globalPresencePage/GlobalPresencePage"));
const QualityPage = lazy(() => import("./pages/qualityPage/QualityPage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MouseBounce />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products/:slug"} element={<ProductPage />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/market-sectors/:slug"} element={<MarketSectorPage />} />
          <Route path={"/contact-us"} element={<ContactPage />} />

          <Route path={"/manufacturing-capabilities"} element={<ManufacturingPage />} />
          <Route path={"/sustainability"} element={<Sustainability />} />
          <Route path={"/quality"} element={<QualityPage />} />
          <Route path={"/innovation"} element={<InnovationPage />} />
          <Route path={"/research-development"} element={<ResearchDevelopmentPage />} />

          <Route path={"/global-presence"} element={<GlobalPresencePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
