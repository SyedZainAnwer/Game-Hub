import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface propTypes {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: propTypes) => {
    return (
        <div>
            <HStack padding="10px">
                <Image src={logo} boxSize='60px'></Image>
                <SearchInput onSearch={onSearch}/>
                <ColorModeSwitch />
            </HStack>
        </div>
    )
}

export default NavBar;