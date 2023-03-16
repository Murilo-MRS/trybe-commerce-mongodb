db.produtos.find(
  {
    nome: { $gte: 500 },
  },
  { _id: 0, nome: 1 },
);
