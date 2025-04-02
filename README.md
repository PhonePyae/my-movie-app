# My Movie App

Built with React.js for the user interface, Appwrite for managing trending movie data, and styled with TailwindCSS. 

## Setup Instructions

### Prerequisites
- Node.js (latest LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/PhonePyae/my-movie-app.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env.local` file in the root of the project and add the following environment variables:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```
   Replace `your_*` values with the actual credentials.

4. Start the development server:
   ```sh
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173/` (default Vite port).

### Building for Production

To create a production build, run:
```sh
npm run build
```
The output will be available in the `dist` directory.

### Linting & Formatting

To check and fix linting issues, run:
```sh
npm run lint
```

## License

This project is licensed under the [MIT License](LICENSE).

