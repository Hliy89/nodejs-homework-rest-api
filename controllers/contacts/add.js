const { contact: service } = require('../../services')

const add = async (req, res, next) => {
  const { body, user } = req
  try {
    const newContact = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      owner: user._id
    }
    const result = service.add(newContact)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: result,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = add
