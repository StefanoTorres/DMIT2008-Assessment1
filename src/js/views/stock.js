//This file contains a function that creates the template markup for the html that will be the displayed stock data

//brings in the data of the stocks
function stockView(stocks){

    //creates an array of template strings
    const templateMarkup = 
    `<ul>
        <li>${stocks['Meta Data']['2. Symbol']}</li>
        <li>Current price: ${stocks['Time Series (5min)'][stocks['Meta Data']['3. Last Refreshed']]['1. open']}</li>
        <li>Date and Time: ${stocks['Meta Data']['3. Last Refreshed']}</li>
    </ul>`

    //returns the array of template strings
    return templateMarkup
}

export default stockView