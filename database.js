const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv://vladimirllanten1910:Pwt12kWVnDtTAlGy@cluster0.qewjtbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose;     