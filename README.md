# Minions

Minions is a simple API server created with node.js. Here I used MongoDB as a database. On this simple server, you can perform CRUD operations on a minions data collection(table).

## All API endpoints:

- Create a minion (https://minions-weld.vercel.app/api/v1/minions): - Hit the URL with the POST method to create a minion. You have to create a minion with the formate given below.

```javascript
{
    name: "Bob",
    age: 10,
    color: "red"
}
```

- Get all minions (https://minions-weld.vercel.app/api/v1/minions): You can get all the minions by hitting the URL with the GET method.

- Get a single minion (https://minions-weld.vercel.app/api/v1/minions/{_id}): You can query for a specific minion you hitting the URL with the GET method.

- Delete a single minion (https://minions-weld.vercel.app/api/v1/minions/{_id}): You can delete a specific minion that is already in the collection by hitting the URL with the DELETE method.

- Update a single minion (https://minions-weld.vercel.app/api/v1/minions/{_id}): You can update a specific minion that is already in the collection by hitting the URL with the PATCH method.

## Used technologies and frameworks:

- Node.js
- Express.js
- Mongoose
