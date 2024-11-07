import axios from "axios";
import {CustomerEntity} from "../Models/CustomerEntity";
import {API_CONFIG} from "../Configuratoins/config";

class CustomerServices{

    async getOneCustomer(id: number):Promise<CustomerEntity> {
        return (await axios.get<CustomerEntity>(API_CONFIG.BASE_URL+"/customer/"+id)).data
    }

}

const customerServices =new CustomerServices();
export default  customerServices;