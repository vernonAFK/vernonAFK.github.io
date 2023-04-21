const searchBox = document.getElementsByClassName('search-box')
const input = document.querySelector('input');

const models_block = document.getElementById('models');
const model_blocks = document.querySelectorAll('.model');
const models_name = document.getElementsByTagName('p');
const models_img = document.getElementsByTagName('img');

const info = document.getElementById('info');
const text = document.getElementsByClassName('text');

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) { 
        if (input.value.length == 0) { 
            alert("Поле не должно быть пустым!");
            return;
        } else {
            let auto = 
            [
                ["audi", "ауди"],
                ["bmw", "бмв"],
                ["porche", "порш", "порше"],
                ["mercedes", "mercedesbenz", "мерседес", "мерс", "мерседесбенз", "мерин"],
                ["nissan", "ниссан", "нисан"],
                ["lada", "лада"]
            ]

            let models = 
            [
                ["Audi A5", "Audi A6", "Audi A8", "Audi R8", "Audi S6", "Audi S7"],
                ["bmw1", "bmw2", "bmw3", "bmw4", "bmw5", "bmw6"]
            ]

            let img = 
            [
                ["AudiA5.jpg", "AudiA6.jpg", "AudiA8.jpg", "AudiR8.jpg", "AudiS6.jpg", "AudiS7.jpg"],
                [".jpg", ".jpg", ".jpg", ".jpg", ".jpg", ".jpg"]
            ]

            let request = (input.value.replace(/(\.|-|\/|\\| )/g,"")).toLowerCase();
            let brand;

            for (let i = 0; i < auto.length; i++) {

                for (let j = 0; j < auto[i].length; j++) {

                    if (request == auto[i][j]) {
                        brand = auto[i][0];
                        models_block.style = "visibility: visible; opacity: 1;";
                        searchBox[0].style = "animation: up 1.8s ease 1; animation-fill-mode: forwards;";
                        break;
                    }
                }
            }
                    if (brand == "audi") {
                        for (let i = 0; i < 6; i++) {
                            models_name[i].innerHTML = models[0][i];
                            models_img[i].src = "img/audi/" + img[0][i];
                        }

                        model_blocks.forEach(item => {
                            item.addEventListener('click', () => {
                                let model = item.querySelector('p').textContent;
                                models_block.style = "visibility: hidden; opacity: 0;";
                                info.style = "visibility: visible; opacity: 1;";

                                if (model == "Audi A5") {
                                    text[0].innerHTML = "Audi A5";
                                    text[1].innerHTML = "Audi A5 2";
                                    text[2].innerHTML = "Audi A5 3";
                                }

                                if (model == "Audi A6") {
                                    text[0].innerHTML = "Audi A6";
                                    text[1].innerHTML = "Audi A6 2";
                                    text[2].innerHTML = "Audi A6 3";
                                }

                                if (model == "Audi A8") {
                                    text[0].innerHTML = "Audi A8";
                                    text[1].innerHTML = "Audi A8 2";
                                    text[2].innerHTML = "Audi A8 3";
                                }

                                if (model == "Audi R8") {
                                    text[0].innerHTML = "Audi R8";
                                    text[1].innerHTML = "Audi R8 2";
                                    text[2].innerHTML = "Audi R8 3";
                                }

                                if (model == "Audi S6") {
                                    text[0].innerHTML = "Audi S6";
                                    text[1].innerHTML = "Audi S6 2";
                                    text[2].innerHTML = "Audi S6 3";
                                }

                                if (model == "Audi S7") {
                                    text[0].innerHTML = "Audi S7";
                                    text[1].innerHTML = "Audi S7 2";
                                    text[2].innerHTML = "Audi S7 3";
                                }
                            });
                        });
                        return;
                    }

                    if (brand == "bmw") {
                        for (let i = 0; i < 6; i++) {
                            models_name[i].innerHTML = models[1][i];
                            // models_img[i].src = "img/bmw/" + img[1][i];
                        }
                        return;
                    }

        }
        alert("Марка не найдена!");
    }
});
