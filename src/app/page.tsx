import WatchSection from "@/components/WatchSection"
import HeroOutro from "@/components/HeroOutro"
import Hero from "@/components/Hero"
import OrbitingSection from "@/components/OrbitingSection"
import FeaturedProducts from "@/components/FeaturedProducts"

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <OrbitingSection />
      <WatchSection />
      <FeaturedProducts />
      <HeroOutro />
    </div>
  )
}
