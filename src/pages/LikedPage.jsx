import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spinner,
  extendTheme,
  ChakraProvider
} from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../slices/postsSlice';
import { Link } from 'react-router-dom';

// Custom Chakra UI theme with hacker colors
const theme = extendTheme({
  colors: {
    brandGreen: '#00FF00', // Green color
    brandBlack: '#000000' // Black color
  }
});

const LikedPage = () => {
  const { allPosts, allPostsStatus } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const likedPosts = allPosts.filter(post =>
    post.likes.likedBy.some(id => id === authUser._id)
  );

  return (
    <ChakraProvider theme={theme}>
      {allPostsStatus === 'pending' ? (
        <Flex justifyContent="center" mt={5}>
          <Spinner colorScheme="teal" size="xl" />
        </Flex>
      ) : (
        <Box h="full" px={2}>
          <Box p={2}>
            <Heading
              textAlign="center"
              fontSize={{ base: 'xl', lg: '2xl' }}
              color="brandGreen" // Set heading color to brandGreen
            >
              Liked Posts
            </Heading>
          </Box>
          <Divider />
          {likedPosts.length === 0 ? (
            <Flex flexDir="column" alignItems="center" gap={4}>
              <Heading
                fontSize="1.5rem"
                textAlign="center"
                mt={10}
                color="brandGreen" // Set text color to brandGreen
              >
                No Posts Liked Yet
              </Heading>
              <Button
                as={Link}
                to="/explore"
                colorScheme="teal"
                color="brandGreen" // Set text color to brandGreen
              >
                Explore
              </Button>
            </Flex>
          ) : (
            <Flex flexDir="column" alignItems="center" mt={4} pb={4}>
              {likedPosts.map(post => (
                <Post key={post._id} post={post} />
              ))}
            </Flex>
          )}
        </Box>
      )}
    </ChakraProvider>
  );
};

export default LikedPage;
