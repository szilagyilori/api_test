// src/runTests.ts
const newman = require('newman');

newman.run(
    {
        collection: './collections/JSONPlaceholder.postman_collection.json',
        reporters: 'cli'
    },
    (err: any, summary: any) => {
        if (err) {
            console.error('Hiba a Newman futtatásakor:', err);
            process.exit(1);
        }
        console.log('Newman futtatás kész.');
        const run = summary.run;
        console.log(`Requests: executed ${run.stats.requests.total}, failed ${run.stats.requests.failed}`);
    }
);
