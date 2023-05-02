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
        input.readOnly = true;
        if (input.value.length == 0) { 
            alert("Поле не должно быть пустым!");
            return;
        } else {
            let auto = 
            [
                ["audi", "ауди"],
                ["bmw", "бмв"],
                ["ford", "форд"],
                ["porsche", "порш", "порше"],
                ["ferrari", "феррари", "ферари"],
                ["mercedes", "mercedesbenz", "мерседес", "мерс", "мерседесбенз", "мерин"],
                ["nissan", "ниссан", "нисан"],
                ["lada", "лада"],
                ["kia", "киа"],
                ["skoda", "шкода", "скода"],
                ["volkswagen", "volks", "wagen", "фольксваген", "ваг", "фолькс"],
                ["chevrolet", "camaro", "шевроле", "шевролет", "шевро", "камаро"], 
                ["hyundai", "хендай", "хёндай"],
                ["jaguar", "ягуар", "яга"],
                ["lexus", "lex", "лексус", "лекс"],
                ["mazda", "мазда"],
                ["mitsubishi", "lancer", "митсубиси", "лансер"],
                ["subaru", "субару"],
                ["suzuki", "сузуки", "сузуке"],
                ["toyota", "тойота"],
                ["volvo", "вольво"]
            ]

            let models = 
            [
                ["Audi A5", "Audi A6", "Audi A8", "Audi Q3", "Audi R8", "Audi S6", "Audi S7"],
                ["BMW i8", "BMW M2", "BMW M3", "BMW M4", "BMW M5", "BMW Z4"],
                ["Ford Fiesta", "Ford Fiesta Sedan", "Ford Focus", "Ford Focus Sedan", "Ford Mondeo", "Ford Transit"],
                ["Porsche 718 Cayman", "Porsche 911", "Porsche 911 Targa", "Porsche 918 Spyder", "Porsche Panamera", "Porsche Taycan"],
                ["Ferrari 458 Speciale", "Ferrari 488 GTB", "Ferrari 488 Spider", "Ferrari F12 Berlinetta", "Ferrari FF", "Ferrari LaFerrari"],
                ["Mercedes-Benz C-class coupe", "Mercedes-Benz CLS", "Mercedes-Benz G-class", "Mercedes-Benz Maybach", "Mercedes-Benz S-class", "Mercedes-Benz SLS AMG"],
            ]

            let img = 
            [
                ["A5.jpg", "A6.jpg", "A8.jpg", "Q3.jpg", "R8.jpg", "S6.jpg", "S7.jpg"],
                ["BMWI8.jpg", "BMWM2.jpg", "BMWM3.jpg", "BMWM4.jpg", "BMWM5.jpg", "BMWZ4.jpg"],
                ["FordFiesta.jpg", "FordFiestaSedan.jpg", "FordFocus.jpg", "FordFocusSedan.jpg", "FordMondeo.jpg", "FordTransit.jpg"],
                ["Porsche718Cayman.jpg", "Porsche911.jpg", "Porsche911Targa.jpg", "Porsche918Spyder.jpg", "PorschePanamera.jpg", "PorscheTaycan.jpg"],
                ["Ferrari458Speciale.jpg", "Ferrari488GTB.jpg", "Ferrari488Spider.jpg", "FerrariF12Berlinetta.jpg", "FerrariFF.jpg", "FerrariLaFerrari.jpg"],
                ["MercedesBenzCclasscoupe.jpg", "MercedesBenzCLS.jpg", "MercedesBenzGclass.jpg", "MercedesBenzMaybach.jpg", "MercedesBenzSclass.jpg", "MercedesBenzSLSAMG.jpg"],
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

                        if (model == models[0][0]) {
                            text[0].innerHTML = "Audi A5";
                            text[1].innerHTML = "Audi A5 2";
                            text[2].innerHTML = "Audi A5 3";
                        }

                        if (model == models[0][1]) {
                            text[0].innerHTML = "Audi A6";
                            text[1].innerHTML = "Audi A6 2";
                            text[2].innerHTML = "Audi A6 3";
                        }

                        if (model == models[0][2]) {
                            text[0].innerHTML = "Audi A8";
                            text[1].innerHTML = "Audi A8 2";
                            text[2].innerHTML = "Audi A8 3";
                        }

                        if (model == models[0][3]) {
                            text[0].innerHTML = "Audi R8";
                            text[1].innerHTML = "Audi R8 2";
                            text[2].innerHTML = "Audi R8 3";
                        }

                        if (model == models[0][4]) {
                            text[0].innerHTML = "Audi S6";
                            text[1].innerHTML = "Audi S6 2";
                            text[2].innerHTML = "Audi S6 3";
                        }

                        if (model == models[0][5]) {
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
                    models_img[i].src = "img/bmw/" + img[1][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "BMW i8") {
                            text[0].innerHTML = "BMW i8";
                            text[1].innerHTML = "BMW i8 2";
                            text[2].innerHTML = "BMW i8 3";
                        }

                        if (model == "BMW M2") {
                            text[0].innerHTML = "BMW M2";
                            text[1].innerHTML = "BMW M2 2";
                            text[2].innerHTML = "BMW M2 3";
                        }

                        if (model == "BMW M3") {
                            text[0].innerHTML = "BMW M3";
                            text[1].innerHTML = "BMW M3 2";
                            text[2].innerHTML = "BMW M3 3";
                        }

                        if (model == "BMW M4") {
                            text[0].innerHTML = "BMW M4";
                            text[1].innerHTML = "BMW M4 2";
                            text[2].innerHTML = "BMW M4 3";
                        }

                        if (model == "BMW M5") {
                            text[0].innerHTML = "BMW M5";
                            text[1].innerHTML = "BMW M5 2";
                            text[2].innerHTML = "BWM M5 3";
                        }

                        if (model == "BMW Z4") {
                            text[0].innerHTML = "BMW Z4";
                            text[1].innerHTML = "BMW Z4 2";
                            text[2].innerHTML = "BMW Z4 3";
                        }
                    });
                });
                return;
            }

            if (brand == "ford") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[2][i];
                    models_img[i].src = "img/ford/" + img[2][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Ford Fiesta") {
                            text[0].innerHTML = "Ford Fiesta";
                            text[1].innerHTML = "Ford Fiesta 2";
                            text[2].innerHTML = "Ford Fiesta 3";
                        }

                        if (model == "Ford Fiesta Sedan") {
                            text[0].innerHTML = "Ford Fiesta Sedan";
                            text[1].innerHTML = "Ford Fiesta Sedan 2";
                            text[2].innerHTML = "Ford Fiesta Sedan 3";
                        }

                        if (model == "Ford Focus") {
                            text[0].innerHTML = "Ford Focus";
                            text[1].innerHTML = "Ford Focus 2";
                            text[2].innerHTML = "Ford Focus 3";
                        }

                        if (model == "Ford Focus Sedan") {
                            text[0].innerHTML = "Ford Focus Sedan";
                            text[1].innerHTML = "Ford Focus Sedan 2";
                            text[2].innerHTML = "Ford Focus Sedan 3";
                        }

                        if (model == "Ford Mondeo") {
                            text[0].innerHTML = "Ford Mondeo";
                            text[1].innerHTML = "Ford Mondeo 2";
                            text[2].innerHTML = "Ford Mondeo 3";
                        }

                        if (model == "Ford Transit") {
                            text[0].innerHTML = "Ford Transit";
                            text[1].innerHTML = "Ford Transit 2";
                            text[2].innerHTML = "Ford Transit 3";
                        }
                    });
                });
                return;
            }

            if (brand == "porsche") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[3][i];
                    models_img[i].src = "img/porsche/" + img[3][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Porsche 718 Cayman") {
                            text[0].innerHTML = "Porsche 718 Cayman";
                            text[1].innerHTML = "Porsche 718 Cayman 2";
                            text[2].innerHTML = "Porsche 718 Cayman 3";
                        }

                        if (model == "Porsche 911") {
                            text[0].innerHTML = "Porsche 911";
                            text[1].innerHTML = "Porsche 911 2";
                            text[2].innerHTML = "Porsche 911 3";
                        }

                        if (model == "Porsche 911 Targa") {
                            text[0].innerHTML = "Porsche 911 Targa";
                            text[1].innerHTML = "Porsche 911 Targa 2";
                            text[2].innerHTML = "Porsche 911 Targa 3";
                        }

                        if (model == "Porsche 918 Spyder") {
                            text[0].innerHTML = "Porsche 918 Spyder";
                            text[1].innerHTML = "Porsche 918 Spyder 2";
                            text[2].innerHTML = "Porsche 918 Spyder 3";
                        }

                        if (model == "Porsche Panamera") {
                            text[0].innerHTML = "Porsche Panamera";
                            text[1].innerHTML = "Porsche Panamera 2";
                            text[2].innerHTML = "Porsche Panamera 3";
                        }

                        if (model == "Porsche Taycan") {
                            text[0].innerHTML = "Porsche Taycan";
                            text[1].innerHTML = "Porsche Taycan 2";
                            text[2].innerHTML = "Porsche Taycan 3";
                        }
                    });
                });
                return;
            }

            if (brand == "ferrari") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[4][i];
                    models_img[i].src = "img/ferrari/" + img[4][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Ferrari 458 Speciale") {
                            text[0].innerHTML = "Porsche 718 Cayman";
                            text[1].innerHTML = "Porsche 718 Cayman 2";
                            text[2].innerHTML = "Porsche 718 Cayman 3";
                        }

                        if (model == "Ferrari 488 GTB") {
                            text[0].innerHTML = "Porsche 911";
                            text[1].innerHTML = "Porsche 911 2";
                            text[2].innerHTML = "Porsche 911 3";
                        }

                        if (model == "Ferrari 488 Spider") {
                            text[0].innerHTML = "Porsche 911 Targa";
                            text[1].innerHTML = "Porsche 911 Targa 2";
                            text[2].innerHTML = "Porsche 911 Targa 3";
                        }

                        if (model == "Ferrari F12 Berlinetta") {
                            text[0].innerHTML = "Porsche 918 Spyder";
                            text[1].innerHTML = "Porsche 918 Spyder 2";
                            text[2].innerHTML = "Porsche 918 Spyder 3";
                        }

                        if (model == "Ferrari FF") {
                            text[0].innerHTML = "Porsche Panamera";
                            text[1].innerHTML = "Porsche Panamera 2";
                            text[2].innerHTML = "Porsche Panamera 3";
                        }

                        if (model == "Ferrari LaFerrari") {
                            text[0].innerHTML = "Porsche Taycan";
                            text[1].innerHTML = "Porsche Taycan 2";
                            text[2].innerHTML = "Porsche Taycan 3";
                        }
                    });
                });
                return;
            }

            if (brand == "ferrari") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[4][i];
                    models_img[i].src = "img/ferrari/" + img[4][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Ferrari 458 Speciale") {
                            text[0].innerHTML = "Porsche 718 Cayman";
                            text[1].innerHTML = "Porsche 718 Cayman 2";
                            text[2].innerHTML = "Porsche 718 Cayman 3";
                        }

                        if (model == "Ferrari 488 GTB") {
                            text[0].innerHTML = "Porsche 911";
                            text[1].innerHTML = "Porsche 911 2";
                            text[2].innerHTML = "Porsche 911 3";
                        }

                        if (model == "Ferrari 488 Spider") {
                            text[0].innerHTML = "Porsche 911 Targa";
                            text[1].innerHTML = "Porsche 911 Targa 2";
                            text[2].innerHTML = "Porsche 911 Targa 3";
                        }

                        if (model == "Ferrari F12 Berlinetta") {
                            text[0].innerHTML = "Porsche 918 Spyder";
                            text[1].innerHTML = "Porsche 918 Spyder 2";
                            text[2].innerHTML = "Porsche 918 Spyder 3";
                        }

                        if (model == "Ferrari FF") {
                            text[0].innerHTML = "Porsche Panamera";
                            text[1].innerHTML = "Porsche Panamera 2";
                            text[2].innerHTML = "Porsche Panamera 3";
                        }

                        if (model == "Ferrari LaFerrari") {
                            text[0].innerHTML = "Porsche Taycan";
                            text[1].innerHTML = "Porsche Taycan 2";
                            text[2].innerHTML = "Porsche Taycan 3";
                        }
                    });
                });
                return;
            }
            
            if (brand == "mercedes") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[5][i];
                    models_img[i].src = "img/mercedes/" + img[5][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Mercedes-Benz C-class coupe") {
                            text[0].innerHTML = "Porsche 718 Cayman";
                            text[1].innerHTML = "Porsche 718 Cayman 2";
                            text[2].innerHTML = "Porsche 718 Cayman 3";
                        }

                        if (model == "Mercedes-Benz CLS") {
                            text[0].innerHTML = "Porsche 911";
                            text[1].innerHTML = "Porsche 911 2";
                            text[2].innerHTML = "Porsche 911 3";
                        }

                        if (model == "Mercedes-Benz G-class") {
                            text[0].innerHTML = "Porsche 911 Targa";
                            text[1].innerHTML = "Porsche 911 Targa 2";
                            text[2].innerHTML = "Porsche 911 Targa 3";
                        }

                        if (model == "Mercedes-Benz Maybach") {
                            text[0].innerHTML = "Porsche 918 Spyder";
                            text[1].innerHTML = "Porsche 918 Spyder 2";
                            text[2].innerHTML = "Porsche 918 Spyder 3";
                        }

                        if (model == "Mercedes-Benz S-class") {
                            text[0].innerHTML = "Porsche Panamera";
                            text[1].innerHTML = "Porsche Panamera 2";
                            text[2].innerHTML = "Porsche Panamera 3";
                        }

                        if (model == "Mercedes-Benz SLS AMG") {
                            text[0].innerHTML = "Porsche Taycan";
                            text[1].innerHTML = "Porsche Taycan 2";
                            text[2].innerHTML = "Porsche Taycan 3";
                        }
                    });
                });
                return;
            }

            if (brand == "nissan") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[6][i];
                    models_img[i].src = "img/nissan/" + img[6][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Mercedes-Benz C-class coupe") {
                            text[0].innerHTML = "Porsche 718 Cayman";
                            text[1].innerHTML = "Porsche 718 Cayman 2";
                            text[2].innerHTML = "Porsche 718 Cayman 3";
                        }

                        if (model == "Mercedes-Benz CLS") {
                            text[0].innerHTML = "Porsche 911";
                            text[1].innerHTML = "Porsche 911 2";
                            text[2].innerHTML = "Porsche 911 3";
                        }

                        if (model == "Mercedes-Benz G-class") {
                            text[0].innerHTML = "Porsche 911 Targa";
                            text[1].innerHTML = "Porsche 911 Targa 2";
                            text[2].innerHTML = "Porsche 911 Targa 3";
                        }

                        if (model == "Mercedes-Benz Maybach") {
                            text[0].innerHTML = "Porsche 918 Spyder";
                            text[1].innerHTML = "Porsche 918 Spyder 2";
                            text[2].innerHTML = "Porsche 918 Spyder 3";
                        }

                        if (model == "Mercedes-Benz S-class") {
                            text[0].innerHTML = "Porsche Panamera";
                            text[1].innerHTML = "Porsche Panamera 2";
                            text[2].innerHTML = "Porsche Panamera 3";
                        }

                        if (model == "Mercedes-Benz SLS AMG") {
                            text[0].innerHTML = "Porsche Taycan";
                            text[1].innerHTML = "Porsche Taycan 2";
                            text[2].innerHTML = "Porsche Taycan 3";
                        }
                    });
                });
                return;
            }

            if (brand == "lada") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[7][i];
                    models_img[i].src = "img/lada/" + img[7][i];
                }

                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        let model = item.querySelector('p').textContent;
                        models_block.style = "visibility: hidden; opacity: 0;";
                        info.style = "visibility: visible; opacity: 1;";

                        if (model == "Mercedes-Benz C-class coupe") {
                            text[0].innerHTML = "Porsche 718 Cayman";
                            text[1].innerHTML = "Porsche 718 Cayman 2";
                            text[2].innerHTML = "Porsche 718 Cayman 3";
                        }

                        if (model == "Mercedes-Benz CLS") {
                            text[0].innerHTML = "Porsche 911";
                            text[1].innerHTML = "Porsche 911 2";
                            text[2].innerHTML = "Porsche 911 3";
                        }

                        if (model == "Mercedes-Benz G-class") {
                            text[0].innerHTML = "Porsche 911 Targa";
                            text[1].innerHTML = "Porsche 911 Targa 2";
                            text[2].innerHTML = "Porsche 911 Targa 3";
                        }

                        if (model == "Mercedes-Benz Maybach") {
                            text[0].innerHTML = "Porsche 918 Spyder";
                            text[1].innerHTML = "Porsche 918 Spyder 2";
                            text[2].innerHTML = "Porsche 918 Spyder 3";
                        }

                        if (model == "Mercedes-Benz S-class") {
                            text[0].innerHTML = "Porsche Panamera";
                            text[1].innerHTML = "Porsche Panamera 2";
                            text[2].innerHTML = "Porsche Panamera 3";
                        }

                        if (model == "Mercedes-Benz SLS AMG") {
                            text[0].innerHTML = "Porsche Taycan";
                            text[1].innerHTML = "Porsche Taycan 2";
                            text[2].innerHTML = "Porsche Taycan 3";
                        }
                    });
                });
                return;
            }
        }
        alert("Марка не найдена!");
    }
});
