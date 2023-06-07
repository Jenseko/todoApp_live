import mongoose from 'mongoose';
// dotenv/config liest ".env" Datei und fügt die gelesen Werte als Objekt zu process.env hinzu
import 'dotenv/config';

console.log(process.env.DB);
console.log(process.env.NODE_ENV);

const connection = await mongoose.connect(process.env.DB);
const isDeleted = await mongoose.connection.db.dropDatabase();

if (isDeleted) {
    console.log("Database is dropped");
} else {
    console.log("Database is not dropped");
}
