import { Link } from "react-scroll";
import { useRecoilState } from "recoil";
import selectedSectionState from "../recoil/atoms/selectedSectionState";
import sections from "../constants/sections";
import "../styles/css/dot-navigation.css";

const DotNavigation = () => {
    const [selectedSection, setSelectedSection] = useRecoilState(selectedSectionState);

    const onClickAnchorLink = (section) => setSelectedSection(section);

    return (
        <nav className="dot-navigation">
            {sections.map(section => (
                <Link
                    to={section}
                    className="dot-navigation__item"
                    activeClass="dot-navigation__item-active"
                    delay={0}
                    duration={500}
                    smooth={true}
                    spy={true}
                />
            ))}
        </nav>
    );
};

export default DotNavigation;