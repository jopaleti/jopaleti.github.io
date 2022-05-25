import { makeStyles } from "@material-ui/core";
import { width } from "@mui/system";

export default makeStyles((theme)=>({
    root: {
        color: 'red',
        backgroundColor: theme.palette.background.default
    },
    width: {
        width: '500px'
    },
    label: {
        marginTop: '10px',
        display: 'block',
        width: '90%',

    }
}));