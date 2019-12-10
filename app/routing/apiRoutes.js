const friendsData = require('../data/friends');

module.exports = (app) => {
    //To Retrieve All Friends Data
    app.get('/api/friends'), (req, res) => {
        res.json(friendsData);
    }

    // To add new friends 
    app.post('/api/friends'), (req, res) => {
        let newFriendScore = parseInt(req.body.score); 

        for(let i = 0; i < friendsData.length; i++){
            let comparisonFriend = parseInt(friendsData[i].score);
            let totalDifference = Math.abs(newFriendScore - comparisonFriend);

            if(totalDifference <= newTopFriendScore){
                newTopFriendScore = totalDifference;
                console.log(`${friendsData[i].name} is your new top match!`);
            } else if(totalDifference > newTopFriendScore){
                console.log(`${friendsData[i].name} is not perfect match`);
            } 
        }
        friendsData.push(req.body); 
        res.json(); 
    }

    // To grab a specific friend 
    app.get('/api/friends/:friend'), (req, res) => {
        let chosenFriend = req.params.friend;
        res.json(chosenFriend);
    }
}