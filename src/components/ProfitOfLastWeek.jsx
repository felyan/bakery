import React from 'react';
//import axios from 'axios';
import data from "./data"; 
//import { totalIncome } from "./SalesOfLastWeek";

const ProfitOfLatWeek = () => {
    const salesOLW = data.salesOfLastWeek;
    const recipes = data.recipes;
    const wholesalePrices = data.wholesalePrices;

//console.log(recipes[3].ingredients[2])
    
    //console.log(recipes[0].name)

    let n = recipes.length;
    let k = salesOLW.length;
    let l = wholesalePrices.length; 
    
    //Az egyes termékek(receptek) összetevőinek száma
    const ni = () => {
        for (let i = 0; i < n; i++){
            return recipes[i].ingredients.length;
        }
    }

    // Tömb, ami a múlt heti eladott termékek összetevőinek neveit és mennyiségeit tartalmazza, termékenként
    const ings = () => {
        let tomb = [];
        for (let i = 0; i < n; i++){
            for (let j = 0; j < ni(); j++){
                if (salesOLW[j].name === recipes[i].name) {                    
                    tomb.push(recipes[i].ingredients)                    
                }                
            }            
        }
        
        return tomb;
    }    

    //console.log(ings())
    //console.log(ings()[2][1].name)
    //console.log(ings()[2][1].amount)
    //console.log(ings()[2][1].amount.substring(0, ings()[2][1].amount.lastIndexOf(' ')))

    //tömb, ami az eladott termék összetevőit összesíti, összetevőnként
    const amounts = () => {
        let sum = 0;
        for (let i = 0; i < ings().length; i++) {
            for (let j = 0; j < ings()[i].length; j++) {
                    if (ings()[i][j].name === ings()[i+1][j+1].name) {
                        //console.log(ings()[i][j])
                        let amount = parseInt(ings()[i][j].amount.substring(0, ings()[i][j].amount.lastIndexOf(' ')));
                        sum += amount;
                        //console.log(sum)
                    }
            }
            return sum;
        }    
    } 
    
    //console.log(amounts())

//*********************************** */
// Melyik összetevőből mennyi fogyott?
//********************************** */

    const usedIngs = () => {
        let tomb = [];

        for(let i = 0; i < k; i++) {
            for(let j = 0; j < n; j++) {
                if (salesOLW[i].name === recipes[j].name) {
                    for (let m = 0; m < ings().length; m++){
                        const usedAmount = ings()[m].amount * salesOLW[i].amount;
                        tomb.push(usedAmount);
                        
                    }
                }
            }
        }
        return tomb;
    }
        


//*************************** */
// Az egyes összetevők egységára
//************************** */


    const unitPrices = () => {
        let tomb = [];
        
        for (let i = 0; i < l; i++) {
            let amount = wholesalePrices[i].amount;
            
            if (amount.incudes("kg")) {
                let kgPrice = parseInt(amount.substring(0, amount.lastIndexOf(' '))) / wholesalePrices[i].price;
                let gPrice = kgPrice / 1000;
                wholesalePrices[i].unitPrice = gPrice;
                console.log(kgPrice);
                console.log(gPrice);
                return gPrice;
            } else if (amount.incudes("l")) {
                let lPrice = parseInt(amount.substring(0, amount.lastIndexOf(' '))) / wholesalePrices[i].price;
                let mlPrice = lPrice / 1000;
                wholesalePrices[i].unitlPrice = mlPrice;
                console.log(lPrice);
                console.log(mlPrice);
                return mlPrice;                        
            } else if (amount.incudes("pc")) {
                let pcPrice = (parseInt(amount.substring(0, amount.lastIndexOf(' '))) / wholesalePrices[i].price);
                wholesalePrices[i].unitcPrice = pcPrice;
                console.log(pcPrice);
                return pcPrice;            
            }
            tomb.push(wholesalePrices[i].unitPrice)
            return tomb;
        }
    }


//*************************** */
// Az elfogyott összetevők összára
//*************************** */

    const totalCost = () => {
        let sum = 0;
        for (let i = 0; i < usedIngs().length; i++) {
            for (let j = 0; j < l; j++) {
                if (usedIngs[i].name === wholesalePrices[j].name) {
                    let tomb = [];
                    let costPerUsedIngs = usedIngs[i].amount * wholesalePrices[j].unitPrice;
                    tomb.push(costPerUsedIngs)
                    sum = tomb.reduce((acc, curr) => acc + curr, 0);
                }                
            }            
        }
        return sum;
    }
     


//****************************************************** */
// Múlt heti profit = múlt heti bevétel - összetevők összára
//******************************************************* */
    let totalIncome;
    const profitOLW = totalIncome - totalCost;
    

    
  return (
    <div>          
          <p>A múlt heti profit: {profitOLW}</p> 
    </div>
  )
}

export default ProfitOfLatWeek
