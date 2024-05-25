import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }
  return (
    <div>
        <h1>QR code generator</h1>
        <div>
            <input type="text" name='qr-code' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your value here'/>
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode
            id='qr-code-value'
            value={qrCode} size={400} bgColor="#fff"
            />
        </div>
    </div>
  )
}

export default QRCodeGenerator
