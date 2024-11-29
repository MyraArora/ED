const predefinedQuestions = [
    {
        keywords: ["causes", "reason", "why", "deficiency causes"],
        answer:
            "Vitamin D deficiency can be caused by inadequate exposure to sunlight, a diet lacking in vitamin D-rich foods, certain medical conditions like malabsorption syndromes, obesity, or liver and kidney disorders. People with darker skin tones or those who always use sunscreen are also at higher risk."
    },
    {
        keywords: ["symptoms", "signs", "what happens", "effects"],
        answer:
            "Common symptoms of vitamin D deficiency include fatigue, bone pain, muscle weakness, mood changes like depression, and frequent illnesses or infections due to a weakened immune system."
    },
    {
        keywords: ["diagnosis", "how to check", "test", "identify"],
        answer:
            "Vitamin D deficiency is diagnosed with a blood test that measures 25-hydroxyvitamin D levels. Levels below 20 ng/mL typically indicate deficiency, while levels between 20–30 ng/mL suggest insufficiency."
    },
    {
        keywords: ["serious", "severity", "risk", "concerns"],
        answer:
            "Yes, vitamin D deficiency can be serious if left untreated. It increases the risk of bone disorders like osteoporosis, fractures, and rickets in children. It is also linked to cardiovascular diseases, autoimmune conditions, and depression."
    },
    {
        keywords: ["treatment", "how to treat", "what to do"],
        answer:
            "Vitamin D deficiency is typically treated with vitamin D supplements, increased dietary intake, and adequate sunlight exposure. Severe cases may require high-dose supplements prescribed by a healthcare provider."
    },
    {
        keywords: ["reversible", "reverse", "cure"],
        answer:
            "Yes, vitamin D deficiency is reversible with proper treatment, including dietary changes, supplementation, and regular exposure to sunlight. Consistency is key for recovery."
    },
    {
        keywords: ["foods", "diet", "what to eat", "good sources"],
        answer:
            "Good dietary sources of vitamin D include fatty fish like salmon and mackerel, egg yolks, fortified foods like milk, cereals, and orange juice, as well as mushrooms exposed to UV light."
    },
    {
        keywords: ["exercise", "workout", "activity"],
        answer:
            "Exercise, especially weight-bearing and resistance exercises, can support bone health alongside vitamin D. While exercise alone doesn't address the deficiency, it works synergistically with proper supplementation."
    },
    {
        keywords: ["sunlight", "UV rays", "sun exposure"],
        answer:
            "Sunlight is a primary source of vitamin D. Spending 10–30 minutes in direct sunlight several times a week can help your body produce enough vitamin D. However, factors like skin tone, location, and time of day affect production."
    },
    {
        keywords: ["prevention", "avoid deficiency"],
        answer:
            "Preventing vitamin D deficiency involves maintaining a balanced diet with vitamin D-rich foods, taking supplements if needed, and ensuring regular but safe sun exposure. Regular health checkups can help monitor levels."
    },
    {
        keywords: ["bones", "osteoporosis", "fractures"],
        answer:
            "Vitamin D is crucial for bone health as it helps the body absorb calcium. Deficiency can lead to weak bones, increasing the risk of osteoporosis and fractures, especially in older adults."
    },
    {
        keywords: ["children", "kids", "rickets", "growth"],
        answer:
            "In children, vitamin D deficiency can cause rickets, a condition characterized by soft, weak bones, leading to skeletal deformities and delayed growth. Ensuring adequate vitamin D is vital for healthy development."
    },
    {
        keywords: ["immune system", "infections", "immunity"],
        answer:
            "Vitamin D plays a critical role in supporting the immune system. Deficiency can make you more prone to infections like colds, flu, and respiratory illnesses."
    },
    {
        keywords: ["pregnancy", "pregnant", "expecting mothers"],
        answer:
            "Vitamin D is important during pregnancy for the mother’s bone health and the baby’s skeletal development. Deficiency can increase the risk of preeclampsia, low birth weight, and delayed infant development."
    },
    {
        keywords: ["sleep", "rest", "insomnia"],
        answer:
            "Vitamin D deficiency may contribute to sleep disturbances and poor sleep quality. Maintaining optimal levels can support healthy sleep patterns."
    },
    {
        keywords: ["mental health", "mood", "depression", "anxiety"],
        answer:
            "Low vitamin D levels are associated with mood disorders like depression and anxiety. Supplementing vitamin D has shown benefits in improving mental well-being in some individuals."
    },
    {
        keywords: ["age", "elderly", "older adults"],
        answer:
            "Older adults are more prone to vitamin D deficiency due to reduced skin synthesis and dietary intake. Deficiency in this group can lead to bone fractures, muscle weakness, and falls."
    },
    {
        keywords: ["supplements", "medications", "pills"],
        answer:
            "Vitamin D supplements are available in two forms: D2 (ergocalciferol) and D3 (cholecalciferol). D3 is more effective at raising and maintaining blood levels of vitamin D. Consult your doctor for the correct dosage."
    },
    {
        keywords: ["vitamin D3", "ergocalciferol", "cholecalciferol"],
        answer:
            "Vitamin D3 (cholecalciferol) is the preferred form of supplementation because it is more efficient at raising blood levels of vitamin D compared to D2 (ergocalciferol)."
    },
    {
        keywords: ["chronic conditions", "diseases", "long-term effects"],
        answer:
            "Long-term vitamin D deficiency can contribute to chronic conditions like osteoporosis, cardiovascular diseases, autoimmune disorders, and even certain cancers. Early detection and management are essential."
    },
    {
        keywords: ["skin tone", "dark skin", "melanin"],
        answer:
            "People with darker skin tones have more melanin, which reduces the skin's ability to produce vitamin D from sunlight. This increases their risk of deficiency, especially in regions with limited sun exposure."
    },
    {
        keywords: ["obesity", "overweight"],
        answer:
            "Obesity is linked to vitamin D deficiency as the vitamin gets sequestered in fat tissues, reducing its availability in the bloodstream. Weight management can help improve vitamin D status."
    },
    {
        keywords: ["malabsorption", "digestive issues"],
        answer:
            "Conditions like Crohn’s disease, celiac disease, and other gastrointestinal disorders can impair the absorption of vitamin D from food, leading to deficiency."
    },
    {
        keywords: ["fat-soluble", "absorption", "nutrients"],
        answer:
            "Vitamin D is fat-soluble, meaning it requires dietary fat for optimal absorption. Consuming it with meals that contain healthy fats can enhance absorption."
    },
    {
        keywords: ["season", "winter", "cold months"],
        answer:
            "Vitamin D deficiency is more common during winter months due to reduced sunlight exposure. People in regions with long winters may require supplementation to maintain adequate levels."
    },
    {
        keywords: ["interactions", "medications"],
        answer:
            "Certain medications, such as anticonvulsants and glucocorticoids, can interfere with vitamin D metabolism, increasing the risk of deficiency. Always discuss with your doctor if you are on long-term medication."
    },
    {
        keywords: ["hair loss", "alopecia"],
        answer:
            "Vitamin D deficiency can contribute to hair loss or alopecia in some individuals. Supplementation may improve hair health if the deficiency is the underlying cause."
    },
    {
        keywords: ["toxicity", "overdose", "excess"],
        answer:
            "Excessive intake of vitamin D supplements can lead to toxicity, causing symptoms like nausea, vomiting, kidney damage, and hypercalcemia. Always adhere to recommended dosages."
    },
    {
        keywords: ["sunburn", "UV safety"],
        answer:
            "While sunlight is essential for vitamin D synthesis, overexposure can cause sunburn and increase the risk of skin cancer. Use sunscreen after a safe amount of sun exposure, typically 10–30 minutes."
    },
    {
        keywords: ["vegan", "vegetarian", "plant-based"],
        answer:
            "Vegans and vegetarians may be at higher risk of vitamin D deficiency as most sources are animal-based. Plant-based options include fortified foods and mushrooms exposed to UV light."
    },
    {
        keywords: ["athletes", "sports", "performance"],
        answer:
            "Vitamin D is crucial for muscle function and recovery. Deficiency can impair athletic performance and increase the risk of injuries like stress fractures."
    }
    // Add additional questions as needed
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
