import TwoImageFadeIn from "../Components/TwoImageFadeIn";
import FeaturedProducts from "../Components/Features";
import FeaturesSection from "../Components/KeyFeatures";
import NewsletterBanner from "../Components/NewsLaterBanner";
import Hero from "../Components/Shared/Hero";
import StatsSection from "../Components/StatusSection";
import Testimonials from "../Components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen font-sans dark:bg-black my-10">
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <StatsSection></StatsSection>
      <TwoImageFadeIn></TwoImageFadeIn>
      <FeaturesSection></FeaturesSection>
      <Testimonials></Testimonials>
      <NewsletterBanner></NewsletterBanner>
    </main>
  );
}
