import QRCode from "qrcode";
import { useState } from "react";

import React from "react";

const App = () => {

  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQrCode = () =>{
    QRCode.toDataURL(url,{
      width: 800,
      margin: 2,
      color:{
        dark: '#335383ff',
        light: '#ffffffff'
      }
    }, (err, url) =>{
        if (err) return console.error(err)
          console.log(url)
          setQrcode(url)
    })
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input 
      type="text" 
      placeholder="e.g: https://google.com" 
      value={url}
      onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={GenerateQrCode}>Generate</button>
      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a>
        </>}
    </div>
  );
};

export default App;
