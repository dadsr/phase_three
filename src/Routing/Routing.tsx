import "./Routing.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Components/Home/Home";
import {Admin} from "../Components/AdministratorView/Admin";
import {Company} from "../Components/CompanyView/Company";
import {Customer} from "../Components/CustomerView/Customer";
import {NotFound} from "../Components/NotFound/NotFound";
import {Login} from "../Components/Login/Login";


export function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/login" Component={Login}/>
                <Route path="/admin" Component={Admin}/>
                <Route path="/company/:companyId" Component={Company}/>
                <Route path="/coustomer/:coustomerId" Component={Customer}/>
                <Route path="*" Component={NotFound}/>
            </Routes>
        </div>
    );
}
