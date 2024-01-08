// import { Grid } from "@mui/material";
// import React from "react";
// import { menuStyle } from "./MenuStyle";

// function Menu() {
//   return (
//     <>
//       <Grid container justifyContent="center" sx={menuStyle}
//       >
//         <Grid item  xs={12}>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default Menu;

import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { menuStyle } from "./MenuStyle";

function Menu() {
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    fetch('https://{splunk_server}:8089/servicesNS/-/-/data/ui/views?output_mode=json', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('sakshiprakash898@gmail.com:SPSlunk88'), // Replace with your Splunk credentials
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched Dashboard Data:', data);
        setDashboards(data.entry || []); // Assuming 'data.entry' holds dashboard information
      })
      .catch(error => {
        console.error('There was a problem fetching dashboards:', error);
      });
  }, []);

  return (
    <>
      <Grid container justifyContent="center" sx={menuStyle}>
        <Grid item xs={12}>
          <ul>
            {dashboards.map((dashboard, index) => (
              <li key={index}>{dashboard}</li> 
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default Menu;


