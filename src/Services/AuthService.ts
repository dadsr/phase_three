import {CompanyEntity} from "../Models/CompanyEntity";
import axios from "axios";
import {CustomerEntity} from "../Models/CustomerEntity";
import {API_CONFIG} from "../Configuratoins/config";

class AuthServices{

    async login(username: string, password: string, loginType: "Admin" | "Company" | "Client"):Promise<any>{
        return (await axios.get<CompanyEntity>(API_CONFIG.BASE_URL+`/login?username=${username}&password=${password}&loginType=${loginType}`)).data
    }
}

const authServices =new AuthServices();
export default  authServices;