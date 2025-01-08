import Carousel from "react-multi-carousel";
import colorSharp from "../../assets/images/colorsharp.png";
import "react-multi-carousel/lib/styles.css";
import SkillsItem from "./SkillsItem";

import htmlIcon from "../../assets/images/html.svg";
import cssIcon from "../../assets/images/css.svg";
import tailwindcssIcon from "../../assets/images/tailwindcss.svg";
import bootstrapIcon from "../../assets/images/bootstrap.svg";
import vuetifyIcon from "../../assets/images/vuetify.svg";
import javascriptIcon from "../../assets/images/js.svg";
import reactIcon from "../../assets/images/react.svg";
import vueIcon from "../../assets/images/vue.svg"
import TrackVisibility from 'react-on-screen';

interface ISkill {
    name: string;
    icon: any;
};
const skillsData: ISkill[] = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Tailwindcss', icon: tailwindcssIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Vuetify', icon: vuetifyIcon },
    { name: 'Javascript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Vue', icon: vueIcon }
];
const carouselConfig = {
    responsive: {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    },
    autoPlay: true,
    autoPlaySpeed: 1000, // Adjust speed as needed
    infinite: true,
    keyBoardControl: true,
    transitionDuration: 500,
    swipeable: true,
    draggable: true,
    showDots: false,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
};


const SkillsComponent = () => (
    <TrackVisibility>
        {({ isVisible }) =>
            <section className={`skill ${isVisible ? "animate-visible animate-fade-in animate-zoom-in animate-slide-up" : ""}`} id="skills">
                <div className="container">
                    <div className="skill-bx bg-gray-800 rounded-xl p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                        <Carousel {...carouselConfig} className="owl-carousel owl-theme skill-slider">
                            {skillsData.map((skill, index) => (
                                <SkillsItem key={index} {...skill} />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <img
                    className="background-image-left"
                    src={colorSharp}
                    alt="Background"
                />
            </section>
        }
    </TrackVisibility >
);

export default SkillsComponent;