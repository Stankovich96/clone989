import RatingStar from "../assets/RatingStarDark.svg";
import TimeIcon from "../assets/TimeIcon.svg";
import wifiIcon from "../assets/wifiIcon.svg";

export const typeOfWorkspaceOptions = [
    { value: "privateOffice", label: "Private Office" },
    { value: "coworkingSpace", label: "Co-working space" }
];

export const AmenitiesWorkspaceOptions = [
    { value: "wifi", label: "Wifi", img: RatingStar },
    { value: "printers", label: "Printers", img: TimeIcon },
    { value: "onsiteConsultant", label: "Onsite Consultant", img: wifiIcon }
];


export const priceWorkspaceOptions = [
    { value: "10000-49999", label: "N10, 000 - N49, 999" },
    { value: "50000-59999", label: "N50, 000 - N99, 999" },
    { value: "100000-149999", label: "N100,000 - N149,999" }
];
