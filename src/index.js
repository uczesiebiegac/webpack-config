import "./styles/index.scss";


const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1, 
    redifinedMoonstone: 4,
}

const eGR = { 
    ...elvenShieldRecipe,
    leather: 1, 
    redifinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(eGR);