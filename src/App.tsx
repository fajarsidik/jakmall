import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CheckoutLayout } from './layouts'
import { Delivery, Payment, Finish } from './features'
import './styles/style.scss';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CheckoutLayout/>}>
          <Route path={'/delivery'} element={<Delivery />} />
          <Route path={'/payment'} element={<Payment />} />
          <Route path={'/finish'} element={<Finish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
