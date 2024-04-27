const errorHandler = (err, req, res, next) => {
  if (res.headersSend) {
    return next(err);
  }
  return res.status(500).json({
    error: err,
  });
};

export default errorHandler;
