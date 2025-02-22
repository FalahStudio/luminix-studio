import HeroGallery from "../components/HeroGallery";
import HeroSection from "../components/HeroSection";
import InformationSection from "../components/InformationSection";
import ProjectSection from "../components/ProjectSection";
import ReviewSection from "../components/ReviewSection";
import SectionContact from "../components/SectionContact";
import SectionFocus from "../components/SectionFocus";
import TeamSection from "../components/TeamSection";

export default function App() {
    return (
        <>
            <HeroSection />
            <HeroGallery />
            <InformationSection />
            <SectionFocus />
            <ProjectSection />
            <ReviewSection />
            <TeamSection />
            <SectionContact />
        </>
    )
}
