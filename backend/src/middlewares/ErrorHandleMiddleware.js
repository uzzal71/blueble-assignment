export default async (req, res) => {
  if (res.headersSend) {
    return next(err);
  }
  return res.status(500).json({
    error: err,
  });
};
