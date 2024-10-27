import React, { useState } from "react";

const VigenereCipher = () => {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");

  const encryptMessage = () => {
    if (!key || !message) {
      setEncryptedMessage(
        "Both the key and the message are required for encryption."
      );
      return;
    }

    const keyLength = key.length;
    const messageLength = message.length;
    let encryptedText = "";

    for (let i = 0; i < messageLength; i++) {
      const char = message[i];
      const keyChar = key[i % keyLength];

      if (char.match(/[A-Za-z]/)) {
        const charCodeA = char.match(/[a-z]/) ? 97 : 65;
        const shift = keyChar.charCodeAt(0) - charCodeA;
        const encryptedCharCode =
          ((char.charCodeAt(0) - charCodeA + shift) % 26) + charCodeA;
        encryptedText += String.fromCharCode(encryptedCharCode);
      } else {
        encryptedText += char;
      }
    }

    setEncryptedMessage(encryptedText);
    setDecryptedMessage("");
  };

  const decryptMessage = () => {
    if (!key || !encryptedMessage) {
      setDecryptedMessage(
        "Both the key and the encrypted message are required for decryption."
      );
      return;
    }

    const keyLength = key.length;
    const encryptedMessageLength = encryptedMessage.length;
    let decryptedText = "";

    for (let i = 0; i < encryptedMessageLength; i++) {
      const char = encryptedMessage[i];
      const keyChar = key[i % keyLength];

      if (char.match(/[A-Za-z]/)) {
        const charCodeA = char.match(/[a-z]/) ? 97 : 65;
        const shift = keyChar.charCodeAt(0) - charCodeA;
        const decryptedCharCode =
          ((char.charCodeAt(0) - charCodeA - shift + 26) % 26) + charCodeA;
        decryptedText += String.fromCharCode(decryptedCharCode);
      } else {
        decryptedText += char;
      }
    }

    setDecryptedMessage(decryptedText);
  };

  return (
    <div className="container mt-4">
      <h1>Vigenère Cipher</h1>
      <p>
        The Vigenère cipher is a method of encrypting alphabetic text by using a
        simple form of polyalphabetic substitution. It uses a keyword to shift
        letters in the message. The keyword should be repeated to match the
        length of the message.
      </p>
      <h2>Example:</h2>
      <p>
        Let's use a key, "KEY," and a message, "HELLO." The key should be
        repeated to match the message length. Here's how the encryption and
        decryption work step by step:
      </p>
      <p>
        <strong>Step 1:</strong> Message: <strong>HELLO</strong>
        <br />
        Key: <strong>KEYKE</strong> (Repeat the key to match the message length)
      </p>
      <p>
        <strong>Step 2:</strong> Encryption Process:
      </p>
      <p>
        <strong>Character H:</strong>
        <br />
        - Find the shift value: "K" - "A" = 10.
        <br />
        - Apply the shift and wrap around the alphabet: "H" + 10 = "R."
        <br />- Result: <strong>R</strong>
      </p>
      <p>
        <strong>Character E:</strong>
        <br />
        - Find the shift value: "E" - "A" = 4.
        <br />
        - Apply the shift and wrap around the alphabet: "E" + 4 = "I."
        <br />- Result: <strong>I</strong>
      </p>
      <p>The same process is repeated for the remaining characters.</p>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="key" className="form-label">
            Key:
          </label>
          <input
            type="text"
            className="form-control"
            id="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="enter key"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="enter plaintext"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="btn btn-success w-100" onClick={encryptMessage}>
            Encrypt
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-success w-100" onClick={decryptMessage}>
            Decrypt
          </button>
        </div>
      </div>
      <label className="form-label mt-3">
        <strong>Encrypted Message:</strong>
      </label>
      <input
        type="text"
        className="form-control"
        value={encryptedMessage}
        readOnly
      />
      <label className="form-label mt-3">
        <strong>Decrypted Message:</strong>
      </label>
      <input
        type="text"
        className="form-control"
        value={decryptedMessage}
        readOnly
      />
      <p className="mt-3">
        <strong>Note:</strong> In some cases, decryption may not always result
        in the exact plaintext due to factors such as key length and
        non-alphabetic characters. This example is for educational purposes and
        not recommended for professional or critical use.
      </p>
    </div>
  );
};

export default VigenereCipher;
