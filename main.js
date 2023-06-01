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
const maps = document.getElementById('maps');

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
                ["bmw", "бмв", "бэха"],
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
                ["volvo", "вольво", "волво"],
                ["lexus", "лексус", "лекс"],
                ["tesla", "тесла"]
            ]

            const models = 
            [
                // AUDI
                ["Audi A3", "Audi A4", "Audi A5 Coupe", "Audi A6", "Audi A7", "Audi A8", "Audi Q3", "Audi Q4 40 e-tron", "Audi Q5", "Audi Q7", "Audi Q8", "Audi RS 3", "Audi RS 5 Coupe", "Audi RS 6", "Audi RS 7", "Audi RS Q8"],

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
                ["Jaguar F-TYPE R", "Jaguar XF P300 R-Dynamic SE", "Jaguar I-PACE HSE"],

                // SUBARU
                ["Subaru Ascent Onyx Edition", "Subaru BRZ Limited", "Subaru Forester Touring", "Subaru Outback Wilderness", "Subaru WRX GT"],

                // VOLVO
                ["Volvo S60 T8 Polestar Engineered", "Volvo V60 T8 Polestar Engineered", "Volvo XC40 B4 Ultimate Bright", "Volvo XC90 Recharge T8 Plus Bright"],

                // LEXUS
                ["Lexus ES 350 F SPORT Handling", "Lexus LC 500 Convertible", "Lexus LX 600 F SPORT Handling", "Lexus RC F", "Lexus RX 500h"],

                // TESLA
                ["Tesla Model 3 Performance", "Tesla Model S Plaid", "Tesla Model X Plaid", "Tesla Model Y Performance"]
            ]

            const li = 
            [
                // AUDI
                ["год: 2023 <br> класс: седан <br> цена: 3 051 000 ₽", "год: 2023 <br> класс: седан <br> цена: 4 002 000 ₽","год: 2023 <br> класс: купе <br> цена: 6 646 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 880 000 ₽", "год: 2023 <br> класс: лифтбэк <br> цена: 8 780 000 ₽", "год: 2023 <br> класс: седан <br> цена: 11 567 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 535 000 ₽", "год: 2023 <br> класс: SUV EV <br> цена: 6 300 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 5 227 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 6 785 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 7 530 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 800 000 ₽", "год: 2023 <br> класс: купе <br> цена: 5 800 000 ₽", "год: 2023 <br> класс: универсал <br> цена: 9 885 000 ₽", "год: 2023 <br> класс: лифтбэк <br> цена: 10 300 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 11 060 000 ₽"],

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
                ["год: 2023 <br> класс: купе <br> цена: 10 172 000 ₽", "год: 2023 <br> класс: седан <br> цена: 5 220 000 ₽", "год: 2023 <br> класс: хэтчбек <br> цена: 3 190 000 ₽"],

                // SUBARU
                ["год: 2023 <br> класс: SUV <br> цена: 3 950 000 ₽", "год: 2023 <br> класс: купе <br> цена: 2 550 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 340 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 5 920 900 ₽", "год: 2023 <br> класс: седан <br> цена: 2 810 000 ₽"],

                // VOLVO
                ["год: 2023 <br> класс: седан <br> цена: 2 930 000 ₽", "год: 2023 <br> класс: универсал <br> цена: 3 400 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 3 100 000 ₽", "год: 2023 <br> класс: SUV EV <br> цена: 5 252 000 ₽"],

                // LEXUS
                ["год: 2023 <br> класс: седан <br> цена: 6 620 000 ₽", "год: 2023 <br> класс: родстеры <br> цена: 12 550 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 11 825 000 ₽", "год: 2023 <br> класс: купе <br> цена: 6 380 000 ₽", "год: 2023 <br> класс: SUV <br> цена: 7 170 000 ₽"],

                // TESLA
                ["год: 2023 <br> класс: седан EV <br> цена: 7 820 000 ₽", "год: 2023 <br> класс: седан EV <br> цена: 16 450 000 ₽", "год: 2023 <br> класс: SUV EV <br> цена: 17 550 000 ₽", "год: 2023 <br> класс: SUV EV <br> цена: 7 100 000 ₽"]
            ]

            const img = 
            [
                // AUDI
                ["audi/A3.webp", "audi/A4.webp", "audi/A5Coupe.webp", "audi/A6.webp", "audi/A7.webp", "audi/A8.webp", "audi/Q3.webp", "audi/Q440E-tron.webp", "audi/Q5.webp", "audi/Q7.webp", "audi/Q8.webp", "audi/RS3.webp", "audi/RS5Coupe.webp", "audi/RS6.webp", "audi/RS7.webp", "audi/RSQ8.webp"],

                // BMW
                ["bmw/2SeriesM240iXDrive.webp", "bmw/3SeriesM340iXDrive.webp", "bmw/4SeriesM440iXDrive.webp", "bmw/5SeriesM550iXDrive.webp", "bmw/7Series760iXDrive.webp", "bmw/8SeriesM850iXDrive.webp", "bmw/M2.webp", "bmw/M3Competition.webp", "bmw/M4Competition.webp", "bmw/M5Competition.webp", "bmw/M8Competition.webp", "bmw/Z4M40iConvertible.webp"],

                // FORD
                ["ford/Bronco.webp", "ford/Mustang.webp", "ford/MustangShelbyGT500.webp", "ford/Transit.webp", "ford/Edge.webp", "ford/Explorer.webp", "ford/Escape.webp", "ford/F450SuperDuty.webp"],

                // PORSCHE
                ["porsche/718BoxsterSpyder.webp", "porsche/718CaymanGT4.webp", "porsche/911Carrera4S.webp", "porsche/911CarreraS.webp", "porsche/Cayenne.webp", "porsche/Panamera4S.webp", "porsche/Taycan4S.webp", "porsche/TaycanGTS.webp"],

                // FERRARI
                ["ferrari/488Spider.webp", "ferrari/812Superfast.webp", "ferrari/FF.webp"],

                // MERCEDES
                ["mercedes/AClassA220.webp", "mercedes/AMGGT53.webp", "mercedes/CClassC300.webp", "mercedes/EClassE350.webp", "mercedes/GClassG550.webp", "mercedes/GLEClassGLE350.webp", "mercedes/GLSClassGLS4504MATIC.webp", "mercedes/MaybachS6804MATIC.webp", "mercedes/SClassS5804MATIC.webp", "mercedes/SLRMcLarenConvertible.webp"],

                // NISSAN
                ["nissan/AltimaSR.webp", "nissan/GTR.webp", "nissan/TitanPRO-4X.webp", "nissan/Z.webp"],

                // KIA
                ["kia/CarnivalSXPrestige.webp", "kia/ForteGT.webp", "kia/K5EX.webp", "kia/RioS.webp", "kia/SportageXLine.webp", "kia/StingerGT2.webp"],

                // LAMBORGHINI
                ["lamborghini/AventadorUltimae.webp", "lamborghini/HuracanEVORWD.webp", "lamborghini/Urus.webp"],

                // TOYOTA
                ["toyota/AvalonLimited.webp", "toyota/CamrySE.webp", "toyota/CorollaXSE.webp", "toyota/CrownLimited.webp", "toyota/GRSupra2.0.webp", "toyota/RAV4Adventure.webp", "toyota/TundraSR5.webp"],

                // MAZDA
                ["mazda/3_2.5Turbo.webp", "mazda/CX5_2.5Turbo.webp", "mazda/CX9_GrandTouring.webp", "mazda/MX5Miata_Club.webp"],

                // VOLKSWAGEN
                ["volkswagen/ArteonSELPremiumRLine.webp", "volkswagen/AtlasSEL.webp", "volkswagen/GolfR.webp", "volkswagen/PassatSE.webp", "volkswagen/TiguanSELRLine.webp"],

                // CHEVROLET
                ["chevrolet/BlazerRS.webp", "chevrolet/Camaro2SS.webp", "chevrolet/Camaro3LT.webp", "chevrolet/CamaroZL1.webp", "chevrolet/ColoradoLT.webp", "chevrolet/CorvetteStingray.webp", "chevrolet/CorvetteZ06.webp"],

                // MITSUBISHI
                ["mitsubishi/LancerEvolution.webp", "mitsubishi/EclipseCrossSEL.webp", "mitsubishi/OutlanderSE.webp"],

                // ASTON MARTIN
                ["astonmartin/DB11V8Volante.webp", "astonmartin/DBS.webp", "astonmartin/DBX.webp", "astonmartin/VantageV8.webp"],

                // HYUNDAI
                ["hyundai/PalisadeXRT.webp", "hyundai/SonataLimited.webp", "hyundai/VelosterN.webp"],

                // JAGUAR
                ["jaguar/FTYPER.webp", "jaguar/XFP300RDynamicSE.webp", "jaguar/IPACEHSE.webp"],

                // SUBARU
                ["subaru/AscentOnyxEdition.webp", "subaru/BRZLimited.webp", "subaru/ForesterTouring.webp", "subaru/OutbackWilderness.webp", "subaru/WRXGT.webp"],

                // VOLVO
                ["volvo/S60T8PolestarEngineered.webp", "volvo/V60T8PolestarEngineered.webp", "volvo/XC40B4UltimateBright.webp", "volvo/XC90RechargeT8PlusBright.webp"],

                // LEXUS
                ["lexus/ES350FSPORTHandling.webp", "lexus/LC500Convertible.webp", "lexus/LX600FSPORTHandling.webp", "lexus/RCF.webp", "lexus/RX500h.webp"],

                // TESLA
                ["tesla/Model3Performance.webp", "tesla/ModelSPlaid.webp", "tesla/ModelXPlaid.webp", "tesla/ModelYPerformance.webp"]
            ]

            const extraImg = 
            [
                // AUDI
                // A3
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A4
                ["audi/A4_1.webp", "audi/A4_2.webp", "audi/A4_3.webp", "audi/A4_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],

                // A5 Coupe
                ["audi/A3_1.webp", "audi/A3_2.webp", "audi/A3_3.webp", "audi/A3_4.webp"],
            ]

            const extraLi =
                // AUDI
                // A3
                ["Audi A3 <br><br> Класс: седан <br> Год: 2023 <br> Цена: 3 051 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1320 кг <br> Объем топливного бака - 50 л <br> Объем багажного отделения - 425 л <br><br> Размеры: <br> Длина - 4495 мм <br> Ширина - 1816 мм <br> Высота - 1425 мм <br> Колесная база - 2636 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 5,9 л/100 км <br> Расход топлива (трасса) - 4,1 л/100 км <br> Расход топлива (смешанный) - 4,8 л/100 км <br> Разгон с 0 до 100 км/ч	- 8,2 с <br> Максимальная скорость - 224 км/ч <br> Тип топлива - Бензин <br> Мощность - 150 л.с.",

                // A4
                "Audi A4 <br><br> Класс: седан <br> Год: 2023 <br> Цена: 4 002 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1470 кг <br> Объем топливного бака - 54 л <br> Объем багажного отделения - 460 л <br><br> Размеры: <br> Длина - 4762 мм <br> Ширина - 1847 мм <br> Высота - 1431 мм <br> Колесная база - 2820 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 7,2 л/100 км <br> Расход топлива (трасса) - 4,6 л/100 км <br> Расход топлива (смешанный) - 5,9 л/100 км <br> Разгон с 0 до 100 км/ч - 8,9 с <br> Максимальная скорость - 210 км/ч <br> Тип топлива - Бензин <br> Мощность - 150 л.с.",

                // A5
                "Audi A5 Coupe <br><br> Класс: купе <br> Год: 2023 <br> Цена: 6 646 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1565 кг <br> Объем топливного бака - 54 л <br> Объем багажного отделения - 1280 л <br><br> Размеры: <br> Длина - 4757 мм <br> Ширина - 1843 мм <br> Высота - 1386 мм<br> Колесная база - 2824 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 7,8 л/100 км <br> Расход топлива (трасса) - 5,4 л/100 км <br> Расход топлива (смешанный) - 6,3 л/100 км <br> Разгон с 0 до 100 км/ч - 9,1 с <br> Максимальная скорость - 223 км/ч <br> Тип топлива - Бензин <br> Мощность - 150 л.с.",

                // A6
                "Audi A6 <br><br> Класс: седан <br> Год: 2023 <br> Цена: 5 880 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1645 кг <br> Объем топливного бака - 63 л <br> Объем багажного отделения - 530 л <br><br> Размеры: <br> Длина - 4939 мм <br> Ширина - 1886 мм <br> Высота - 1457 мм <br> Колесная база - 2924 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 6.2 л / 100 км <br> Расход топлива (трасса) - 4.6 л / 100 км <br> Расход топлива (смешанный) - 5.2 л / 100 км <br> Разгон с 0 до 100 км/ч	- 8.4 с <br> Максимальная скорость - 237 км / ч <br> Тип топлива - Дизель <br> Мощность - 190 л.с.",

                // A7
                "Audi A7 <br><br> Класс: лифтбэк <br> Год: 2023 <br> Цена: 8 780 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1825 кг <br> Объем топливного бака - 63 л <br> Объем багажного отделения - 1390 л <br><br> Размеры: <br> Длина - 4969 мм <br> Ширина - 1908 мм <br> Высота - 1422 мм <br> Колесная база - 2926 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 8,5 л/100 км <br> Расход топлива (трасса) - 5,8 л/100 км <br> Расход топлива (смешанный) - 6,8 л/100 км <br> Разгон с 0 до 100 км/ч - 6,2 с <br> Максимальная скорость - 250 км/ч <br> Тип топлива - Бензин <br> Мощность - 245 л.с.",

                // A8
                "Audi A8 <br><br> Класс: седан <br> Год: 2023 <br> Цена: 11 567 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 2075 кг <br> Объем топливного бака - 72 л <br> Объем багажного отделения - 505 л <br><br> Размеры: <br> Длина - 5302 мм <br> Ширина - 1945 мм <br> Высота - 1485 мм <br> Колесная база - 3128 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 6,4 л/100 км <br> Расход топлива (трасса) - 5,5 л/100 км <br> Расход топлива (смешанный) - 5,8 л/100 км <br> Разгон с 0 до 100 км/ч	- 5,9 с <br> Максимальная скорость - 250 км/ч <br> Тип топлива - Дизель <br> Мощность - 286 л.с.",

                // Q3
                "Audi Q3 <br><br> Класс: SUV <br> Год: 2023 <br> Цена: 3 535 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1570 кг <br> Объем топливного бака - 58 л <br> Объем багажного отделения - 1525 л <br><br> Размеры: <br> Длина - 4484 мм <br> Ширина -	1849 мм <br> Высота - 1616 мм <br> Колесная база - 2680 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 6,9 л/100 км <br> Расход топлива (трасса) - 5,4 л/100 км <br> Расход топлива (смешанный) - 5,9 л/100 км <br> Разгон с 0 до 100 км/ч - 9,2 с <br> Максимальная скорость - 207 км/ч <br> Тип топлива - Бензин <br> Мощность - 150 л.с",

                // Q4 e-tron
                "Audi Q4 40 e-tron <br><br> Класс: SUV EV <br> Год: 2023 <br> Цена: 6 300 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 2125 кг <br> Ёмкость батареи, полная / полезная - 82 кВт⋅ч / 76,6 кВт⋅ч <br> Объем багажного отделения - 1490 л <br><br> Размеры: <br> Длина - 4588 мм <br> Ширина - 1865 мм <br> Высота - 1632 мм <br> Колесная база - 2771 мм <br><br> Характеристики производительности: <br> Электрический запас хода - 447-521 км <br> Средний расход электроэнергии - 16.3-17.7 кВтч/100 км <br> Разгон с 0 до 100 км/ч - 8,5 с <br> Максимальная скорость - 160 км/ч <br> Тип топлива - Электричество <br> Мощность - 204 л.с.",

                // Q5
                "Audi Q5 <br><br> Класс: SUV <br> Год: 2023 <br> Цена: 5 227 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1825 кг <br> Объем топливного бака - 70 л <br> Объем багажного отделения - 1520 л <br><br> Размеры: <br> Длина - 4682 мм <br> Ширина -	1893 мм <br> Высота - 1662 мм <br> Колесная база - 2819 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 9,4 л/100 км <br> Расход топлива (трасса) - 6,8 л/100 км <br> Расход топлива (смешанный) - 7,7 л/100 км <br> Разгон с 0 до 100 км/ч - 6,3 с <br> Максимальная скорость - 240 км/ч <br> Тип топлива - Бензин <br> Мощность - 249 л.с.",
            
                // Q7
                "Audi Q7 <br><br> Класс: SUV <br> Год: 2023 <br> Цена: 6 785 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 2105 кг <br> Объем топливного бака - 75 л <br> Объем багажного отделения - 2075 л <br><br> Размеры: <br> Длина - 5063 мм <br> Ширина - 1970 мм <br> Высота - 1741 мм <br> Колесная база - 2995 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 9,4 л/100 км <br> Расход топлива (трасса) - 7,2 л/100 км <br> Расход топлива (смешанный) - 8,0 л/100 км <br> Разгон с 0 до 100 км/ч - 6,9 с <br> Максимальная скорость - 225 км/ч <br> Тип топлива - Дизель <br> Мощность - 249 л.с.",

                // Q8
                "Audi Q8 <br><br> Класс: SUV <br> Год: 2023 <br> Цена: 7 530 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 2140 кг <br> Объем топливного бака - 85 л <br> Объем багажного отделения - 1 755 л <br><br> Размеры: <br> Длина - 4 986 мм <br> Ширина - 1 995 мм <br> Высота - 1 705 мм <br> Колесная база - 2 995 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 7,0 л/100 км <br> Расход топлива (трасса) - 5,9 л/100 км <br> Расход топлива (смешанный) - 6,6 л/100 км <br> Разгон с 0 до 100 км/ч - 6,3 с <br> Максимальная скорость - 245 км/ч <br> Тип топлива - Дизель <br> Мощность - 286 л.с.",
            
                // RS 3
                "Audi RS 3 <br><br> Класс: седан <br> Год: 2023 <br> Цена: 5 800 000 ₽ <br><br> Пространство, объем и вес: <br> Снаряженная масса - 1570 кг <br> Объем топливного бака - 55 л <br> Объем багажного отделения - 1104 л <br><br> Размеры: <br> Длина - 4389 мм <br> Ширина - 1851 мм <br> Высота - 1436 мм <br> Колесная база - 2631 мм <br><br> Характеристики производительности: <br> Расход топлива (городской) - 11,6/100 км <br> Расход топлива (трасса) - 7,1/100 км <br> Расход топлива (смешанный) - 8,8/100 км <br> Разгон с 0 до 100 км/ч - 3,8 с <br> Максимальная скорость - 250 км/ч<br> Тип топлива - Бензин <br> Мощность - 400 л.с.",

                // RS 5 Coupe
                "Audi A3 <br><br> Класс: <br> Год: <br> Цена: <br><br> Пространство, объем и вес: <br> Снаряженная масса - <br> Объем топливного бака - <br> Объем багажного отделения - <br><br> Размеры: <br> Длина - <br> Ширина - <br> Высота - <br> Колесная база - <br><br> Характеристики производительности: <br> Расход топлива (городской) - <br> Расход топлива (трасса) - <br> Расход топлива (смешанный) - <br> Разгон с 0 до 100 км/ч - <br> Максимальная скорость - <br> Тип топлива - <br> Мощность - ",

                // RS 6
                "Audi A3 <br><br> Класс: <br> Год: <br> Цена: <br><br> Пространство, объем и вес: <br> Снаряженная масса - <br> Объем топливного бака - <br> Объем багажного отделения - <br><br> Размеры: <br> Длина - <br> Ширина - <br> Высота - <br> Колесная база - <br><br> Характеристики производительности: <br> Расход топлива (городской) - <br> Расход топлива (трасса) - <br> Расход топлива (смешанный) - <br> Разгон с 0 до 100 км/ч - <br> Максимальная скорость - <br> Тип топлива - <br> Мощность - ",
            
                // RS 7
                "Audi A3 <br><br> Класс: <br> Год: <br> Цена: <br><br> Пространство, объем и вес: <br> Снаряженная масса - <br> Объем топливного бака - <br> Объем багажного отделения - <br><br> Размеры: <br> Длина - <br> Ширина - <br> Высота - <br> Колесная база - <br><br> Характеристики производительности: <br> Расход топлива (городской) - <br> Расход топлива (трасса) - <br> Расход топлива (смешанный) - <br> Разгон с 0 до 100 км/ч - <br> Максимальная скорость - <br> Тип топлива - <br> Мощность - ",
            
                // RS Q8
                "Audi A3 <br><br> Класс: <br> Год: <br> Цена: <br><br> Пространство, объем и вес: <br> Снаряженная масса - <br> Объем топливного бака - <br> Объем багажного отделения - <br><br> Размеры: <br> Длина - <br> Ширина - <br> Высота - <br> Колесная база - <br><br> Характеристики производительности: <br> Расход топлива (городской) - <br> Расход топлива (трасса) - <br> Расход топлива (смешанный) - <br> Разгон с 0 до 100 км/ч - <br> Максимальная скорость - <br> Тип топлива - <br> Мощность - "]

            // https://cenyavto.com/

            /* 
            Audi A3 <br><br> Класс: <br> Год: <br> Цена: <br><br> Пространство, объем и вес: <br> Снаряженная масса - <br> Объем топливного бака - <br> Объем багажного отделения - <br><br> Размеры: <br> Длина - <br> Ширина - <br> Высота - <br> Колесная база - <br><br> Характеристики производительности: <br> Расход топлива (городской) - <br> Расход топлива (трасса) - <br> Расход топлива (смешанный) - <br> Разгон с 0 до 100 км/ч - <br> Максимальная скорость - <br> Тип топлива - <br> Мощность -
            */

            const extraLi2 = 
                // AUDI
                // A3
                ["Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (автоматическая коробка передач) - 8 <br> Передняя подвеска	- Независимая типа McPherson <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",
            
                // A4
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (роботизированная коробка передач) - 7 <br> Передняя подвеска - Независимая, многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые <br> ABS - да",

                // A5
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (роботизированная коробка передач) - 7 <br> Передняя подвеска - Независимая, многорычажная<br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",

                // A6
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (автоматическая коробка передач) - 7 <br> Передняя подвеска	- Независимая, многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",

                // A7
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Полный привод <br> Количество передач (роботизированная коробка передач) - 7 <br> Передняя подвеска	- Независимая, многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - 	Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",

                // A8
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Полный привод <br> Количество передач (автоматическая коробка передач) - 8 <br> Передняя подвеска - Независимая, многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",

                // Q3
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Передний привод <br> Количество передач (роботизированная коробка передач) - 6 <br> Передняя подвеска - Независимая типа McPherson <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые <br> ABS - да",

                // Q4 e-tron
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Задний привод <br> Количество передач (автоматическая коробка передач) - 1 <br> Передняя подвеска - Независимая типа McPherson <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые <br> ABS - да",

                // Q5
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Полный привод <br> Количество передач (роботизированная коробка передач) - 7 <br> Передняя подвеска	- 	Независимая, многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые <br> Задние тормоза - Дисковые <br> ABS - да",
            
                // Q7
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Полный привод <br> Количество передач (автоматическая коробка передач) - 8 <br> Передняя подвеска - Независимая, многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",
                
                // Q8
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Полный привод <br> Количество передач (автоматическая коробка передач) - 8 <br> Передняя подвеска - Многорычажная <br> Задняя подвеска - Независимая, многорычажная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да <br>",
                
                // RS 3
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - Полный привод <br> Количество передач (роботизированная коробка передач) - 7 <br> Передняя подвеска	- Независимая, пружинная <br> Задняя подвеска - Независимая, пружинная <br> Передние тормоза - Дисковые, вентилируемые <br> Задние тормоза - Дисковые, вентилируемые <br> ABS - да",
            
                // RS 5 Coupe
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - <br> Количество передач (автоматическая коробка передач) - <br> Передняя подвеска	- <br> Задняя подвеска - <br> Передние тормоза - <br> Задние тормоза - <br> ABS - ",

                // RS 6
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - <br> Количество передач (автоматическая коробка передач) - <br> Передняя подвеска	- <br> Задняя подвеска - <br> Передние тормоза - <br> Задние тормоза - <br> ABS - ",
            
                // RS 7
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - <br> Количество передач (автоматическая коробка передач) - <br> Передняя подвеска	- <br> Задняя подвеска - <br> Передние тормоза - <br> Задние тормоза - <br> ABS - ",
            
                // RS Q8
                "Трансмиссия, тормоза и характеристики подвески: <br> Привод - <br> Количество передач (автоматическая коробка передач) - <br> Передняя подвеска	- <br> Задняя подвеска - <br> Передние тормоза - <br> Задние тормоза - <br> ABS - "]

            /* 
            Трансмиссия, тормоза и характеристики подвески: <br> Привод - <br> Количество передач (автоматическая коробка передач) - <br> Передняя подвеска	- <br> Задняя подвеска - <br> Передние тормоза - <br> Задние тормоза - <br> ABS -
            */

            const call = 
                // AUDI
                ["+7 (495) 126-16-17",
                
                // BMW
                "+7 (495) 154-14-80",
            
                // 
                ]

            const linksMaps =
                // AUDI
                ["https://www.google.com/search?q=%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%D1%8B+%D0%B0%D1%83%D0%B4%D0%B8+%D0%B2+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8&tbm=lcl&sxsrf=APwXEdf4OUgPBaMXwCN3x62VtiHQ1sNgyg%3A1685087579799&ei=W2VwZJ3cL9CZrwSXy5mwCA&ved=0ahUKEwjd9e60wJL_AhXQzIsKHZdlBoYQ4dUDCAk&uact=5&oq=%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%D1%8B+%D0%B0%D1%83%D0%B4%D0%B8+%D0%B2+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBQgAEKIEMgUIABCiBFAAWABgrQRoAHAAeACAAUaIAUaSAQExmAEAoAEBwAEB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[58.09943629026728,79.64894510222996],[53.04135048976811,64.81740213347996]]",

                // BMW
                "https://www.google.com/search?q=%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%D1%8B+%D0%B1%D0%BC%D0%B2+%D0%B2+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8&tbm=lcl&sxsrf=APwXEdeB4-pokQOKUJ59QB8DlmclmzRpgw%3A1685205388265&ei=jDFyZJ3tD4KDqgGe_quABA&ved=0ahUKEwid46mk95X_AhWCgSoKHR7_CkAQ4dUDCAk&uact=5&oq=%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%D1%8B+%D0%B1%D0%BC%D0%B2+%D0%B2+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBQgAEKIEMggIABCJBRCiBDoHCCMQ6gIQJzoECCMQJzoHCCMQsAIQJzoICCEQoAEQwwQ6BQgAEIAEOgYIABAHEB46CAgAEAUQBxAeOgYIABAFEB46CgghEKABEMMEEApQAFjadWDbeWgDcAB4AIABZYgB1gWSAQM5LjGYAQCgAQGgAQKwAQrAAQE&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[56.45848888533126,43.575749640903446],[53.90519101527549,36.159978156528446]]",

                // 
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
                        models_block.style = " visibility: visible; opacity: 1; filter: blur(10px); cursor: pointer;";
                        searchBox[0].style = "animation: up 1s ease 1; animation-fill-mode: forwards; filter: blur(3px); pointer-events: none;";
                        for (let i = 0; i < model_blocks.length; i++) {
                            model_blocks[i].style = "pointer-events: none;";
                        }

                        for (let i = 0; i < models.length; i++) {
                            for (let j = 0; j < models[0].length; j++) {

                                if (model == models[i][j]) {
                                    mainPhoto.src = "img/extra/" + extraImg[j][0];
                                    // photo[0].src = "img/extra/" + extraImg[j][0];

                                    for (let k = 0; k < 4; k++) {
                                        photo[k].src = "img/extra/" + extraImg[j][k];
                                    }

                                    extraInfo.innerHTML = extraLi[j];
                                    extraInfo2.innerHTML = extraLi2[j];
                                    break;
                                }
                            }
                        }
                    });
                });

                photo.forEach(item => {
                    item.addEventListener('click', () => {
                        mainPhoto.src = item.src;
                    });
                });

                let phone;
                let map;
                buy.addEventListener("mouseover", () => {
                    buy.innerHTML = phone;
                });

                buy.addEventListener("mouseout", () => {
                    buy.innerHTML = "Показать телефон дилера";
                });
            
                buy.addEventListener("click", async (event) => {
                    const text = event.target.innerText;
                    await navigator.clipboard.writeText(text);
                    buy.innerHTML = "Телефон скопирован!";

                    setTimeout(() => {
                        buy.innerHTML = "Показать телефон дилера"; 
                    }, 333)
                });

                for (let i = 0; i < auto.length; i++) {
                    if (brand == auto[i][0]) {
                        phone = call[i];
                        map = linksMaps[i];
                    }
                }

                maps.onclick = function() {
                    window.open(map, '_blank');
                }

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

            for (let i = 0; i < auto.length; i++) {
                if (brand == auto[i][0]) {
                    deleteDivs();
                    for (let j = 0; j < models[i].length; j++) {
                        addNewDiv();
                        models_name[j].innerHTML = models[i][j];
                        littleInfo[j].innerHTML = li[i][j];
                        models_img[j].src = "img/" + img[i][j];
                    }
                    showModelInfo();
                    return;
                }
            }
        }
        alert("Марка не найдена!");
    }
});
