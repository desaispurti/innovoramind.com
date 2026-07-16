import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import NewMexicoBackground from "./components/NewMexicoBackground";

// Eagerly load the home page for instant first paint
import Index from "./pages/Index";

// Route-level code splitting — each page is a separate JS chunk
const FundingGrants = lazy(() => import("./pages/FundingGrants"));
const Registrations = lazy(() => import("./pages/Registrations"));
const Mentorship = lazy(() => import("./pages/Mentorship"));
const TechInnovation = lazy(() => import("./pages/TechInnovation"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Services = lazy(() => import("./pages/Services"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Careers = lazy(() => import("./pages/Careers"));
const Developers = lazy(() => import("./pages/Developers"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Events = lazy(() => import("./pages/Events"));
const Projects = lazy(() => import("./pages/Projects"));
const GASS = lazy(() => import("./pages/conferences/GASS"));
const Nexus2026 = lazy(() => import("./pages/conferences/Nexus2026"));
const EthicsOfAGI = lazy(() => import("./pages/conferences/EthicsOfAGI"));
const SpatialComputingUX = lazy(() => import("./pages/conferences/SpatialComputingUX"));
const ICCSD = lazy(() => import("./pages/conferences/ICCSD"));
const GSAI = lazy(() => import("./pages/conferences/GSAI"));
const WCCC = lazy(() => import("./pages/conferences/WCCC"));
const ICBT = lazy(() => import("./pages/conferences/ICBT"));
const IDSS = lazy(() => import("./pages/conferences/IDSS"));

const queryClient = new QueryClient();

// Minimal loading fallback — matches the dark bg so there's no white flash
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-4 border-secondary border-t-transparent animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <NewMexicoBackground />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/funding-grants" element={<FundingGrants />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/tech-innovation" element={<TechInnovation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/gass" element={<GASS />} />
            <Route path="/events/iccsd" element={<ICCSD />} />
            <Route path="/events/gsai" element={<GSAI />} />
            <Route path="/events/wccc" element={<WCCC />} />
            <Route path="/events/icbt" element={<ICBT />} />
            <Route path="/events/idss" element={<IDSS />} />
            <Route path="/events/nexus-2026" element={<Nexus2026 />} />
            <Route path="/events/fireside-chat-agi-ethics" element={<EthicsOfAGI />} />
            <Route path="/events/design-sprint-spatial-ux" element={<SpatialComputingUX />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
