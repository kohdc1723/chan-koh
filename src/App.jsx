import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Home, EduAndExp, Skills, Projects, DotNavigation } from "./components";
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {
    const isAboveLargeScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <div className="app">
            <Header />
            <Home />
            <EduAndExp />
            <Skills />
            <Projects />
            {isAboveLargeScreen && <DotNavigation />}
        </div>
    );
};

export default App;