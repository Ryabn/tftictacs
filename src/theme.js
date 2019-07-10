import {createMuiTheme} from '@material-ui/core';


const theme = createMuiTheme({
    overrides: {
        MuiCard: {
            root: {
                fontFamily: 'Quicksand'
            }
        },
        MuiCardActionArea: {
            root: {
                fontFamily: 'Quicksand'
            }
        },
        MuiCardContent: {
            root: {
                fontFamily: 'Quicksand'
            }   
        }
    },
    typography: {
        useNextVariants: true,
        body2: {
            fontFamily: 'Quicksand'
        },
        h6: {
            fontFamily: 'Quicksand'
        }
    }
});

export default theme;