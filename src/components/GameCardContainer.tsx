import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface propTypes {
    children: ReactNode
}

const GameCardContainer = ({ children }: propTypes) => {
    return (
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer;