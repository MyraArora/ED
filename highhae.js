const predefinedQuestions = [
    {
        keywords: ["causes", "reason", "why", "trigger", "risk factors"],
        answer:
            "High hemoglobin levels, or erythrocytosis, can be caused by a variety of factors. Common reasons include living at high altitudes, smoking, dehydration, or certain medical conditions like polycythemia vera, chronic obstructive pulmonary disease (COPD), or sleep apnea. It can also result from the use of performance-enhancing drugs like anabolic steroids or erythropoietin."
    },
    {
        keywords: ["define", "meaning", "what is", "explanation"],
        answer:
            "High hemoglobin, or erythrocytosis, occurs when the hemoglobin concentration in your blood exceeds normal levels. Hemoglobin is the protein in red blood cells responsible for carrying oxygen throughout the body. Elevated levels can indicate an underlying medical condition or environmental adaptation."
    },
    {
        keywords: ["symptoms", "signs", "how to know"],
        answer:
            "Symptoms of high hemoglobin levels may include headache, dizziness, fatigue, blurred vision, flushed skin, or an enlarged spleen. In severe cases, it can increase the risk of blood clots, which may lead to complications like stroke or heart attack."
    },
    {
        keywords: ["serious", "severity", "concern", "worried", "grave"],
        answer:
            "High hemoglobin can be a serious concern if left untreated. It may increase the risk of blood clots, stroke, and heart attack. The condition can also indicate an underlying issue such as polycythemia vera, which requires medical intervention."
    },
    {
        keywords: ["diagnosis", "test", "determine", "check"],
        answer:
            "High hemoglobin levels are diagnosed through a complete blood count (CBC) test. The normal range for men is 13.8–17.2 g/dL and for women is 12.1–15.1 g/dL. Levels above these ranges suggest high hemoglobin, warranting further investigation."
    },
    {
        keywords: ["treatment", "management", "cure", "how to lower"],
        answer:
            "Treatment for high hemoglobin depends on the cause. For example, if dehydration is the cause, increasing fluid intake can help. For conditions like polycythemia vera, therapeutic phlebotomy or medications may be prescribed. Always consult a doctor for personalized treatment."
    },
    {
        keywords: ["prevention", "avoid", "stop", "reduce risk"],
        answer:
            "To prevent high hemoglobin levels, avoid smoking, stay hydrated, and maintain a healthy lifestyle. If you live at high altitudes, gradual acclimatization can help. Regular medical checkups are crucial for early detection and prevention."
    },
    {
        keywords: ["diet", "what to eat", "foods", 'eat', 'eating'],
        answer:
            "There isn't a specific diet to lower high hemoglobin, but staying hydrated and eating a balanced diet can help. Avoid excessive iron-rich foods like red meat or iron supplements unless prescribed by a doctor. Incorporate fruits, vegetables, and whole grains into your meals."
    },
    {
        keywords: ["complications", "risks", "dangers", "problems"],
        answer:
            "High hemoglobin levels can lead to complications like blood clots, stroke, heart attack, and pulmonary embolism. In some cases, it may cause an enlarged spleen or chronic fatigue. Addressing the root cause is essential to prevent long-term risks."
    },
    {
        keywords: ["exercise", "physical activity", "workout"],
        answer:
            "Regular, moderate exercise can improve circulation and overall cardiovascular health. Avoid intense training if you have high hemoglobin, as it can exacerbate symptoms. Consult your doctor before starting any exercise program."
    },
    {
        keywords: ["hydration", "dehydration", "water intake"],
        answer:
            "Dehydration is a common cause of high hemoglobin levels. Ensure you drink adequate water daily—about 8-10 glasses—depending on your activity level and climate."
    },
    {
        keywords: ["polycythemia vera", "blood disorder", "secondary causes"],
        answer:
            "Polycythemia vera is a rare blood disorder that leads to increased production of red blood cells and high hemoglobin levels. Secondary causes include chronic hypoxia, tumors, or use of erythropoietin for performance enhancement."
    },
    {
        keywords: ["smoking", "lifestyle factors"],
        answer:
            "Smoking is a common lifestyle factor that raises hemoglobin levels due to chronic low oxygen levels. Quitting smoking can help lower your hemoglobin levels and improve overall health."
    },
    {
        keywords: ["medications", "drugs", "treatment options"],
        answer:
            "Medications such as hydroxyurea may be prescribed for conditions like polycythemia vera. In some cases, aspirin is used to reduce blood clot risk. Always follow your doctor’s recommendations."
    },
    {
        keywords: ["high altitude", "living at altitude", "elevation"],
        answer:
            "Living at high altitudes can cause high hemoglobin levels due to reduced oxygen levels in the air. This is a natural adaptation, but prolonged exposure may require monitoring to prevent complications."
    },
    {
        keywords: ["difference", "low hemoglobin", "comparison"],
        answer:
            "Low hemoglobin (anemia) is a condition where there is insufficient hemoglobin to carry oxygen effectively, while high hemoglobin involves excess hemoglobin, which can thicken blood and increase clot risk."
    },
    {
        keywords: ["normal range", "levels", "reference range"],
        answer:
            "The normal hemoglobin range is 13.8–17.2 g/dL for men, 12.1–15.1 g/dL for women, and 11–16 g/dL for children. Levels above these ranges are considered high and should be evaluated by a healthcare provider."
    },
    {
        keywords: ["pregnancy", "pregnant", "during pregnancy"],
        answer:
            "High hemoglobin during pregnancy may indicate dehydration or other health concerns. Staying hydrated and maintaining a healthy diet can help manage levels. Consult your healthcare provider for specific guidance."
    },
    {
        keywords: ["genetics", "hereditary", "family history"],
        answer:
            "Some causes of high hemoglobin, like polycythemia vera, can have a genetic component. A family history of blood disorders may increase your risk and should be discussed with a doctor."
    }
    // Additional questions can be added here.
];

// Chat Functionality
const chatBox = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Display a chat message
function displayMessage(message, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = sender;
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle user input
sendBtn.addEventListener("click", async () => {
    const query = userInput.value.trim().toLowerCase();
    if (!query) return;

    displayMessage(`You: ${query}`, "user");

    // Match query to predefined questions
    const matchedQuestion = predefinedQuestions.find((q) =>
        q.keywords.some((keyword) => query.includes(keyword))
    );

    if (matchedQuestion) {
        displayMessage(`Dr. Genie: ${matchedQuestion.answer} Click on the 'get full website' button below to get a more holistic understanding of your condition.`, "bot");
    } else {
        // If no match, send query to ChatGPT
        const prompt = `I have erythrocytosis. ${query}`;
        const response = await fetch("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", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer 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`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
            }),
        });

        const data = await response.json();
        const answer = data.choices[0].message.content;
        displayMessage(`Dr. Genie: ${answer}`, "bot");
    }

    userInput.value = "";
});
