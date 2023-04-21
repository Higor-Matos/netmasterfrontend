import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { AiOutlineHome, AiFillLayout } from "react-icons/ai";
import { RiBarChartBoxLine } from "react-icons/ri";
import {
  Indicator,
  MobileMenuButton,
  SidebarDrawer,
  DesktopSidebar,
} from "../index";

type SidebarProps = {
  onPresentationClick: () => void;
  onControlPanelClick: () => void;
  onDashboardClick: () => void;
  currentPage: string;
};

const MotionBox = motion(Box);

const Sidebar = ({
  onPresentationClick,
  onControlPanelClick,
  onDashboardClick,
  currentPage,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderIndicator = (page: string) => (
    <Indicator isVisible={currentPage === page} />
  );

  const menuItems = [
    {
      text: "Presentation",
      icon: AiOutlineHome,
      onClick: onPresentationClick,
      page: "presentation",
    },
    {
      text: "Control Panel",
      icon: AiFillLayout,
      onClick: onControlPanelClick,
      page: "control-panel",
    },
    {
      text: "Dashboard",
      icon: RiBarChartBoxLine,
      onClick: onDashboardClick,
      page: "dashboard",
    },
  ];

  return (
    <>
      <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <MotionBox
        as={DesktopSidebar}
        menuItems={menuItems}
        currentPage={currentPage}
        renderIndicator={renderIndicator}
        zIndex={10}
        initial="hidden"
        animate={currentPage !== "presentation" ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      />

      <SidebarDrawer
        menuItems={menuItems}
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        currentPage={currentPage}
        renderIndicator={renderIndicator}
      />
    </>
  );
};

export default Sidebar;
