const getCurrentUser = async (req, res, next) => {
  const { email, subscription } = req.user
  console.log(req.user)
  try {
    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          email,
          subscription
        }
      }
    })
  } catch (error) {
    next(error)
  }
}
module.exports = getCurrentUser
