## Learning and Building NodeJs Backend without Framework

## Explaining  server.js file 

### Importing Modules

The code starts by importing three built-in Node.js modules:

http: This module allows us to create an HTTP server.
fs: This module provides an API for interacting with the file system. In this case, we're using the fs/promises module, which provides a promise-based API for reading and writing files.
url: This module provides utilities for working with URLs.
path: This module provides utilities for working with file paths.

### Getting Current Path

The code uses the import.meta.url property to get the current URL of the script, and then uses the url.fileURLToPath() function to convert it to a file path. This gives us the current directory of the script, which is stored in the __dirname variable.

### Creating an HTTP Server

The code creates an HTTP server using the http.createServer() method, which takes a callback function as an argument. This callback function will be called whenever an incoming request is received by the server.

### Handling GET Requests

The callback function checks if the incoming request is a GET request by checking the req.method property. If it is, the code checks the req.url property to determine which file to serve.

If the URL is /, the code sets the filePath variable to the path of an index.html file in the public directory.
If the URL is /about, the code sets the filePath variable to the path of an about.html file in the public directory.
If the URL is anything else, the code throws an error with the message "Not Found".

### Reading and Serving Files

Once the filePath variable is set, the code uses the fs.readFile() method to read the contents of the file. This method returns a promise that resolves with the file contents.
The code then sets the Content-Type header of the response to text/html using the res.setHeader() method. This tells the client that the response body contains HTML content.
Finally, the code writes the file contents to the response using the res.write() method, and then ends the response using the res.end() method.

### Handling Errors

If any errors occur during the execution of the callback function, the code catches them using a try-catch block. If an error occurs, the code sets the status code of the response to 500 using the res.writeHead() method, and sets the Content-Type header to text/plain. The error message is then sent as the response body using the res.end() method.

### Starting the Server

Finally, the code starts the server by calling the server.listen() method, passing in the port number 3000 as an argument. When the server is started, the code logs a message to the console indicating that the server is running on port 3000.

In summary, this code creates an HTTP server that serves HTML files from a public directory. It handles GET requests for the / and /about URLs, and returns a 404 error for any other URLs. If any errors occur during the execution of the callback function, the code returns a 500 error response with a plain text error message.
