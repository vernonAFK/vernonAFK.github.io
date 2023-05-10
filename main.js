const searchBox = document.getElementsByClassName('search-box')
const input = document.querySelector('input');

const models_block = document.getElementById('models');
// const model_blocks = document.querySelectorAll('.model');
const models_name = document.getElementsByTagName('p');
const littleInfo = document.getElementsByClassName('littleInfo');
const models_img = document.getElementsByTagName('img');

const info = document.getElementById('info');
const text = document.getElementsByClassName('text');

let countDiv = 0;

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (input.value.length == 0) {
            alert("Поле не должно быть пустым!");
            return;
        } else {
            // input.readOnly = true;
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
                // AUDI
                ["Audi A3", "Audi A4", "Audi A5 Coupe", "Audi A6", "Audi A7", "Audi A8", "Audi Q3", "Audi Q4 e-tron", "Audi Q5", "Audi Q7", "Audi Q8", "Audi RS 3", "Audi RS 5 Coupe", "Audi RS 6", "Audi RS 7", "Audi RS Q8"],

                // BMW
                ["BMW 2 Series M240i xDrive", "BMW 3 Series M340i xDrive", "BMW 4 Series M440i xDrive", "BMW 5 Series M550i xDrive", "BMW 7 Series 760i xDrive", "BMW 8 Series M850i xDrive", "BMW M2", "BMW M3 Competition", "BMW M4 Competition", "BMW M5 Competition", "BMW M8 Competition", "BMW Z4 M40i Convertible"],

                // FORD
                ["Ford Bronco", "Ford Mustang", "Ford Mustang Shelby GT500", "Ford Transit", "Ford Edge", "Ford Explorer", "Ford Escape", "Ford F-450 Super Duty"],

                // PORSCHE
                ["Porsche 718 Boxster Spyder", "Porsche 718 Cayman GT4", "Porsche 911 Carrera 4S", "Porsche 911 Carrera S", "Porsche Cayenne", "Porsche Panamera 4S", "Porsche Taycan 4S", "Porsche Taycan GTS"],

                // FERRARI
                ["Ferrari 488 Spider", "Ferrari 812 Superfast", "Ferrari FF"],

                // MERCEDES
                ["Mercedes-Benz A-class", "Mercedes-Benz AMG GT 53"],

                ["Nissan GT-R", "Nissan X-Trail", "Nissan Juke", "Nissan Patrol", "Nissan Terrano", "Nissan Almera"],
                ["LADA Niva Legend", "LADA Vesta Cross", "LADA Priora HB", "LADA XRAY", "LADA Kalina Sport", "LADA 4x4 Urban"],
                ["KIA Stinger", "KIA Ceed", "KIA Rio", "KIA K5", "KIA Mohave", "KIA Picanto"],
                ["Lamborghini Murcielago", "Lamborghini Urus", "Lamborghini Aventador S", "Lamborghini Huracan", "Lamborghini Aventador Roadster", "Lamborghini Murcielago Roadster"],
                ["Toyota Camry", "Toyota RAV4", "Toyota Land Cruiser Prado", "Toyota GT86", "Toyota iQ", "Toyota Prius"]

            ]

            const li = 
            [
                // AUDI
                ["год: 2023 <br> класс: седан <br> цена: 3 051 000 ₽", "год: 2023 <br> класс: седан <br> цена: 4 002 000 ₽","год: 2023 <br> класс: купе <br> цена: 6 646 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 880 000 ₽", "год: 2023 <br> класс: седан <br> цена: 8 780 000 ₽", "год: 2023 <br> класс: седан <br> цена: 11 567 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 535 000 ₽", "год: 2023 <br> класс: SUV EV <br> цена: 6 300 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 5 227 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 6 785 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 7 530 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 800 000 ₽", "год: 2023 <br> класс: купе <br> цена: 5 800 000 ₽", "год: 2023 <br> класс: универсал <br> цена: 9 885 000 ₽", "год: 2023 <br> класс: лифтбек <br> цена: 10 300 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 11 060 000 ₽"],

                // BMW
                ["год: 2023 <br> класс: купе <br> цена: 6 900 000 ₽", "год: 2023 <br> класс: седан <br> цена: 8 550 000 ₽", "год: 2023 <br> класс: купе <br> цена: 	10 070 000 ₽", "год: 2023 <br> класс: седан <br> цена: 13 260 000 ₽", "год: 2023 <br> класс: седан <br> цена: 16 900 000 ₽", "год: 2023 <br> класс: купе <br> цена: 11 460 000 ₽", "год: 2023 <br> класс: купе <br> цена: 9 450 000 ₽", "год: 2023 <br> класс: седан <br> цена: 13 300 000 ₽", "год: 2023 <br> класс: купе <br> цена: 15 800 000 ₽", "год: 2023 <br> класс: седан <br> цена: 12 800 000 ₽", "год: 2023 <br> класс: купе <br> цена: 19 800 000 ₽", "год: 2023 <br> класс: родстеры <br> цена: 11 150 000 ₽"],

                // FORD
                ["год: 2023 <br> класс: SUV <br> цена: 13 300 000 ₽", "год: 2023 <br> класс: купе <br> цена: 9 500 000 ₽", "год: 2022 <br> класс: купе <br> цена: 17 111 250 ₽", "год: 2023 <br> класс: фургон <br> цена: 7 500 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 1 699 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 7 070 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 1 860 000 ₽", "год: 2022 <br> класс: пикап <br> цена: 8 910 000 ₽"],

                // PORSCHE
                ["год: 2023 <br> класс: родстеры <br> цена: 8 820 000 ₽", "год: 2023 <br> класс: купе <br> цена: 14 870 000 ₽", "год: 2023 <br> класс: купе <br> цена: 15 820 000 ₽", "год: 2023 <br> класс: купе <br> цена: 12 400 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 7 320 000 ₽", "год: 2023 <br> класс: седан <br> цена: 14 130 000 ₽", "год: 2023 <br> класс: седан EV <br> цена: 9 940 000 ₽", "год: 2023 <br> класс: седан EV <br> цена: 11 730 000 ₽"],

                // FERRARI
                ["год: 2018 <br> класс: родстеры <br> цена: 24 000 000 ₽", "год: 2018 <br> класс: купе <br> цена: 26 000 000 ₽", "год: 2015 <br> класс: купе <br> цена: 18 000 000 ₽"],

                // MERCEDES
                ["год: 2022 <br> класс: седан <br> цена: 3 060 000 ₽", "год: 2023 <br> класс: седан <br> цена: 28 870 000 ₽"],

                ["год: 2016 <br> класс: купе <br> цена: 6 875 000 ₽", "год: 2015 <br> класс: компактные SUV <br> цена: 1 790 000 ₽", "год: 2014 <br> класс: компактные SUV <br> цена: 1 107 000 ₽", "год: 2014 <br> класс: компактные SUV <br> цена: 4 750 000 ₽", "год: 2017 <br> класс: компактные SUV <br> цена: 930 000 ₽", "год: 2012 <br> класс: малый средний класс <br> цена: 645 000 ₽"],
                ["год: 2021 <br> класс: компактные SUV <br> цена: 659 900 ₽", "год: 2018 <br> класс: малый класс <br> цена: 763 900 ₽", "год: 2013 <br> класс: малый средний класс <br> цена: 290 000 ₽", "год: 2015 <br> класс: малый класс <br> цена: 614 900 ₽", "год: 2014 <br> класс: малый класс <br> цена: 566 900 ₽", "год: 2015 <br> класс: компактные SUV <br> цена: 546 800 ₽"],
                ["год: 2017 <br> класс: бизнес-класс <br> цена: 1 899 000 ₽", "год: 2018 <br> класс: малый средний класс <br> цена: 1 001 000 ₽", "год: 2017 <br> класс: малый класс <br> цена: 695 900 ₽", "год: 2022 <br> класс: средний класс <br> цена: 3 569 900 ₽", "год: 2017 <br> класс: полноразмерные SUV <br> цена: 2 489 900 ₽", "год: 2017 <br> класс: субкомпактный класс <br> цена: 559 900 ₽"],
                ["год: 2006 <br> класс: купе <br> цена: 20 900 000 ₽", "год: 2017 <br> класс: полноразмерные SUV <br> цена: 15 200 000 ₽", "год: 2016 <br> класс: купе <br> цена: 20 050 000 ₽", "год: 2014 <br> класс: купе <br> цена: 11 150 000 ₽", "год: 2012 <br> класс: родстеры <br> цена: 19 450 000 ₽", "год: 2006 <br> класс: родстеры <br> цена: 19 250 000 ₽"],
                ["год: 2018 <br> класс: средний класс <br> цена: 1 399 000 ₽", "год: 2019 <br> класс: компактные SUV <br> цена: 1 756 000 ₽", "год: 2017 <br> класс: полноразмерные SUV <br> цена: 2 249 000 ₽", "год: 2012 <br> класс: купе <br> цена: 2 949 000 ₽", "год: 2009 <br> класс: субкомпактный класс <br> цена: 590 000 ₽", "год: 2016 <br> класс: малый средний класс <br> цена: 2 154 000 ₽"]
            ]

            const img = 
            [
                // AUDI
                ["A3.webp", "A4.webp", "A5Coupe.webp", "A6.webp", "A7.webp", "A8.webp", "Q3.webp", "Q4E-tron.webp", "Q5.webp", "Q7.webp", "Q8.webp", "RS3.webp", "RS5Coupe.webp", "RS6.webp", "RS7.webp", "RSQ8.webp"],

                // BMW
                ["2SeriesM240iXDrive.webp", "3SeriesM340iXDrive.webp", "4SeriesM440iXDrive.webp", "5SeriesM550iXDrive.webp", "7Series760iXDrive.webp", "8SeriesM850iXDrive.webp", "M2.webp", "M3Competition.webp", "M4Competition.webp", "M5Competition.webp", "M8Competition.webp", "Z4M40iConvertible.webp"],

                // FORD
                ["Bronco.webp", "Mustang.webp", "MustangShelbyGT500.webp", "Transit.webp", "Edge.webp", "Explorer.webp", "Escape.webp", "F450SuperDuty.webp"],

                // PORSCHE
                ["718BoxsterSpyder.webp", "718CaymanGT4.webp", "911Carrera4S.webp", "911CarreraS.webp", "Cayenne.webp", "Panamera4S.webp", "Taycan4S.webp", "TaycanGTS.webp"],

                // FERRARI
                ["488Spider.webp", "812Superfast.webp", "FF.webp"],

                // MERCEDES
                ["AClass.webp", "AMGGT53.webp"],

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
                        // input.setAttribute('disabled', 'disabled');
                        brand = auto[i][0];
                        models_block.style = "visibility: visible; opacity: 1;";
                        searchBox[0].style = "animation: up 1s ease 1; animation-fill-mode: forwards;";
                        break;
                    }
                }
            }

            function addNewDiv() {
                let newDiv = document.createElement('div');
                newDiv.className = "model";

                let p = document.createElement('p');
                let image = document.createElement('img');

                let div = document.createElement('div');
                div.className = "littleInfo";

                newDiv.appendChild(p);
                newDiv.appendChild(image);
                newDiv.appendChild(div);

                models_block.appendChild(newDiv);
                countDiv += 1;
            }

            function deleteDivs() {
                const deleteThis = document.getElementsByClassName('model');
                
                while (countDiv > 0) {
                    models_block.removeChild(deleteThis[countDiv - 1]);
                    countDiv -= 1;
                }
            }

            if (brand == "audi") {
                deleteDivs();
                for (let i = 0; i < models[0].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[0][i];
                    littleInfo[i].innerHTML = li[0][i];
                    models_img[i].src = "img/audi/" + img[0][i];
                }

                // model_blocks.forEach(item => {
                //     item.addEventListener('click', () => {
                //         let model = item.querySelector('p').textContent;
                //         models_block.style = "visibility: hidden; opacity: 0;";
                //         info.style = "visibility: visible; opacity: 1;";

                //         if (model == models[0][0]) {
                //             text[0].innerHTML = "Audi A5";
                //             text[1].innerHTML = "Audi A5 2";
                //             text[2].innerHTML = "Audi A5 3";
                //         }

                //         if (model == models[0][1]) {
                //             text[0].innerHTML = "Audi A6";
                //             text[1].innerHTML = "Audi A6 2";
                //             text[2].innerHTML = "Audi A6 3";
                //         }

                //         if (model == models[0][2]) {
                //             text[0].innerHTML = "Audi A8";
                //             text[1].innerHTML = "Audi A8 2";
                //             text[2].innerHTML = "Audi A8 3";
                //         }

                //         if (model == models[0][3]) {
                //             text[0].innerHTML = "Audi R8";
                //             text[1].innerHTML = "Audi R8 2";
                //             text[2].innerHTML = "Audi R8 3";
                //         }

                //         if (model == models[0][4]) {
                //             text[0].innerHTML = "Audi S6";
                //             text[1].innerHTML = "Audi S6 2";
                //             text[2].innerHTML = "Audi S6 3";
                //         }

                //         if (model == models[0][5]) {
                //             text[0].innerHTML = "Audi S7";
                //             text[1].innerHTML = "Audi S7 2";
                //             text[2].innerHTML = "Audi S7 3";
                //         }
                //     });
                // });
                return;
            }

            if (brand == "bmw") {
                deleteDivs();
                for (let i = 0; i < models[1].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[1][i];
                    littleInfo[i].innerHTML = li[1][i];
                    models_img[i].src = "img/bmw/" + img[1][i];
                }
                return;
            }

            if (brand == "ford") {
                deleteDivs();
                for (let i = 0; i < models[2].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[2][i];
                    littleInfo[i].innerHTML = li[2][i];
                    models_img[i].src = "img/ford/" + img[2][i];
                }
                return;
            }

            if (brand == "porsche") {
                deleteDivs();
                for (let i = 0; i < models[3].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[3][i];
                    littleInfo[i].innerHTML = li[3][i];
                    models_img[i].src = "img/porsche/" + img[3][i];
                }
                return;
            }

            if (brand == "ferrari") {
                deleteDivs();
                for (let i = 0; i < models[4].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[4][i];
                    littleInfo[i].innerHTML = li[4][i];
                    models_img[i].src = "img/ferrari/" + img[4][i];
                }
                return;
            }
            
            if (brand == "mercedes") {
                deleteDivs();
                for (let i = 0; i < models[5].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[5][i];
                    littleInfo[i].innerHTML = li[5][i];
                    models_img[i].src = "img/mercedes/" + img[5][i];
                }
                return;
            }

            if (brand == "nissan") {
                for (let i = 0; i < models[6].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[6][i];
                    littleInfo[i].innerHTML = li[6][i];
                    models_img[i].src = "img/nissan/" + img[6][i];
                }
                return;
            }

            if (brand == "lada") {
                for (let i = 0; i < 6; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[7][i];
                    littleInfo[i].innerHTML = li[7][i];
                    models_img[i].src = "img/lada/" + img[7][i];
                }
                return;
            }

            if (brand == "kia") {
                for (let i = 0; i < models[8].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[8][i];
                    littleInfo[i].innerHTML = li[8][i];
                    models_img[i].src = "img/kia/" + img[8][i];
                }
                return;
            }

            if (brand == "lamborghini") {
                for (let i = 0; i < 6; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[9][i];
                    littleInfo[i].innerHTML = li[9][i];
                    models_img[i].src = "img/lamborghini/" + img[9][i];
                }
                return;
            }

            if (brand == "toyota") {
                for (let i = 0; i < 6; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[10][i];
                    littleInfo[i].innerHTML = li[10][i];
                    models_img[i].src = "img/toyota/" + img[10][i];
                }
                return;
            }
        }
        // input.removeAttribute('disabled');
        // input.readOnly = false;
        alert("Марка не найдена!");
    }
});
