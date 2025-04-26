const playList = {
  name: "Мої улюблені треки",
  rating: 4.6,
  // tracks: ["Червона калина", "Ой  на горі два дубки" , "Залізна ластівка"],
  // numberOfTracks: this.tracks.length,
};

// const tracks = playList.tracks;

// console.log(playList.name);

// const playListName = playList.name;

// const playListRating = playList.rating;

// const {name, rating, tracks = []} = playList;

// console.log(name);

// console.log(rating);

// console.log(tracks);

// function showPlayListName({name, tracks = []}){
//     console.log(name);

//     console.log(tracks);
// }

// showPlayListName(playList);

// як переназвати зміні

// const {name: playListName, rating, tracks: playListTracks = []} = playList;

// console.log(playListName);

// console.log(playListTracks);

// як витягнути один ключ і всі інші ключі зібрати в інший обєкт

// const { rating: playListRating, ...newPlayList } = playList;

// console.log(playListRating);

// console.log(newPlayList);

// Глибока деструктиризація

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name: userName,
  tag: userTag,
  location: userLocation,
  avatar: userAvatar,
  stats: { followers: userFollowers, views: userViews, likes: userLikes, },
} = profile;

