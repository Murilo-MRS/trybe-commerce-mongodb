db.produtos.find(
  {},
  {
    $expr: {
      $gt: ["$curtidas", "$vendidos"],
    },
  },
);
db.produtos.find({}, { _id: 0, nome: 1 });
