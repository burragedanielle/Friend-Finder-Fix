const path = require('path');

module.exports = (app) => {
    app.get("/", (_request, response) => {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get("/survey", (_request, response) => {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}