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
                    src: action.src,
                    selected: action.selected,
                    comments: action.comments,
                    rating: action.rating
                }];
        case 'SELECT_IMAGE':
            return state.map(image =>
                  (image.id === action.id) 
                    ? {...image, selected: !image.selected}
                    : image
            )                
        default:
            return state;
    }
  }
  
export default images

const  preloads =[
        {
            id: 1,
            tag: "earth",
            description: "earth picture",
            date: "Wed Sep 23 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "Bratislava",
            src: "https://www.w3schools.com/w3images/fjords.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 2,
            tag: "michel",
            description: "despre michel",
            date: "Wed Sep 24 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "albania",
            src: "http://www.mjworld.net/wp-content/uploads/man-in-the-mirror-michael-jackson-art-music.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 3,
            tag: "o ciuperca",
            description: "o ciuperca",
            date: "Wed Sep 25 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "colorado",
            src: "https://cdn.pixabay.com/photo/2014/09/30/21/15/mushroom-467553__340.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 4,
            tag: "earth",
            description: "valuri",
            date: "Wed Sep 26 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "danemarka",
            src: "https://newheavenonearth.files.wordpress.com/2012/06/ocean-waves.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 5,
            tag: "buildings",
            description: "paris",
            date: "Wed Sep 12 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "elvetia",
            src: "https://www.w3schools.com/bootstrap/paris.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 6,
            tag: "earth",
            description: "pamant",
            date: "Wed Sep 11 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "franta",
            src: "https://www.w3schools.com/w3images/fjords.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 7,
            tag: "o ciuperca",
            description: "alta ciuperca",
            date: "Wed Sep 10 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "germania",
            src: "https://cdn.pixabay.com/photo/2014/09/30/21/15/mushroom-467553__340.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 8,
            tag: "earth",
            description: "viezure",
            date: "Wed Sep 9 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "honduras",
            src: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 9,
            tag: "buildings",
            description: "paris toamna",
            date: "Wed Sep 1 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "india",
            src: "https://www.w3schools.com/bootstrap/paris.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 10,
            tag: "michel",
            description: "despre michel",
            date: "Wed Sep 2 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "jamaica",
            src: "http://www.mjworld.net/wp-content/uploads/man-in-the-mirror-michael-jackson-art-music.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 11,
            tag: "earth",
            description: "despre branza",
            date: "Wed Sep 3 2017 00:30:00 GMT+0300 (GTB Daylight Time)",
            location: "lorderon",
            src: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 12,
            tag: "earth",
            description: "multe valuri",
            date: "Wed Sep 4 2017 00:00:40 GMT+0300 (GTB Daylight Time)",
            location: "mordor",
            src: "https://newheavenonearth.files.wordpress.com/2012/06/ocean-waves.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 13,
            tag: "buildings",
            description: "despre branza",
            date: "Wed Sep 5 2017 00:00:30 GMT+0300 (GTB Daylight Time)",
            location: "narnia",
            src: "https://www.w3schools.com/bootstrap/paris.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 14,
            tag: "michel",
            description: "despre michel",
            date: "Wed Sep 6 2017 00:00:20 GMT+0300 (GTB Daylight Time)",
            location: "oregon",
            src: "http://www.mjworld.net/wp-content/uploads/man-in-the-mirror-michael-jackson-art-music.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 15,
            tag: "o ciuperca",
            description: "despre ciuperci",
            date: "Wed Sep 7 2017 00:00:10 GMT+0300 (GTB Daylight Time)",
            location: "texas",
            src: "https://cdn.pixabay.com/photo/2014/09/30/21/15/mushroom-467553__340.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },

        {
            id: 16,
            tag: "earth",
            description: "valuri",
            date: "Wed Sep 8 2017 00:00:00 GMT+0300 (GTB Daylight Time)",
            location: "romania",
            src: "https://newheavenonearth.files.wordpress.com/2012/06/ocean-waves.jpg",
            selected: false,
            comments: [],
            rating: 5,
        },
    ];
