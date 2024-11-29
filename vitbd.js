const predefinedQuestions = [
    {
        keywords: ["causes", "reason", "triggers", "why", "factors"],
        answer:
            "Vitamin B12 deficiency can be caused by inadequate dietary intake, malabsorption issues, or certain medical conditions. Common causes include a vegetarian or vegan diet lacking animal-based foods, pernicious anemia, gastrointestinal disorders like Crohn’s disease or celiac disease, and surgeries affecting the stomach or intestines. Chronic alcohol use, certain medications like metformin or proton pump inhibitors, and aging can also reduce B12 absorption."
    },
    {
        keywords: ["symptoms", "signs", "indications", "effects"],
        answer:
            "Symptoms of vitamin B12 deficiency include fatigue, weakness, pale or jaundiced skin, shortness of breath, dizziness, numbness or tingling in hands and feet, difficulty walking, memory problems, mood changes, and a swollen or inflamed tongue. In severe cases, it can cause neurological issues and even irreversible nerve damage if left untreated."
    },
    {
        keywords: ["diagnosed", "diagnosis", "tests", "how to check"],
        answer:
            "Vitamin B12 deficiency is diagnosed through blood tests that measure B12 levels, complete blood count (CBC), and sometimes methylmalonic acid (MMA) or homocysteine levels. Low B12 levels and elevated MMA or homocysteine levels typically indicate a deficiency. A Schilling test may also be used in specific cases to determine malabsorption causes."
    },
    {
        keywords: ["treatment", "cure", "recover", "fix"],
        answer:
            "Vitamin B12 deficiency is treated by addressing the underlying cause. Options include dietary changes to include B12-rich foods, oral supplements, or intramuscular injections for severe cases. For pernicious anemia or malabsorption issues, lifelong B12 supplementation may be necessary. Consult a healthcare provider for tailored treatment."
    },
    {
        keywords: ["reversible", "reverse", "permanent", "cure"],
        answer:
            "Yes, vitamin B12 deficiency is generally reversible if treated early. Nerve damage and neurological symptoms may take longer to resolve and could become permanent if the deficiency is severe and untreated for a prolonged period."
    },
    {
        keywords: ["prevent", "avoid", "prevention"],
        answer:
            "To prevent vitamin B12 deficiency, include B12-rich foods in your diet, such as meat, fish, eggs, and dairy. For vegans and vegetarians, fortified foods and B12 supplements are essential. Regular health checkups and early intervention for conditions affecting absorption can also help."
    },
    {
        keywords: ["foods", "diet", "what to eat", "sources"],
        answer:
            "Vitamin B12 is naturally found in animal-based products like meat, poultry, fish, eggs, and dairy. Fortified foods like cereals and plant-based milk are good alternatives for vegetarians and vegans. Shellfish, liver, and fortified nutritional yeast are particularly rich sources."
    },
    {
        keywords: ["serious", "risk", "concern", "grave", "severe"],
        answer:
            "Vitamin B12 deficiency is a serious condition. Untreated, it can lead to anemia, irreversible nerve damage, memory loss, and cognitive decline. For pregnant women, it can increase the risk of birth defects in the baby. Early detection and treatment are essential to avoid long-term complications."
    },
    {
        keywords: ["neurological", "nerve", "brain", "memory", "cognitive"],
        answer:
            "Vitamin B12 deficiency can significantly affect the nervous system, causing symptoms like numbness, tingling in extremities, memory loss, mood changes, and difficulty concentrating. Severe deficiency can lead to irreversible nerve damage and cognitive impairment if not treated promptly."
    },
    {
        keywords: ["fatigue", "weakness", "tiredness", "low energy"],
        answer:
            "Fatigue and weakness are common symptoms of vitamin B12 deficiency. Low B12 impairs red blood cell production, reducing oxygen delivery to tissues and causing persistent tiredness and reduced physical stamina."
    },
    {
        keywords: ["anemia", "red blood cells", "hemoglobin"],
        answer:
            "Vitamin B12 deficiency can lead to a type of anemia called megaloblastic anemia, characterized by large, abnormal red blood cells. This results in reduced oxygen transport in the blood, causing symptoms like fatigue, shortness of breath, and paleness."
    },
    {
        keywords: ["pregnancy", "baby", "fetus", "prenatal"],
        answer:
            "Vitamin B12 is essential during pregnancy for fetal brain and nervous system development. Deficiency increases the risk of birth defects and pregnancy complications, making supplementation or a B12-rich diet crucial for pregnant women."
    },
    {
        keywords: ["absorption", "malabsorption", "issues"],
        answer:
            "Poor absorption of vitamin B12 can result from conditions like pernicious anemia, atrophic gastritis, Crohn’s disease, or celiac disease. Surgeries affecting the stomach or intestines, such as bariatric surgery, can also impair absorption. Aging reduces stomach acid production, which is needed to absorb B12 effectively."
    },
    {
        keywords: ["medications", "drugs", "interaction"],
        answer:
            "Certain medications, such as metformin (for diabetes) and proton pump inhibitors (for acid reflux), can interfere with vitamin B12 absorption. Long-term use of these medications increases the risk of deficiency."
    },
    {
        keywords: ["vegan", "vegetarian", "plant-based"],
        answer:
            "Vegans and strict vegetarians are at higher risk of B12 deficiency since it is primarily found in animal-based foods. Fortified plant-based products and B12 supplements are essential for maintaining adequate levels in these populations."
    },
    {
        keywords: ["sleep", "insomnia", "rest"],
        answer:
            "Vitamin B12 plays a role in melatonin production, which regulates sleep-wake cycles. Deficiency can contribute to sleep disturbances and insomnia. Correcting the deficiency often improves sleep quality."
    },
    {
        keywords: ["pernicious anemia", "autoimmune", "immune system"],
        answer:
            "Pernicious anemia, an autoimmune condition, is a common cause of vitamin B12 deficiency. The immune system attacks stomach cells that produce intrinsic factor, a protein needed to absorb B12. This requires lifelong B12 supplementation."
    },
    {
        keywords: ["mental health", "mood", "depression"],
        answer:
            "Vitamin B12 deficiency is linked to mood changes, irritability, and even depression. Low B12 affects serotonin production, a neurotransmitter critical for mood regulation. Treating the deficiency often alleviates these symptoms."
    },
    {
        keywords: ["weight loss", "appetite"],
        answer:
            "Unintended weight loss and loss of appetite can occur with vitamin B12 deficiency, especially if it is associated with gastrointestinal issues. Addressing the deficiency usually restores appetite and normal weight."
    },
    // Add more questions as needed
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
