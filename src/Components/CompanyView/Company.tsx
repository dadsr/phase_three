import "./Company.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import companyServices from "../../Services/CompanyServices";
import {CompanyEntity} from "../../Models/CompanyEntity";
import CompanyInfo from "./UpdateCoupon/CompanyInfo ";
import {useAlert} from "../../Alerts/AlertContext";

export function Company(): JSX.Element {

    const { setAlert } = useAlert();

    const id = +useParams().companyId!;
    //todo test info
    const companyData = new CompanyEntity(1, "Acme Corp", "info@acmecorp.com");
    const [company, setCompany] = useState<CompanyEntity>();

    useEffect( ()=>
        {
            companyServices.getOneCompany(id)
                .then(result =>setCompany(result))
                .catch(err =>
                    setAlert({
                        type: 'error',
                        title: 'Error',
                        message:  err.message || "An error occurred during loading data."
                    }));
        },[id]);

    return (
        <CompanyInfo company={companyData}/>
    );
}
