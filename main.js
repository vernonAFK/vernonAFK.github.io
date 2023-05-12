const searchBox = document.getElementsByClassName('search-box')
const input = document.querySelector('input');

const models_block = document.getElementById('models');
const models_name = document.getElementsByTagName('p');
const littleInfo = document.getElementsByClassName('littleInfo');
const models_img = document.getElementsByTagName('img');

const info = document.getElementById('info');
const mainPhoto = document.getElementById('mainPhoto');
const photo = document.querySelectorAll('.photo');

const extraInfo = document.getElementById('extraInfo');
const extraInfo2 = document.getElementById('extraInfo2');
const buy = document.getElementById('buy');

let countDiv = 0;
let model;

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (input.value.length == 0) {
            alert("Поле не должно быть пустым!");
            return;
        } else {
            const auto = 
            [
                ["audi", "ауди"],
                ["bmw", "бмв"],
                ["ford", "форд"],
                ["porsche", "порш", "порше"],
                ["ferrari", "феррари", "ферари"],
                ["mercedes", "mercedesbenz", "мерседес", "мерс", "мерседесбенз", "мерин"],
                ["nissan", "nisan", "ниссан", "нисан"],
                ["kia", "киа"],
                ["lamborghini", "lambo", "ламборгини", "ламбо", "ламба"],
                ["toyota", "тойота", "тоета", "тоёта"],
                ["mazda", "мазда"],
                ["volkswagen", "volks", "wagen", "фольксваген", "ваг", "ваген", "фолькс"],
                ["chevrolet", "camaro", "шевроле", "шевролет", "шевро", "камаро", "корвет"], 
                ["mitsubishi", "lancer", "митсубиси", "лансер"],
                ["astonmartin", "aston", "martin", "астонмартин", "астон", "мартин"],
                ["hyundai", "хендай", "хёндай"],
                ["jaguar", "ягуар", "яга"],
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
                ["Mercedes-Benz A-Class A 220", "Mercedes-Benz AMG GT 53", "Mercedes-Benz C-Class C 300", "Mercedes-Benz E-Class E 350", "Mercedes-Benz G-Class G 550", "Mercedes-Benz GLE-Class GLE 350", "Mercedes-Benz GLS-Class GLS 450 4MATIC", "Mercedes-Benz Maybach S 680 4MATIC", "Mercedes-Benz S-Class S 580 4MATIC", "Mercedes-Benz SLR McLaren Convertible"],

                // NISSAN
                ["Nissan Altima SR", "Nissan GT-R", "Nissan Titan PRO-4X", "Nissan Z"],

                // KIA
                ["KIA Carnival SX Prestige", "KIA Forte GT", "KIA K5 EX", "KIA Rio S", "KIA Sportage X-Line", "KIA Stinger GT2"],

                // LAMBORGHINI
                ["Lamborghini Aventador Ultimae", "Lamborghini EVO RWD", "Lamborghini Urus"],

                // TOYOTA
                ["Toyota Avalon Limited", "Toyota Camry SE", "Toyota Corolla XSE", "Toyota Crown Limited", "Toyota GR Supra 2.0", "Toyota RAV4 Adventure", "Toyota Tundra SR5 Double Cap"],

                // MAZDA
                ["Mazda 3 2.5 Turbo", "Mazda CX-5 2.5 Turbo", "Mazda CX-9 Grand Touring", "Mazda MX-5 Miata Club"],

                // VOLKSWAGEN
                ["Volkswagen Arteon SEL Premium R-Line", "Volkswagen Atlas SEL", "Volkswagen Golf R", "Volkswagen Passat SE", "Volkswagen Tiguan SEL R-Line"],

                // CHEVROLET
                ["Chevrolet Blazer RS", "Chevrolet Camaro 2SS", "Chevrolet Camaro 3LT", "Chevrolet Camaro ZL1", "Chevrolet Colorado LT", "Chevrolet Corvette Stingray", "Chevrolet Corvette Z06"],

                // MITSUBISHI
                ["Mitsubishi Lancer Evolution", "Mitsubishi Eclipse Cross SEL", "Mitsubishi Outlander SE"],

                // ASTON MARTIN
                ["Aston Martin DB11 V8 Volante", "Aston Martin DBS", "Aston Martin DBX", "Aston Martin Vantage V8"],

                // HYUDAI
                ["Hyundai Palisade XRT", "Hyundai Sonata Limited", "Hyudai Veloster N"],

                // JAGUAR
                ["Jaguar F-TYPE R", "Jaguar XF P300 R-Dynamic SE"]
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
                ["год: 2022 <br> класс: седан <br> цена: 3 060 000 ₽", "год: 2023 <br> класс: седан <br> цена: 28 870 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 480 000 ₽", "год: 2023 <br> класс: седан <br> цена: 6 510 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 22 840 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 15 510 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 16 240 000 ₽", "год: 2023 <br> класс: седан <br> цена: 20 770 000 ₽", "год: 2023 <br> класс: седан <br> цена: 19 164 000 ₽", "год: 2009 <br> класс: родстеры <br> цена: 38 200 000 ₽"],

                // NISSAN
                ["год: 2023 <br> класс: седан <br> цена: 1 680 000 ₽", "год: 2023 <br> класс: купе <br> цена: 7 726 000 ₽", "год: 2023 <br> класс: пикап <br> цена: 14 000 000 ₽", "год: 2023 <br> класс: купе <br> цена: 8 690 000 ₽"],

                // KIA
                ["год: 2023 <br> класс: SUV <br> цена: 5 324 900 ₽", "год: 2023 <br> класс: седан <br> цена: 2 760 000 ₽", "год: 2023 <br> класс: седан <br> цена: 4 569 900 ₽", "год: 2023 <br> класс: седан <br> цена: 1 789 900 ₽", "год: 2023 <br> класс: SUV <br> цена: 2 364 930 ₽", "год: 2023 <br> класс: седан <br> цена: 5 319 900 ₽"],

                // LAMBORGHINI
                ["год: 2022 <br> класс: купе <br> цена: 38 510 140 ₽", "год: 2022 <br> класс: купе <br> цена: 19 900 000 ₽", "год: 2022 <br> класс: SUV <br> цена: 29 000 000 ₽"],

                // TOYOTA
                ["год: 2022 <br> класс: седан <br> цена: 3 890 000 ₽", "год: 2023 <br> класс: седан <br> цена: 3 190 000 ₽", "год: 2023 <br> класс: седан <br> цена: 2 465 000 ₽", "год: 2023 <br> класс: седан <br> цена: 2 507 560 ₽", "год: 2023 <br> класс: купе <br> цена: 5 534 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 658 000 ₽", "год: 2023 <br> класс: пикап <br> цена: 7 900 000 ₽"],

                // MAZDA
                ["год: 2023 <br> класс: хэтчбек <br> цена: 1 753 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 645 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 4 585 000 ₽", "год: 2023 <br> класс: родстеры <br> цена: 1 378 000 ₽"],

                // VOLKSWAGEN
                ["год: 2023 <br> класс: хэтчбек <br> цена: 4 800 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 790 000 ₽", "год: 2023 <br> класс: хэтчбек <br> цена: 7 450 000 ₽", "год: 2022 <br> класс: SUV <br> цена: 3 300 000 ₽", "год: 2023 <br> класс: хэтчбек <br> цена: 4 150 000 ₽"],

                // CHEVROLET
                ["год: 2023 <br> класс: SUV <br> цена: 5 900 000 ₽", "год: 2023 <br> класс: купе <br> цена: 6 100 000 ₽", "год: 2023 <br> класс: купе <br> цена: 5 330 000 ₽", "год: 2023 <br> класс: купе <br> цена: 6 650 000 ₽", "год: 2023 <br> класс: пикап <br> цена: 2 200 000 ₽", "год: 2023 <br> класс: купе <br> цена: 7 500 000 ₽", "год: 2023 <br> класс: купе <br> цена: 9 100 000 ₽"],

                // MITSUBISHI
                ["год: 2015 <br> класс: седан <br> цена: 2 900 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 650 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 4 750 000 ₽"],

                // ASTON MARTIN
                ["год: 2023 <br> класс: родстеры <br> цена: 18 400 000 ₽", "год: 2022 <br> класс: купе <br> цена: 26 450 000 ₽", "год: 2022 <br> класс: SUV <br> цена: 22 750 000 ₽", "год: 2022 <br> класс: купе <br> цена: 9 450 000 ₽"],

                // HYUDAI
                ["год: 2023 <br> класс: SUV <br> цена: 5 260 000 ₽", "год: 2023 <br> класс: седан <br> цена: 3 439 000 ₽", "год: 2022 <br> класс: хэтчбек <br> цена: 1 459 000 ₽"],

                // JAGUAR
                ["год: 2023 <br> класс: купе <br> цена: 10 172 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 220 000 ₽"]
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
                ["AClassA220.webp", "AMGGT53.webp", "CClassC300.webp", "EClassE350.webp", "GClassG550.webp", "GLEClassGLE350.webp", "GLSClassGLS4504MATIC.webp", "MaybachS6804MATIC.webp", "SClassS5804MATIC.webp", "SLRMcLarenConvertible.webp"],

                // NISSAN
                ["AltimaSR.webp", "GTR.webp", "TitanPRO-4X.webp", "Z.webp"],

                // KIA
                ["CarnivalSXPrestige.webp", "ForteGT.webp", "K5EX.webp", "RioS.webp", "SportageXLine.webp", "StingerGT2.webp"],

                // LAMBORGHINI
                ["AventadorUltimae.webp", "HuracanEVORWD.webp", "Urus.webp"],

                // TOYOTA
                ["AvalonLimited.webp", "CamrySE.webp", "CorollaXSE.webp", "CrownLimited.webp", "GRSupra2.0.webp", "RAV4Adventure.webp", "TundraSR5.webp"],

                // MAZDA
                ["3_2.5Turbo.webp", "CX5_2.5Turbo.webp", "CX9_GrandTouring.webp", "MX5Miata_Club.webp"],

                // VOLKSWAGEN
                ["ArteonSELPremiumRLine.webp", "AtlasSEL.webp", "GolfR.webp", "PassatSE.webp", "TiguanSELRLine.webp"],

                // CHEVROLET
                ["BlazerRS.webp", "Camaro2SS.webp", "Camaro3LT.webp", "CamaroZL1.webp", "ColoradoLT.webp", "CorvetteStingray.webp", "CorvetteZ06.webp"],

                // MITSUBISHI
                ["LancerEvolution.webp", "EclipseCrossSEL.webp", "OutlanderSE.webp"],

                // ASTON MARTIN
                ["DB11V8Volante.webp", "DBS.webp", "DBX.webp", "VantageV8.webp"],

                // HYUDAI
                ["PalisadeXRT.webp", "SonataLimited.webp", "VelosterN.webp"],

                // JAGUAR
                ["FTYPER.webp", "XFP300RDynamicSE.webp"]
            ]

            const extraImg = 
            [
                // AUDI
                ["A3.webp", "A4.webp", "A5Coupe.webp", "A6.webp"],
                ["A7.webp", "A8.webp", "Q3.webp", "Q4E-tron.webp"], 
                ["Q5.webp", "Q7.webp", "Q8.webp", "RS3.webp"]
            ]

            const extraLi =
            [
                // AUDI
                // A3
                ["Audi A3 <br> Класс: Cедан <br> Год: 2023 <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1320 кг <br> Объем топливного бака - 50 л <br> Объем багажного отделения - 425 л <br><br> Размеры: <br> Длина - 4495 мм <br> Ширина - 1816 мм <br> Высота - 1425 мм <br> Колесная база - 2636 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 5,9 л/100 км <br> Расход топлива (за городом) - 4,1 л/100 км <br> Расход топлива (смешанный) - 4,8 л/100 км <br> Разгон с 0 до 100 км/ч	- 8,2 с <br> Максимальная скорость - 224 км/ч <br> Тип топлива - Бензин <br> Мощность - 150 л.с. при 6000 об/мин.", 

                // A4
                "Audi A4 <br> Класс: седан <br> Год: 2023 <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1470 кг <br> Объем топливного бака - 54 л <br> Объем багажного отделения - 460 л <br><br> Размеры: <br> Длина - 4762 мм <br> Ширина - 1847 мм <br> Высота - 1431 мм <br> Колесная база - 2820 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 7,2-7,5 л/100 км <br> Расход топлива (за городом) - 4,6-5,0 л/100 км <br> Расход топлива (смешанный) - 5,9-7,0 л/100 км <br> Разгон с 0 до 100 км/ч - 8,9 с <br> Максимальная скорость - 210 км/ч <br> Тип топлива - Бензин <br> Мощность - 150 л.с. при 4000-6000 об/мин."],
            ]

            // https://cenyavto.com/

            /* 
            Audi A3 <br> Класс: <br> Год: <br><br> Пространство, объем и вес: <br> Снаряженная масса - <br> Объем топливного бака - <br> Объем багажного отделения - <br><br> Размеры: <br> Длина - <br> Ширина - <br> Высота - <br> Колесная база - <br><br> Характеристики производительности: <br> Расход топлива (городской) - <br> Расход топлива (за городом) - <br> Расход топлива (смешанный) - <br> Разгон с 0 до 100 км/ч	- <br> Максимальная скорость - <br> Тип топлива - <br> Мощность -
            */

            const extraLi2 = 
            [
                // AUDI
                // A3
                ["Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (автоматическая коробка передач) - 8 <br> Передняя подвеска	- Независимая типа McPherson <br> Задняя подвеска - Независимая многорычажная <br> Передние тормоза - Дисковые вентилируемые <br> Задние тормоза - Дисковые вентилируемые <br> ABS - да <br> Усилитель рулевого управления - Электроусилитель",
            
                // A4
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (роботизированная коробка передач) - 7 <br> Передняя подвеска - Независимая многорычажная <br> Задняя подвеска - Независимая многорычажная <br> Передние тормоза - Вентилируемые диски <br> Задние тормоза - Дисковые <br> ABS - да <br> Усилитель рулевого управления - Электроусилитель"]
            ]

            /* 
            Трансмиссия, тормоза и характеристики подвески: <br> Привод - <br> Количество передач (автоматическая коробка передач) - <br> Передняя подвеска	- <br> Задняя подвеска - <br> Передние тормоза - <br> Задние тормоза - <br> ABS - <br> Усилитель рулевого управления -
            */

            const price = 
            [
                // AUDI
                ["Купить за 3 051 000 ₽", "Купить за 4 002 000 ₽"]
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

            function showModelInfo() {
                const model_blocks = document.querySelectorAll('.model');
                model_blocks.forEach(item => {
                    item.addEventListener('click', () => {
                        model = item.querySelector('p').textContent;

                        info.style = "visibility: visible; opacity: 1;";
                        models_block.style = " visibility: visible; opacity: 1; filter: blur(22px); cursor: pointer;";
                        searchBox[0].style = "animation: up 1s ease 1; animation-fill-mode: forwards; filter: blur(3px); pointer-events: none;";
                        for (let i = 0; i < model_blocks.length; i++) {
                            model_blocks[i].style = "pointer-events: none;";
                        }

                        if (model == models[0][0]) {
                            for (let i = 0; i < 4; i++) {
                                mainPhoto.src = "img/audi/" + extraImg[0][0];
                                photo[0].src = "img/audi/" + extraImg[0][0];
                                photo[i].src = "img/audi/" + extraImg[0][i];
                            }
                            extraInfo.innerHTML = extraLi[0][0];
                            extraInfo2.innerHTML = extraLi2[0][0];
                            buy.innerHTML = price[0][0];
                        }
        
                        if (model == models[0][1]) {
                            for (let i = 0; i < 4; i++) {
                                mainPhoto.src = "img/audi/" + extraImg[1][0];
                                photo[0].src = "img/audi/" + extraImg[1][0];
                                photo[i].src = "img/audi/" + extraImg[1][i];
                            }
                            extraInfo.innerHTML = extraLi[0][1];
                            extraInfo2.innerHTML = extraLi2[0][1];
                            buy.innerHTML = price[0][1];
                        }
        
                        if (model == models[0][2]) {
                            for (let i = 0; i < 4; i++) {
                                mainPhoto.src = "img/audi/" + extraImg[2][0];
                                photo[0].src = "img/audi/" + extraImg[2][0];
                                photo[i].src = "img/audi/" + extraImg[2][i];
                            }
                        }



                    });
                });

                buy.addEventListener('click', () => {
                    alert("Спасибо за покупку!");
                });

                photo.forEach(item => {
                    item.addEventListener('click', () => {
                        mainPhoto.src = item.src;
                    });
                });

                setTimeout (
                    models_block.addEventListener("click", () => {
                        info.style = "visibility: hidden; opacity: 0;";
                        models_block.style = " visibility: visible; opacity: 1;";
                        searchBox[0].style = "animation: up 1s ease 1; animation-fill-mode: forwards;";
                        for (let i = 0; i < model_blocks.length; i++) {
                            model_blocks[i].style = "pointer-events: all;";
                        }
                    }, 10)
                );
            }

            if (brand == "audi") {
                deleteDivs();
                for (let i = 0; i < models[0].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[0][i];
                    littleInfo[i].innerHTML = li[0][i];
                    models_img[i].src = "img/audi/" + img[0][i];
                }
                showModelInfo();
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
                showModelInfo();
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
                showModelInfo();
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
                showModelInfo();
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
                showModelInfo();
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
                showModelInfo();
                return;
            }

            if (brand == "nissan") {
                deleteDivs();
                for (let i = 0; i < models[6].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[6][i];
                    littleInfo[i].innerHTML = li[6][i];
                    models_img[i].src = "img/nissan/" + img[6][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "kia") {
                deleteDivs();
                for (let i = 0; i < models[7].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[7][i];
                    littleInfo[i].innerHTML = li[7][i];
                    models_img[i].src = "img/kia/" + img[7][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "lamborghini") {
                deleteDivs();
                for (let i = 0; i < models[8].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[8][i];
                    littleInfo[i].innerHTML = li[8][i];
                    models_img[i].src = "img/lamborghini/" + img[8][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "toyota") {
                deleteDivs();
                for (let i = 0; i < models[9].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[9][i];
                    littleInfo[i].innerHTML = li[9][i];
                    models_img[i].src = "img/toyota/" + img[9][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "mazda") {
                deleteDivs();
                for (let i = 0; i < models[10].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[10][i];
                    littleInfo[i].innerHTML = li[10][i];
                    models_img[i].src = "img/mazda/" + img[10][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "volkswagen") {
                deleteDivs();
                for (let i = 0; i < models[11].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[11][i];
                    littleInfo[i].innerHTML = li[11][i];
                    models_img[i].src = "img/volkswagen/" + img[11][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "chevrolet") {
                deleteDivs();
                for (let i = 0; i < models[12].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[12][i];
                    littleInfo[i].innerHTML = li[12][i];
                    models_img[i].src = "img/chevrolet/" + img[12][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "mitsubishi") {
                deleteDivs();
                for (let i = 0; i < models[13].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[13][i];
                    littleInfo[i].innerHTML = li[13][i];
                    models_img[i].src = "img/mitsubishi/" + img[13][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "astonmartin") {
                deleteDivs();
                for (let i = 0; i < models[14].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[14][i];
                    littleInfo[i].innerHTML = li[14][i];
                    models_img[i].src = "img/astonmartin/" + img[14][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "hyundai") {
                deleteDivs();
                for (let i = 0; i < models[15].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[15][i];
                    littleInfo[i].innerHTML = li[15][i];
                    models_img[i].src = "img/hyundai/" + img[15][i];
                }
                showModelInfo();
                return;
            }

            if (brand == "jaguar") {
                deleteDivs();
                for (let i = 0; i < models[16].length; i++) {
                    addNewDiv();
                    models_name[i].innerHTML = models[16][i];
                    littleInfo[i].innerHTML = li[16][i];
                    models_img[i].src = "img/jaguar/" + img[16][i];
                }
                showModelInfo();
                return;
            }
        }
        alert("Марка не найдена!");
    }
});
