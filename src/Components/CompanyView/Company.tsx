import "./Company.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import companyServices from "../../Services/CompanyServices";
import {CompanyEntity} from "../../Models/CompanyEntity";

export function Company(): JSX.Element {

    const id = +useParams().companyId!;

    const [company, setCompany] = useState<CompanyEntity>();
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
