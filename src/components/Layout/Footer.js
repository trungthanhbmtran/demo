import { Divider, Grid, Stack, Typography, styled, Paper, List, ListItemText, ListItem, ListItemIcon } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ShowRoom = [
    "Số 10, Đường 2A, KCN Biên Hoà 2,Phường An Bình, Tp. Biên Hòa, Đồng Nai",
    "Đồng Nai	: 0332 533 343 - 0982 421 343",
    "Hà Nội	: 0901 624 343 - 0919 664 343",
    "Hồ Chí Minh  	: 0918 744 343 - 0937 378 343",
    "Bình Dương 	: 0933 471 343 - 0933 671 343",
    "Quy Nhơn	: 0981 718 343 - 0919 421 343"
]

const Customer = [
    "Hướng dẫn mua hàng",
    "Hướng dẫn thanh toán",
    "Các hình thức mua hàng",
    "Kiểm tra đơn hàng",
    "Sơ đồ đường đi"
]

const Service = [
    "Chính sách bán hàng",
    "Chính sách bảo hành sản phẩm",
    "Chính sách bảo mật thông tin",
    "Chính sách vận chuyển",
    "Quy trình giao hàng"
]

const Footer = () => {
    return (
        //     <Stack
        //     direction="row"
        //     divider={<Divider orientation="vertical" flexItem />}
        //     spacing={2}
        //   >
        //     <Item>
        //         Máy chế biến gỗ đại phúc vinh
        //     </Item>
        //     <Item>Chăm sóc khách hàng</Item>
        //     <Item>Chính sách bán hàng</Item>
        //   </Stack>
        <Grid container justifyContent="space-around" spacing={2}>
            <Grid item md={6} xs={12} >
                <Typography variant="subtitle2">
                    MÁY CHẾ BIẾN GỖ ĐẠI PHÚC VINH
                </Typography>
                <Divider variant="fullWidth" />
                <List component={"nav"} aria-label="main mailbox folders">
                    {
                        ShowRoom.map((e, i) =>
                            <ListItem key={i}>
                                <ListItemText
                                    primary={e}
                                >
                                </ListItemText>
                            </ListItem>
                        )
                    }
                </List>
                {/* <Typography variant="body1">
                    Đồng Nai	: 0332 533 343 - 0982 421 343
                </Typography>
                <Typography variant="body1">
                    Hà Nội	: 0332 533 343 - 0982 421 343
                </Typography>
                <Typography variant="body1">
                    Hồ Chí Minh : 0332 533 343 - 0982 421 343
                </Typography>
                <Typography variant="body1">
                    Quy Nhơn	: 0332 533 343 - 0982 421 343
                </Typography> */}
            </Grid>
            <Grid item md={3} xs={12}>
                <Typography variant="subtitle2">
                    CHĂM SÓC KHÁCH HÀNG
                </Typography>
                <Divider variant="fullWidth" />
                <List component={"nav"} aria-label="main mailbox folders">
                    {
                        Customer.map((e, i) =>
                            <ListItem key={i} >
                                <ListItemIcon >
                                    <ArrowForwardIosIcon />
                                </ListItemIcon>

                                <ListItemText
                                    primary={e}
                                >
                                </ListItemText>
                            </ListItem>
                        )
                    }
                </List>
            </Grid>
            <Grid item md={3} xs={12}>
                <Typography variant="subtitle2">
                    CHÍNH SÁCH BÁN HÀNG
                </Typography>
                <Divider variant="fullWidth" />
                <List component={"nav"} aria-label="main mailbox folders">
                    {
                        Service.map((e, i) =>
                            <ListItem key={i}>
                                <ListItemIcon >
                                    <ArrowForwardIosIcon />
                                </ListItemIcon>

                                <ListItemText
                                    primary={e}
                                >
                                </ListItemText>
                            </ListItem>
                        )
                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default Footer