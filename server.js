import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  try {
    //Check if Get request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Home Page </h1>");
      } else if (req.url === "/about") {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>About </h1>");
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found </h1>");
      }
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
