const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "views", "index.html"), (err, data) => {
        if (err) {
            res.status(500).send("Error occurred while loading the homepage.")
        } else {
            res.send(data)
        }
    })
})

app.get("/about", (req, res) => {
    fs.readFile(path.join(__dirname, "views", "about.html"), (err, data) => {
        if (err) {
            res.status(500).send("Error occurred while loading the about page.")
        } else {
            res.send(data)
        }
    })
})

app.get("/contact-us", (req, res) => {
    fs.readFile(path.join(__dirname, "views", "contact-us.html"), (err, data) => {
        if (err) {
            res.status(500).send("Error occurred while loading the contact-us page.")
        } else {
            res.send(data)
        }
    })
})

app.get("*", (req, res) => {
    fs.readFile(path.join(__dirname, "views", "404.html"), (err, data) => {
        if (err) {
            res.status(404).send("Sorry, the requested page could not be found.")
        } else {
            res.send(data)
        }
    })
})

app.listen(5000, () => console.log("The server is running on port 5000"))