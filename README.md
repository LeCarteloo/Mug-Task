### Wymagania

Przed uruchomieniem należy zainstalować Node.js

### Instalacja

Lista kroków:

1. Klonowanie repozytorium
   ```sh
   git clone https://github.com/LeCarteloo/Mug-Task.git
   ```
2. Instalacja paczek npm
   ```sh
   npm install
   ```
3. Stworzenie pliku .env a następnie podanie poniżych informacji
   ```
   MONGO_URI=<mongo_uri> (docker lub cloud, w przypadku dockera przykładowe URI: mongodb://localhost:27017)
   PORT=<port> (podstawowy port 8000)
   ```
4. Ostatnim krokiem jest zbudowanie i uruchomiene aplikacji
   ```sh
   npm run build (lub tsc)
   ```
   A następnie
   ```sh
   npm start
   ```

### Testowanie przy pomocy Postman

W pliku Mug-Task.postman_colection.json znajduja się zapytania do przetestowania, należy je zaimportować do Postman'a
