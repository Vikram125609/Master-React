// import React from 'react'
// import { Route, Routes } from 'react-router-dom';
// import Tut56 from './components/Tut56';
// import Contact from './components/Tut56/Contact';
// const App = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<Tut56 />} />
//                 <Route path="/contact" element={<Contact />} />
//             </Routes>
//         </>
//     );
// }
// export default App; 

import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}