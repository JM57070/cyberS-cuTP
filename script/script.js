//Convertit un texte en tableau d'octets UTF‑8. 

function launchCesarBruteforce() {

            const message = "QJ HTIJ XJHWJY JXY HFMJ IFSX QJ KNHMNJW OFAFXHWNUY";

            // Analyse via ton script.js
            const { results, bestText } = bruteForceCesarAnalysis(message);

            let html = "";

            results.forEach(r => {

                const isBest = (r.text === bestText);

                html += `
                    <div class="p-2 mt-2 ${isBest ? 'text-success fw-bold glow-green' : ''}">
                        <strong>Décalage ${r.shift} :</strong> ${r.text}
                    </div>
                `;
            });

            document.getElementById("cesarResults").innerHTML = html;
        }
function textToBytes(text) {
    return new TextEncoder().encode(text);
}

//Convertit un tableau d’octets en Base64.

function launchCesarBruteforce() {

            const message = "QJ HTIJ XJHWJY JXY HFMJ IFSX QJ KNHMNJW OFAFXHWNUY";

            // Analyse via ton script.js
            const { results, bestText } = bruteForceCesarAnalysis(message);

            let html = "";

            results.forEach(r => {

                const isBest = (r.text === bestText);

                html += `
                    <div class="p-2 mt-2 ${isBest ? 'text-success fw-bold glow-green' : ''}">
                        <strong>Décalage ${r.shift} :</strong> ${r.text}
                    </div>
                `;
            });

            document.getElementById("cesarResults").innerHTML = html;
        }
function bytesToBase64(bytes) {
    return btoa(String.fromCharCode(...bytes));
}

//Convertit du Base64 en tableau d’octets

function launchCesarBruteforce() {

            const message = "QJ HTIJ XJHWJY JXY HFMJ IFSX QJ KNHMNJW OFAFXHWNUY";

            // Analyse via ton script.js
            const { results, bestText } = bruteForceCesarAnalysis(message);

            let html = "";

            results.forEach(r => {

                const isBest = (r.text === bestText);

                html += `
                    <div class="p-2 mt-2 ${isBest ? 'text-success fw-bold glow-green' : ''}">
                        <strong>Décalage ${r.shift} :</strong> ${r.text}
                    </div>
                `;
            });

            document.getElementById("cesarResults").innerHTML = html;
        }
function base64ToBytes(b64) {
    return Uint8Array.from(atob(b64), c => c.charCodeAt(0));
}

async function deriveAESKey(password, salt) {
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        textToBytes(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 500000,
            hash: "SHA-256"
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
}



// SECTION 3 – CHIFFREMENT AES‑256 GCM

function launchCesarBruteforce() {

            const message = "QJ HTIJ XJHWJY JXY HFMJ IFSX QJ KNHMNJW OFAFXHWNUY";

            // Analyse via ton script.js
            const { results, bestText } = bruteForceCesarAnalysis(message);

            let html = "";

            results.forEach(r => {

                const isBest = (r.text === bestText);

                html += `
                    <div class="p-2 mt-2 ${isBest ? 'text-success fw-bold glow-green' : ''}">
                        <strong>Décalage ${r.shift} :</strong> ${r.text}
                    </div>
                `;
            });

            document.getElementById("cesarResults").innerHTML = html;
        }

async function encryptAES() {

    const message = document.getElementById("messageClair").value;
    const password = document.getElementById("cle").value;

    if (!password) {
        alert("Veuillez saisir une clé de chiffrement !");
        return;
    }

    const iv = crypto.getRandomValues(new Uint8Array(12));

    // Sel utilisé pour dériver la clé
    const salt = crypto.getRandomValues(new Uint8Array(16));

    // Génération de la clé AES depuis le mot de passe
    const aesKey = await deriveAESKey(password, salt);

    // Chiffrement
    const encryptedData = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        aesKey,
        textToBytes(message)
    );

    const encryptedBytes = new Uint8Array(salt.length + iv.length + encryptedData.byteLength);
    encryptedBytes.set(salt, 0);
    encryptedBytes.set(iv, salt.length);
    encryptedBytes.set(new Uint8Array(encryptedData), salt.length + iv.length);

    document.getElementById("resultat").innerText = bytesToBase64(encryptedBytes);
}



// DÉCHIFFREMENT AES‑256 GCM 

function launchCesarBruteforce() {

            const message = "QJ HTIJ XJHWJY JXY HFMJ IFSX QJ KNHMNJW OFAFXHWNUY";

            // Analyse via js
            const { results, bestText } = bruteForceCesarAnalysis(message);

            let html = "";

            results.forEach(r => {

                const isBest = (r.text === bestText);

                html += `
                    <div class="p-2 mt-2 ${isBest ? 'text-success fw-bold glow-green' : ''}">
                        <strong>Décalage ${r.shift} :</strong> ${r.text}
                    </div>
                `;
            });

            document.getElementById("cesarResults").innerHTML = html;
        }

async function decryptAES() {

    const base64Input = document.getElementById("messageClair").value;
    const password = document.getElementById("cle").value;

    if (!base64Input) {
        alert("Veuillez coller un message chiffré !");
        return;
    }

    const encryptedBytes = base64ToBytes(base64Input);

    const salt = encryptedBytes.slice(0, 16);
    const iv = encryptedBytes.slice(16, 28);
    const ciphertext = encryptedBytes.slice(28);

    const aesKey = await deriveAESKey(password, salt);

    try {
        const decryptedBuffer = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv },
            aesKey,
            ciphertext
        );

        const decryptedText = new TextDecoder().decode(decryptedBuffer);

        document.getElementById("resultat").innerText = decryptedText;

    } catch (error) {
        document.getElementById("resultat").innerText =
            " Erreur : Clé incorrecte ou données altérées.";
    }
}



//ANALYSE CÉSAR

function launchCesarBruteforce() {

            const message = "QJ HTIJ XJHWJY JXY HFMJ IFSX QJ KNHMNJW OFAFXHWNUY";

            // Analyse via ton script.js
            const { results, bestText } = bruteForceCesarAnalysis(message);

            let html = "";

            results.forEach(r => {

                const isBest = (r.text === bestText);

                html += `
                    <div class="p-2 mt-2 ${isBest ? 'text-success fw-bold glow-green' : ''}">
                        <strong>Décalage ${r.shift} :</strong> ${r.text}
                    </div>
                `;
            });

            document.getElementById("cesarResults").innerHTML = html;
        }

function bruteForceCesarAnalysis(message) {
    let results = [];
    let bestScore = -1;
    let bestText = "";

    for (let shift = 1; shift <= 25; shift++) {

        let decrypted = "";

        for (let char of message) {
            if (char >= 'A' && char <= 'Z') {
                decrypted += String.fromCharCode(
                    ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
                );
            } else {
                decrypted += char;
            }
        }

        // Score = fréquence de E + espaces +  texte 
        let score =
            (decrypted.match(/E/g) || []).length +
            (decrypted.match(/ /g) || []).length;

        results.push({ shift, text: decrypted, score });

        if (score > bestScore) {
            bestScore = score;
            bestText = decrypted;
        }
    }

    return { results, bestText };
}