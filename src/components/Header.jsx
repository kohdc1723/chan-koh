import { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useMediaQuery from "../hooks/useMediaQuery";
import useScroll from "../hooks/useScroll";
import sections from "../constants/sections";
import selectedSectionState from "../recoil/atoms/selectedSectionState";
import "../styles/css/header.css";

const Header = () => {
    const [selectedSection, setSelectedSection] = useRecoilState(selectedSectionState);
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
    const isScrolled = useScroll();

    const onClickAnchorLink = (section) => setSelectedSection(section);
    const onClickToggleMenu = () => setIsMenuToggled(true);
    const onClickClose = () => setIsMenuToggled(false);

    return (
        <motion.div
            className={`header ${isScrolled && "header__scrolled"}`}
            initial="hidden"
            whileInView="visible"
            // viewport={{ amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            {/* title */}
            <h1>Chan.Koh</h1>

            {/* responsive nav */}
            {isAboveSmallScreen ? (
                // desktop nav
                <nav>
                    {sections?.map(section => (
                        <Link
                            to={section}
                            className="header__link"
                            activeClass="header__link-active"
                            delay={0}
                            duration={500}
                            smooth={true}
                            spy={true}
                        >
                            {section}
                        </Link>
                    ))}
                </nav>
            ) : (
                // mobile nav
                <button
                    className="header__toggle-menu"
                    onClick={onClickToggleMenu}
                >
                    <AiOutlineMenu />
                </button>
            )}

            {/* mobile nav popup */}
            {(!isAboveSmallScreen && isMenuToggled) && (
                <div className="header__toggle-menu-popup">
                    {/* close button */}
                    <div className="header__toggle-menu-popup-close">
                        <button onClick={onClickClose}>
                            <AiOutlineClose />
                        </button>
                    </div>

                    {/* nav items */}
                    <nav className="header__toggle-menu-popup-items">
                        {sections?.map(section => (
                            <Link
                                to={section}
                                className="header__link"
                                activeClass="header__link-active"
                                delay={0}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                {section}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </motion.div>
    );
};

export default Header;