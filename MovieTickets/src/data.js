import moment from 'moment';


const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];

const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'La La Land',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Paterson',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzODA4Nzk0OF5BMl5BanBnXkFtZTgwNzE1MDIwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    genre: 'Drama/Comedy',
    days,
    times,
  },
  {
    title: 'Jackie',
    poster: 'https://upload.wikimedia.org/wikipedia/en/archive/8/84/20170108193609!Jackie_(2016_film).png',
    genre: 'Drama/Biography',
    days,
    times,
  },
  {
    title: 'Lo and Behold Reveries of the Connected World',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzg1NTQ0MjYwNl5BMl5BanBnXkFtZTgwMjk1NjYwOTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: '10 Cloverfield Lane',
    poster: 'https://upload.wikimedia.org/wikipedia/en/0/0e/10_Cloverfield_Lane.png',
    genre: 'Drama',
    days,
    times,
  },
  {
    title: 'Birth of a Nation',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Birth_of_a_Nation_theatrical_poster.jpg/220px-Birth_of_a_Nation_theatrical_poster.jpg',
    genre: 'Fantasy/Myster',
    days,
    times,
  },
  {
    title: 'De Palma',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NDExMjA2Nl5BMl5BanBnXkFtZTgwMDQ4ODM2ODE@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Doctor Strange',
    poster: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
  },
  {
    title: 'Eddie the Eagle',
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Eddie_the_Eagle_poster.png',
    genre: 'Drama/Sport',
    days,
    times,
  },
  {
    title: 'Pride and prejudice and zombies',
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Pride_and_Prejudice_and_Zombies_Cover.jpg',
    genre: 'Thriller/Action',
    days,
    times,
  },
  {
    title: 'Finding Dory',
    poster: 'https://s-media-cache-ak0.pinimg.com/236x/74/54/15/745415dd46df7690cca3dda63ec9b929.jpg',
    genre: 'Comedy/Adventure',
    days,
    times,
  },
  {
    title: 'Green Room',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjU1ODQ5NzA0N15BMl5BanBnXkFtZTgwMDg5MTA5NzE@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Kubo_and_the_Two_Strings_poster.png',
    genre: 'Fantasy/Adventure',
    days,
    times,
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/In_a_Valley_of_Violence_poster.jpg/220px-In_a_Valley_of_Violence_poster.jpg',
    genre: 'Drama/Western',
    days,
    times,
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.ytimg.com/sh/V_B3CIoYGaU/showposter.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Rogue One: A Star Wars Story',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_1000_309ed8f6.jpeg?region=0%2C0%2C1000%2C1481&width=480',
    genre: 'Science Fiction/Action',
    days,
    times,
  },
  {
    title: 'Sing Street',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzODA3MDcxMl5BMl5BanBnXkFtZTgwODgxNDk3NzE@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Zoolander 2',
    poster: 'https://3.bp.blogspot.com/-ju14wC0oHhA/VyjgjEjcyCI/AAAAAAAAb2k/OXP07HVX6ooBL43hyiiZYhHMbwpRLH8hQCLcB/s1600/Zoolander-2-HD-2016-1080p-Latino.jpg',
    genre: 'Comedy',
    days,
    times,
  },
];
