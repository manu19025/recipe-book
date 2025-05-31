document.getElementById('recipeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('recipeName').value;
  const prepTime = document.getElementById('prepTime').value;
  const ingredientsRaw = document.getElementById('ingredients').value;
  const stepsRaw = document.getElementById('steps').value;

  const recipeId = 'R' + Date.now();
  const date = new Date().toLocaleDateString();

  // Format ingredients: split by comma
  const ingredientsList = ingredientsRaw.split(',').map((item, index) => `${index + 1}. ${item.trim()}`).join('<br>');

  // Format steps: split by period
  const stepsList = stepsRaw.split('.').filter(step => step.trim() !== '')
    .map((step, index) => `Step ${index + 1}: ${step.trim()}.`).join('<br>');

  const recipeCard = document.createElement('div');
  recipeCard.className = 'recipe-card';
  recipeCard.innerHTML = `
    <h3>${name}</h3>
    <div class="recipe-meta">
      <strong>ID:</strong> ${recipeId} | 
      <strong>Time:</strong> ${prepTime} minutes | 
      <strong>Date:</strong> ${date}
    </div>
    <p><strong>Ingredients:</strong></p>
    <p>${ingredientsList}</p>
    <p><strong>Preparation Steps:</strong></p>
    <p>${stepsList}</p>
  `;

  document.getElementById('recipes').appendChild(recipeCard);

  this.reset();
});