const initialDiary = [
    {
      id: "1",
      date: "2021-6-23",
      weather: "Rain",
      weatherimg:"https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg",
      emotion: "Grinning",
      emoimg:"https://i.postimg.cc/Jn2FPdFf/IMG-0463.jpg",
      activity: "Party",
      actimg: "https://i.postimg.cc/MHZFZJQf/IMG-0473.jpg",
      title: "Don't let me go",
      text: "It's time to graduate, but I dont want to leave UBC and my dear friends",
      image: ["https://my.vioo.world/wp-content/uploads/2021/04/06000414/ubc.png","https://qph.fs.quoracdn.net/main-qimg-f2f90b89caa27e148052a1b1e37940a7-c"],
      audio: "https://ia801309.us.archive.org/28/items/HarryPotter-hedwigTheme/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3",
      video: "https://youtu.be/M08WngbnMuQ",
      favorite: true,
      isDraft: false,
    },
    {
    id: "2",
    date: "2021-6-24",
    weather: "Sunny",
    weatherimg:"https://i.postimg.cc/hPTMxwPJ/IMG-0457.jpg",
    emotion: "Touched",
    emoimg:"https://i.postimg.cc/9Xq2sGBd/IMG-0465.jpg",
    activity: "Writing",
    actimg: "https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg",
    title: "Too much works",
    text: "It's already Saturday, I still cannot finish my work! oh crap!",
    image: ["https://qph.fs.quoracdn.net/main-qimg-f2f90b89caa27e148052a1b1e37940a7-c","https://my.vioo.world/wp-content/uploads/2021/04/06000414/ubc.png"],
    audio: "https://ia801309.us.archive.org/28/items/HarryPotter-hedwigTheme/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3",
    video: "https://youtu.be/M08WngbnMuQ",
    favorite: true,
    isDraft: false,
},
    {
        id: "3",
        date: "2021-6-25",
        weather: "Rain",
        weatherimg:"https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg",
        emotion: "Exploding",
        emoimg:"https://i.postimg.cc/qqQx1tgz/IMG-0469.jpg",
        activity: "Writing",
        actimg: "https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg",
        title: "First shot vaccine",
        text: "It's already Saturday, I still cannot finish my work! oh crap!",
        image:["https://www2.gov.bc.ca/assets/gov/covid-19/immunization/immunization_tiles-14_1.png","https://my.vioo.world/wp-content/uploads/2021/04/06000414/ubc.png","https://qph.fs.quoracdn.net/main-qimg-f2f90b89caa27e148052a1b1e37940a7-c"],
        audio: "https://ia801309.us.archive.org/28/items/HarryPotter-hedwigTheme/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3",
        video: "https://youtu.be/M08WngbnMuQ",
        favorite: true,
        isDraft: false,
    },
    {
            id: "4",
            date: "2021-6-26",
            weather: "Cloudy",
            weatherimg:"https://i.postimg.cc/15dnm5Zw/IMG-0458.jpg",
            emotion: "Crying",
            emoimg:"https://i.postimg.cc/9QkJ3qb9/IMG-0468.jpg",
            activity: "Writing",
            actimg: "https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg",
            title: "Share Romantic sunset",
            text: "It's already Saturday, I still cannot finish my work! oh crap!",
            image: ["https://i.postimg.cc/bNj0CBnh/Wechat-IMG3528.jpg","https://my.vioo.world/wp-content/uploads/2021/04/06000414/ubc.png","https://qph.fs.quoracdn.net/main-qimg-f2f90b89caa27e148052a1b1e37940a7-c"],
            audio: "https://ia801309.us.archive.org/28/items/HarryPotter-hedwigTheme/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3",
            video: "https://youtu.be/M08WngbnMuQ",
            favorite: false,
            isDraft: true,
        }
  ];// parse to js object
// let cards = JSON.parse(cardsString);

const diaryReducer = (state = initialDiary, action) => {
	switch (action.type) {
        case 'Add':
            return [...state, action.payload];
               
        case 'Remove':
            // return state.splice(state.indexOf(action.payload)-1,1);
            // return state.splice(state.findIndex(obj => obj.name !== action.payload.name),1);
            // return state.filter( obj => obj.name !== action.payload.name);
            return  state.filter(obj => obj.id !== action.payload.id);

        case 'Favorite':
            
        const idx = state.findIndex(obj => obj.id === action.id);
        state[idx].favorite = action.isFav;
        
        return state;
        
        case 'FilterDate':
        if(action.date === "undefined-undefined-undefined"){
            return initialDiary;
        } else {
            const cards = initialDiary;
            return cards.filter(obj => obj.date === action.date);
           

        }

        case 'GetAll':
        return [...state];
        

        default:
           return state;

	}
}

export default diaryReducer;