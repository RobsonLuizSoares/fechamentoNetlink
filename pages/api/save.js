import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'
import * as moment from 'moment'
import 'moment/locale/pt-br'


const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        await sheet.addRow({
            Data: moment().format('LLLL'),
            Nome: data.Nome,
            Loja: data.Loja,
            'Valor Cópia': data.ValorCopia,
            'Valor Impressão': data.ValorImpressao,
            Total: data.Total
        })
        res.end(req.body)
    } catch (err) {
        console.log(err)
        res.end('error')
    }
}