/**
 * @param {*} boleto 
 * @returns 
 */
module.exports = {
    title: (boleto) => {
        try {
            let barCode =
                boleto.substr(0, 4) +
                boleto.substr(32, 1) +
                boleto.substr(33, 14) +
                boleto.substr(4, 5) +
                boleto.substr(10, 10) +
                boleto.substr(21, 10)

            let amount = barCode.substr(9, 10)
            let p1 = amount.substr(0, 8)
            let p2 = amount.substr(8, 10)
            let cleanP1 = p1.replace(/\b0+/g, "")
            let returnObjeto = {
                barcode: barCode,
                amount: `${cleanP1}.${p2}`
            }
            return returnObjeto
        } catch (error) {
            throw error
        }
    },
    convenio: (boleto) => {
        try {
            let barCode = boleto
            barCode = barCode.split('');
            barCode.splice(11, 1);
            barCode.splice(22, 1);
            barCode.splice(33, 1);
            barCode.splice(44, 1);
            barCode = barCode.join('');

            let amount = ''
            amount = boleto.substr(4, 14);
            amount = boleto.split('');
            amount.splice(11, 1);
            amount = amount.join('');
            amount = amount.substr(4, 11);
            let p1 = amount.substr(0, 9)
            let p2 = amount.substr(9, 11)
            let cleanP1 = p1.replace(/\b0+/g, "")

            let returnObjeto = {
                barcode: barCode,
                amount: `${cleanP1}.${p2}`
            }
            return returnObjeto
        } catch (error) {
            throw error

        }
    }
}


/**
HELP

Posição     Tamanho     Picture         Conteúdo
01 a 03     03          9(03)           Código do Banco na Câmara de Compensação = '001'
04 a 04     01          9(01)           Código da Moeda = 9 (Real)
05 a 05     01          9(01)           Digito Verificador (DV) do código de Barras*
06 a 09     04          9(04)           Fator de Vencimento **
10 a 19     10          9(08)V(2)       Valor
20 a 44     03          9(03)           Campo Livre ***

 */