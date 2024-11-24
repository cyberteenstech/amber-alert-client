import Banner from "./Banner";
import Events from "./Events";
import FAQ from "./FAQ";
import Letter from "./Letter";
// import OrganizedBy from "./OrganizedBy";
import Organizations from "./Organizations";
import VideoSection from "./VideoSection";
// import Supporters from "./Supporters";
import LatestVoters from "./LatestVoters";
import News from "./News";
import OrganizedBy from "./OrganizedBy";


const HomePage = () => {
    const [language, setLanguage] = useState("bn");
    return (
        <div>
            <Banner
                language={language}
                setLanguage={setLanguage} />
            <div className="md:hidden block">
                <LatestVoters />
            </div>
            <News />
            <VideoSection />
            <Letter
                language={language}
                setLanguage={setLanguage}
            />
            <Organizations />
            {/* <Supporters/> */}
            <Events />
            <FAQ />
            <OrganizedBy />
        </div>
    );
};

export default HomePage;