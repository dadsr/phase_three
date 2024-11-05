import "./Company.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import companyServices from "../../Services/CompanyServices";
import {Company} from "../../Models/Company";

export function Company(): JSX.Element {

    const id = +useParams().companyId!;

    const [company, setCompany] = useState<Company>();
    useEffect( ()=>
        {
            companyServices.getOneCompany(id)
                .then(result =>setCompany(result))
                .catch(err =>alert(err.response.data))
        },[]
    );

    return (
        <div className="Company">

        </div>
    );
}
