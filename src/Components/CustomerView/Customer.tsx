import "./Customer.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CustomerEntity} from "../../Models/CustomerEntity";
import customerServices from "../../Services/CustomerServices";

export function Customer(): JSX.Element {
    const id =+useParams().customerId!;

    const [customer,setCustomer] = useState<CustomerEntity>();
    useEffect(()=>
        {
            customerServices.getOneCustomer(id)
                .then(result => setCustomer(result))
                .catch(err=>alert(err.response.data))
        },[id]
    );

    return (
        <div className="Customer">

        </div>
    );
}
