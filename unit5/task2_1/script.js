//1-Get the file https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json and present the information in a webpage in a nice way

let info = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

info.then((response) => {
    if (response.ok) {
        return response.json();
    }

})
    .then((data) => {
        let secretBase = document.createElement


        console.log(data);
        console.log(data.squadName);
        document.getElementById('squad').innerHTML = data.squadName;
        document.getElementById('secretBase').innerHTML = `Secret base: ${data.secretBase}`;

        data.members.forEach(member => {
            let article = document.createElement('article');
            let h2_name = document.createElement('h2');
            let p_age = document.createElement('p');
            let ul_powers = document.createElement('ul');

            h2_name.innerHTML = member.name;
            p_age.innerHTML = `Age: ${member.age}`;
            member.powers.forEach((power) => {
                let li = document.createElement('li');
                li.innerHTML = power;
                ul_powers.appendChild(li);
            });

            article.appendChild(h2_name);
            article.appendChild(p_age);
            article.appendChild(ul_powers);
            article.style.border = "solid 1px black";
            article.style.margin = "5px";

            document.body.appendChild(article);

        });

    });
;