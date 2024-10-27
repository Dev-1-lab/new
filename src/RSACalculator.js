import React, { useState } from "react";

const RSACalculator = () => {
    const [p, setP] = useState("");
    const [q, setQ] = useState("");
    const [n, setN] = useState("");
    const [phi, setPhi] = useState("");
    const [e, setE] = useState(3); // Choose a small prime for e initially
    const [d, setD] = useState("");
    const [message, setMessage] = useState("");
    const [encryptedMessage, setEncryptedMessage] = useState("");
    const [decryptedMessage, setDecryptedMessage] = useState("");

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    const modInverse = (a, m) => {
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) return x;
        }
        return 1;
    };

    const calculateKeys = () => {
        const numP = parseInt(p);
        const numQ = parseInt(q);
        if (!numP || !numQ) {
            alert("Please enter valid prime numbers for p and q.");
            return;
        }

        const calculatedN = numP * numQ;
        const calculatedPhi = (numP - 1) * (numQ - 1);

        let calculatedE = e;
        while (gcd(calculatedE, calculatedPhi) !== 1) {
            calculatedE++;
        }

        const calculatedD = modInverse(calculatedE, calculatedPhi);

        setN(calculatedN);
        setPhi(calculatedPhi);
        setE(calculatedE);
        setD(calculatedD);
    };

    const encryptMessage = () => {
        if (!message || !n || !e) {
            alert("Please provide all values and generate keys.");
            return;
        }
        const messageInt = parseInt(message);
        const encrypted = Math.pow(messageInt, e) % n;
        setEncryptedMessage(encrypted.toString());
        setDecryptedMessage("");
    };

    const decryptMessage = () => {
        if (!encryptedMessage || !d || !n) {
            alert("Please provide all values to decrypt the message.");
            return;
        }
        const encryptedInt = parseInt(encryptedMessage);
        const decrypted = Math.pow(encryptedInt, d) % n;
        setDecryptedMessage(decrypted.toString());
    };

    return (
        <div className="container mt-4">
            <h1>RSA Calculator</h1>
            <p>
                RSA is a public-key cryptosystem that is widely used for secure data
                transmission. This example demonstrates the key generation, encryption,
                and decryption processes.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="p" className="form-label">Prime Number p:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="p"
                        value={p}
                        onChange={(e) => setP(e.target.value)}
                        placeholder="Enter a prime number"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="q" className="form-label">Prime Number q:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="q"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Enter a prime number"
                    />
                </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={calculateKeys}>
                Generate Keys
            </button>
            <div className="mt-3">
                <p><strong>Public Key (n, e):</strong> ({n}, {e})</p>
                <p><strong>Private Key (n, d):</strong> ({n}, {d})</p>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <label htmlFor="message" className="form-label">Message to Encrypt (numeric):</label>
                    <input
                        type="text"
                        className="form-control"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter a numeric message"
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
            <label className="form-label mt-3"><strong>Encrypted Message:</strong></label>
            <input
                type="text"
                className="form-control"
                value={encryptedMessage}
                readOnly
            />
            <label className="form-label mt-3"><strong>Decrypted Message:</strong></label>
            <input
                type="text"
                className="form-control"
                value={decryptedMessage}
                readOnly
            />
            <p className="mt-3"><strong>Note:</strong> This implementation is simplified and not recommended for real encryption needs due to computational limitations in JavaScript.</p>
        </div>
    );
};

export default RSACalculator;
