import React from 'react';
import data from "./data";

const SalesOfLastWeek = () => {
  const salesOLW = data.salesOfLastWeek;
  const recipes = data.recipes;

  let n = recipes.length;
  let k = salesOLW.length;  

  let sum = 0;

        for(let j = 0; j < k; j++) {
            for(let i = 0; i < n; i++) {
                if(salesOLW[j].name === recipes[i].name) {
                    var num = parseInt(recipes[i].price.slice(0, -3))
                  sum += num * parseInt(salesOLW[j].amount);
                }
            }
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'HUF',
            minimumFractionDigits: 2
        })

const totalIncome = formatter.format(sum)

  return (
    <div>
      <p>Sales of last week: {totalIncome}</p>      
    </div>
  )
}

export default SalesOfLastWeek
