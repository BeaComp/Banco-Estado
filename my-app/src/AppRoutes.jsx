import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import EntradaCliente from './Pages/EntradaCliente';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path='/Dashboard' element = { <EntradaCliente />} />
        </Routes>
    );
};

export default AppRoutes;