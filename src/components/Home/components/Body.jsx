
import { Box, Typography } from "@mui/material";


function Body () {
    return (   
            <Box sx={{width: '100vw', height: '150vh'}} display="flex" 
              >
               <Box display="flex" flexDirection="column" justifyItems="center" alignItems="center" sx={{width: '100vw', height: '25vh',  fontSize: {
          xs: '1em',
          sm: '1.5em',
          md: '2em',
          lg: '2.5em'
        },}}>
                <Box display="flex" sx={{padding: '0 3em 0 0', fontStyle: 'italic'}} >
                <Box sx={{padding:"0 1em 0 0", fontWeight:"bold"}}>
                    <p>BRENDA</p>
                </Box>
                <Box sx={{padding:"0 1em 0 0" }} >
                    <p>SARDÓN</p>
                </Box>
                </Box> 
                <Box display="flex" sx={{padding: '0 0 0 1em', fontStyle: 'italic', margin:'-1em 0 0 0'}} >
                <Box sx={{padding:"0 0 0 2em" }}>
                    <p>REMERA </p>
                </Box>
                <Box sx={{padding:"0 0 0 2em" , fontWeight:"bold"}}>
                    <p>PARALÍMPICA</p>
                </Box>
                </Box> 
                </Box>   

              
            </Box>

        )
    }
    
 export default Body        