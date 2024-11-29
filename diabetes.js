const predefinedQuestions = [
    {
        keywords: ["diabetes", "difference", "stages"],
        answer:
            "Diabetes is a chronic condition where blood sugar levels are consistently too high due to insulin resistance or insufficient insulin production. Type 1 diabetes is an autoimmune condition where the body does not produce insulin, while Type 2 diabetes is typically a result of insulin resistance, where the body’s cells don't respond properly to insulin. Gestational diabetes occurs during pregnancy and can increase the risk of developing type 2 diabetes later in life."
    },
    {
        keywords: ["future", "evolve", "progression", "transform", "turn into"],
        answer:
            "Diabetes is a chronic condition that typically progresses over time without proper management. Uncontrolled diabetes can lead to complications such as heart disease, kidney failure, vision loss, and nerve damage. However, by closely managing blood sugar levels through medication, lifestyle changes, and regular monitoring, individuals with diabetes can reduce the risk of these complications and live a healthy life."
    },
    {
        keywords: ["serious", "severity", "severity", "seriousness", "concern", "risk", "grave", "worried", "warn"],
        answer:
            "Diabetes is a serious and potentially life-threatening condition that requires constant management. Uncontrolled diabetes can lead to severe complications, including heart disease, stroke, kidney failure, and loss of vision. It's important for individuals with diabetes to manage their blood sugar levels through medications, diet, exercise, and lifestyle changes to prevent these long-term health issues."
    },
    {
        keywords: ["prevalance", "common"],
        answer:
            "Diabetes is a widespread condition. According to the International Diabetes Federation, over 500 million adults worldwide have diabetes, with type 2 diabetes accounting for the majority of cases. In many countries, diabetes rates have been rising due to increasing obesity and sedentary lifestyles. It is important for people at risk to get regular screenings and take preventive measures to manage their health."
    },
    {
        keywords: ["symptoms", "signs", 'asymptomatic'],
        answer:
            "Diabetes symptoms may include: Increased thirst, Frequent urination, Fatigue, Blurred vision, Unexplained weight loss, Slow-healing wounds, Numbness or tingling in the hands or feet. However, some people with diabetes may not have noticeable symptoms for years, making regular checkups essential for early detection and management."
    },
    {
        keywords: ["causes", 'reason', 'triggers', 'contribute'],
        answer:
            "Diabetes is primarily caused by insulin resistance or an inability to produce enough insulin. Type 2 diabetes is often linked to lifestyle factors like poor diet, physical inactivity, and obesity. Type 1 diabetes is an autoimmune condition where the body attacks its own insulin-producing cells. Genetic factors also play a role in both types of diabetes."
    },
    {
        keywords: ["diagnosed", "diagnosis", "how to check"],
        answer:
            "Diabetes is diagnosed through several blood tests: Fasting blood glucose test, A1C test, and Oral Glucose Tolerance Test (OGTT). An A1C level of 6.5% or higher indicates diabetes, while fasting blood glucose levels of 126 mg/dL or higher also signal diabetes."
    },
    {
        keywords: ["reversible", "reverse", "cure"],
        answer:
            "Currently, diabetes cannot be cured, but it can be managed effectively. Type 2 diabetes can be controlled through lifestyle changes such as a healthy diet, regular physical activity, and medications. Type 1 diabetes requires lifelong insulin therapy and management, but with the right treatment plan, people can live fulfilling lives."
    },
    {
        keywords: ["avoid", "bad foods"],
        answer:
            "To manage diabetes, it's important to avoid foods that cause blood sugar spikes. These include sugary snacks, refined carbohydrates like white bread, fried foods, and sugary drinks. It's also important to limit high-fat and high-calorie foods that contribute to weight gain, which can worsen insulin resistance."
    },
    {
        keywords: ["foods", "what to eat", "diet"],
        answer:
            "A diabetes-friendly diet includes whole grains, lean proteins, vegetables, fruits, and healthy fats. Foods like whole grain bread, brown rice, fish, nuts, leafy greens, and legumes are great choices. The goal is to stabilize blood sugar levels while maintaining a healthy weight."
    },
    {
        keywords: ["exercise", "workout", "activity"],
        answer:
            "Physical activity is essential for managing diabetes. Regular exercise helps improve insulin sensitivity and maintain healthy blood sugar levels. Aim for at least 30 minutes of moderate-intensity exercise, like walking or swimming, most days of the week."
    },
    {
        keywords: ["stress", "stress cause"],
        answer:
            "Chronic stress can negatively affect blood sugar levels by increasing cortisol, a hormone that can make insulin less effective. Practicing stress reduction techniques such as meditation, deep breathing, or yoga can help manage stress and improve blood sugar control."
    },
    {
        keywords: ["sleep", "rest"],
        answer:
            "Lack of sleep can affect insulin sensitivity and lead to higher blood sugar levels. Aim for 7-9 hours of quality sleep each night to support your overall health and blood sugar regulation."
    },
    {
        keywords: ["medications", "drugs", "pills"],
        answer:
            "For diabetes, medications such as metformin, insulin, and other drugs may be prescribed depending on the type of diabetes and individual needs. Regular monitoring of blood sugar levels is essential to determine the right medication and dosage. Always consult a healthcare provider for personalized treatment plans."
    },
    {
        keywords: ["define", "meaning", "what is"],
        answer:
            "Diabetes is a condition where the body is unable to properly regulate blood sugar (glucose) levels. This can result from either insufficient insulin production (Type 1 diabetes) or the body's resistance to insulin (Type 2 diabetes). Over time, poorly managed diabetes can lead to serious complications such as heart disease, nerve damage, and kidney failure. It is a lifelong condition, but with proper care, it can be managed effectively."
    }

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
        const prompt = `I have prediabetes. ${query}`;
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
