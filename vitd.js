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

    if (resultValue > 20) {
        feedbackElement.innerText =
            "Your result value is completely normal. There shouldn't be any need to fret.";
        learnMoreButton.style.display = "none";
    } else if (resultValue >= 12 && resultValue <= 20) {
        feedbackElement.innerText =
            "You have a vitamin D deficiency. This can happen due to various factors including lack of exposure to sunlight, obesity & in rare cases due to certain medical conditions. Try to spend spend more time in the sun, maintain a healthy body weight & balanced diet. Food like salmon, tuna, bananas, kale & okra are great sources of vitamin D as well. ";
        learnMoreButton.style.display = "block";
        learnMoreButton.dataset.target = "vitdd.html";
    } else if (resultValue < 12) {
        feedbackElement.innerText =
            "You have an acute vitamin D definciency. Contact a healthcare professional on priority basis. Supplements may be needed to bring your vitamin D levels up. A vitamin D can happen due to various factors including lack of exposure to sunlight, obesity & in rare cases due to certain medical conditions. Try to spend spend more time in the sun, maintain a healthy body weight & balanced diet. Food like salmon, tuna, bananas, kale & okra are great sources of vitamin D as well. ";
        learnMoreButton.style.display = "block";
        learnMoreButton.dataset.target = "vitdd.html";
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
