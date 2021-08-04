const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
apiRoutes = require("./routes");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.use(apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTrackerdb", { useNewUrlParser: true });

app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));
