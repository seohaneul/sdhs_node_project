const mongoose = require('mongoose');

const id = 'seohaneul';
const password = 'mh8DoMgvG1MNZnE4';
const connectionString = `mongodb+srv://${id}:${password}@cluster0.h2ruece.mongodb.net/?retryWrites=true&w=majority`;

module.exports = async function() {
    // mongoose
    //     .connect(connectionString)
    //     .then(() => console.log('Connectied!'))

    await mongoose.connect(connectionString)
    console.log('Connected!')
}