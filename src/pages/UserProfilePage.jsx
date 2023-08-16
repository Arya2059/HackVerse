import React, { useEffect } from 'react';
import {
  Flex,
  Heading,
  Spinner,
  extendTheme,
  ChakraProvider
} from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../slices/userSlice';
import UserProfile from '../components/user/UserProfile';
import { getSortedPosts } from '../utils/helpers';
import ErrorPage from './ErrorPage';

// Custom Chakra UI theme with hacker colors
const theme = extendTheme({
  colors: {
    brandGreen: '#00FF00', // Green color
    brandBlack: '#000000' // Black color
  }
});

const UserProfilePage = () => {
  const { username } = useParams('username');
  const { allUsers, allUsersStatus } = useSelector(store => store.user);
  const { allPosts } = useSelector(store => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [username, dispatch]);

  const userPosts = allPosts.filter(post => post.username === username);
  const user = allUsers.find(user => user.username === username);

  const sortedLatestUserPosts = getSortedPosts(userPosts, 'Latest');

  return (
    <ChakraProvider theme={theme}>
      {allUsersStatus === 'pending' || allUsersStatus === 'idle' ? (
        <Flex justifyContent="center" mt={5}>
          <Spinner colorScheme="teal" size="xl" />
        </Flex>
      ) : !user ? (
        <ErrorPage />
      ) : (
        <Flex p={2} flexDir="column" alignItems="center">
          <UserProfile user={user} />
          {userPosts.length === 0 ? (
            <Heading
              fontSize="1.5rem"
              mt={5}
              color="brandGreen" // Set text color to brandGreen
            >
              No Posts Yet
            </Heading>
          ) : (
            <>
              {sortedLatestUserPosts?.map(post => (
                <Post post={post} key={post._id} />
              ))}
            </>
          )}
        </Flex>
      )}
    </ChakraProvider>
  );
};

export default UserProfilePage;
