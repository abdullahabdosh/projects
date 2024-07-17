const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://abdullahabdosh:Abdullah1$@hararianorg.0ywtsee.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function fetchLessons() {
    try {
        await client.connect();
        const database = client.db('lesson_links');
        const lessons = database.collection('Lesson Links');

        const lessonsData = await lessons.find({}, {
            projection: {
                _id: 0,
                title: 1,
                description: 1,
                date_time: 1,
                zoom_link: 1,
                meeting_id: 1,
                social_platforms: 1
            }
        }).toArray();
        return lessonsData;
    } finally {
        await client.close();
    }
}

module.exports = fetchLessons;