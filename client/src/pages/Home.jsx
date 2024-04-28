import HeroSection from "../components/HeroSection";
import MainNav from "../components/MainNav";
import FeatureImgCard from "./FeatureCard/FeatureImage";
const Home = () => {
    return (
        <div>
        <MainNav/>
        <HeroSection/>
        <FeatureImgCard/>
        </div>
    );
};

export default Home;