import { Client, Databases, Query, ID } from "appwrite";

const database_id = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collection_id = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const project_id = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(project_id);
const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // Step 1 -> Use AppWrite SDK to check if search terms exist in database
        const result = await database.listDocuments(database_id, collection_id, [
            Query.equal('searchTerm', searchTerm),
        ]);

        // Step 2 -> If it does, update the count
        if (result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(database_id, collection_id, doc.$id, {
                count: doc.count + 1
            });
        }
        // Step 3 -> If it doesn't, create a new document and count as 1
        else {
            await database.createDocument(database_id, collection_id, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://api.themoviedb.org/t/p/w500${movie.poster_path}`,  
            });
        }
    } catch (error) {
        console.error(error);
    }
};
