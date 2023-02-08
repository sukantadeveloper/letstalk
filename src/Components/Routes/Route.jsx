import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Meeting from "../Meeting";
function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/room/:roomId" element={<Meeting />}> </Route>
            </Routes>
        </div>
    );
}

export default Router;