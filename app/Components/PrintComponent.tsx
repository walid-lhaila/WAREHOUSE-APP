import * as Print from 'expo-print';
import { useEffect } from 'react';

function PrintComponent({ productDetails }) {
    const generateHTML = () => {
        const totalQuantity = productDetails?.stocks?.reduce((total, stock) => total + stock.quantity, 0) || 0;

        return `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; }
            .divider { border-top: 2px solid #000; margin: 20px 0; }
            .details-container { display: flex; justify-content: space-between; }
            .barcode-container { text-align: center; margin-top: 20px; }
            .text-label { font-weight: bold; }
            .text-value { margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Product Report</h2>
          </div>
          
          <div class="divider"></div>

          <div class="details-container">
            <div>
              <p class="text-label">Product Name:</p>
              <p class="text-value">${productDetails.name}</p>
              
              <p class="text-label">Product Type:</p>
              <p class="text-value">${productDetails.type}</p>
              
              <p class="text-label">Price:</p>
              <p class="text-value">${productDetails.price} DH</p>
              
              <p class="text-label">Solde:</p>
              <p class="text-value">${productDetails.solde} DH</p>
            </div>

            <div>
              <p class="text-label">Supplier:</p>
              <p class="text-value">${productDetails.supplier}</p>
              
              <p class="text-label">Quantity:</p>
              <p class="text-value">${totalQuantity}</p>
              
              <p class="text-label">Barcode:</p>
              <p class="text-value">${productDetails.barcode}</p>
            </div>
          </div>

          <div class="divider"></div>

          <div class="barcode-container">
            <p style="font-size: 40px;">${productDetails.barcode}</p>
          </div>
        </body>
      </html>
    `;
    };

    const handlePrint = async () => {
        try {
            const html = generateHTML();
            const { uri } = await Print.printToFileAsync({ html });
            await Print.printAsync({ uri });
        } catch (error) {
            console.error('Error printing:', error);
        }
    };

    useEffect(() => {
        handlePrint();
    }, []);

    return null;
}

export default PrintComponent;