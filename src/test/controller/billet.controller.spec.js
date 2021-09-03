const { cloneDeep } = require('lodash')
const request = require('supertest')
const app = require('../../app')


const baseURLTitulo = '/boleto/21290001192110001210904475617405975870000002000'
const baseURLTituloErr = '/boleto/21290001192110001210904475617405975870000002000xxx'
const baseURLConvenio = '/boleto/836800000017 100400730071 805521786006 003449999709'
const baseURLConvenioErr = '/boleto/836800000017 100400730071 805521786006 003449999709xxxx'
const baseURLConvenioErrSemParams = '/boleto/'

describe('billet tipo titulo', () => {
    test('Teste de boleto tipo titulo valido', async () => {
        const { status, body } = await request(app).get(baseURLTitulo)

        expect(status).toBe(200)
        expect(body.barCode).toBe('21299758700000020000001121100012100447561740')
        expect(body.amount).toBe('20.00')
        expect(body.expirationDate).toBe('2020-08-17')

    })

    test('Teste de boleto tipo titulo com erro', async () => {
        const { status, body } = await request(app).get(baseURLTituloErr)

        expect(status).toBe(400)
        expect(body.error).toBe("Quantidade de digitos permitidos 44, 46, 47, 48 e somente numeros")

    })
})
describe('billet tipo convenio', () => {
    test('Teste de boleto tipo titulo valido', async () => {
        const { status, body } = await request(app).get(baseURLConvenio)

        expect(status).toBe(200)
        expect(body.barCode).toBe('83680000001100400730078055217860000344999970')
        expect(body.amount).toBe('110.04')
        expect(body.expirationDate).toBe(null)

    })

    test('Teste de boleto tipo titulo com erro', async () => {
        const { status, body } = await request(app).get(baseURLConvenioErr)

        expect(status).toBe(400)
        expect(body.error).toBe("Quantidade de digitos permitidos 44, 46, 47, 48 e somente numeros")

    })

    test('Teste de boleto tipo titulo com erro ', async () => {
        const { status, body } = await request(app).get(baseURLConvenioErrSemParams)

        expect(status).toBe(404)

    })
})

