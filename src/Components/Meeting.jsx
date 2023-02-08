import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { Box } from '@chakra-ui/react';

function Meeting() {

    const { roomId } = useParams(null);
    const myMeeting = async (element) => {
        const appID = 865808729
        const serverSecret = "bd005b79c5bb28b5379816879d37cf32";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,
            Date.now().toString(),
            "Sukanta ghosh")
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomId,
                },
            ],
            scenario: ZegoUIKitPrebuilt.GroupCall,
        })
    }

    return (
        <div>
            <Box ref={myMeeting} style={{ width: '100vw' }} height={["100vh","100vh","100vh"]} />
        </div>
    );
}

export default Meeting;