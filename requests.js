const getvals=document.getElementById('subb');
const getdata=()=>
{
    axios.get('https://biopasssever-production.up.railway.app/biopass/').then(response=>
    {
        console.log(response);
    });
};

//made new file cuz old file was having some conflicts