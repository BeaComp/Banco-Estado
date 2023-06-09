import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import EntradaCliente from './Pages/EntradaCliente';
import TelaResumo from './Pages/TelaResumo';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path='/Sistema' element = { <EntradaCliente />} />
            <Route exact path='/resumo' element = { <TelaResumo />} />
        </Routes>
    );
};

export default AppRoutes;