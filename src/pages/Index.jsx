import { useState } from "react";
import { Box, Button, Container, Grid, Heading, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Handmade Vase",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1674026765130-9cf56952eaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHZhc2V8ZW58MHx8fHwxNzE1NjY0NjY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Woven Basket",
    price: "$30.00",
    image: "https://images.unsplash.com/photo-1601241275443-c8e71e7daae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldHxlbnwwfHx8fDE3MTU2NjQ2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Ceramic Plate",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1604491928425-86c35b1d1649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGV8ZW58MHx8fHwxNzE1NjY0NjcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Wooden Sculpture",
    price: "$60.00",
    image: "https://images.unsplash.com/photo-1665063656993-cc5722f898be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzY3VscHR1cmV8ZW58MHx8fHwxNzE1NjY0NjcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <HStack w="full" justifyContent="space-between">
          <Heading as="h1" size="xl">
            Handicrafts E-Commerce
          </Heading>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
        </HStack>

        <InputGroup size="md" w="full">
          <Input placeholder="Search for products..." value={searchTerm} onChange={handleSearchChange} />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>

        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} w="full">
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} boxSize="250px" objectFit="cover" />
              <Box p={6}>
                <Stack spacing={3}>
                  <Heading as="h3" size="md">
                    {product.name}
                  </Heading>
                  <Text fontSize="lg" color="gray.600">
                    {product.price}
                  </Text>
                  <HStack justifyContent="space-between">
                    <Button colorScheme="teal">Add to Cart</Button>
                    <IconButton aria-label="Wishlist" icon={<FaHeart />} />
                  </HStack>
                </Stack>
              </Box>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
