const mongodb = require("mongodb");
const { Readable } = require("stream");

const uri = "mongodb://localhost:27017/mydb";
const client = await mongodb.MongoClient.connect(uri);
const db = client.db("mydb");

const bucket = new mongodb.GridFSBucket(db);

const buffer = Buffer.from("Hello, world!");
const stream = new Readable();
stream.push(buffer);
stream.push(null);

const uploadStream = bucket.openUploadStream("my-file.txt");
stream.pipe(uploadStream);
uploadStream.on("finish", () => {
  console.log("File uploaded!");
  client.close();
});
