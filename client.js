const axios = require('axios');

const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'
};

axios.post('http://localhost:3000/getWordLengthFrequency', data)
    .then((res) => {
        console.log(data);
        console.log("\n");

        result = res.data;
       
        for (let i = 0; i < res.data.length; i++){
            if(res.data[i]>0){
                console.log("words with length "+ [i+1]+": "+res.data[i])
            }
        }

    }).catch((err) => {
        console.error(err);
    });

   



