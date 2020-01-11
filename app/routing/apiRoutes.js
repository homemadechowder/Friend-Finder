
var survey = require("../data/friends")

console.log(survey)

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(survey);
    });
  

    app.post("/api/friends", function(req, res) {
      console.log("Survey Entry Data:");
      console.log(req.body);
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
        var newSurvey = req.body;

      // Using a RegEx Pattern to remove spaces from newCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newSurvey.routeName = newSurvey.name.replace(/\s+/g, "").toLowerCase();

        survey.push(newSurvey);

        res.json(newSurvey);
    });
  
    
};

  