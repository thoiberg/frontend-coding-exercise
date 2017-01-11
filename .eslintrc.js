module.exports = {
    "parser": "babel-eslint",
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "env": {
        "mocha": true
    },
    "globals": {
        "expect": false
    },
    "rules": {
        "padded-blocks": 0
    }
};