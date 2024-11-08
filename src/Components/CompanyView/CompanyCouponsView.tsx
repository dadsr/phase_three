import React, { useState } from "react";
import { CouponEntity } from "../../Models/CouponEntity";
import { Box, ListItemText, Menu, MenuItem, Paper, Typography, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import categoryColors from "../../Configuratoins/categoryColors";
import { useNavigate } from "react-router-dom";

interface CompanyCouponsProps {
    coupons: CouponEntity[];
}

const CompanyCouponsView: React.FC<CompanyCouponsProps> = ({ coupons }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedCoupon, setSelectedCoupon] = useState<CouponEntity | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>, coupon: CouponEntity) => {
        setAnchorEl(event.currentTarget);
        setSelectedCoupon(coupon);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedCoupon(null);
    };

    const handleMenuAction = (action: string) => {
        if (selectedCoupon) {
            switch (action) {
                case 'open':
                    // Navigate to coupon details page
                    navigate(`/coupon/${selectedCoupon.id}`);
                    break;
                case 'update':
                    // Navigate to update coupon page
                    navigate(`/update-coupon/${selectedCoupon.id}`);
                    break;
                case 'delete':
                    // Implement delete functionality
                    console.log(`Delete coupon with id: ${selectedCoupon.id}`);
                    break;
            }
        }
        handleClose();
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {coupons.map((coupon) => (
                <Box
                    key={coupon.id}
                    sx={{
                        flex: '1 1 calc(20% - 16px)',
                        maxWidth: 'calc(20% - 16px)',
                        position: 'relative',
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: 4,
                            bgcolor: categoryColors[coupon.category],
                            boxShadow: (theme) => theme.shadows[20],
                        }}
                    >
                        <IconButton
                            aria-label="more"
                            onClick={(e) => handleClick(e, coupon)}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Box>
                            <Typography variant="h5">{coupon.title}</Typography>
                            <Typography>{coupon.description}</Typography>
                            <Typography>Category: {coupon.category}</Typography>
                            <Typography>Price: ${coupon.price}</Typography>
                            <Typography>Amount: {coupon.amount}</Typography>
                            <Typography>Start Date: {coupon.startDate}</Typography>
                            <Typography>End Date: {coupon.endDate}</Typography>
                            {coupon.image && (
                                <img src={coupon.image} alt={coupon.title} style={{ maxWidth: '100%' }} />
                            )}
                        </Box>
                    </Paper>
                </Box>
            ))}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuAction('open')}>
                    <ListItemText>Open</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuAction('update')}>
                    <ListItemText>Update</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuAction('delete')}>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default CompanyCouponsView;