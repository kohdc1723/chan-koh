import { atom } from "recoil";

const selectedSectionState = atom({
    key: "selectedSection",
    default: "Home"
});

export default selectedSectionState;