const billetServices = require('../services/billet.services')
const {
  extendError,
  responseError
} = require('../helpers/errors')
module.exports = {
  validate: async (req, res) => {
    try {
      const { barcode } = req.params
      const barcodeValidate = await billetServices.validate(barcode)
      return res.status(barcodeValidate.status).json(barcodeValidate.data)
    } catch (error) {
      return responseError(res, error)
    }
  }
}