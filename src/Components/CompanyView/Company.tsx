import "./Company.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import companyServices from "../../Services/CompanyServices";
import {CompanyEntity} from "../../Models/CompanyEntity";
import CompanyInfo from "./CompanyInfo";
import CompanyCouponsView from "./CompanyCouponsView";
import {useAlert} from "../../Alerts/AlertContext";
import {CouponEntity} from "../../Models/CouponEntity";
import {Box, Grid} from "@mui/material";

export function Company(): JSX.Element {

    const { setAlert } = useAlert();
    const id = +useParams().companyId!;
    //todo test info
    const testCompany = new CompanyEntity(1, "Acme Corp", "info@acmecorp.com");
    const testCoupons:CouponEntity[] =[
        new CouponEntity(1,"title","description",1, "FOOD",99,10,"01/01/2025","01/01/2026","XXX"),
        new CouponEntity(2,"title","description",1, "FASHION",99,10,"01/01/2025","01/01/2026","XXX"),
        new CouponEntity(3,"title","description",1, "ELECTRONICS",99,10,"01/01/2025","01/01/2026","XXX"),
        new CouponEntity(4,"title","description",1, "TRAVEL",99,10,"01/01/2025","01/01/2026","XXX"),
        new CouponEntity(5,"title","description",1, "ELECTRONICS",99,10,"01/01/2025","01/01/2026","XXX"),
        new CouponEntity(6,"title","description",1, "FOOD",99,10,"01/01/2025","01/01/2026","XXX"),
        new CouponEntity(7,"title","description",1, "FOOD",99,10,"01/01/2025","01/01/2026","XXX")
    ];


    const [company, setCompany] = useState<CompanyEntity>();
    const [coupons, setCoupons] = useState<CouponEntity[]>([]);
    const [isLoading, setIsLoading] = useState(true);

   /* useEffect( ()=> { companyServices.getCompanyDetails(id)
        .then(result =>setCompany(result))
        .catch(err =>
            setAlert({
                type: 'error',
                title: 'Error',
                message:  err.message || "We're having trouble loading your company information right now."
            }));},[id]);
            */

//todo  testing only
    useEffect(() => {
        setCompany(testCompany)
        setCoupons(testCoupons)
    }, []);

    /*useEffect( ()=> {
        setIsLoading(true);
        companyServices.getCompanyCoupons(id)
            .then(result =>{
                setCoupons(result)
                setIsLoading(false);
            })
            .catch(err =>
                setAlert({
                    type: 'error',
                    title: 'Error',
                    message:  err.message || "We're having trouble loading your company's coupons  right now."
                }));
    },[id,setAlert]);

    if (isLoading) {
        return <div>Loading coupons...</div>;
    }

     */
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}> {/* Adjust size for responsiveness */}
                    <CompanyInfo company={testCompany} />
                </Grid>
                <Grid item xs={12} md={8}> {/* Adjust size for responsiveness */}
                    <CompanyCouponsView coupons={testCoupons} />
                </Grid>
            </Grid>
        </Box>
);
}
