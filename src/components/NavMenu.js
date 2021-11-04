import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";

function NavMenu() {
  const {isMenuOpen, closeMenu} = useContext(ShopContext);
  return (
    <Drawer
      isOpen={isMenuOpen}
      placement="left"
      onClose={closeMenu}
      size="sm"
    >
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack p="2em">
                        <Link to="/">About Us</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">About Us</Link>
                    </VStack>
                </DrawerBody>
                <DrawerFooter textAlign="center">
                    <Text w="100%">@Copyright Raul Samuel Leos Martinez</Text>
                </DrawerFooter>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
  );
}

export default NavMenu;
