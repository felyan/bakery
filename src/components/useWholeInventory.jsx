import React from 'react';
import data from "./data"; 

const useWholeInventory = () => {
    const recipes = data.recipes;
    const inventory = data.inventory;

    let n = recipes.length;
    let m = inventory.length;    


//************************************************* */
// inventory-ban lévő összetevők átváltása g-re, ml-re
//************************************************** */
    
    const alterAmount = () => {
        let tomb = [];
        
        for (let i = 0; i < m; i++) {
            let amount = inventory[i].amount;
            
            if (amount.incudes("kg")) {
                let ingInGramm = parseInt(amount.substring(0, amount.lastIndexOf(' '))) / 1000;
                inventory[i].amount2 = ingInGramm;
                return ingInGramm;
            } else if (amount.incudes("l")) {
                let ingInMl = parseInt(amount.substring(0, amount.lastIndexOf(' '))) / 1000;
                inventory[i].amount2 = ingInMl;
                return ingInMl;    
            }
        }
        return tomb;
    }


    // mennyiségek mértékegységek nélkül
    const clearIngsAmounts = () => {
        let tomb = [];
        for (let i = 0; i < ni; i++){
            let amount = parseInt(ings()[i].amount.substring(0, ings()[i].amount.lastIndexOf(' ')));
            tomb.push(amount)
        }
        return tomb;
    }

    const clearInventoryAmounts = () => {
        let tomb = [];
        for (let i = 0; i < m; i++){
            let amount = parseInt(alterAmount[i].substring(0, alterAmount.lastIndexOf(' ')));
            tomb.push(amount)
        }
        return tomb;
    }
    
    
    
    
//***************************************************************************************** */
// a recept/ingredients [i]. eleme alapján max hány darab készülhet => maxPieces, Math.trunc()
//***************************************************************************************** */
    // recipes[i].ingredients.length
    const ni = () => {
        for (let i = 0; i < n; i++){
            return recipes[i].ingredients.length;
        }
    }
    
    //
    const ings = () => {
        let tomb = [];
        for (let i = 0; i < n; i++){
            for (let j = 0; j < ni(); j++){
                tomb.push(recipes[i].ingredients[j])
            }            
        }
        
        return tomb;
    }    
    
    
    
    for (let i = 0; i < ni; i++) {
        for (let j = 0; j < m; j++){
            if (ings()[i].name === inventory[j].name) {            
                let maxPieces = 0;

                let possiblePieces = Math.trunc(clearInventoryAmounts()[i].amount / clearIngsAmounts()[j].amount);

                maxPieces = possiblePieces;

                let possiblePieces2 = Math.trunc(clearInventoryAmounts()[i + 1].amount / clearIngsAmounts()[j + 1].amount);
                
                if (possiblePieces2 < possiblePieces) {
                    maxPieces = possiblePieces2;
                }

                return maxPieces;
            }
        }
    } 
    

  return (
    <div>useWholeInventory</div>
  )
}

export default useWholeInventory