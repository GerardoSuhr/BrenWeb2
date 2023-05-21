import Logo from "../../../assets/Unaremada.png"
import { Box, Typography } from "@mui/material";
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header () {
    return (   
        
      <Box position="sticky" top={0} sx={{display:"flex", flexDirection:"row", width:'100%', height:'10%', background: 'linear-gradient(90deg, transparent -50%, white,  #75AADB)'}} >        
        
        
            <Box sx={{display:"flex", width:'20%'}}>
                <img src={Logo} alt="unaRemadaALaVez" style={{ width: '60%', maxWidth: '60%' }}/>
            </Box>
            <Hidden mdDown>
            <Typography display="flex" flexDirection="row-reverse" width='80%' alignItems="center" sx={{ fontWeight: 'bold', fontSize:{xs: '1em',
          sm: '1em',
          md: '1em',
          lg: '1.2em'}, fontStyle: 'italic', color:"black", padding: '0 2em 0 0' }}>
                <Box p={3} sx={{'&:hover': {textDecoration: 'underline'} }}>
                    <p>CONTACTO</p>
                </Box>
                <Box p={3} sx={{'&:hover': {textDecoration: 'underline'} }}>
                    <p>LOGROS</p>
                </Box>
                <Box p={3} sx={{'&:hover': {textDecoration: 'underline'} }}>
                    <p>PRÓXIMAS COMPETENCIAS</p>
                </Box>
                <Box p={3} sx={{'&:hover': {textDecoration: 'underline'} }}>
                    <p>BLOG</p>
                </Box>              
            </Typography>
            </Hidden>
            <Hidden mdUp>
                <Box display="flex" flexDirection="row" alignItems="center" sx={{ marginLeft: {xs: '15em',
          sm: '16em',
          md: '17em',
          lg: '18em'} }}>
                    <IconButton position="absolute">
                        <MenuIcon />
                    </IconButton>
                </Box>
                </Hidden>
    </Box>
    
)
}

export default Header
