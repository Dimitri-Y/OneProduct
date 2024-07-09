const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["api-key"] || req.body.apiKey;
  if (apiKey !== "apiKey123") {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
}

module.exports = checkApiKey;
