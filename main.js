const searchBox = document.getElementsByClassName('search-box')
const input = document.querySelector('input');

const models_block = document.getElementById('models');
const model_blocks = document.querySelectorAll('.model');
const models_name = document.getElementsByTagName('p');
const littleInfo = document.getElementsByClassName('littleInfo');
const models_img = document.getElementsByTagName('img');

const info = document.getElementById('info');
const text = document.getElementsByClassName('text');

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (input.value.length == 0) {
            alert("Поле не должно быть пустым!");
            return;
        } else {
            input.readOnly = true;
            const auto = 
            [
                ["audi", "ауди"],
                ["bmw", "бмв"],
                ["ford", "форд"],
                ["porsche", "порш", "порше"],
                ["ferrari", "феррари", "ферари"],
                ["mercedes", "mercedesbenz", "мерседес", "мерс", "мерседесбенз", "мерин"],
                ["nissan", "nisan", "ниссан", "нисан"],
                ["lada", "лада"],
                ["kia", "киа"],
                ["lamborghini", "lambo", "ламборгини", "ламбо", "ламба"],
                ["toyota", "тойота"],
                ["mazda", "мазда"],
                ["volkswagen", "volks", "wagen", "фольксваген", "ваг", "фолькс"],
                ["chevrolet", "camaro", "шевроле", "шевролет", "шевро", "камаро"], 
                ["hyundai", "хендай", "хёндай"],
                ["jaguar", "ягуар", "яга"],
                ["lexus", "lex", "лексус", "лекс"],
                ["skoda", "шкода", "скода"],
                ["mitsubishi", "lancer", "митсубиси", "лансер"],
                ["subaru", "субару"],
                ["suzuki", "сузуки", "сузуке"],
                ["volvo", "вольво"]
            ]

            const models = 
            [
                ["Audi A5", "Audi A6", "Audi A8", "Audi Q3", "Audi R8", "Audi S6"],
                ["BMW i8", "BMW M2", "BMW M3", "BMW M4", "BMW M5", "BMW Z4"],
                ["Ford Fiesta", "Ford Fiesta Sedan", "Ford Focus", "Ford Focus Sedan", "Ford Mondeo", "Ford Transit"],
                ["Porsche 718 Cayman", "Porsche 911", "Porsche 911 Targa", "Porsche 918 Spyder", "Porsche Panamera", "Porsche Taycan"],
                ["Ferrari 458 Speciale", "Ferrari 488 GTB", "Ferrari 488 Spider", "Ferrari F12 Berlinetta", "Ferrari FF", "Ferrari LaFerrari"],
                ["Mercedes-Benz C-class coupe", "Mercedes-Benz CLS", "Mercedes-Benz G-class", "Mercedes-Benz Maybach", "Mercedes-Benz S-class", "Mercedes-Benz SLS AMG"],
                ["Nissan GT-R", "Nissan X-Trail", "Nissan Juke", "Nissan Patrol", "Nissan Terrano", "Nissan Almera"],
                ["LADA Niva Legend", "LADA Vesta Cross", "LADA Priora HB", "LADA XRAY", "LADA Kalina Sport", "LADA 4x4 Urban"],
                ["KIA Stinger", "KIA Ceed", "KIA Rio", "KIA K5", "KIA Mohave", "KIA Picanto"],
                ["Lamborghini Murcielago", "Lamborghini Urus", "Lamborghini Aventador S", "Lamborghini Huracan", "Lamborghini Aventador Roadster", "Lamborghini Murcielago Roadster"],
                ["Toyota Camry", "Toyota RAV4", "Toyota Land Cruiser Prado", "Toyota GT86", "Toyota iQ", "Toyota Prius"]

            ]

            const li = 
            [
                ["год: 2016 <br> класс: купе <br> цена: 2 655 000 ₽", "год: 2018 <br> класс: бизнес-класс <br> цена: 3 900 000 ₽","год: 2017 <br> класс: представительский класс <br> цена: 5 935 000 ₽", "год: 2018 <br> класс: компактный SUV <br> цена: 2 325 000 ₽", "год: 2015 <br> класс: купе <br> цена: 11 200 000 ₽", "год: 2016 <br> класс: бизнес-класс <br> цена: 5 590 000 ₽"],
                ["год: 2018 <br> класс: купе <br> цена: 9 490 000 ₽", "год: 2017 <br> класс: купе <br> цена: 3 590 000 ₽", "год: 2014 <br> класс: средний класс <br> цена: 1 950 000 ₽", "год: 2017 <br> класс: купе <br> цена: 4 680 000 ₽", "год: 2018 <br> класс: бизнес-класс <br> цена: 6 700 000 ₽", "год: 2015 <br> класс: родстеры <br> цена: 5 155 000 ₽"],
                ["год: 2015 <br> класс: малый класс <br> цена: 785 000 ₽", "год: 2015 <br> класс: малый класс <br> цена: 699 000 ₽", "год: 2015 <br> класс: малый средний класс <br> цена: 843 000 ₽", "год: 2015 <br> класс: малый средний класс <br> цена: 990 000 ₽", "год: 2015 <br> класс: средний класс <br> цена: 1 350 000 ₽", "год: 2014 <br> класс: грузопассажирские фургоны <br> цена: 1 800 000 ₽"],
                ["год: 2016 <br> класс: купе <br> цена: 3 811 000 ₽", "год: 2015 <br> класс: купе <br> цена: 6 319 000 ₽", "год: 2015 <br> класс: родстеры <br> цена: 7 407 000 ₽", "год: 2014 <br> класс: родстеры <br> цена: 88 305 000 ₽", "год: 2016 <br> класс: представительский класс <br> цена: 6 218 000 ₽", "год: 2019 <br> класс: представительский класс <br> цена: 7 793 000 ₽"],
                ["год: 2013 <br> класс: купе <br> цена: 25 000 000 ₽", "год: 2015 <br> класс: купе <br> цена: 17 101 000 ₽", "год: 2015 <br> класс: родстеры <br> цена: 19 050 000 ₽", "год: 2012 <br> класс: купе <br> цена: 20 173 000 ₽", "год: 2011 <br> класс: купе <br> цена: 13 500 000 ₽", "год: 2014 <br> класс: купе <br> цена: 114 550 000 ₽"],
                ["год: 2018 <br> класс: купе <br> цена: 2 640 000 ₽", "год: 2018 <br> класс: бизнес-класс <br> цена: 4 950 000 ₽", "год: 2018 <br> класс: полноразмерные SUV <br> цена: 8 950 000 ₽", "год: 2017 <br> класс: представительский класс <br> цена: 8 700 000 ₽", "год: 2017 <br> класс: представительский класс <br> цена: 6 720 000 ₽", "год: 2009 <br> класс: купе <br> цена: 11 850 000 ₽"],
                ["год: 2016 <br> класс: купе <br> цена: 6 875 000 ₽", "год: 2015 <br> класс: компактные SUV <br> цена: 1 790 000 ₽", "год: 2014 <br> класс: компактные SUV <br> цена: 1 107 000 ₽", "год: 2014 <br> класс: компактные SUV <br> цена: 4 750 000 ₽", "год: 2017 <br> класс: компактные SUV <br> цена: 930 000 ₽", "год: 2012 <br> класс: малый средний класс <br> цена: 645 000 ₽"],
                ["год: 2021 <br> класс: компактные SUV <br> цена: 659 900 ₽", "год: 2018 <br> класс: малый класс <br> цена: 763 900 ₽", "год: 2013 <br> класс: малый средний класс <br> цена: 290 000 ₽", "год: 2015 <br> класс: малый класс <br> цена: 614 900 ₽", "год: 2014 <br> класс: малый класс <br> цена: 566 900 ₽", "год: 2015 <br> класс: компактные SUV <br> цена: 546 800 ₽"],
                ["год: 2017 <br> класс: бизнес-класс <br> цена: 1 899 000 ₽", "год: 2018 <br> класс: малый средний класс <br> цена: 1 001 000 ₽", "год: 2017 <br> класс: малый класс <br> цена: 695 900 ₽", "год: 2022 <br> класс: средний класс <br> цена: 3 569 900 ₽", "год: 2017 <br> класс: полноразмерные SUV <br> цена: 2 489 900 ₽", "год: 2017 <br> класс: субкомпактный класс <br> цена: 559 900 ₽"],
                ["год: 2006 <br> класс: купе <br> цена: 20 900 000 ₽", "год: 2017 <br> класс: полноразмерные SUV <br> цена: 15 200 000 ₽", "год: 2016 <br> класс: купе <br> цена: 20 050 000 ₽", "год: 2014 <br> класс: купе <br> цена: 11 150 000 ₽", "год: 2012 <br> класс: родстеры <br> цена: 19 450 000 ₽", "год: 2006 <br> класс: родстеры <br> цена: 19 250 000 ₽"],
                ["год: 2018 <br> класс: средний класс <br> цена: 1 399 000 ₽", "год: 2019 <br> класс: компактные SUV <br> цена: 1 756 000 ₽", "год: 2017 <br> класс: полноразмерные SUV <br> цена: 2 249 000 ₽", "год: 2012 <br> класс: купе <br> цена: 2 949 000 ₽", "год: 2009 <br> класс: субкомпактный класс <br> цена: 590 000 ₽", "год: 2016 <br> класс: малый средний класс <br> цена: 2 154 000 ₽"]
            ]

            const img = 
            [
                ["A5.jpg", "A6.jpg", "A8.jpg", "Q3.jpg", "R8.jpg", "S6.jpg"],
                ["I8.jpg", "M2.jpg", "M3.jpg", "M4.jpg", "M5.jpg", "Z4.jpg"],
                ["Fiesta.jpg", "FiestaSedan.jpg", "Focus.jpg", "FocusSedan.jpg", "Mondeo.jpg", "Transit.jpg"],
                ["718Cayman.jpg", "911.jpg", "911Targa.jpg", "918Spyder.jpg", "Panamera.jpg", "Taycan.jpg"],
                ["458Speciale.jpg", "488GTB.jpg", "488Spider.jpg", "F12Berlinetta.jpg", "FF.jpg", "LaFerrari.jpg"],
                ["Cclasscoupe.jpg", "CLS.jpg", "Gclass.jpg", "Maybach.jpg", "Sclass.jpg", "SLSAMG.jpg"],
                ["GTR.jpg", "XTrail.jpg", "Juke.jpg", "Patrol.jpg", "Terrano.jpg", "Almera.jpg"],
                ["NivaLegend.jpg", "VestaCross.jpg", "PrioraHB.jpg", "XRAY.jpg", "KalinaSport.jpg", "4x4Urban.jpg"],
                ["Stinger.jpg", "Ceed.jpg", "Rio.jpg", "K5.jpg", "Mohave.jpg", "Picanto.jpg"],
                ["Murcielago.jpg", "Urus.jpg", "AventadorS.jpg", "Huracan.jpg", "AventadorRoadster.jpg", "MurcielagoRoadster.jpg"],
                ["Camry.jpg", "RAV4.jpg", "LandCruiserPrado.jpg", "GT86.jpg", "IQ.jpg", "Prius.jpg"]
            ]

            const request = (input.value.replace(/(\.|-|\/|\\| )/g,"")).toLowerCase();
            let brand;

            for (let i = 0; i < auto.length; i++) {

                for (let j = 0; j < auto[i].length; j++) {

                    if (request == auto[i][j]) {
                        brand = auto[i][0];
                        models_block.style = "visibility: visible; opacity: 1;";
                        searchBox[0].style = "animation: up 1s ease 1; animation-fill-mode: forwards;";
                        break;
                    }
                }
            }

            if (brand == "audi") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[0][i];
                    littleInfo[i].innerHTML = li[0][i];
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
                    littleInfo[i].innerHTML = li[1][i];
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
                    littleInfo[i].innerHTML = li[2][i];
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
                    littleInfo[i].innerHTML = li[3][i];
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
                    littleInfo[i].innerHTML = li[4][i];
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
                    littleInfo[i].innerHTML = li[5][i];
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
                    littleInfo[i].innerHTML = li[6][i];
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
                    littleInfo[i].innerHTML = li[7][i];
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

            if (brand == "kia") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[8][i];
                    littleInfo[i].innerHTML = li[8][i];
                    models_img[i].src = "img/kia/" + img[8][i];
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

            if (brand == "lamborghini") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[9][i];
                    littleInfo[i].innerHTML = li[9][i];
                    models_img[i].src = "img/lamborghini/" + img[9][i];
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

            if (brand == "toyota") {
                for (let i = 0; i < 6; i++) {
                    models_name[i].innerHTML = models[10][i];
                    littleInfo[i].innerHTML = li[10][i];
                    models_img[i].src = "img/toyota/" + img[10][i];
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
        input.readOnly = false;
        alert("Марка не найдена!");
    }
});
