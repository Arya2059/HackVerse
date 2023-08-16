import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "AdarshBalika123",
    bio: "Reverse Engineer, CyberSecurity Enthusiast",
    bookmarks: [],
    avatarUrl:"https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830300/samples/Offensive%20images/9_xyufg8.jpg",
    website: "https://example.com",
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "2",
    firstName: "Arya",
    lastName: "Shah",
    username: "Arya009",
    password: "ArSh@09",
    bio: "Bug Hunter, CyberSec Professional",
    bookmarks: [],
    avatarUrl:"https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830300/samples/Offensive%20images/7_tw3obe.jpg",
    website: "https://arya-stellar.netlify.app",
    createdAt: new Date("2023-06-24T10:30:00"),
    updatedAt: new Date("2023-06-24T10:30:00")
  },
  {
    _id: "3",
    firstName: "Devansh",
    lastName: "Patel",
    username: "DevaP2001",
    password: "DePa@01",
    bio: "Cyber Security Aficionado, Network & Web Application Pentester",
    bookmarks: [],
    avatarUrl:"https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691830300/samples/Offensive%20images/8_cqitno.jpg",
    website: "https://evil.com",
    createdAt: new Date("2023-06-24T11:45:00"),
    updatedAt: new Date("2023-06-24T11:45:00")
  },
  {
    _id: "4",
    firstName: "Dhruv",
    lastName: "Patel",
    username: "lankesh",
    password: "Lankesh007",
    bio: "Cyber Security, DFIR Specialist",
    bookmarks: [],
    avatarUrl:"https://res.cloudinary.com/dcb5jfpo9/image/upload/v1691831476/samples/Offensive%20images/10_egysz0.png",
    website: "https://",
    createdAt: new Date("2023-06-24T11:45:00"),
    updatedAt: new Date("2023-06-24T11:45:00")
  }
];
