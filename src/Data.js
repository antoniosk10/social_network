export const dataMenu = [
  {
    name:'News',
    link:'/feed'
  },
  {
    name:'Messages',
    link:'/messages'
  },
  {
    name:'Friends',
    link:'/friends'
  },
  {
    name:'Favorite',
    link:'/favorite'
  }
];

export const dataNews = {
  1:{
    authorID:1,
    timePost:'22.01.2021',
    postText:'Hello World'
  },
  2:{
    authorID:2,
    timePost:'23.01.2021',
    postText:'Hello Guys'
  },
  3:{
    authorID:3,
    timePost:'24.01.2021',
    postText:'Freedom!'
  },
  4:{
    authorID:4,
    timePost:'26.01.2021',
    postText:'My cat is die('
  }
};

export const dataUsers = {
  1:{
    name:'David',
    avatar: 'src/assets/image/avatars/1.jpg',
    messages: {
      2:{
        idInterlocutor:2,
        history: [
          {
            idUser:1,
            text:'hi',
            isLiked:true
          },
          {
            idUser:2,
            text:'hi',
            isLiked:true
          },
          {
            idUser:1,
            text:'how are you?',
            isLiked:false
          }
        ]
      },
      3:{
        idInterlocutor:3,
        history: [
          {
            idUser:1,
            text:'hello',
            isLiked:true
          },
          {
            idUser:3,
            text:'hi',
            isLiked:false
          },
          {
            idUser:1,
            text:'where are you?',
            isLiked:false
          }
        ]
      }
    },
    friends:[3,4]
  },
  2:{
    name:'James',
    avatar: 'src/assets/image/avatars/2.png'
  },
  3:{
    name:'Julia',
    avatar: 'src/assets/image/avatars/3.png'
  },
  4:{
    name:'Max',
    avatar: 'src/assets/image/avatars/1.jpg'
  }
};
