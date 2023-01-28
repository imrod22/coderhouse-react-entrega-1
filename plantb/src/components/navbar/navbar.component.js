import { Flex, Icon, Link, Spacer } from "@chakra-ui/react";
import MenuLinks from './menulink.component';
import { ReactComponent as Logo } from "../../assets/plantb-logo.svg";
import ShopCart from "../shopcart/shopcart.component";

const NavBar = () => {
    return (
      <Flex
        as="nav"
        align="center"
        justify={{ base: "flex-start" }}
        wrap="wrap"
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        border={"1px solid green"}   
        boxShadow='dark-lg'     
      >
        <Link href='/'>
        <Icon as={Logo} cursor={'pointer'} w={150} h={100} paddingRight={0.5} transition="all .25s ease" _hover={{ transform: 'scale(1.33)' }}/>
        </Link>        
        <MenuLinks/> 
        <Spacer /> 
        <ShopCart counter="1"/>   
      </Flex>     
    );
  };
  
  export default NavBar;