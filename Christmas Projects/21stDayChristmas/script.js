document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        "Gingerbread Cookies: Mix 3 cups flour, 1 tsp baking soda, 1 tbsp ground ginger, 1 tbsp ground cinnamon, 1/2 tsp ground cloves, 1/2 tsp ground nutmeg, 1/2 tsp salt. In another bowl, beat 3/4 cup softened butter, 3/4 cup brown sugar, 1 egg, 1/2 cup molasses, 2 tsp vanilla extract. Combine wet and dry ingredients, chill dough, roll out, cut shapes, bake at 350°F for 8-10 minutes.",
        "Sugar Cookies: Mix 2 3/4 cups flour, 1 tsp baking soda, 1/2 tsp baking powder. In another bowl, beat 1 cup softened butter, 1 1/2 cups sugar, 1 egg, 1 tsp vanilla extract, 1/2 tsp almond extract. Combine wet and dry ingredients, chill dough, roll out, cut shapes, bake at 375°F for 8-10 minutes.",
        "Chocolate Chip Cookies: Mix 2 1/4 cups flour, 1 tsp baking soda, 1/2 tsp salt. In another bowl, beat 1 cup softened butter, 3/4 cup sugar, 3/4 cup brown sugar, 1 tsp vanilla extract, 2 eggs. Combine wet and dry ingredients, stir in 2 cups chocolate chips, drop by spoonfuls onto baking sheet, bake at 375°F for 9-11 minutes.",
        "Snickerdoodles: Mix 2 3/4 cups flour, 2 tsp cream of tartar, 1 tsp baking soda, 1/4 tsp salt. In another bowl, beat 1 cup softened butter, 1 1/2 cups sugar, 2 eggs. Combine wet and dry ingredients, roll dough into balls, roll in cinnamon sugar, bake at 400°F for 8-10 minutes.",
        "Peanut Butter Cookies: Mix 1 1/4 cups flour, 1/2 tsp baking soda, 1/2 tsp baking powder, 1/4 tsp salt. In another bowl, beat 1/2 cup softened butter, 1/2 cup peanut butter, 1/2 cup sugar, 1/2 cup brown sugar, 1 egg, 1/2 tsp vanilla extract. Combine wet and dry ingredients, roll dough into balls, flatten with fork, bake at 375°F for 10-12 minutes."
    ];

    const button = document.getElementById('recipeButton');
    const recipeDiv = document.getElementById('recipe');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        recipeDiv.textContent = recipes[randomIndex];
    });
});