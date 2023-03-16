db.produtos.find(
  {
    ingredientes: { $elemMatch: { $eq: "picles" } },
  },
  {
    _id: 0,
    nome: 1,
    valoresNutricionais: { $slice: 3 },
    ingredientes: 1,
  },
);
