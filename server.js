const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

app.db = router.db;

const rules = auth.rewriter({
  users: 660,
  studio_rent: 644,
  tattoo_artist_schedule: 644,
  jobs: 660,
  historyCall: 660,
});

app.use(middlewares);
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
