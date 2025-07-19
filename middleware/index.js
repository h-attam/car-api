exports.logger = (req, res, next) => {
  console.log("istek geldi", "Method:", req.method + "URL:" + req.url);

  //ara yazılımdan sonra çalışacak olan fonksiyon çalışsın
  next();
};
