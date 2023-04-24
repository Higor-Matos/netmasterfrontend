import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Heading,
  Divider,
  useColorMode,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { MenuButton } from "../index";

type SidebarDrawerProps = {
  menuItems: any[];
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  renderIndicator: (page: string) => JSX.Element;
};

const SidebarDrawer = ({
  menuItems,
  isOpen,
  onClose,
  currentPage,
  renderIndicator,
}: SidebarDrawerProps) => {
  const { colorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
      <DrawerOverlay />
      <DrawerContent
        bg={colorMode === "dark" ? "#111C44" : "white"}
        borderRadius="md"
      >
        <DrawerCloseButton />
        <VStack spacing="4" alignItems="stretch" padding="4">
          <Heading size="lg" mb="2" textAlign="center" fontSize="md">
            NET MASTER
          </Heading>
          <Divider borderColor="gray.300" my={2} />
          {menuItems.map((item) => (
            <MenuButton
              key={item.text}
              text={item.text}
              icon={item.icon}
              onClick={item.onClick}
              page={item.page}
              renderIndicator={renderIndicator}
              iconColor={iconColor}
            />
          ))}

          <Spacer />
        </VStack>
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarDrawer;
