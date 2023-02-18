//const axios = require('axios');
const getvals=document.getElementById('subb');
const getdata=()=>
{
    axios.get('https://biopasssever-production.up.railway.app/biopass/')
    .then(function(response)
    {
        console.log(response);
    })
    .catch(function(error)
    {
        console.log(error);
    })
};

//made new file cuz old file was having some conflicts