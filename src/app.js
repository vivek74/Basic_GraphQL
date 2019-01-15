import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';
import Medicine from './models/Medicine';

const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://apnicare:apnicare12345@ds151292.mlab.com:51292/apnicare");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database conected!");
});

app.use('/medicine', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        user: '1'
    }
}));
app.get('/', (req, res) => {
    //return res.send(Medicine.find());
    res.redirect('/medicine');
    // Medicine.find({}, function(err, data){
    //     res.send(data);
    // })
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})