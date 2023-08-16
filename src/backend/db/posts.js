import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const arya = [
  {
    _id: '2',
    content: 'Cryptograhic Failures Everwhere, World now needs the ultimate cryptographic algorithm',
    mediaURL:
      'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830217/samples/Offensive%20images/2_ccak7g.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'Arya009',
    createdAt: new Date('2023-09-13T12:00:00'),
    updatedAt: new Date('2023-11-24T12:00:00'),
  },
  {
    _id: '5',
    content:
      'Data Breaches are likely to grow more with increase in cyber attacks. Cyber space demands for more cybersecurity professionals',
    mediaURL: 'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830217/samples/Offensive%20images/1_c5hjog.jpg',
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'Arya009',
    createdAt: new Date('2023-01-15T14:30:00'),
    updatedAt: new Date('2023-01-15T14:30:00'),
  }
];

const devansh = [
  {
    _id: '3',
    content: 'Cybercriminals took advantage of SQLinjections to get users data and them publicly',
    mediaURL:
      'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830217/samples/Offensive%20images/3_v724p4.png',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'DevaP2001',
    createdAt: new Date('2023-03-21T13:15:00'),
    updatedAt: new Date('2023-03-21T13:15:00'),
  },
  {
    _id: '7',
    content:
      "Highly recommended book to master PYTHON in an offensive way",
    mediaURL:
      'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830217/samples/Offensive%20images/6_gekfdk.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'DevaP2001',
    createdAt: new Date('2023-04-02T19:30:00'),
    updatedAt: new Date('2023-04-02T19:30:00'),
  }
];

const dhruv = [
  {
    _id: '4',
    content: 'Windows Kerberos Attacks on Active Directory is the most favourite of all times (THE GOLDEN TICKETS)',
    mediaURL:
      'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830217/samples/Offensive%20images/4_cxdebh.jpg',
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'lankesh',
    createdAt: new Date('2023-01-16T13:15:00'),
    updatedAt: new Date('2023-01-16T13:15:00'),
  },
  {
    _id: '8',
    content:
      "Same as anonymous group another group named CARBANAK, who steals $10Billions from the banks across the world",
    mediaURL:
      'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691831476/samples/Offensive%20images/10_egysz0.png',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'lankesh',
    createdAt: new Date('2023-02-24T20:45:00'),
    updatedAt: new Date('2023-02-24T20:45:00'),
  }
];


export const posts = [
  {
    _id: '100',
    content: 'The market of Jobs for IT is going to boom now',
    mediaURL:"https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691832998/samples/Offensive%20images/11_cadlbr.png",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: new Date('04/06/2023'),
    updatedAt: formatDate(),
  },
  {
    _id: '200',
    content: 'Microsoft Discloses Codesys Flaws Allowing Shutdown of Industrial Operations',
    mediaURL: 'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691832999/samples/Offensive%20images/13_l1inod.jpg',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: new Date('02/05/2023'),
    updatedAt: formatDate(),
  },
  {
    _id: '300',
    content: 'IT industry faces recession in jobs most likely to continue till november 2023',
    mediaURL: 'https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691832999/samples/Offensive%20images/12_njmrna.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: new Date('06/25/2023'),
    updatedAt: formatDate(),
  },
  ...arya,
  ...devansh,
  ...dhruv,
];
