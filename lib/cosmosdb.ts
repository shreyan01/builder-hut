import { CosmosClient } from "@azure/cosmos";

const connectionString = process.env.NEXT_PUBLIC_COSMOS_DB_CONNECTION_STRING;
const databaseName = process.env.NEXT_PUBLIC_COSMOS_DB_NAME;

if (!connectionString || !databaseName) {
    throw new Error("Missing Cosmos DB connection string or database name.");
}

const client = new CosmosClient(connectionString);
const database = client.database(databaseName);

export { client, database };
