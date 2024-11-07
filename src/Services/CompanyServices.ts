import {CompanyEntity} from "../Models/CompanyEntity";
import axios from "axios";
import {CustomerEntity} from "../Models/CustomerEntity";
import {API_CONFIG} from "../Configuratoins/config";

class CompanyServices{

async getCompanyDetails(id: number):Promise<CompanyEntity>{
    return (await axios.get<CompanyEntity>(API_CONFIG.BASE_URL+"/company/"+id)).data
    }

async getCompanyCoupons(id: number):Promise<CompanyEntity[]>{
    return (await axios.get<CompanyEntity[]>(API_CONFIG.BASE_URL+"/company/all/"+id)).data
}

}

const companyServices =new CompanyServices();
export default  companyServices;