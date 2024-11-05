import axios from "axios";
import {Customer} from "../Models/Customer";
import {API_CONFIG} from "../config";

class CustomerServices{

    async getOneCustomer(id: number):Promise<Customer> {
        return (await axios.get<Customer>(API_CONFIG.BASE_URL+"/customer/"+id)).data
    }

}

const customerServices =new CustomerServices();
export default  customerServices;