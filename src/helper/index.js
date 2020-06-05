module.exports = {
  res: (res, status, data) => {
    const result = {}
    result.status = status || 200;
    result.data = data;

    return res.status(result.status).json(result)
  }
}