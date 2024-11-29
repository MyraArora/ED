const predefinedQuestions = [
    {
        keywords: ["what is", "define", "meaning"],
        answer: "Anemia is a condition in which the body lacks enough healthy red blood cells or hemoglobin, resulting in reduced oxygen flow to the body's organs and tissues."
    },
    {
        keywords: ["symptoms", "signs", "indications"],
        answer: "Common symptoms of anemia include fatigue, weakness, pale skin, dizziness, cold hands and feet, shortness of breath, and chest pain."
    },
    {
        keywords: ["causes", "reasons", "triggers"],
        answer: "Anemia can be caused by blood loss, decreased production of red blood cells, or increased destruction of red blood cells. Common causes include iron deficiency, vitamin deficiencies, chronic diseases, and genetic conditions."
    },
    {
        keywords: ["types", "forms", "kinds"],
        answer: "There are several types of anemia, including iron-deficiency anemia, vitamin B12 deficiency anemia, folate deficiency anemia, aplastic anemia, hemolytic anemia, and sickle cell anemia."
    },
    {
        keywords: ["iron deficiency", "iron", "low iron"],
        answer: "Iron-deficiency anemia is the most common type of anemia, caused by a lack of iron in the diet, blood loss, or difficulty absorbing iron."
    },
    {
        keywords: ["diagnosis", "tests", "detect"],
        answer: "Anemia is diagnosed through blood tests, including a complete blood count (CBC) to measure hemoglobin and hematocrit levels. Additional tests may be done to identify the cause."
    },
    {
        keywords: ["treatment", "cure", "medication"],
        answer: "Treatment for anemia depends on the cause. It may include dietary changes, iron supplements, vitamin B12 injections, folic acid supplements, or medications to treat underlying conditions."
    },
    {
        keywords: ["foods", "diet", "nutrition"],
        answer: "Foods rich in iron include lean meats, fish, poultry, beans, lentils, spinach, and fortified cereals. Vitamin C-rich foods like citrus fruits can enhance iron absorption."
    },
    {
        keywords: ["prevention", "avoid", "prevent"],
        answer: "To prevent anemia, maintain a balanced diet rich in iron, vitamin B12, and folate. Regular screenings and treating underlying conditions can also help prevent anemia."
    },
    {
        keywords: ["chronic", "long-term", "persistent"],
        answer: "Chronic anemia is often linked to long-term conditions like kidney disease, cancer, or inflammatory diseases. Managing the underlying condition is essential."
    },
    {
        keywords: ["fatigue", "tiredness"],
        answer: "Fatigue is one of the most common symptoms of anemia, caused by a lack of oxygen delivered to tissues due to low hemoglobin levels."
    },
    {
        keywords: ["pregnancy", "pregnant"],
        answer: "Anemia is common during pregnancy due to increased blood volume and higher iron requirements. Proper prenatal care and iron supplements can help manage it."
    },
    {
        keywords: ["child", "children", "kids"],
        answer: "Children are at risk for anemia, particularly if they have a poor diet, rapid growth, or chronic illnesses. Regular check-ups and balanced nutrition are key."
    },
    {
        keywords: ["elderly", "aging"],
        answer: "Anemia in the elderly can be caused by chronic diseases, nutritional deficiencies, or medications. It requires careful diagnosis and management."
    },
    {
        keywords: ["genetic", "inherited", "family"],
        answer: "Some forms of anemia, like sickle cell anemia and thalassemia, are genetic and passed down through families. Genetic counseling may be helpful."
    },
    {
        keywords: ["aplastic", "bone marrow"],
        answer: "Aplastic anemia occurs when the bone marrow fails to produce enough red blood cells. It can be caused by autoimmune diseases, infections, or exposure to toxins."
    },
    {
        keywords: ["hemolytic", "red blood cell destruction"],
        answer: "Hemolytic anemia occurs when red blood cells are destroyed faster than they are produced. It can be caused by autoimmune diseases, infections, or inherited conditions."
    },
    {
        keywords: ["sickle cell", "shape"],
        answer: "Sickle cell anemia is a genetic disorder where red blood cells are abnormally shaped, causing blockages in blood flow and oxygen delivery."
    },
    {
        keywords: ["thalassemia"],
        answer: "Thalassemia is a genetic blood disorder that affects hemoglobin production, leading to anemia. Severity varies from mild to severe."
    },
    {
        keywords: ["vitamin B12", "cobalamin"],
        answer: "Vitamin B12 deficiency anemia occurs when the body lacks sufficient vitamin B12, often due to poor diet or absorption issues like pernicious anemia."
    },
    {
        keywords: ["pernicious", "autoimmune B12 deficiency"],
        answer: "Pernicious anemia is an autoimmune condition that affects the stomach lining, leading to poor absorption of vitamin B12."
    },
    {
        keywords: ["folate", "folic acid"],
        answer: "Folate deficiency anemia occurs when the body lacks enough folic acid, often due to poor diet, alcoholism, or certain medications."
    },
    {
        keywords: ["symptomless", "hidden", "undetected"],
        answer: "Some forms of anemia, like mild iron-deficiency anemia, can be asymptomatic initially but worsen over time if left untreated."
    },
    {
        keywords: ["severe", "serious", "life-threatening"],
        answer: "Severe anemia can lead to heart problems, complications in pregnancy, or even death if not treated promptly."
    },
    {
        keywords: ["restless legs", "RLS"],
        answer: "Restless legs syndrome is sometimes associated with iron-deficiency anemia, as low iron levels affect dopamine function in the brain."
    },
    {
        keywords: ["vegetarian", "vegan"],
        answer: "Vegetarians and vegans are at higher risk for iron and vitamin B12 deficiencies, as these nutrients are primarily found in animal products."
    },
    {
        keywords: ["iron supplements", "pills"],
        answer: "Iron supplements can help treat iron-deficiency anemia. They are typically taken with vitamin C to enhance absorption."
    },
    {
        keywords: ["complications", "risks", "dangers"],
        answer: "If untreated, anemia can lead to severe complications like heart failure, pregnancy issues, and delayed growth in children."
    },
    {
        keywords: ["menstruation", "periods"],
        answer: "Heavy menstruation is a common cause of anemia in women due to significant blood loss during periods."
    },
    {
        keywords: ["malaria", "parasitic"],
        answer: "Parasitic infections like malaria can cause anemia by destroying red blood cells and impairing their production."
    },
    {
        keywords: ["diet plan", "meal plan"],
        answer: "An ideal diet plan for anemia includes iron-rich foods, vitamin C for absorption, and avoiding calcium-rich foods during iron intake."
    },
    {
        keywords: ["alcohol", "drinking"],
        answer: "Excessive alcohol consumption can impair the body's ability to absorb folate and produce healthy red blood cells."
    },
    {
        keywords: ["exercise", "fitness"],
        answer: "Moderate exercise can improve circulation and energy levels in anemic patients, but excessive exercise may worsen fatigue."
    },
    {
        keywords: ["test results", "lab reports"],
        answer: "Common lab tests for anemia include hemoglobin levels, hematocrit percentage, and ferritin levels to assess iron stores."
    },
    {
        keywords: ["blood transfusion", "severe anemia treatment"],
        answer: "Blood transfusions may be necessary for severe anemia to quickly restore red blood cell levels."
    },
    {
        keywords: ["iron overload", "too much iron"],
        answer: "Iron overload can occur from excessive iron supplements or frequent blood transfusions, leading to conditions like hemochromatosis."
    },
    {
        keywords: ["oxygen levels", "hypoxia"],
        answer: "Low oxygen levels due to anemia can lead to symptoms like breathlessness and, in severe cases, organ damage."
    },
    {
        keywords: ["children anemia", "growth"],
        answer: "Anemia in children can affect growth and cognitive development, making early detection and treatment crucial."
    },
    {
        keywords: ["anemia and heart", "cardiovascular"],
        answer: "Anemia increases the workload on the heart, leading to complications like arrhythmias or heart failure in severe cases."
    }
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
        const prompt = `I have anemia. ${query}`;
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
