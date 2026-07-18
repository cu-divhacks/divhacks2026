import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Puzzle from "../components/PuzzleGame";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Tracks />
            <Sponsors />
            {/* <FAQ /> */}
            <Puzzle />
            <Team />
            <Footer />
        </>
    );
}
