import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = 3000;

//Get current path using es modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// these are es modules
// __filename displays /home/runner/DemoNodeApp/server.js
// __dirname displays /home/runner/DemoNodeApp
//  console.log( __dirname ,__filename);

const server = http.createServer(async (req, res) => {
  try {
    //Check if Get request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        //Read index.html file
        filePath = path.join(__dirname, "public", "index.html");
        //res.writeHead(500, { "Content-Type": "text/html" }); res.end("<h1>Home Page </h1>");
      } else if (req.url === "/about") {
        //Read about.html file
        filePath = path.join(__dirname, "public", "about.html");
        //res.writeHead(500, { "Content-Type": "text/html" });res.end("<h1>About </h1>");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Metthod not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }

  // res.setHeader("Content-Type", "text/html");

  /* res.writeHead(500, { "Content-Type": "application.json" });
  res.end(
    JSON.stringify({
      message: "Server Error",
    }),
  );
  //res.statusCode = 404;
  // res.setHeader("Content-Type", "text/plain");
  //res.write('Hello Commanders');
  // res.end("Hello Commanders ");
  // res.end("<h1>Hello Commanders </h1>");
  */
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
