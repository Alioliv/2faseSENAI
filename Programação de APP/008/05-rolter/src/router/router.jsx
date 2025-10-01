import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Pagina1 from '../pages/Pagina1';
import Pagina2 from '../pages/Pagina2';
import Pagina3 from '../pages/Pagina3';

const rauter = createBrowserRouter([
    {path: '/', element: <Home/> },
    {path: '/Paginas1', element: <Pagina1/> },
    {path: '/Paginas2', element: <Pagina2/> },
    {path: '/Paginas3', element: <Pagina3/> },
])

export default router