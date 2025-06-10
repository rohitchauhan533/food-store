import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({

    mainCardContainer: {
        background: "yellow",
        width: "420px",
        height: "250px",
        display: "flex"
    },
    
    shimmerContainer: {
        display: "flex",
        flexWrap: "wrap"

    },

    shimmerCard: {
        width: "200px",
        margin: "20px",
        height: "400px",
        backgroundColor: "gray"

    },

    loginBtn: {
        padding: "0 20px",


    },
    menu: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    categoryAccordion: {
        border: "1px solid black",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    },
    // resLogo: {
    //     width: "10% !important",
    //     height: "10% !important"
    // },
    resContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "20px",
        marginTop: "20px"
    }


})


export default useStyles;