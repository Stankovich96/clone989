export const meetingRoomData = {
    '#1': {
        primary: {
            images: [leadImage, primary1, primary2, primary3, primary4, primary5, primary6, primary7, primary8, primary9],
            name: "Abuja International Conference Center",
            type: "Conference Room",
            location: "36A Yusuf Yakubu Avenue, Phase II, Abuja",
            capacity: "60",
            priceRates: {
                hourly: "10,500",
                halfDay: "80,000",
                fullDay: "150,000"
            },
            amenities: { 
                wifi: true, 
                whiteboard: true, 
                telephone: true, 
                catering: true, 
                videoConferencing: true,
                LCDprojector: false,
                projectorScreen: false,
                parkingArea: true,
                secreterialService: false,
                multimediaService: false
            }
        },
        secondary: {
            description: {
                overview: "" ,
                extraInfo: "",
            },
            roomNumber: 316,
            reviews: [],
            mapData: { 
                cityName: "gwarimpa",
                state: "Abuja",
                coord: {
                    lang: 16.41,
                    lat: 12.63
                }
            } 
        }
    },
    '#2': {},
}