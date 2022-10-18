const db = require('./db');
const GenreModel = require('./models/ganre');

const init = async () => {
    console.log('kk');
    const doc = await GenreModel.create({
        genre: 'Roman',
    });
    console.log(doc);
};

init();

//db.once('open', () => {
//    console.log('Connected to DB');
//});
//db.once('close', () => {
//    console.log('Close connection to DB');
//});