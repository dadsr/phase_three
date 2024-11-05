import {Company} from "../Models/Company";
import axios from "axios";
import {Customer} from "../Models/Customer";
import {API_CONFIG} from "../config";

class CompanyServices{

async getOneCompany(id: number):Promise<Company>{
    return (await axios.get<Company>(API_CONFIG.BASE_URL+"/company/"+id)).data
    }
}

const companyServices =new CompanyServices();
export default  companyServices;