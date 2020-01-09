// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
var survey = [
    {
      routeName: "arale",
      name: "Arale",
      photoUrl: "https://res.cloudinary.com/teepublic/image/private/s--UEtF1hPq--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_0195c3,e_outline:48/co_0195c3,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1513405696/production/designs/2183975_1.jpg",
      q1: "5",
      q2: "5",
      q3: "5",
      q4: "5",
      q5: "5",
      q6: "5",
      q7: "5",
      q8: "5",
      q9: "5",
      q10: "5"
    }
  ];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

