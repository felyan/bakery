import React from 'react';
import data from "./data"; 

const DataFetching = () => {

    const salesOLW = data.salesOfLastWeek;
    const recipes = data.recipes;
    const wholesalePrices = data.wholesalePrices;

//console.log(recipes[3].ingredients[2])
    
    //console.log(recipes[0].name)

    let n = recipes.length;
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


    
  return (
    <div>DataFetching</div>
  )
}

export default DataFetching