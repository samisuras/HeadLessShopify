import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";

function ProductPage() {
  const { handle } = useParams();

  const { fetchProductsWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductsWithHandle(handle);
  }, [fetchProductsWithHandle, handle]);

  if (!product.title) return <div>Loading....</div>;

  return (
    <Box p="2em">
      <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center" px="2em">
          <Image src={product.images[0].src} />
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading pb="1em">{product.title}</Heading>
          <Text fontWeight="bold" pb="1em">
            ${product.variants[0].price}
          </Text>
          <Text pb="1em" color="gray.500">
            {product.description}
          </Text>
          <Button
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            _hover={{ opacity: "70%" }}
            w="10rem"
            backgroundColor="ffabe3"
            color="white"
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
}

export default ProductPage;
