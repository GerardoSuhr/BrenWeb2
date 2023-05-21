import { Box, Typography, Hidden } from "@mui/material";
import FotoPrincipal from "../../../assets/BrenAguaBrillante.jpeg"

function Body () {
    return (   
            <Box sx={{width: '100vw'}} display="flex" flexDirection="column"              >
               <Box display="flex" flexDirection="column" justifyItems="center" alignItems="center" sx={{width: '100vw', height: '25vh',  fontSize: {
          xs: '1em',
          sm: '1.5em',
          md: '2em',
          lg: '2.5em'
        }, margin: '0 0 -2em 0'}}>
                <Box display="flex" sx={{padding: '0 3em 0 0', fontStyle: 'italic'}} >
                <Box sx={{padding:"0 1em 0 0", fontWeight:"bold"}}>
                    <p>BRENDA</p>
                </Box>
                <Box sx={{padding:"0 1em 0 0" }} >
                    <p>SARDÓN</p>
                </Box>
                </Box> 
                <Box display="flex" sx={{padding: '0 0 0em 1em', fontStyle: 'italic', margin:'-1em 0 0 0'}} >
                <Box sx={{padding:"0 0 0 1em" }}>
                    <p>REMERA </p>
                </Box>
                <Box sx={{padding:"0 0 0 1em" , fontWeight:"bold"}}>
                    <p>PARALÍMPICA</p>
                </Box>
                </Box> 
                </Box>   
                <Hidden mdDown>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{width:'100%', margin: '2em 0 0 0'}}>
                    <Box  sx={{maskImage:['linear-gradient(to left, transparent, black 10%, black 95%, transparent)', 'linear-gradient(to right, transparent, black 10%, black 95%, transparent)'],zIndex:'-1'}}  >
                        <img src={FotoPrincipal} alt="ImageRowing" sx={{maskImage:'linear-gradient(to top, transparent, black 10%, black 90%, transparent)'}} />
                   </Box>
                   <Box display="flex" flexDirection="column"  justifyContent="center" alignItems="center">
                    <h1>LOREM IPSUM</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quis recusandae delectus iusto iste voluptas minus architecto id! Nesciunt dolor quia labore provident adipisci, quis ducimus facere dicta veniam non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, numquam repudiandae sapiente laboriosam id quam porro atque perspiciatis iure ad nihil praesentium odit, perferendis nobis. Modi voluptatum ipsum voluptate veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nobis exercitationem, nemo, at vel quaerat ipsum sed delectus voluptatibus adipisci, explicabo odit molestiae deleniti maiores hic sequi! Illo, cumque quod!</p>
                   </Box> 
                   </Box>
                   </Hidden>
                   <Hidden mdUp>
                   <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{width:'100%', margin: '-em 0 0 0'}}>
                    <Box  sx={{maskImage:['linear-gradient(to left, transparent, black 10%, black 95%, transparent)', 'linear-gradient(to right, transparent, black 10%, black 95%, transparent)'],zIndex:'-1'}}  >
                        <img src={FotoPrincipal} width="100%" alt="ImageRowing"/>
                   </Box>
                   <Box display="flex" flexDirection="column"  justifyContent="center" alignItems="center" sx={{width:'100%', margin: '0 0 0 0', fontSize:{xs: '0.5em', sm: '0.5em', md: '0.5em', lg: '1.2em'}}}>
                    <h1>LOREM IPSUM</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nobis exercitationem, nemo, at vel quaerat ipsum sed delectus voluptatibus adipisci, explicabo odit molestiae deleniti maiores hic sequi! Illo, cumque quod!</p>
                    </Box>
                   </Box> 
                   </Hidden>
            </Box>

        )
    }
    
 export default Body        