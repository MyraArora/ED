const predefinedQuestions = [
    {
        keywords: ["future", "evolve", "progression", "transform", "turn into"],
        answer:
            "Prediabetes is a serious condition that, if left unmanaged, can progress to type 2 diabetes. Approximately 15-30% of individuals with prediabetes develop type 2 diabetes within five years. However, it's important to understand that progression is not inevitable. By adopting a proactive approach to your health, you can significantly reduce your risk. This involves making significant lifestyle changes, including regular physical activity, a balanced diet, weight management, and stress reduction. These changes can improve your body's insulin sensitivity and help restore normal blood sugar levels. Early detection is crucial, as prediabetes often presents with no noticeable symptoms. Therefore, regular health check-ups are essential to identify and address the condition before it progresses."
    },
    {
        keywords: ["serious", "severity", "severity", "seriousness", "concern", "risk", "grave", "worried", "warn"],
        answer:
            "While prediabetes may not be as severe as type 2 diabetes, it is a serious health condition that should not be overlooked. It serves as a warning sign that your body is struggling to regulate blood sugar effectively. If left untreated, prediabetes can lead to a cascade of health problems, including type 2 diabetes, heart disease, stroke, nerve damage, kidney disease, and other complications. However, the good news is that prediabetes is often reversible. By implementing significant lifestyle changes, such as regular exercise, a healthy diet, and weight management, most individuals can reverse prediabetes and significantly reduce their risk of developing more serious health conditions."
    },
    {
        keywords: ["prevalance", "common"],
        answer:
            "Prediabetes is an alarmingly common condition affecting millions of people worldwide. According to the International Diabetes Federation, approximately 470 million adults globally have impaired glucose tolerance, a precursor to prediabetes. In the United States alone, over 88 million adults, representing more than one-third of the population, have prediabetes, many of whom remain undiagnosed. The increasing prevalence of prediabetes is largely attributed to rising rates of obesity, sedentary lifestyles, and poor dietary habits. It's crucial to recognize the widespread nature of this condition and take proactive steps to prevent its progression."
    },
    {
        keywords: ["symptoms", "signs", "asymptomatic"],
        answer:
            "Prediabetes is often referred to as a 'silent condition' because it typically presents with no noticeable symptoms. However, there may be subtle signs that could indicate the presence of prediabetes. These include increased thirst, frequent urination, fatigue, blurred vision, and the development of dark patches of skin, particularly on the neck or underarms, known as acanthosis nigricans. Due to the lack of overt symptoms, many individuals remain unaware of their condition until it's detected during a routine blood test. Therefore, regular health screenings are essential for early detection and timely intervention."
    },
    {
        keywords: ["causes", "reason", "triggers", "contribute"],
        answer:
            "Prediabetes is a complex condition with multiple contributing factors. The primary causes of prediabetes include insulin resistance, a condition where the body's cells become less responsive to insulin, and impaired insulin secretion, where the pancreas doesn't produce enough insulin. These factors often stem from lifestyle choices, such as a sedentary lifestyle, poor diet, and excess weight. Additionally, genetics and family history can play a role in increasing susceptibility to prediabetes. Understanding the underlying causes of prediabetes is essential for developing effective prevention and management strategies."
    },
    {
        keywords: ["diagnosed", "diagnosis", "how to check"],
        answer:
            "Prediabetes is typically diagnosed through blood tests that measure blood sugar levels. The most common tests used for diagnosis include:\
        A1C test: This test measures your average blood sugar level over the past two to three months.\
        Fasting plasma glucose (FPG) test:** This test measures your blood sugar level after an overnight fast.\
        Oral glucose tolerance test (OGTT):** This test measures your blood sugar level before and two hours after drinking a sugary liquid.\
        If your blood sugar levels fall within the prediabetic range, your healthcare provider will likely discuss lifestyle modifications and may recommend additional testing to monitor your condition."
    },
    {
        keywords: ["reversible", "reverse", "cure"],
        answer:
            "The good news is that prediabetes is often reversible through significant lifestyle changes. By adopting a healthy diet, engaging in regular physical activity, and maintaining a healthy weight, many individuals can lower their blood sugar levels and return them to a normal range. These changes can also significantly reduce the risk of progressing to type 2 diabetes and other related health complications. However, it's important to note that the extent to which prediabetes can be reversed may vary from person to person. Regular monitoring of blood sugar levels and ongoing commitment to a healthy lifestyle are crucial for maintaining long-term health."
    },
    {
        keywords: ["avoid", "bad foods"],
        answer:
            "To effectively manage prediabetes, it's essential to limit your intake of foods with a high glycemic index. These foods, such as white bread, white rice, sugary snacks, and processed foods, can cause rapid spikes in blood sugar levels, making it difficult to maintain stable blood sugar control. By avoiding these foods and opting for healthier alternatives, you can significantly improve your blood sugar management and reduce your risk of complications."
    },
    {
        keywords: ["foods", "what to eat", "diet"],
        answer:
            "A healthy diet plays a crucial role in managing prediabetes. The ideal diet emphasizes whole, nutrient-dense foods that promote blood sugar stability and overall health. Here are some food groups to incorporate into your diet:\
        Vegetables: Non-starchy vegetables like spinach, broccoli, and bell peppers are excellent sources of fiber and essential nutrients.\
        Whole Grains: Whole grains such as quinoa, brown rice, and oats provide sustained energy and help regulate blood sugar levels.\
        Healthy Fats: Incorporate healthy fats from sources like avocados, nuts, and olive oil to support heart health and overall well-being.\
        Lean Proteins: Lean proteins, including fish, poultry, beans, and tofu, are essential for building and repairing tissues.\
        Low-Glycemic Fruits: Berries, apples, and citrus fruits are low in sugar and provide essential vitamins and minerals.\
        By consuming a balanced diet with controlled portions, you can effectively manage your blood sugar levels and support weight management."
    },
    {
        keywords: ["exercise", "workout", "activity"],
        answer:
            "Regular physical activity is a cornerstone of prediabetes management. Aim for at least 30 minutes of moderate-intensity exercise, such as brisk walking, swimming, or cycling, most days of the week. Physical activity helps improve insulin sensitivity, lowers blood sugar levels, and promotes weight loss. Additionally, incorporating strength training exercises, such as weightlifting or resistance band workouts, can help build muscle mass, which can further enhance insulin sensitivity. Consult your healthcare provider to determine the most suitable exercise regimen for your individual needs and fitness level."
    },
    {
        keywords: ["stress", "stress cause"],
        answer:
            "Chronic stress can significantly impact blood sugar control. When you're stressed, your body releases stress hormones, such as cortisol, which can elevate blood sugar levels and impair insulin sensitivity. To manage stress effectively, consider incorporating stress reduction techniques into your daily routine. These may include mindfulness meditation, deep breathing exercises, yoga, or spending time in nature. Engaging in activities you enjoy can also help alleviate stress and promote overall well-being."
    },
    {
        keywords: ["sleep", "rest"],
        answer:
            "Adequate sleep is essential for optimal health, including blood sugar regulation. When you don't get enough sleep, your body's hormone levels can become imbalanced, leading to increased insulin resistance and higher blood sugar levels. Aim for 7-8 hours of quality sleep each night to support your body's natural rhythms and improve your overall health. Establish a regular sleep schedule, create a calming bedtime routine, and optimize your sleep environment to promote restful sleep."
    },
    {
        keywords: ["medications", "drugs", "pills"],
        answer:
            "While lifestyle modifications are often the first line of treatment for prediabetes, in some cases, medication may be recommended. Metformin is a commonly prescribed medication that can help improve insulin sensitivity and lower blood sugar levels. However, it's important to consult with your healthcare provider to determine the most appropriate treatment plan for your individual needs. They will consider factors such as your blood sugar levels, overall health, and lifestyle habits to make personalized recommendations."
    },
    {
        keywords: ["define", "meaning", "what is"],
        answer:
            "Prediabetes is a condition characterized by elevated blood sugar levels that are higher than normal but not yet high enough to be classified as type 2 diabetes. It signifies that your body is beginning to struggle with insulin regulation, a condition known as insulin resistance. Insulin is a hormone produced by the pancreas that helps transport glucose, the body's primary source of energy, from the bloodstream into cells. In individuals with prediabetes, the body's cells become less responsive to insulin, leading to a buildup of glucose in the blood. Over time Over time, this can lead to type 2 diabetes and increase the risk of heart disease and stroke. However, prediabetes is a reversible condition if addressed early through lifestyle changes such as diet, exercise, and weight management. Understanding prediabetes is essential because early intervention can prevent long-term complications."
    },
    {
        keywords: ["diabetes", "difference", "stages"],
        answer: "Prediabetes and diabetes are part of the same spectrum of glucose intolerance but differ in severity:\
                Prediabetes: Blood sugar levels are elevated but remain within the range of 100–125 mg/dL (fasting) or 5.7–6.4% (HbA1C). It signals the beginning of insulin resistance. \
                Diabetes: Blood sugar levels are higher than 126 mg/dL (fasting) or above 6.5% (HbA1C), indicating that the body is no longer regulating blood sugar effectively. \
                The key difference lies in reversibility. While diabetes is chronic, prediabetes offers an opportunity for prevention with timely action."
    }
]
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
