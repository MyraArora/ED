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

    if (resultValue < 12) {
        feedbackElement.innerText =
            "Your haemoglobin level is very low. See a doctor on urgent basis. Iron supplements should be given on the advice of the doctor. You should eat iron rich food. make the following available in your diet: broccoli, spinach, apples, apricots, green leafy vegetables, sea food, red meat, nuts, pomegranates, beetroot & chickpeas. A person with low hemoglobin may have anemia. Common causes of anemia include being deficient in iron, vitamin B-12, or folate, blood loss, cancers that affect the bone marrow, like leukemia, kidney liver or lung disease, thalassemia, excessive smoking etc. If an underlying condition is found, further treatment may be needed. ";
        learnMoreButton.style.display = "block";
        learnMoreButton.dataset.target = "anemia.html";
    } else if (resultValue >= 12 && resultValue <= 13) {
        feedbackElement.innerText =
            "Your hemoglobin level is slightly low. You should eat iron rich food. make the following available in your diet: broccoli, spinach, apples, apricots, green leafy vegetables, sea food, red meat, nuts, pomegranates, beetroot & chickpeas. A person with low hemoglobin may have anemia. Common causes of anemia include being deficient in iron, vitamin B-12, or folate, blood loss, cancers that affect the bone marrow, like leukemia, kidney liver or lung disease, thalassemia, excessive smoking etc. If an underlying condition is found, further treatment may be needed. ";
        learnMoreButton.style.display = "block";
        learnMoreButton.dataset.target = "anemia.html";
    } else if (resultValue >= 13 && resultValue <= 17) {
        feedbackElement.innerText =
            "Your hemoglobin level is completely normal. There shouldn't be any need to fret.";
        learnMoreButton.style.display = "none";
    } else if (resultValue > 17) {
        feedbackElement.innerText =
            "Your hemoglobin level is abnormally high. This is called erythrocytosis. Dehydration (lack of water in the body) produces a falsely high haemoglobin level. This disappears when proper fluid balance is restored. You need to keep yourself hydrated & drink atleast 10 glasses of water/day. ";
        learnMoreButton.style.display = "block";
        learnMoreButton.dataset.target = "highhae.html";
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
