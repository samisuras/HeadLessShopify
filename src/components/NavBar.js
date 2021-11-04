import React, { useContext } from "react";
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { MdShoppingCart, MdMenu } from "react-icons/md";

import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

function NavBar() {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      flexDir="row"
      background="#FFABE3"
      justifyContent="space-between"
      p="2em"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?=1610055540"
          w={100}
          h={100}
        />
      </Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingCart}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF388D" borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
    </Flex>
  );
}

export default NavBar;
