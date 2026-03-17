const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3001;
const root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon'};
http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/beverage-barricade.html';
  const fp = path.join(root, url);
  const ext = path.extname(fp);
  if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
    res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream'});
    fs.createReadStream(fp).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(port, () => console.log('Serving on http://localhost:' + port));
