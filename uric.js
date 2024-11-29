document.getElementById('pdfFile').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = async function () {
        const typedarray = new Uint8Array(this.result);

        // Load the PDF
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        let extractedText = "";

        // Loop through all pages to extract text
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();

            // Extract text from each item
            textContent.items.forEach(item => {
                extractedText += item.str + " ";
            });
        }

        // Process the extracted text
        const resultValue = extractResultValue(extractedText);

        // Handle feedback based on the result value
        displayFeedback(resultValue);
    };

    fileReader.readAsArrayBuffer(file);
});

// Function to extract the result value
function extractResultValue(text) {
    // Convert text to lowercase and tokenize
    const tokens = text.toLowerCase().split(/\s+/);

    // Filter tokens to keep only numbers or the word 'result/results'
    const filteredTokens = tokens.filter(token =>
        !isNaN(token) || token === "result" || token === "results"
    );

    // Find the index of 'result' or 'results'
    const resultIndex = filteredTokens.indexOf("result") !== -1
        ? filteredTokens.indexOf("result")
        : filteredTokens.indexOf("results");

    // If 'result' exists, get the token after it
    if (resultIndex !== -1 && resultIndex + 1 < filteredTokens.length) {
        return parseFloat(filteredTokens[resultIndex + 1]); // The token after 'result'
    }

    return null; // No valid result found
}

// Function to display feedback
function displayFeedback(resultValue) {
    const resultElement = document.getElementById('resultValue');
    const feedbackElement = document.getElementById('feedback');
    const learnMoreButton = document.getElementById('learnMore');

    if (resultValue === null) {
        resultElement.innerText = "Result value not found.";
        feedbackElement.innerText = "Please upload a valid PDF.";
        learnMoreButton.style.display = "none";
        return;
    }

    // Display the result value
    resultElement.innerText = `Result Value: ${resultValue}`;

    if (resultValue < 6.1) {
        feedbackElement.innerText =
            "Your result value is completely normal. There shouldn't be any need to fret.";
        learnMoreButton.style.display = "none";
    } else if (resultValue >= 6.1) {
        feedbackElement.innerText =
            "You uric acid levels are high. When uric acid levels are high, it may indicate a condition known as hyperuricemia. This can increase the risk of gout, a form of arthritis characterized by sudden, severe joint pain and swelling, typically in the big toe. High uric acid can also lead to kidney stones or other kidney-related problems. Common causes include a diet rich in purines (found in red meat, seafood, and alcohol), dehydration, obesity, certain medications, or underlying health conditions like diabetes or high blood pressure. It’s essential to consult a doctor for proper evaluation and management, which may include dietary changes, medications, and lifestyle adjustments. ";
        learnMoreButton.style.display = "block";
        learnMoreButton.dataset.target = "urichigh.html";
    }
}

// Function to redirect to the appropriate page
function redirect() {
    const learnMoreButton = document.getElementById('learnMore');
    const targetPage = learnMoreButton.dataset.target;
    if (targetPage) {
        window.location.href = targetPage;
    }
}
