function calculatePizza (type, amount) {
  console.log(type, amount);
  const hundredPercentFlour = 165;    //grams
  const flour = Math.ceil(hundredPercentFlour * amount);
  const water = Math.ceil(0.65 * flour);
  const yeast = Math.ceil(0.01 * flour);
  const sugar = Math.ceil(0.02 * flour);
  const salt = Math.ceil(0.02 * flour);
  const oil = Math.ceil(0.01 * flour);  //TODO in ml

  return [flour, water, yeast, sugar, salt, oil];

};

export default calculatePizza;