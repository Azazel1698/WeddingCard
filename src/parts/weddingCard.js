import { Box, Grid } from "@mui/material";

export function WeddingCard(props) {
    const h1Style = {
        textAlign: "center",
        margin: "5px",
    };

    const h2Style = {
        textAlign: "center",
        margin: "5px",
    };

    const pStyle = {
        textAlign: "center",
        maxWidth: "380px",
        margin: "0",
        marginBottom: "5px",
    };

    return (
        <Grid
            id="rsvp"
            container
            alignItems="center"
            justify="center"
            rowSpacing={6}
            sx={{
                marginLeft: "2.5vw",
                width: "95vw",
                marginTop: "80px",
                paddingTop: "0px",
            }}>
            <Grid
                sx={{ width: "100%", marginBottom: "40px" }}
                item
                sm={12}
                md={12}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center">
                    <iframe
                        title="map-to-venue"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14912.922964460098!2d106.6922732!3d20.8627479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7be3b26b7f15%3A0xfb767616d10e5e50!2zVHJ1bmcgdMOibSB0aeG7h2MgY8aw4bubaSBI4bqjaSDEkMSDbmcgUGxhemEgSOG6o2kgUGjDsm5n!5e0!3m2!1svi!2s!4v1712461677729!5m2!1svi!2s"
                        width="100%"
                        height="200px"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Grid>
            <Grid sx={{ width: "100%" }} item sm={12} md={12}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center">
                    <h1
                        className="title"
                        style={{
                            marginTop: "-40px",
                            marginBottom: "10px",
                        }}>
                        Save the date
                    </h1>
                    <p className="bodyText" style={pStyle}>
                        Trân trọng kính mời
                    </p>
                    <h1 style={h1Style}>{props.invitation.name}</h1>
                    <p className="bodyText" style={pStyle}>
                        tới dự lễ thành hôn của hai chúng tôi vào lúc
                    </p>
                    <div
                        style={{
                            width: "95%",
                            margin: "10px 0",
                            maxWidth: "450px",
                            minWidth: "240px",
                        }}>
                        <Grid container spacing={0}>
                            <Grid item xs={4} sm={4} md={4}>
                                <Box
                                    sx={{
                                        padding: "5px 0",
                                    }}
                                    flexDirection={"column"}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <p className="h3-title" style={h2Style}>
                                        17 giờ 30'
                                    </p>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>
                                <Box
                                    sx={{
                                        padding: "5px 0",
                                        borderLeft: "1px solid black",
                                        borderRight: "1px solid black",
                                    }}
                                    flexDirection={"column"}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <p
                                        className="h3-title"
                                        style={{ ...h2Style }}>
                                        Thứ năm
                                    </p>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>
                                <Box
                                    sx={{
                                        padding: "5px 0",
                                    }}
                                    flexDirection={"column"}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <p
                                        className="h3-title"
                                        style={{ ...h2Style }}>
                                        25. 04. 2024
                                    </p>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                    <p
                        className="h3-title"
                        style={{ ...pStyle, marginBottom: "8px" }}>
                        tại:{" "}
                    </p>
                    <h1
                        className="sub-title"
                        style={{ ...h1Style, marginBottom: "15px" }}>
                        Cung Sapphire
                    </h1>
                    <p className="h3-title" style={pStyle}>
                        Trung tâm tiệc cưới
                    </p>
                    <h1
                        className="sub-title"
                        style={{ ...h1Style, marginBottom: "15px" }}>
                        Hải Đăng Plaza Hải Phòng
                    </h1>
                    <p className="h3-title" style={pStyle}>
                        19 P. Trần Khánh Dư, Ngô Quyền, Hải Phòng
                    </p>
                </Box>
            </Grid>
        </Grid>
    );
}
