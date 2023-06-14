
//in this file we will define our Prisma Client  which is used to interact with our db to prisma

import { PrismaClient } from "@prisma/client";

let db: PrismaClient; //This variable will hold the Prisma client instance.

declare global {
    var _db: PrismaClient | undefined;
}
// The declare global syntax allows you to extend the global scope in TypeScript. 
//In this case, it's used to define a global variable _db that can be 
//accessed throughout the application.

if(!global._db) //This is done to ensure that only one instance of the Prisma client is created.
{
    global._db = new PrismaClient() //This ensures that the Prisma client is created only once.
}

db= global._db; //This ensures that db points to the same instance of the Prisma client.

export {db}