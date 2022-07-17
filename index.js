var bench = require("nanobench");

bench("sha256 1M times", function (b) {
  var crypto = require("crypto");
  var data = new Buffer.from("hello world");

  b.start();

  for (var i = 0; i < 2_000_000; i++) {
    data = crypto.createHash("sha256").update(data).digest();
  }

  b.end();
});

bench("sha1 1M times", function (b) {
  var crypto = require("crypto");
  var data = new Buffer.from("hello world");

  b.start();

  for (var i = 0; i < 2_000_000; i++) {
    data = crypto.createHash("sha1").update(data).digest();
  }

  b.end();
});

bench("write file 10k times", (b) => {
  const fs = require("fs");
  var data = new Buffer.from("hello world");

  b.start();
  for (var i = 0; i < 10_000; i++) {
    fs.writeFileSync("./test.txt", data);
  }
  b.end();

  fs.unlinkSync("./test.txt");
});

bench("read file 10k times", (b) => {
  const fs = require("fs");
  var data = new Buffer.from("hello world");
  fs.writeFileSync("./test.txt", data);

  b.start();
  for (var i = 0; i < 10_000; i++) {
    fs.readFileSync("./test.txt");
  }
  b.end();

  fs.unlinkSync("./test.txt");
});
