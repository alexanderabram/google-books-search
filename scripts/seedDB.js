const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["John Kennedy Toole"],
    description: "The plot of A Confederacy of Dunces is a knotted, tangled, ridiculous thing. Following it is like unraveling a giant ball of yarn wrapped around a very fat man with a moustache and a funny hat who keeps falling over. So have patience… and watch out for toppling medievalists.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "A Confederacy of Dunces",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });