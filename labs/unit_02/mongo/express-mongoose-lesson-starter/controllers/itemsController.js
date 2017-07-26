const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    const userIDToFind = request.params.id;

    User.findById(userIDToFind)
        .then((user) => {
            response.render(
                'items/index', 
                { 
                    name: user.first_name,
                    items: user.items 

                }
            )
})
});

module.exports = router;