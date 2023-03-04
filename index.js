const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
      break;
    case "/about":
      fs.readFile("about.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
      break;

    case "/contact":
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
      break;
    default:
      fs.readFile("404.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
