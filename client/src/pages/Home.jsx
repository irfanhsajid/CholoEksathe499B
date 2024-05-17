
import MainNav from "../components/MainNav";
import MyParticles from "../components/Particles";

// import MyParticles from "../components/Particles";
import FeatureImgCard from "./FeatureCard/FeatureImage";
const Home = () => {
    return (
        <div>
            <MainNav />
            {/* <HeroSection /> */}
            <MyParticles/>
            <FeatureImgCard />
            {/* <AllVenues/> */}
        </div>
    );
};

export default Home;