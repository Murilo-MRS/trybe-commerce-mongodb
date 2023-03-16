db.produtos.deleteMany(
  { 
    curtidas:
      { $lt: 50 },
  },
  { _id: 0, nome: 1 },
);
db.produtos.find({}, { _id: 0, nome: 1 });
