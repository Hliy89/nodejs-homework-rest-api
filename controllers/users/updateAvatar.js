const User = require('../../models/schemas/user')
const fs = require('fs/promises')
const { uploadCloud, delCloudAvatar } = require('../../helpers/uploadCloud')

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user
  const pathFile = req.file.path
  try {
    const oldAvatar = await User.findById(_id)
    const { public_id: idCloudAvatar, secure_url: avatar } = await uploadCloud(pathFile)
    await delCloudAvatar(oldAvatar.idCloudAvatar)
    const result = await User.findByIdAndUpdate(_id, { idCloudAvatar, avatarURL: avatar })
    if (!result || !req.user.token) {
      res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized'
      })
      return
    }
    await fs.unlink(pathFile)

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        avatarUrl: result.avatarURL
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateAvatar
