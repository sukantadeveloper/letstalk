import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState("")
    const handleSubmit = () => {
        if (data != "") {
            navigate(`/room/${data}`)
        } else {
            alert("Please fill the input boxes")
        }

    }
    return (
        <Box
            backgroundRepeat={"no-repeat"}
            backgroundSize={["350%", "100%", "100%"]}
            h='100vh'
            backgroundImage="url('http://wallpaperset.com/w/full/d/2/b/115638.jpg')"
            border={'1px solid white'}
            fontFamily='Lora'
        >
            <Text fontSize={'55px'}> Let'sTalk</Text>
            <Input
                //display={["block","flex","block"]}
                type="text"
                onChange={(e) => setData(e.target.value)}
                placeholder="Type meeting id or create new one"
                width={["90%", "20%", "20%"]}
                padding="10px 5px"
                fontFamily='Lora'
                borderRadius={'10px'}
                bg={'white'}
                marginTop={["50%","10%","10%"]}

            />
            <Button padding="10px" ml={'16px'} marginTop={["20px","0%","0%"]} colorScheme='orange' size={'md'} borderRadius={'10px'} fontFamily='Lora' onClick={handleSubmit}> SUBMIT</Button>
        </Box>
    );
}

export default Home;
