async function getCatFacts() {
    const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

    const response = await fetch(url);

    const results = await response.json();

    console.log(results)
}

getCatFacts();