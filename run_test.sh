#!/bin/bash
# runs the Postman collection
echo "execution: JSONPlaceholder API tests..."
npx newman run collections/JSONPlaceholder.postman_collection.json
