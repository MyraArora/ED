const predefinedQuestions = [
    {
        keywords: ["cause", "causes", "reason", "trigger"],
        answer:
            "High uric acid levels, also known as hyperuricemia, can be caused by overproduction or underexcretion of uric acid. Common causes include a diet rich in purines (found in red meat, seafood, and alcohol), kidney dysfunction, dehydration, certain medications, obesity, and genetics."
    },
    {
        keywords: ["symptoms", "signs"],
        answer:
            "Many people with high uric acid levels are asymptomatic. However, symptoms may include joint pain, swelling, and redness, commonly in the big toe (a condition known as gout), kidney stones, and fatigue."
    },
    {
        keywords: ["serious", "risk", "severity", "concern"],
        answer:
            "High uric acid can lead to serious conditions like gout, kidney stones, and chronic kidney disease if left unmanaged. It can also increase the risk of hypertension and cardiovascular diseases."
    },
    {
        keywords: ["diet", "foods to eat"],
        answer:
            "A diet for managing high uric acid should include low-purine foods such as fruits (especially cherries and citrus), vegetables (except mushrooms and spinach in moderation), whole grains, low-fat dairy, and plenty of water to help flush out uric acid."
    },
    {
        keywords: ["avoid", "foods not to eat", "bad foods"],
        answer:
            "Avoid high-purine foods such as red meat, organ meats, shellfish, sugary beverages, and alcohol, especially beer. Processed foods and fructose-rich items should also be limited."
    },
    {
        keywords: ["cure", "reversible", "can it be treated"],
        answer:
            "High uric acid levels can often be managed or reversed through dietary changes, proper hydration, and lifestyle modifications. In some cases, medications like allopurinol or febuxostat may be prescribed to lower uric acid levels."
    },
    {
        keywords: ["exercise", "workout", "physical activity"],
        answer:
            "Moderate exercise can help manage uric acid levels by improving metabolism and reducing weight. Activities like walking, swimming, or yoga are beneficial, but high-intensity workouts that produce lactic acid should be avoided during flare-ups."
    },
    {
        keywords: ["diagnosis", "diagnosed", "how to check"],
        answer:
            "High uric acid is typically diagnosed through a blood test called a serum uric acid test. Levels above 6 mg/dL in women and 7 mg/dL in men are generally considered high. A 24-hour urine test may also be done in some cases."
    },
    {
        keywords: ["chronic", "long term"],
        answer:
            "If left unmanaged, chronic high uric acid levels can lead to gout, kidney stones, and joint deformities. It can also damage the kidneys over time and increase cardiovascular risks."
    },
    {
        keywords: ["natural remedies", "home remedies"],
        answer:
            "Natural remedies for high uric acid include staying well-hydrated, drinking cherry juice or lemon water, consuming celery seeds, avoiding alcohol, and increasing fiber intake through whole grains and vegetables."
    },
    {
        keywords: ["water", "hydration"],
        answer:
            "Staying hydrated is essential for managing uric acid levels. Drinking 8-10 glasses of water daily helps flush out excess uric acid through the kidneys, reducing the risk of gout attacks and kidney stones."
    },
    {
        keywords: ["pain", "joint pain", "gout"],
        answer:
            "High uric acid often causes joint pain and inflammation, particularly in the big toe, ankles, and knees. This condition, known as gout, can cause sudden and severe pain episodes, known as flare-ups."
    },
    {
        keywords: ["hereditary", "genetics", "family history"],
        answer:
            "Genetics can play a role in high uric acid levels. If you have a family history of gout or hyperuricemia, you may be at a higher risk and should monitor your levels closely."
    },
    {
        keywords: ["alcohol", "beer", "drinking"],
        answer:
            "Alcohol, particularly beer, is high in purines and can increase uric acid levels. Limiting or avoiding alcohol is recommended to reduce the risk of flare-ups."
    },
    {
        keywords: ["fruits", "vegetables"],
        answer:
            "Fruits like cherries, citrus fruits, and apples are great for managing uric acid. Most vegetables are safe, but limit high-purine options like spinach, asparagus, and mushrooms if your levels are very high."
    },
    {
        keywords: ["kidney", "kidney stones"],
        answer:
            "Excess uric acid can crystallize in the kidneys, leading to kidney stones. Staying hydrated and following a low-purine diet can help prevent this complication."
    },
    {
        keywords: ["age", "old age"],
        answer:
            "High uric acid levels are more common in older adults due to reduced kidney function and age-related lifestyle changes. Regular monitoring and a healthy lifestyle can mitigate risks."
    },
    {
        keywords: ["pregnancy", "pregnant"],
        answer:
            "During pregnancy, high uric acid can indicate a risk of preeclampsia or other complications. Consult a healthcare provider for personalized advice and monitoring."
    },
    {
        keywords: ["fasting", "intermittent fasting"],
        answer:
            "Intermittent fasting can help manage weight and uric acid levels, but extreme fasting may increase uric acid temporarily due to the breakdown of proteins. Consult a doctor for guidance."
    },
    {
        keywords: ["medications", "drugs", "prescriptions"],
        answer:
            "Medications like allopurinol and febuxostat reduce uric acid production, while probenecid helps the body excrete it. Always consult a doctor before starting medication."
    },
    {
        keywords: ["test", "how to monitor"],
        answer:
            "A uric acid test measures levels in the blood. Regular testing is recommended if you are at risk or have a history of gout or kidney stones."
    },
    {
        keywords: ["vegetarian", "plant-based"],
        answer:
            "A vegetarian diet can help manage uric acid levels, as plant-based foods are generally lower in purines. Avoid excessive intake of legumes and mushrooms, which are moderately high in purines."
    },
    {
        keywords: ["cherries", "cherry juice"],
        answer:
            "Cherries and cherry juice are known to lower uric acid levels and reduce inflammation. They are particularly beneficial for preventing gout flare-ups."
    },
    {
        keywords: ["vitamin C", "supplements"],
        answer:
            "Vitamin C supplements may help reduce uric acid levels by improving kidney function. Citrus fruits are a natural source of this vitamin."
    },
    {
        keywords: ["coffee", "caffeine"],
        answer:
            "Moderate coffee consumption may help lower uric acid levels, but excessive caffeine should be avoided as it can dehydrate the body."
    },
    {
        keywords: ["stress", "lifestyle"],
        answer:
            "Chronic stress can contribute to inflammation and poor kidney function, exacerbating high uric acid. Stress management techniques like meditation can help."
    },
    {
        keywords: ["prevention", "reduce risk"],
        answer:
            "Prevent high uric acid by maintaining a healthy weight, staying hydrated, avoiding purine-rich foods, and exercising regularly. Regular check-ups are essential."
    },
    {
        keywords: ["children", "kids", "young"],
        answer:
            "High uric acid can occur in children due to genetic factors, poor diet, or kidney issues. Early diagnosis and lifestyle adjustments can manage the condition."
    },
    {
        keywords: ["chronic conditions", "diabetes", "hypertension"],
        answer:
            "Conditions like diabetes and hypertension can increase the risk of high uric acid. Managing these conditions through diet and medication is crucial for reducing uric acid levels."
    },
    {
        keywords: ["treatment", "management"],
        answer:
            "High uric acid can be managed through diet, hydration, weight control, medications, and regular monitoring. Consulting a healthcare provider is key for a personalized approach."
    }
    // Continue adding more unique keywords and answers as needed
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
