import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box backgroundColor="#FFABE2">
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
        color="white"
        fontWeight="bold"
      >
        <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549" />
        <VStack p="2rem">
          <Link to="/">The Green Blast</Link>
          <Link to="/">The Yellow Mello</Link>
          <Link to="/">The Blue Berry</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">The Green Blast</Link>
          <Link to="/">The Yellow Mello</Link>
          <Link to="/">The Blue Berry</Link>
        </VStack>
      </Grid>
      <Box>
        <Text textAlign="center" color="white" borderTop="1px solid white" p="1rem" w="100%">@Copyright Raul Samuel Leos Martinez</Text>
      </Box>
    </Box>
  );
}

export default Footer;
