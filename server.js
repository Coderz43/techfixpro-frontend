const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/locales", express.static(path.join(__dirname, "locales")));

// ROUTES (IMPORTANT)
const productsRoutes = require("./routes/products.routes");
const cartRoutes = require("./routes/cart.routes");
const repairRoutes = require("./routes/repair.routes");

app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/repair", repairRoutes);

// PAGES
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/shop", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "shop.html"))
);

app.get("/services", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "services.html"))
);

app.get("/cart", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "cart.html"))
);

app.listen(PORT, () => {
  console.log(`✅ TechFix Pro running at http://localhost:${PORT}`);
});
