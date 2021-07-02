const { contact: service } = require('../../services')

const updateStatus = async (req, res, next) => {
  const { contactId } = req.params
  const { body } = req
  try {
    const result = await service.updateStatus(contactId, body)
    if (body) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          result
        },
      })
    }
    if (!body) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Missing field favorite'
      })
    }
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Not found'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateStatus

// const result = await service.updateStatus(contactId, body)
//     if (!body) {
//       return res.status(400).json({
//         status: 'error',
//         code: 400,
//         message: 'Missing field favorite'
//       })
//     }
//     if (body) {
//       return res.json({
//         status: 'success',
//         code: 200,
//         data: {
//           result
//         },
//       })
//     }
//     res.status(404).json({
//       status: 'error',
//       code: 404,
//       message: 'Not found'
//     })
