import { useState,useEffect } from "react";




function Api() {
    const accountId = import.meta.env.REACT_APP_accountId;
    const apiKey = import.meta.env.REACT_APP_apiKey;
  const [conversionData, setConversionData] = useState('');
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getConversionData() {
      try {
        // Your API request code here
  /*       const auth = btoa(`${accountId}:${apiKey}`);
        const response = await fetch('https://xecdapi.xe.com/v1/convert_from.csv/?from=GBP&to=*&amount=1', {
          // ... Request headers and options ...

          method: 'GET',
          headers: {
            'Authorization': `Basic ${auth}`,
          },
          params: {
            from: 'GBP',        // Specifies the source currency
            to: '*',             // Specifies the target currency (here, it's set to *)
            amount: 1,          // Specifies the amount to convert
            currencies: 'USD,EUR,GBP', // Specify the currencies you want to retrieve
            format: 'csv',      // Specify the response format as CSV
          },
        });
 */

         // Construct the URL with query parameters
       /*   const fromCurrency = 'GBP';
         const amount = 1;
         const format = 'csv'; */
 
       /*   const apiUrl = new URL('https://xecdapi.xe.com/v1/convert_from.csv');
         apiUrl.searchParams.append('from', fromCurrency);
         apiUrl.searchParams.append('to', '*'); // '*' represents ALL currencies
         apiUrl.searchParams.append('amount', amount.toString());
         apiUrl.searchParams.append('format', format);
  */
         const apiUrl = 'https://xecdapi.xe.com/v1/convert_from.csv/?from=GBP&to=*&amount=1';
         // Encoding credentials to Base64
         const auth = btoa(`${accountId}:${apiKey}`);
         /* const response = await fetch(apiUrl.toString(), {
           method: 'GET',
           headers: {
             'Authorization': `Basic ${auth}`,
           },
         });
         if (!response.ok) {
            throw new Error('Network response was not ok');
          }
   */
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Basic ${auth}`,
            },
          });
  
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          const csvData = await response.text();
          console.log('Conversion Data (CSV):', csvData);

        // Set the fetched data in the state to trigger a re-render
        setConversionData(csvData);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error:', error);
        // setError(error.message || 'An error occurred while fetching data.');
      }
    }

    // Fetch data initially when the component mounts
    getConversionData();

    // Set up a setInterval to fetch data at a predefined interval (e.g., every 5 minutes)
    const interval = setInterval(() => {
      getConversionData();
    }, 10800000); // 300000 milliseconds = 5 minutes

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // The empty array [] ensures that this effect runs only once when the component mounts

  return (
    <div>
    {error ? (
      <div>Error: {error}</div>
    ) : (
      <div id="conversionData">{conversionData}</div>
    )}
  </div>
  );
}

export default Api;


