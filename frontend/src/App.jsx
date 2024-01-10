import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Dashboardadmin from "./component/dashboard/Dashadm";
import AddProductadmin from "./component/dashboard/tambahprodadm";
import Productadmin from "./component/dashboard/prodadm";
import Reportsadmin from "./component/dashboard/reportsadm";
import Barang from "./component/dashboard/barang";
import Masuk from "./component/dashboard/masuk";
import Keluar from "./component/dashboard/keluar";
import Staf from "./component/dashboard/staf";
import Stafrep from "./component/dashboard/stafreports";

function App () {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/admin" element={<Dashboardadmin/>}/>
            <Route path="/addprodadmin" element={<AddProductadmin/>}/>
            <Route path="/prodadmin" element={<Productadmin/>}/>
            <Route path="/reportadmin" element={<Reportsadmin/>}/>
            <Route path="/barang" element={<Barang/>}/>
            <Route path="/masuk" element={<Masuk/>}/>
            <Route path="/keluar" element={<Keluar/>}/>
            <Route path="/staf" element={<Staf/>}/>
            <Route path="/stafrep" element={<Stafrep/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;