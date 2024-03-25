 //document.getElementById("people-dropdown");
 let adjective1 = document.getElementById("adjective1");
 let adjective2 = document.getElementById("adjective2");
 let ingredient1 = document.getElementById("ingredient1");
 let ingredient2 = document.getElementById("ingredient2");
 let ingredient3 = document.getElementById("ingredient3");
 let ingredient4 = document.getElementById("ingredient4");
 let ingredient5 = document.getElementById("ingredient5");
 let noun1 = document.getElementById("noun1");
 let noun2 = document.getElementById("noun2");
 let adjective3 = document.getElementById("adjective3");
 let pluralnoun = document.getElementById("pluralnoun");
 let adjective4 = document.getElementById("adjective4");
 let adjective5 = document.getElementById("adjective5");
 let madLibTextResult = document.getElementById("madlib-text");
 let generateMadLibBtn = document.getElementById("generate-madlib-btn");

let adjective1_value;
let adjective2_value;
let ingredient1_value;
let ingredient2_value;
 let ingredient3_value;
 let ingredient4_value;
 let ingredient5_value;
 let noun1_value;
 let noun2_value;
 let adjective3_value;
 let pluralnoun_value;
 let adjective4_value;
 let adjective5_value;

 adjective1.addEventListener("change", (e) => (adjective1 = e.target.value));
 adjective2.addEventListener("change", (e) => (adjective2 = e.target.value));
 ingredient1.addEventListener("change", (e) => (ingredient1 = e.target.value));
 ingredient2.addEventListener("change", (e) => (ingredient2 = e.target.value));
 ingredient3.addEventListener("change", (e) => (ingredient3 = e.target.value));
 ingredient4.addEventListener("change", (e) => (ingredient4 = e.target.value));
 ingredient5.addEventListener("change", (e) => (ingredient5 = e.target.value));
 ingredient1.addEventListener("change", (e) => (ingredient1 = e.target.value));
 noun1.addEventListener("change", (e) => (noun1 = e.target.value));
 noun2.addEventListener("change", (e) => (noun2 = e.target.value));
 adjective3.addEventListener("change", (e) => (adjective3 = e.target.value));
 pluralnoun.addEventListener("change", (e) => (pluralnoun = e.target.value));
 adjective4.addEventListener("change", (e) => (adjective4 = e.target.value));
 adjective5.addEventListener("change", (e) => (adjective5 = e.target.value));

    generateMadLibBtn.addEventListener("click", () => {
        const madLibsArr = [
          `Once upon a time, in a cozy little kitchen, there was a(n) ${adjective1} baker who loved to whip up delicious treats. One sunny morning, they decided to bake a(n) ${adjective2} cake for a special occasion.
          First, they gathered all the necessary ingredients: ${ingredient1}, ${ingredient2}, ${ingredient3}, and a dash of ${ingredient4}. With a sprinkle of ${ingredient5} and a dollop of ${noun1}, they began mixing the batter, humming a merry tune as they worked.
          As the sweet aroma filled the air, the baker felt a surge of excitement. This cake was going to be their masterpiece! Into the oven, the batter went, and they eagerly awaited its transformation.
          But oh no! Just as they were about to pull the cake out of the oven, they realized they had forgotten to add the ${noun2}! Panicked, they quickly improvised, hoping for the best.
          When they finally removed the cake from the oven, they were greeted with a(n) ${adjective3} sight. It looked nothing like they had expected! But undeterred, they decided to embrace the imperfection and decorate the cake with ${pluralnoun}.
          To their surprise, the cake turned out to be a hit! Despite its unconventional appearance, everyone raved about its ${adjective4} flavor and ${adjective5} texture. The baker beamed with pride, knowing that sometimes, the most unexpected twists can lead to the sweetest results.
          And so, with hearts full of joy and bellies full of cake, they celebrated a whimsical baking adventure that would be remembered for years to come.`,
        ];
      const randomIndex = Math.floor(Math.random() * madLibsArr.length);
      
        if (
         [adjective1, adjective2, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, noun1, noun2, adjective3, pluralnoun, adjective4, adjective5].some(
             (userSelection) => userSelection === undefined
           )
         ) {
           alert("Choose an option from the dropdown menu");
           return;
         }
          madLibTextResult.innerText = madLibsArr[randomIndex];
         //resetValues();
       });