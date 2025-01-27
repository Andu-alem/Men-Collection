import WatchSection from "@/components/WatchSection"
import SuitsAndTie from "@/components/SuitsAndTie"
import HeroOutro from "@/components/HeroOutro"
import Collections from "@/components/Collections"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SuitsAndTie />
      <WatchSection />
      <Collections />
      <HeroOutro />
    </div>
  )
}
