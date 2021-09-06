
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 36,
  },
  AccordionDiv: {
    width: '100%',
  },
  Accordion: {
    color: 'white',
    backgroundColor: '#2b2b29', 
    iconcolor: 'white',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  MuiSvgIconroot: {
color: 'white',
  }
}));

const styles={
  links: {    
      textDecoration: "none",
      color: 'white'   
  },
  line:{
    textdecoration: 'underline',
  }
}

function MouseOver(event) {
  event.target.style.fontSize = '15px';
  event.target.style.color = 'red';
}
function MouseOut(event){
  event.target.style.fontSize ="13px";
  event.target.style.color = 'white';
}

export default function Footer() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const Desktopview = useMediaQuery('(min-width:648px)');
  const Mobiletopview = useMediaQuery('(max-width:648px)');
  
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      
      >
        {/* <Container maxWidth="lg"></Container> */}
          {/* <Grid container spacing={5}> */}
          <Grid container className={classes.root} spacing={10}>
          <Grid item xs={12}>
         {Desktopview && <Grid container justifyContent="center"  spacing={spacing}>
        
            <Grid   className={classes.control} >
              <Box><h3>SHOP BY CATEGORY</h3></Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Womens
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Mens
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut}style={styles.links} href="/" color="inherit">
                Kids
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Brands
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Shoes
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut}style={styles.links} href="/" color="inherit">
                Departments
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Clearance
                </Link>
              </Box>
            </Grid>
            <Grid   className={classes.control} >
              <Box><h3>CREDIT & PAYMENT</h3></Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Make a Payment
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Check My Balance
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                About Masseys Credit
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Credit Terms
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Apply for Credit
                </Link>
              </Box>
            </Grid>
            <Grid   className={classes.control} >
              <Box><h3>CUSTOMER SERVICE</h3></Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Order Status
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Order History
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                FAQs
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Shipping Info
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Return Policy
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Wishlist
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Site Map
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Size Chart
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Contact Us
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Accessibility
                </Link>
              </Box>
            </Grid>
            <Grid   className={classes.control} >
              <Box><h3>OUR COMPANY</h3></Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                About Us
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Catalog Request
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Online Catalog
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Privacy policy
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Terms of Use
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                COVID-19 Update
                </Link>
              </Box>
              </Grid>
       </Grid>}

{/* Mobile view */}
       
       {Mobiletopview &&  <div className={classes.AccordionDiv}>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>SHOP BY CATEGORY</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid   className={classes.control} >
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Womens
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Mens
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Kids
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links}href="/" color="inherit">
                Brands
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Shoes
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Departments
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Clearance
                </Link>
              </Box>
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>CREDIT & PAYMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid   className={classes.control} >
        <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Make a Payment
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Check My Balance
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                About Masseys Credit
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Credit Terms
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Apply for Credit
                </Link>
              </Box>
              </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>CUSTOMER SERVICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid   className={classes.control} >
        <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Order Status
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Order History
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                FAQs
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Shipping Info
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Return Policy
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Wishlist
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Site Map
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Size Chart
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Contact Us
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Accessibility
                </Link>
              </Box>
              </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>OUR COMPANY</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid   className={classes.control} >
        <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                About Us
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Catalog Request
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Online Catalog
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Privacy policy
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                Terms of Use
                </Link>
              </Box>
              <Box>
                <Link onMouseOver={MouseOver} 
                        onMouseOut={MouseOut} style={styles.links} href="/" color="inherit">
                COVID-19 Update
                </Link>
              </Box>
              </Grid>
        </AccordionDetails>
      </Accordion>
     
    </div>
         
       }

        </Grid>
          </Grid>
          {/* <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            React &reg; {new Date().getFullYear()}
          </Box> */}
     
      </Box>
    </footer>
  );
}
{/* <style>
.MuiIconButton-root: {
      color: White;
}
</style> */}