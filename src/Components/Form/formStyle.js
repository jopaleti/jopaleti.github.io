import { padding } from "@mui/system";
import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    heading: {
        fontWeight: '600',
        fontSize:'30px',
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '8%'
    },
    formShadow: {
        boxShadow: '0px 2px 12px blue',
        marginTop: '12%',
        padding: '0 25px 15px'
    },
    validateForm: {
        display: 'block',
        color: 'red',
        '::after': {
            content: "'!'",
            fontSize: '18px',
            color: 'red',
            marginLeft: '5px',
        }
    }
})