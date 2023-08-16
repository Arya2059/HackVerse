import React, { useEffect } from 'react';
import { Box, Button, Divider, Flex, Heading, Spinner, extendTheme, ChakraProvider } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getBookmarks } from '../slices/postsSlice';
import { Link } from 'react-router-dom';

// Custom Chakra UI theme with hacker colors
const theme = extendTheme({
  colors: {
    brandGreen: '#00FF00', // Green color
    brandBlack: '#000000' // Black color
  }
});

const BookmarksPage = () => {
  const { allPosts, bookmarks, bookmarksStatus } = useSelector(
    store => store.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  const bookmarkedPosts = allPosts.filter(post =>
    bookmarks.some(id => id === post._id)
  );

  return (
    <ChakraProvider theme={theme}>
      <Box h="full" px={2}>
        <Box p={2}>
          <Heading
            textAlign="center"
            fontSize={{ base: 'xl', lg: '2xl' }}
            color="brandGreen" // Set heading color to brandGreen
          >
            Bookmarks
          </Heading>
        </Box>
        <Divider borderColor="brandGreen" /> {/* Set divider border color to brandGreen */}
        {bookmarkedPosts.length === 0 ? (
          <Flex flexDir="column" alignItems="center" gap={4}>
            <Heading fontSize="1.5rem" textAlign="center" mt={10} color="brandBlack">
              No Bookmarks Yet
            </Heading>
            <Button as={Link} to="/explore" colorScheme="teal" bg="brandGreen" borderColor="brandGreen">
              Explore
            </Button>
          </Flex>
        ) : (
          <Flex flexDir="column" alignItems="center" mt={4} pb={4}>
            {bookmarkedPosts.map(post => (
              <Post key={post._id} post={post} />
            ))}
          </Flex>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default BookmarksPage;
