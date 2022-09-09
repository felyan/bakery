import React from 'react';
//import axios from 'axios';
import data from "./data"; 
//import { totalIncome } from "./SalesOfLastWeek";

const DataFetching = () => {
    const salesOLW = data.salesOfLastWeek;
    const recipes = data.recipes;
    //const ringredients = data.recipes.ingredients;
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

    // Tömb, ami a múlt heti eladásott termékek összetevinek neveit és mennyiségeit tartalmazza, termékenként
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

        for(let j = 0; j < l; j++) {
            for(let i = 0; i < k; i++) {
                if (salesOLW[j].name === recipes[i].name) {
                    const sumIng = () => {
                        for (let i = 0; i < ni(); i++) {
                            
                        } 
                    }
                    //console.log(sumIng())
                }
            }
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
                console.log(kgPrice)
                return kgPrice
            } else if (amount.incudes("l")) {
                let lPrice = parseInt(amount.substring(0, amount.lastIndexOf(' '))) / wholesalePrices[i].price;
                console.log(lPrice)
                return lPrice
                        
            } else if (amount.incudes("pc")) {
                let pcPrice = parseInt(amount.substring(0, amount.lastIndexOf(' '))) / wholesalePrices[i].price;
                console.log(pcPrice)
                return pcPrice
            
            }
            return tomb;
        }
    }

//*************************** */
// Az elfogyott összetevők összára
//*************************** */

    const totalCost = () => {
    
}
    


//****************************************************** */
// Múlt heti profit = múlt heti bevétel - összetevők összára
//******************************************************* */
    
    //const profitOLW = totalIncome - totalCost;
    
    
  return (
    <div>
          
          {/* <p>A múlt heti profit: {profitOLW}</p> */}
         
          
    </div>
  )
}

export default DataFetching
