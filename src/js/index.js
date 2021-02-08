// free Alpha vantage API Key is FGGOEPBHRR7EH0L2
import {httpGetRequest} from './util/fetch-data.js';
import stockView from './views/stock.js';
import createElementFromTemplate from './util/createElementFromTemplate.js'
import AddMarkupToPage from './util/addMarkupToPage.js'


window.addEventListener('load',function(e){
    
    const button = document.querySelector('button');
    const searchArg = document.querySelector('#symbolSearch');
    
    const searchURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&outputsize=full&apikey=FGGOEPBHRR7EH0L2&symbol=";

    button.addEventListener('click',function(e){
        console.log(e);
        let url = searchURL + searchArg.value;
        httpGetRequest(url).then(result =>{
            if (result['Error Message']){
                console.log(result);
                document.querySelector('.error p').textContent = "There was an error retrieving the data";
            }
            else{
                document.querySelector('.error p').textContent = ""
                let template = stockView(result);
                let stockElement = createElementFromTemplate(template);
                AddMarkupToPage(stockElement);
            }


        })

        e.preventDefault();
        
    })


    
})