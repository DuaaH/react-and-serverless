module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-underscore-dangle": [
            "error",
            {
                "allow": ["_id", "b_codes_id"]
            }
        ],
        "react/prop-types": [1],
        "react-hooks/rules-of-hooks": "error", // added "react-hooks/rules-of-hooks"
        "react-hooks/exhaustive-deps": "warn" // added "react-hooks/exhaustive-deps"
    }
};