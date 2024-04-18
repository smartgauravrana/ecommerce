import IntroSection from "@/components/introSection";
import ProductGrid from "@/components/productGrid";
import SearchInput from "@/components/searchInput";
import BannerSlider from "@/components/slider";

export default function Home() {
  return (
    <main>
      <section className="kp-banner relative m-auto mb-5 w-[100%] overflow-hidden lg:mb-8">
        <BannerSlider />
      </section>

      <section className="kp-container mb-14 lg:mb-32">
        <ProductGrid />
      </section>
      <IntroSection />
    </main>
  );
}
