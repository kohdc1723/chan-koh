import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import selectedSectionState from "../recoil/atoms/selectedSectionState";
import sections from "../constants/sections";
import "../styles/css/dot-navigation.css";

const DotNavigation = () => {
    const [selectedSection, setSelectedSection] = useRecoilState(selectedSectionState);

    const onClickAnchorLink = (section) => setSelectedSection(section);

    return (
        <motion.div
            className="dot-navigation"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
            }}
        >
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
        </motion.div>
    );
};

export default DotNavigation;