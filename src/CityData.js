import axios from 'axios'
import React, { useEffect, useState } from 'react'


const CityData = () => {


    const [data, setData]=useState([]);

    useEffect(()=>{
        
        async function fetchData()
        {
            let data=await axios.get('https://xcountries-backend.azurewebsites.net/all');
            setData(data.data);

        }
        fetchData()
    })
  return (
    <div>
 <Grid container spacing={2}>
        {data.map((item, index)=>(


<Card>
      <CardMedia
        sx={{ height: 140 }}
        image={item.flag}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
     
      </CardContent>
    
    </Card>


        
        )

        )}

    </Grid>
    </div>
  )
}

export default CityData