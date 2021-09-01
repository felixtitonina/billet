const validadeBilletService = require("../services/validadeBillet.service")
const barCodeService = require('../services/barCode.service')
const calcDigitoVerificadorService = require('../services/calcDigitoVerificador.service')

module.exports = {
  /**
   * 
   * @param {*} barcode 
   * @returns 
   */
  validate: async (barcode) => {
    try {
      const boleto = barcode.replace(/( |\.|-)/g, '');

      let typebillet = null
      if (boleto.length === 44) {
        typebillet = 'CODIGO_DE_BARRAS'
      } if (boleto.length === 46 || 47 || 48) {
        typebillet = 'LINHA_DIGITAVEL'
      } else {
        throw `Quantidade de digitos informado insuficientes para validar boleto. Quantidade de digitos permitidos 44, 46, 47 e 48`
      }

      // indentificar se é Documentação Título ou Documentação Convênio
      let typeDocumentation = boleto.substr(0, 1) == '8' ? 'CONVENIO' : 'TITLE'

      const billetValid = await validadeBilletService(boleto)

      let barCode = await barCodeService(boleto)

      let dataBase = new Date(`1997-10-07 20:54:59.000Z`)
      dataBase.setDate(dataBase.getDate() + 8350)
      let dataVencimento = dataBase.toISOString()

      let digitoVerificador = calcDigitoVerificadorService(barCode.barcode)

      let _data = {
        data: {
          boleto,
          billetValid,
          barCode,
          dataVencimento,
          digitoVerificador
        },
        status: 200
      }
      return _data
    } catch (error) {
      throw error
    }
  }
}