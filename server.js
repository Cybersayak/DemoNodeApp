import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  res.writeHead(500, { "Content-Type": "application.json" });
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
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
