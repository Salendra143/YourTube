export const Logo = "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
export const VideoLogo = 'https://static.thenounproject.com/png/3282528-200.png'


export const API_KEY = 'AIzaSyCnOiRYagD2Q263kkpsmXzqfQSLuH_CzJc';
export const YouTube_VIDEO_API_KEY = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+API_KEY;

export const searchAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&type="video"&maxResults=${15}&key=${API_KEY}&q=`
 export const btnobj = "All Music Reverberation React routers Playlists HTMLComputer files Live Website Jukebox Data Structures AI Graphic design Motivation Vocal Music Podcasts Recently uploaded New to you"


export const chatMessageApi = `https://www.youtube.com/youtubei/v1/live_chat/get_live_chat?prettyPrint=false?key=${API_KEY}`



 export const SIDEBAR_VIDEOS_API = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=100`;
 export const CATEGORIES_DATA_API = `https://www.googleapis.com/youtube/v3/videoCategories?key=${API_KEY}&regionCode=IN`;


  export const YOUTUBE_SUGGESTION = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
 

 
 //* Search video list api
 export const SEARCH_VIDEO_LIST_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${API_KEY}&q=`;
 
 //* Youtube main video list
 export const YT_VIDEO_LIST_API =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
   API_KEY;
 
 //* Youtube category api
 export const VIDEO_CATEGORIES_API = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${API_KEY}`;
 
 //* Suggestions query api
 export const SEARCH_AUTO_COMPLETE_API =
   "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
 
 //* Video like, views, comments data
 export const VIDEO_VIEWS_LIKE_COMMENTS_DATA = `https://www.googleapis.com/youtube/v3/videos?part=statistics&key=${API_KEY}&id=`;
 
 //* Subscribe count
 export const SUBSCRIBE_COUNT = `https://www.googleapis.com/youtube/v3/channels?part=statistics&key=${API_KEY}&id=`;
 
 //* User profile image api
 export const VIDEO_USER_PROFILE_PHOTO = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&key=${API_KEY}&id=`;
 
 //* play video card data
 export const VIDEO_CARD_DATA = `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=`;
 
 //* Video comments data
 export const VIDEO_COMMENTS = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`;
 
 //* Channel video and banner
 
 // export const CHANNEL_VIEW_BANNER = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&key=${API_KEY}&id=UCebC4x5l2-PQxg46Ucv9CsA`
 export const CHANNEL_INFO = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,snippet,statistics&key=${API_KEY}&id=`
 
//  * Channel video
//  https://www.googleapis.com/youtube/v3/search?key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&channelId=UC2bNrKQbJLphxNCd6BSnTkA&part=snippet,id&order=date&maxResults=20
 
 
 export function randomMessage(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
 export function randomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];

    };
