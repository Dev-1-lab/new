import React, { useState } from "react";

function CaesarCipherPage() {
  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [key, setKey] = useState(0);

  // Implement the Caesar cipher encoding logic
  const encodeText = () => {
    const encodedText = plaintext
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)) {
          const isUpperCase = char === char.toUpperCase();
          const shift = parseInt(key, 10) % 26;
          let code = char.charCodeAt(0);
          code = isUpperCase
            ? ((code - 65 + shift) % 26) + 65
            : ((code - 97 + shift) % 26) + 97;
          return String.fromCharCode(code);
        }
        return char;
      })
      .join("");
    setCiphertext(encodedText);
  };

  // Implement the Caesar cipher decoding logic
  const decodeText = () => {
    const decodedText = ciphertext
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)) {
          const isUpperCase = char === char.toUpperCase();
          const shift = (26 - (parseInt(key, 10) % 26)) % 26;
          let code = char.charCodeAt(0);
          code = isUpperCase
            ? ((code - 65 + shift) % 26) + 65
            : ((code - 97 + shift) % 26) + 97;
          return String.fromCharCode(code);
        }
        return char;
      })
      .join("");
    setPlaintext(decodedText);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Caesar Cipher Encoder/Decoder</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Encode</h3>
          <div className="form-group">
            <textarea
              style={{ height: "300px" }}
              className="form-control"
              placeholder="Enter plaintext"
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-1" onClick={encodeText}>
            Encode
          </button>
          <div className="mt-3">
            {" "}
            <strong>Encoded:</strong> {ciphertext}
          </div>
        </div>
        <div className="col-md-6">
          <h3>Decode</h3>
          <div className="form-group">
            <textarea
              style={{ height: "300px" }}
              className="form-control"
              placeholder="Enter ciphertext"
              value={ciphertext}
              onChange={(e) => setCiphertext(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-1" onClick={decodeText}>
            Decode
          </button>
          <div className="mt-3">
            <strong>Decoded:</strong> {plaintext}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaesarCipherPage;
