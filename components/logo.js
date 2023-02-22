import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import footprintDark from "./assets/ghostDark.png";
import footprint from "./assets/ghost.png";
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > img {
    transition: 200ms ease;
  }
  &:hover > img {
    transform: rotate(20deg);
  }
`;
// const footprintImage = useColorModeValue("footprint", "footprintDark");
const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image
          src={useColorModeValue(footprintDark, footprint)}
          alt="small logo of a ghost"
        />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={4}
        >
          ` Morten Berge
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
