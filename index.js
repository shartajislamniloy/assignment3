var fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 
app.get("/", function(req, res){
    res.end("This is the Home Page")
})
app.get("/about", function(req, res){
    res.send("This is the About Page")
})
app.get("/contact", function(req, res){
    res.send("This is the Contact Page")
})
app.get('/file-write', (req, res) => {
    
    const filePath = path.join(__dirname, 'demo.txt');
    const fileContent = 'hello world';
    
   
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
           
            res.status(500).send('Failed to write file');
            console.error('Error writing file:', err);
        } else {
            
            res.send('File written successfully');
        }
    });
});

app.listen(port, () => {
    console.log('server running');
});