#! /usr/bin/env node

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})

{
    "name": "Timmy Le",
    "website": "https://timmyle.com/",
    "linkedin": "https://www.linkedin.com/in/timmy-le-a8a024158/",
    "github": "letimmy94",
    "email": "le.timmy94@gmail.com",
    "resume": "uh",
    "proficient-technologies": [
        "html", 
        "css", 
        "javascript", 
    ],
    "other-skills": [
        "design",
        "soccer"
    ]
}