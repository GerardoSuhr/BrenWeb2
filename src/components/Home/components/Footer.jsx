
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header () {
    return (   
        
      <Box position="sticky" bottom={0} sx={{display:"flex", flexDirection:"row", width:'100%', height:'5%', background: 'linear-gradient(90deg, transparent -50%, white,  #75AADB)'}}>        
         
                <Typography display="flex" width='100%' alignItems="center" JustifyItems="center" sx={{ fontStyle: 'italic' }}>
                <Box sx={{padding: '0 0 0 20px', fontSize:{xs: '0.5em',
          sm: '0.5em',
          md: '0.5em',
          lg: '1.2em'}}}>
                    <p>Todos los derechos reservados Brenda Sardón 2023. Diseño Web by Gerardo Suhr</p>
                </Box>             
                
            </Typography>

            <Box p={2} alignSelf="end" display="flex" flexDirection="row">
                    <a href="https://www.linkedin.com/in/brenda-sard%C3%B3n-ply-078566226/" target="_blank">
                <LinkedInIcon sx={{padding: {xs: '0 1em 0 0', sm: '0 1em 0 0', md: '0 1em 0 0' , lg:  '0 2em 0 0' },  color:"black"}} fontSize="large">link</LinkedInIcon>
                        </a>
                        <a href="https://www.instagram.com/brensardon/" target="_blank">
                <InstagramIcon sx={{padding: {xs: '0 1em 0 0', sm: '0 1em 0 0', md: '0 1em 0 0' , lg:  '0 2em 0 0' }, color:"black"}} fontSize="large">link</InstagramIcon>
                        </a>
               
            </Box>     
    </Box>
    
   )
}

export default Header