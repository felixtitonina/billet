const barCodeService = require('../services/barCode.service')

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

      if (typeDocumentation == 'TITLE') {
        let dataBase = new Date(`1997-10-07 20:54:59.000Z`)
        dataBase.setDate(dataBase.getDate() + 8350)
        // let dataVencimento = dataBase.toISOString()
        let returndata = await barCodeService(boleto)
        return {
          data: {
            barCode: returndata.barcode,
            amount: returndata.amount,
            expirationDate: dataBase.toISOString().substr(0, 10),
          }, status: 200
        }
      } if (typeDocumentation == 'CONVENIO') {
        return {
          data: {
            barCode: returndata.barcode,
            amount: returndata.amount,
            expirationDate: null,
          }, status: 200
        }
      } else {
        throw `Não foi possível identificar o boleto`
      }

    } catch (error) {
      throw error
    }
  }
}