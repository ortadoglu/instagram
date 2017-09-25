const images = (state = preloads, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            return [
                ...state,
                {
                    id: action.id,
                    tag: action.tag,
                    description: action.description,
                    date: action.date,
                    location: action.location,
                    src: action.src
                }];
        default:
            return state;
    }
  }
  
export default images



const  preloads =[
        {
            id: 1,
            tag: "branza",
            description: "earth picture",
            date: "",
            location: "Bratislava",
            src: "https://cdn.thinglink.me/api/image/860951843818176512/1240/10/scaletowidth"
        },

        {
            id: 2,
            tag: "michel",
            description: "despre michel",
            date: "",
            location: "Bratislava",
            src: "http://www.mjworld.net/wp-content/uploads/man-in-the-mirror-michael-jackson-art-music.jpg"
        },

        {
            id: 3,
            tag: "o ciuperca",
            description: "o ciuperca",
            date: "",
            location: "Bratislava",
            src: "https://cdn.pixabay.com/photo/2014/09/30/21/15/mushroom-467553__340.jpg"
        },

        {
            id: 4,
            tag: "branza",
            description: "valuri",
            date: "",
            location: "Bratislava",
            src: "https://newheavenonearth.files.wordpress.com/2012/06/ocean-waves.jpg"
        },

        {
            id: 5,
            tag: "branza",
            description: "paris",
            date: "",
            location: "Bratislava",
            src: "https://www.w3schools.com/bootstrap/paris.jpg"
        },

        {
            id: 6,
            tag: "michel",
            description: "pamant",
            date: "",
            location: "Bratislava",
            src: "https://cdn.thinglink.me/api/image/860951843818176512/1240/10/scaletowidth"
        },

        {
            id: 7,
            tag: "branza",
            description: "alta ciuperca",
            date: "",
            location: "Bratislava",
            src: "https://cdn.pixabay.com/photo/2014/09/30/21/15/mushroom-467553__340.jpg"
        },

        {
            id: 8,
            tag: "branza",
            description: "viezure",
            date: "",
            location: "",
            src: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067"
        },

        {
            id: 9,
            tag: "branza",
            description: "paris toamna",
            date: "",
            location: "Bratislava",
            src: "https://www.w3schools.com/bootstrap/paris.jpg"
        },

        {
            id: 10,
            tag: "michel",
            description: "despre michel",
            date: "",
            location: "",
            src: "http://www.mjworld.net/wp-content/uploads/man-in-the-mirror-michael-jackson-art-music.jpg"
        },

        {
            id: 11,
            tag: "branza",
            description: "despre branza",
            date: "",
            location: "",
            src: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067"
        },

        {
            id: 12,
            tag: "branza",
            description: "multe valuri",
            date: "",
            location: "",
            src: "https://newheavenonearth.files.wordpress.com/2012/06/ocean-waves.jpg"
        },

        {
            id: 13,
            tag: "buildings",
            description: "despre branza",
            date: "",
            location: "",
            src: "https://www.w3schools.com/bootstrap/paris.jpg"
        },

        {
            id: 14,
            tag: "michel",
            description: "despre michel",
            date: "",
            location: "",
            src: "http://www.mjworld.net/wp-content/uploads/man-in-the-mirror-michael-jackson-art-music.jpg"
        },

        {
            id: 15,
            tag: "branza",
            description: "despre branza",
            date: "",
            location: "",
            src: "https://cdn.pixabay.com/photo/2014/09/30/21/15/mushroom-467553__340.jpg"
        },

        {
            id: 16,
            tag: "branza",
            description: "valuri",
            date: "",
            location: "",
            src: "https://newheavenonearth.files.wordpress.com/2012/06/ocean-waves.jpg"
        },
    ];
