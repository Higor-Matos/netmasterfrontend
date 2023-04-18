import React from "react";
import { Box } from "@chakra-ui/react";

interface IndicatorProps {
  isVisible: boolean;
}

const Indicator: React.FC<IndicatorProps> = ({ isVisible }) =>
  isVisible ? (
    <Box
      w="4px"
      h="20px"
      bg="purple.500"
      ml={2}
      borderRadius="25px"
      transform="rotate(0deg)"
    />
  ) : null;

export default Indicator;
