export const recipePage = document.createElement("div");
recipePage.setAttribute("class", "recipe-page");

const RPh1 = document.createElement("h1");
RPh1.textContent = "CHECKOUT OUR ITEMS!";
recipePage.appendChild(RPh1);

const recipeIMG = document.createElement("img");
recipeIMG.src= "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24712315/Zelda_Tears_of_the_Kingdom_best_recipes_2.jpg?quality=90&strip=all&crop=0,0,100,100";
recipePage.appendChild(recipeIMG);

const RPh12 = document.createElement("h1");
RPh12.textContent = "AND MANY MORE!";
recipePage.appendChild(RPh12);

