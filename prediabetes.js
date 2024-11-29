const predefinedQuestions = [

    {
        keywords: ["future", "evolve", "progression", "transform", "turn into"],
        answer:
            "Yes, prediabetes can progress to type 2 diabetes if left unmanaged. Studies show that 15–30% of people with prediabetes develop diabetes within five years. However, progression is not inevitable. By adopting a healthy lifestyle—regular exercise, a balanced diet, weight loss, and stress management—you can improve insulin sensitivity and lower your blood sugar levels back to normal. Early detection is key, as prediabetes does not always present symptoms, making routine checkups essential."
    },
    {
        keywords: ["serious", "severity", "severity", "seriousness", "concern", "risk", "grave", "worried", "warn"],
        answer:
            "While prediabetes is not as severe as diabetes, it is a serious condition that should not be ignored. It serves as a warning sign that your body is struggling to regulate blood sugar. Unchecked prediabetes can lead to type 2 diabetes, cardiovascular disease, nerve damage, kidney disease, and other complications. However, with lifestyle interventions, most people can reverse prediabetes and significantly reduce the associated risks."
    },
    {
        keywords: ["prevalance", "common"],
        answer:
            "Prediabetes is extremely common, affecting millions worldwide. According to the International Diabetes Federation, approximately 470 million adults globally have impaired glucose tolerance, a precursor to prediabetes. In the U.S. alone, more than 88 million adults—over one-third of the population—have prediabetes, though many remain undiagnosed. The condition is becoming increasingly prevalent due to rising obesity rates, sedentary lifestyles, and poor dietary habits."
    },
    {
        keywords: ["symptoms", "signs", 'asymptomatic'],
        answer:
            "Prediabetes is often asymptomatic, meaning most people do not experience noticeable symptoms. However, subtle signs may include: Increased thirst, Frequent urination, Fatigue, Blurred vision, Dark patches of skin, particularly on the neck or underarms (acanthosis nigricans). Because symptoms are rare or mild, many people discover they have prediabetes only after routine blood tests. Regular health screenings are critical for early detection."
    },
    {
        keywords: ["causes", 'reason', 'triggers', 'contribute'],
        answer:
            "Prediabetes is often asymptomatic, meaning most people do not experience noticeable symptoms. However, subtle signs may include: Increased thirst, Frequent urination, Fatigue, Blurred vision, Dark patches of skin, particularly on the neck or underarms (acanthosis nigricans). Because symptoms are rare or mild, many people discover they have prediabetes only after routine blood tests. Regular health screenings are critical for early detection."
    },
    {
        keywords: ["diagnosed", "diagnosis", "how to check"],
        answer:
            "Prediabetes is typically diagnosed using blood tests such as the A1C test, fasting blood glucose test, or an oral glucose tolerance test. These tests measure your blood sugar levels to determine if they fall within the prediabetic range."
    },
    {
        keywords: ["reversible", "reverse", "cure"],
        answer:
            "Yes, prediabetes can often be reversed through healthy lifestyle changes. By eating a balanced diet, staying physically active, and maintaining a healthy weight, you can lower your blood sugar levels and potentially return them to normal ranges."
    },
    {
        keywords: ["avoid", "bad foods"],
        answer:
            "It's best to avoid foods with a high glycemic index, such as white bread, white rice, sugary snacks, and processed foods. These can cause blood sugar spikes, making it harder to manage prediabetes."
    },
    {
        keywords: ["foods", "what to eat", "diet"],
        answer:
            "The ideal diet for prediabetes emphasizes whole, nutrient-dense foods:\
            Vegetables: Non-starchy options like spinach, broccoli, and bell peppers.\
            Whole Grains: Quinoa, brown rice, and oats.\
            Healthy Fats: Avocados, nuts, and olive oil.\
            Proteins: Lean meats, fish, eggs, beans, and tofu.\
            Low-Glycemic Fruits: Berries, apples, and citrus fruits.\
            Eating balanced meals with controlled portions helps regulate blood sugar levels and supports weight management."
    },
    {
        keywords: ["exercise", "workout", "activity"],
        answer:
            "Regular physical activity, like brisk walking, swimming, or strength training, can significantly help manage blood sugar levels. Aim for at least 30 minutes of moderate exercise five days a week."
    },
    {
        keywords: ["stress", "stress cause"],
        answer:
            "Chronic stress can lead to hormonal imbalances that affect insulin sensitivity, increasing your risk of developing prediabetes. Stress management techniques like mindfulness and deep breathing can be helpful."
    },
    {
        keywords: ["sleep", "rest"],
        answer:
            "Inadequate sleep can increase your risk of insulin resistance. Aim for 7-8 hours of quality sleep each night to support healthy blood sugar levels and overall well-being."
    },
    {
        keywords: ["medications", "drugs", "pills"],
        answer:
            "While there are medications like metformin that may be prescribed for prediabetes, lifestyle changes are often the first and most effective treatment option. Consult your doctor for personalized advice."
    },
    {
        keywords: ["define", "meaning", "what is"],
        answer:
            "Prediabetes is a condition where your blood sugar levels are higher than normal but not high enough to be classified as type 2 diabetes. It indicates that your body is starting to have trouble using insulin effectively, a process called insulin resistance. Over time, this can lead to type 2 diabetes and increase the risk of heart disease and stroke. However, prediabetes is a reversible condition if addressed early through lifestyle changes such as diet, exercise, and weight management. Understanding prediabetes is essential because early intervention can prevent long-term complications."
    },
    {
        keywords: ["diabetes", "difference", "stages"],
        answer:
            "Prediabetes and diabetes are part of the same spectrum of glucose intolerance but differ in severity:\
            Prediabetes: Blood sugar levels are elevated but remain within the range of 100–125 mg/dL (fasting) or 5.7–6.4% (HbA1C). It signals the beginning of insulin resistance. \
            Diabetes: Blood sugar levels are higher than 126 mg/dL (fasting) or above 6.5% (HbA1C), indicating that the body is no longer regulating blood sugar effectively. \
            The key difference lies in reversibility. While diabetes is chronic, prediabetes offers an opportunity for prevention with timely action."
    }
    // Add more questions as needed
];

// Chat Functionality
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