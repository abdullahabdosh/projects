const { MongoClient } = require('mongodb');

// Replace '<password>' with your actual password and update the URI with your cluster details


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('lesson_links'); // Name of the database
        const lessons = database.collection('Lesson Links'); // Name of the collection

        // Query to find all documents and return specific fields
        // in options pass 0 to exclude and 1 to include the field 
        const query = {};
        const options = {
            projection: { _id: 0, title: 1, description: 1, date_time: 1, zoom_link: 1, meeting_id: 1, social_platforms: 1, image: 1 },
        };

        const cursor = lessons.find(query, options);
        
        // Print documents
        await cursor.forEach(doc => console.log(doc));

    } finally {
        await client.close();
    }
}

run().catch(console.dir);