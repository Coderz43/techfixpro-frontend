exports.getProducts = (req, res) => {
  res.json([
    { id: 1, name: "USB Cable", price: 5 },
    { id: 2, name: "Fast Charger", price: 15 },
    { id: 3, name: "Screen Protector", price: 7 }
  ]);
};
