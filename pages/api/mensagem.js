import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)


export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')

        const showMessageLya = sheet.getCell(1, 0)
        const messageLya = sheet.getCell(1, 1)

        res.end(JSON.stringify({
            showMessage: showMessageLya.value === 'VERDADEIRO',
            message: messageLya.value || ''
        }))

    } catch (e) {
        res.end(JSON.stringify({
            showMessage: false,
            message: ''
        }))
    }

}