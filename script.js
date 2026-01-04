function displayFacts(response) {
    factElement.classList.remove("loader");
    factElement.classList.add("display-fact");

    new Typewriter('#fact', {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 7,
    });
};

function generateFact(event) {
    event.preventDefault();

    factElement.innerHTML = "We are generating your fact..."
    factElement.classList.add("loader");

    let factTopicElement = document.getElementById("topic");
    let apiKey = "t9425412e35f60bab5f5aa66fa3o377c";
    let prompt = `Generate a fun fact about ${factTopicElement.value}`;
    let context = "You are an expert in facts. Return one interesting fact. Be clear and concise using simple English.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayFacts);
};

let generateFactElement = document.getElementById("topic-form");
let factElement = document.getElementById("fact");
generateFactElement.addEventListener("submit", generateFact);