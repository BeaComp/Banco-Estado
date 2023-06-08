import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login'

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;