// ДАННЫЕ ГОЛОСВАНИЯ
const data = {
   districts: [
      {
         id: "77",
         name: {
            ru: "Москва и Московская область",
            en: "Moscow and the Moscow region",
         },
         code: ["RU-MOW", "RU-MOS"],
         votes: [55, 252],
      },
      {
         id: "78",
         name: {
            ru: "Санкт-Петербург и Ленинградская область",
            en: "Saint Petersburg and the Leningrad Region",
         },
         code: ["RU-SPE", "RU-LEN"],
         votes: [26, 138 + 3],
      },
      {
         id: "23",
         name: {
            ru: "Краснодарский край",
            en: "Krasnodarskiy region",
         },
         code: ["RU-KDA"],
         votes: [26, 34],
      },
      {
         id: "66",
         name: {
            ru: "Свердловская область",
            en: "Sverdlovsk region",
         },
         code: ["RU-SVE"],
         votes: [6, 24],
      },
      {
         id: "61",
         name: {
            ru: "Ростовская область",
            en: "Rostov region",
         },
         code: ["RU-ROS"],
         votes: [2, 26],
      },
      {
         id: "63",
         name: {
            ru: "Самарская область",
            en: "Samara region",
         },
         code: ["RU-SAM"],
         votes: [4, 22],
      },
      {
         id: "52",
         name: {
            ru: "Нижегородская область",
            en: "Nizhny Novgorod region",
         },
         code: ["RU-NIZ"],
         votes: [3, 22],
      },
      {
         id: "74",
         name: {
            ru: "Челябинская область",
            en: "Chelyabinsk region",
         },
         code: ["RU-CHE"],
         votes: [1, 20],
      },
      {
         id: "16",
         name: {
            ru: "Республика Татарстан",
            en: "Republic of Tatarstan",
         },
         code: ["RU-TA"],
         votes: [2, 18],
      },
      {
         id: "24",
         name: {
            ru: "Красноярский край",
            en: "Krasnoyarsk Region",
         },
         code: ["RU-KYA"],
         votes: [3, 14],
      },
      {
         id: "02",
         name: {
            ru: "Республика Башкортостан",
            en: "Republic of Bashkortostan",
         },
         code: ["RU-BA"],
         votes: [1, 15],
      },
      {
         id: "26",
         name: {
            ru: "Ставропольский край",
            en: "Stavropol region",
         },
         code: ["RU-STA"],
         votes: [0, 16],
      },
      {
         id: "64",
         name: {
            ru: "Саратовская область",
            en: "Saratov region",
         },
         code: ["RU-SAR"],
         votes: [2, 14],
      },
      {
         id: "86",
         name: {
            ru: "Ханты-Мансийский АО - Югра",
            en: "Khanty-Mansiysk Autonomous Okrug - Yugra",
         },
         code: ["RU-KHM"],
         votes: [1, 15],
      },
      {
         id: "11",
         name: {
            ru: "Республика Коми",
            en: "Komi Republic",
         },
         code: ["RU-KO"],
         votes: [2, 12],
      },
      {
         id: "36",
         name: {
            ru: "Воронежская область",
            en: "Voronezh Region",
         },
         code: ["RU-VOR"],
         votes: [2, 12],
      },
      {
         id: "42",
         name: {
            ru: "Кемеровская область",
            en: "Kemerovo region",
         },
         code: ["RU-KEM"],
         votes: [2, 12],
      },
      {
         id: "72",
         name: {
            ru: "Тюменская область",
            en: "Tyumen region",
         },
         code: ["RU-TYU"],
         votes: [1, 13],
      },
      {
         id: "34",
         name: {
            ru: "Волгоградская область",
            en: "Volgograd region",
         },
         code: ["RU-VGG"],
         votes: [1, 12],
      },
      {
         id: "22",
         name: {
            ru: "Алтайский край",
            en: "Altai krai",
         },
         code: ["RU-AL"],
         votes: [0, 12],
      },
      {
         id: "37",
         name: {
            ru: "Ивановская область",
            en: "",
         },
         code: ["RU-IVA"],
         votes: [2, 10],
      },
      {
         id: "05",
         name: {
            ru: "Республика Дагестан",
            en: "",
         },
         code: ["RU-DA"],
         votes: [3, 8],
      },
      {
         id: "51",
         name: {
            ru: "Мурманская область",
            en: "",
         },
         code: ["RU-MUR"],
         votes: [2, 9],
      },
      {
         id: "59",
         name: {
            ru: "Пермский край",
            en: "",
         },
         code: ["RU-PER"],
         votes: [1, 10],
      },
      {
         id: "71",
         name: {
            ru: "Тульская область",
            en: "",
         },
         code: ["RU-TUL"],
         votes: [1, 10],
      },
      {
         id: "93",
         name: {
            ru: "Донецкая Народная Республика",
            en: "",
         },
         code: ["RU-DON"],
         votes: [9, 2],
      },
      {
         id: "10",
         name: {
            ru: "Республика Карелия",
            en: "",
         },
         code: ["RU-KR"],
         votes: [2, 8],
      },
      {
         id: "21",
         name: {
            ru: "Чувашская Республика",
            en: "",
         },
         code: ["RU-CU"],
         votes: [2, 8],
      },
      {
         id: "38",
         name: {
            ru: "Иркутская область",
            en: "",
         },
         code: ["RU-IRK"],
         votes: [1, 9],
      },
      {
         id: "20",
         name: {
            ru: "Чеченская Республика",
            en: "",
         },
         code: ["RU-CE"],
         votes: [2, 8],
      },
      {
         id: "25",
         name: {
            ru: "Приморский край",
            en: "",
         },
         code: ["RU-PRI"],
         votes: [2, 7],
      },
      {
         id: "39",
         name: {
            ru: "Калининградская область",
            en: "",
         },
         code: ["RU-KGD"],
         votes: [1, 8],
      },
      {
         id: "54",
         name: {
            ru: "Новосибирская область",
            en: "",
         },
         code: ["RU-NVS"],
         votes: [0, 9],
      },
      {
         id: "91",
         name: {
            ru: "Севастополь и АР Крым",
            en: "",
         },
         code: ["RU-SEV", "RU-CR"],
         votes: [0, 9],
      },
      {
         id: "27",
         name: {
            ru: "Хабаровский край",
            en: "",
         },
         code: ["RU-KHA"],
         votes: [0, 8],
      },
      {
         id: "35",
         name: {
            ru: "Вологодская область",
            en: "",
         },
         code: ["RU-VLG"],
         votes: [2, 6],
      },
      {
         id: "43",
         name: {
            ru: "Кировская область",
            en: "",
         },
         code: ["RU-KIR"],
         votes: [2, 6],
      },
      {
         id: "46",
         name: {
            ru: "Курская область",
            en: "",
         },
         code: ["RU-KRS"],
         votes: [1, 7],
      },
      {
         id: "76",
         name: {
            ru: "Ярославская область",
            en: "",
         },
         code: ["RU-YAR"],
         votes: [1, 7],
      },
      {
         id: "94",
         name: {
            ru: "Луганская Народная Республика",
            en: "",
         },
         code: ["RU-LUG"],
         votes: [4, 4],
      },
      {
         id: "03",
         name: {
            ru: "Республика Бурятия",
            en: "",
         },
         code: ["RU-BU"],
         votes: [1, 6],
      },
      {
         id: "60",
         name: {
            ru: "Липецкая область",
            en: "",
         },
         code: ["RU-LIP"],
         votes: [0, 7],
      },
      {
         id: "53",
         name: {
            ru: "Оренбургская область",
            en: "",
         },
         code: ["RU-ORE"],
         votes: [0, 7],
      },
      {
         id: "57",
         name: {
            ru: "Орловская область",
            en: "",
         },
         code: ["RU-ORL"],
         votes: [1, 6],
      },
      {
         id: "69",
         name: {
            ru: "Тверская область",
            en: "",
         },
         code: ["RU-TVE"],
         votes: [1, 6],
      },
      {
         id: "13",
         name: {
            ru: "Республика Мордовия",
            en: "",
         },
         code: ["RU-MO"],
         votes: [0, 6],
      },
      {
         id: "14",
         name: {
            ru: "Республика Саха (Якутия)",
            en: "",
         },
         code: ["RU-SA"],
         votes: [0, 6],
      },
      {
         id: "31",
         name: {
            ru: "Белгородская область",
            en: "",
         },
         code: ["RU-BEL"],
         votes: [0, 6],
      },
      {
         id: "32",
         name: {
            ru: "Брянская область",
            en: "",
         },
         code: ["RU-BRY"],
         votes: [3, 3],
      },
      {
         id: "33",
         name: {
            ru: "Владимирская область",
            en: "",
         },
         code: ["RU-VLA"],
         votes: [0, 6],
      },
      {
         id: "58",
         name: {
            ru: "Пензенская область",
            en: "",
         },
         code: ["RU-PNZ"],
         votes: [1, 5],
      },
      {
         id: "70",
         name: {
            ru: "Томская область",
            en: "",
         },
         code: ["RU-TOM"],
         votes: [2, 4],
      },
      {
         id: "90",
         name: {
            ru: "Запорожская область",
            en: "",
         },
         code: ["RU-ZP"],
         votes: [2, 4],
      },
      {
         id: "40",
         name: {
            ru: "Калужская область",
            en: "",
         },
         code: ["RU-KLU"],
         votes: [1, 4],
      },
      {
         id: "62",
         name: {
            ru: "Рязанская область",
            en: "",
         },
         code: ["RU-RYA"],
         votes: [0, 5],
      },
      {
         id: "65",
         name: {
            ru: "Сахалинская область",
            en: "",
         },
         code: ["RU-SAK"],
         votes: [1, 4],
      },
      {
         id: "15",
         name: {
            ru: "Республика Северная Осетия — Алания",
            en: "",
         },
         code: ["RU-SE"],
         votes: [0, 3],
      },
      {
         id: "79",
         name: {
            ru: "Еврейская АО",
            en: "",
         },
         code: ["RU-YEV"],
         votes: [4, 1],
      },
      {
         id: "99",
         name: {
            ru: "Территории, находящиеся за пределами РФ и обслуживаемые Управлением режимных объектов МВД России, Байконур",
            en: "",
         },
         code: [""],
         votes: [2, 5],
      },
      {
         id: "53",
         name: {
            ru: "Новгородская область",
            en: "",
         },
         code: ["RU-NGR"],
         votes: [0, 4],
      },
      {
         id: "55",
         name: {
            ru: "Омская область",
            en: "",
         },
         code: ["RU-OMS"],
         votes: [0, 4],
      },
      {
         id: "60",
         name: {
            ru: "Псковская область",
            en: "",
         },
         code: ["RU-PSK"],
         votes: [0, 4],
      },
      {
         id: "67",
         name: {
            ru: "Смоленская область",
            en: "",
         },
         code: ["RU-SMO"],
         votes: [0, 4],
      },
      {
         id: "68",
         name: {
            ru: "Тамбовская область",
            en: "",
         },
         code: ["RU-TAM"],
         votes: [1, 3],
      },
      {
         id: "73",
         name: {
            ru: "Ульяновская область",
            en: "",
         },
         code: ["RU-ULY"],
         votes: [1, 3],
      },
      {
         id: "01",
         name: {
            ru: "Республика Адыгея",
            en: "",
         },
         code: ["RU-AD"],
         votes: [2, 1],
      },
      {
         id: "04",
         name: {
            ru: "Республика Алтай",
            en: "",
         },
         code: ["RU-ALT"],
         votes: [0, 3],
      },
      {
         id: "18",
         name: {
            ru: "Удмуртская Республика",
            en: "",
         },
         code: ["RU-UD"],
         votes: [1, 2],
      },
      {
         id: "29",
         name: {
            ru: "Архангельская область",
            en: "",
         },
         code: ["RU-ARK"],
         votes: [0, 3],
      },
      {
         id: "45",
         name: {
            ru: "Курганская область",
            en: "",
         },
         code: ["RU-KGN"],
         votes: [1, 2],
      },
      {
         id: "08",
         name: {
            ru: "Республика Калмыкия",
            en: "",
         },
         code: ["RU-KL"],
         votes: [0, 2],
      },
      {
         id: "09",
         name: {
            ru: "Республика Карачаево-Черкессия",
            en: "",
         },
         code: ["RU-KC"],
         votes: [1, 1],
      },
      {
         id: "41",
         name: {
            ru: "Камчатский край",
            en: "",
         },
         code: ["RU-KAM"],
         votes: [0, 2],
      },
      {
         id: "44",
         name: {
            ru: "Костромская область",
            en: "",
         },
         code: ["RU-KOS"],
         votes: [0, 2],
      },
      {
         id: "75",
         name: {
            ru: "Забайкальский край",
            en: "",
         },
         code: ["RU-ZAB"],
         votes: [0, 2],
      },
      {
         id: "87",
         name: {
            ru: "Чукотский АО",
            en: "",
         },
         code: ["RU-CHU"],
         votes: [0, 2],
      },
      {
         id: "89",
         name: {
            ru: "Ямало-Ненецкий АО",
            en: "",
         },
         code: ["RU-YAN"],
         votes: [0, 2],
      },
      {
         id: "49",
         name: {
            ru: "Магаданская область",
            en: "",
         },
         code: ["RU-MAG"],
         votes: [0, 5],
      },
      {
         id: "30",
         name: {
            ru: "Астраханская область",
            en: "",
         },
         code: ["RU-AST"],
         votes: [0, 3],
      },
      {
         id: "06",
         name: {
            ru: "Республика Ингушетия",
            en: "",
         },
         code: ["RU-IN"],
         votes: [0, 1],
      },
      {
         id: "07",
         name: {
            ru: "Кабардино-Балкарская Республика",
            en: "",
         },
         code: ["RU-KB"],
         votes: [0, 1],
      },
      {
         id: "12",
         name: {
            ru: "Республика Марий Эл",
            en: "",
         },
         code: ["RU-ME"],
         votes: [0, 1],
      },
      {
         id: "17",
         name: {
            ru: "Республика Тыва",
            en: "",
         },
         code: ["RU-TY"],
         votes: [1, 0],
      },
      {
         id: "19",
         name: {
            ru: "Республика Хакасия",
            en: "",
         },
         code: ["RU-KK"],
         votes: [0, 1],
      },
      {
         id: "28",
         name: {
            ru: "Амурская область",
            en: "",
         },
         code: ["RU-AMU"],
         votes: [0, 1],
      },
      {
         id: "83",
         name: {
            ru: "Ненецкий АО",
            en: "",
         },
         code: ["RU-NEN"],
         votes: [0, 1],
      },
      {
         id: "95",
         name: {
            ru: "Херсонская область",
            en: "",
         },
         code: ["RU-HR"],
         votes: [1, 0],
      },
   ],
   parties: [
      {
         name: {
            ru: "Двач",
            en: "",
         },
         logo: "url",
         votes: [12, 49],
      },
      {
         name: {
            ru: "Карельский бальзам",
            en: "",
         },
         logo: "url",
         votes: [13, 48],
      },
      {
         name: {
            ru: "Республиканская партия",
            en: "",
         },
         logo: "url",
         votes: [3, 57],
      },
      {
         name: {
            ru: "DK",
            en: "",
         },
         logo: "url",
         votes: [5, 47],
      },
      {
         name: {
            ru: "Единая Америка",
            en: "",
         },
         logo: "url",
         votes: [8, 42],
      },
      {
         name: {
            ru: "Жмиль",
            en: "",
         },
         logo: "url",
         votes: [8, 42],
      },
      {
         name: {
            ru: "Клуб любителей пива",
            en: "",
         },
         logo: "url",
         votes: [7, 29],
      },
      {
         name: {
            ru: "ЛДПР",
            en: "",
         },
         logo: "url",
         votes: [4, 30],
      },
      {
         name: {
            ru: "Анимешники",
            en: "",
         },
         logo: "url",
         votes: [6, 25],
      },
      {
         name: {
            ru: "Единая Россия",
            en: "",
         },
         logo: "url",
         votes: [4, 20],
      },
      {
         name: {
            ru: "Клуб любителей пяточек",
            en: "",
         },
         logo: "url",
         votes: [3, 20],
      },
      {
         name: {
            ru: "Возрождение Хуцпаленда",
            en: "",
         },
         logo: "url",
         votes: [16, 0],
      },
      {
         name: {
            ru: "КПСС",
            en: "",
         },
         logo: "url",
         votes: [4, 12],
      },
      {
         name: {
            ru: "Золотой трезубец",
            en: "",
         },
         logo: "url",
         votes: [5, 9],
      },
      {
         name: {
            ru: "КПРФ",
            en: "",
         },
         logo: "url",
         votes: [4, 10],
      },
      {
         name: {
            ru: "Демократическая партия",
            en: "",
         },
         logo: "url",
         votes: [6, 7],
      },
      {
         name: {
            ru: "ДШРГ Русич",
            en: "",
         },
         logo: "url",
         votes: [1, 12],
      },
      {
         name: {
            ru: "ПВЗ Кракен",
            en: "",
         },
         logo: "url",
         votes: [1, 12],
      },
      {
         name: {
            ru: "Хейтеры Джарахова",
            en: "",
         },
         logo: "url",
         votes: [3, 8],
      },
      {
         name: {
            ru: "Антихайп",
            en: "",
         },
         logo: "url",
         votes: [1, 6],
      },
      {
         name: {
            ru: "ЧВК ПЛЭЙ",
            en: "",
         },
         logo: "url",
         votes: [2, 5],
      },
      {
         name: {
            ru: "CS:GO",
            en: "",
         },
         logo: "url",
         votes: [0, 6],
      },
      {
         name: {
            ru: "89SQUAD",
            en: "",
         },
         logo: "url",
         votes: [0, 4],
      },
      {
         name: {
            ru: "Жожеки",
            en: "",
         },
         logo: "url",
         votes: [0, 4],
      },
      {
         name: {
            ru: "Ментач",
            en: "",
         },
         logo: "url",
         votes: [1, 3],
      },
      {
         name: {
            ru: "НСДАП",
            en: "",
         },
         logo: "url",
         votes: [2, 2],
      },
      {
         name: {
            ru: "СТАС",
            en: "",
         },
         logo: "url",
         votes: [2, 2],
      },
      {
         name: {
            ru: "Фонд SCP",
            en: "",
         },
         logo: "url",
         votes: [0, 4],
      },
      {
         name: {
            ru: "ШУЕ",
            en: "",
         },
         logo: "url",
         votes: [1, 3],
      },
      {
         name: {
            ru: "Яндекс Мессенджер",
            en: "",
         },
         logo: "url",
         votes: [1, 3],
      },
      {
         name: {
            ru: "Клуб любителей вкусно покушать",
            en: "",
         },
         logo: "url",
         votes: [0, 3],
      },
      {
         name: {
            ru: "Клуб любителей нард",
            en: "",
         },
         logo: "url",
         votes: [2, 1],
      },
      {
         name: {
            ru: "Красотки",
            en: "",
         },
         logo: "url",
         votes: [0, 3],
      },
      {
         name: {
            ru: "Партия Регионов",
            en: "",
         },
         logo: "url",
         votes: [3, 0],
      },
      {
         name: {
            ru: "Партия скуфов России",
            en: "",
         },
         logo: "url",
         votes: [0, 3],
      },
      {
         name: {
            ru: "РКН",
            en: "",
         },
         logo: "url",
         votes: [0, 3],
      },
      {
         name: {
            ru: "Антонов такой Антонов",
            en: "",
         },
         logo: "url",
         votes: [0, 2],
      },
   ],
};

// ================================================================================
// import $ from "https://esm.sh/jquery";
$(function () {
   console.log("####");
   console.log($);
   console.log("####");
   // ================================================================================
   // Наводим на регион
   $("[data-code]").mouseenter(function () {
      // Определяем название региона
      districtTitle = $(this).attr("data-title");
      // Определяем код региона
      districtCode = $(this).attr("data-code");
      // Генерируем путь герба региона
      gerb = "../images/gerbs/" + districtCode + ".svg";

      // Обновляем название региона
      document.querySelector(
         ".info-card .info-card__text-header h5"
      ).innerHTML = districtTitle;
      // Обновляем герб региона
      document
         .querySelector(".info-card .info-card__gerb img")
         .setAttribute("src", gerb);

      // Выбираем полоску голосов Харрис
      lineHarris = document.querySelector(".info-card .line-votes .blue");
      // Выбираем кол-во голосов Харрис
      votesValueHarris = document.querySelector(
         ".info-card .info-votes .blue .votes-count"
      );
      // Выбираем кол-во голосов Трампа
      votesValueTrump = document.querySelector(
         ".info-card .info-votes .red .votes-count"
      );
      // Выбираем процент Харрис
      votesProcentHarris = document.querySelector(
         ".info-card .info-votes .blue .votes-procent__value"
      );
      // Выбираем процент Трампа
      votesProcentTrump = document.querySelector(
         ".info-card .info-votes .red .votes-procent__value"
      );

      // Данные голосов региона, который попал под наведение
      districtHover = data.districts.filter((district) => {
         return district.code.indexOf(districtCode) != -1;
      })[0];
      // console.log(districtCode);
      // console.log(districtHover.name)
      // console.log(districtHover);

      // Заполняем кол-во голосов
      votesValueHarris.innerHTML = districtHover.votes[0] + " тыс";
      votesValueTrump.innerHTML = districtHover.votes[1] + " тыс";

      // Заполняем процент голосов
      votesProcents = [
         // Процент Харрис в регионе
         toNumberRussianVariant(
            (
               districtHover.votes[0] /
               ((districtHover.votes[0] + districtHover.votes[1]) / 100)
            ).toFixed(1)
         ),
         // Процент Трампа в регионе
         toNumberRussianVariant(
            (
               districtHover.votes[1] /
               ((districtHover.votes[0] + districtHover.votes[1]) / 100)
            ).toFixed(1)
         ),
      ];
      console.log(votesProcents);
      votesProcentHarris.innerHTML = votesProcents[0];
      votesProcentTrump.innerHTML = votesProcents[1];

      // Обновляем длину полоски голосов за Харрис
      console.log("LINE", votesProcents[0]);
      lineHarris.style.width = votesProcents[0].replace(",", ".") + "%";

      // Обновляем имя крндидата региона
      resultPerson = document.querySelector(".info-card .candidate");
      // Обновляем процент кандидата региона
      resultProcent = document.querySelector(".info-card .district-procent");

      // Обновляем кандидата региона
      if (votesProcents[0] >= votesProcents[1]) {
         resultPerson.innerHTML = "Харрис";
         // Голоса Харрис
         resultProcent.innerHTML = votesProcents[0];
      } else {
         resultPerson.innerHTML = "Трампа";
         // Голоса Трампа
         resultProcent.innerHTML = votesProcents[1];
      }

      // Показываем данные одного регионов
      document.querySelector(".info-card").classList.remove("hide");
      // Скрываем данные всех регионов
      if (document.querySelector(".info-card-flag")) {
         document.querySelector(".info-card-flag").classList.add("hide");
      }
   });

   // ================================================================================
   // Регион больше не под наведением
   $("[data-code]").mouseleave(function () {
      if (!document.querySelector(".info-card").classList.contains("hide")) {
         document.querySelector(".info-card").classList.add("hide");
      }

      if (!$(".rf-map").hasClass("open")) {
         $(".district").hide();
      }
   });

   // ================================================================================
   // КЛИК - Регион больше не под наведением
   $(".rf-map").on("click", "[data-code], .district-links div", function () {
      let id = $(this).attr("data-code");
      console.log($(this).attr("data-title"));
      if ($("#" + id).text() != "") {
         $(".district").show();
         $(".district span").html($(this).attr("data-title"));
         $("[data-code]").addClass("dropfill");
         $(this).addClass("mainfill");
         $(".rf-map").addClass("open");
         $("#" + id).fadeIn();
      }
   });

   // ================================================================================
   // Кнопка закрыть модалку
   $(".close-district").click(function () {
      $(".rf-map").removeClass("open");
      $("[data-code]").removeClass("dropfill");
      $("[data-code]").removeClass("mainfill");
      $(".district-text").hide();
      $(".district").hide();
   });

   // ================================================================================
   // Название региона
   $("[data-code]").each(function () {
      let id = $(this).attr("data-code");
      let title = $(this).attr("data-title");
      if ($("#" + id).text() != "") {
         document.querySelector(
            ".info-card .info-card__text-header h5"
         ).innerHTML = title;

         $(".district-links").append(
            '<div data-title="' +
               title +
               '" data-code="' +
               id +
               '">' +
               title +
               "</div>"
         );
      }
   });
});

// ================================================================================
// Список регионов под картой
const listDisctrictsMini = document.querySelector(".list-disctricts");
listDisctrictsMini.innerHTML = "";
// Заполняем данными из базы
data.districts.forEach((districtInfo) => {
   // Создаем эоемент списка
   const district = document.createElement("div");
   district.setAttribute("class", "list-disctricts__item");

   // Если индексс региона меньше нуля убираем 0
   if (districtInfo.id[0] == "0") {
      districtID = districtInfo.id[1];
   } else {
      districtID = districtInfo.id;
   }

   // Цвет региона по победителю
   colorRegion = "black";
   // Если за Харрис больше то синий
   if (districtInfo.votes[0] >= districtInfo.votes[1]) {
      colorRegion = "#0525F6";
      // Если за Харрис больше то синий
      // } else if (districtInfo.votes[1] > districtInfo.votes[0]) {
   } else {
      colorRegion = "#FE0000";
   }

   // Чтобы регионы были по порядку то даем им order flex
   district.setAttribute("style", `order: ${districtID};`);

   // Заполняем данными
   district.innerHTML = `
<div class="district-id" style="background: ${colorRegion};">${districtInfo.id}</div>
<div class="desctrict-name">${districtInfo.name}</div>
`;

   // Добавляем регион
   listDisctrictsMini.appendChild(district);
});

// ================================================================================
// Функция переводящие числа в русский стандарт
function toNumberRussianVariant(value) {
   console.log("==============START");
   arr = value.toString().split(".");
   console.log(arr);
   // if (arr[0].length > 3) {
   //    arrBig = arr[0].split(/(?=(?:...)*$)/);
   //    console.log(arrBig)
   //    k = 0;
   //    arrBig.forEach((a) => {
   //       if (arrBig.length - k > 0) {
   //          arr[0] += a + " ";
   //          console.log("arr[0]")
   //          console.log(arr[0])
   //       } else {
   //          arr[0] += a;
   //       }

   //       k++;
   //    });
   // }
   console.log("==============END");

   if (arr[1] === "0" || arr.length < 2) {
      return arr[0];
   } else {
      return arr[0] + "," + arr[1];
   }
}

// ================================================================================
// ОБЩИЕ ДАННЫЕ И НИЖНИЙ ПЕРЕЧНЬ
// ================================================================================
// Число голосов [Харрис, Трамп]
votesValue = [0, 0];
data.districts.forEach((district) => {
   // Сумма голосов со всех регионов
   votesSumHarris = votesValue[0] + district.votes[0];
   votesSumTrump = votesValue[1] + district.votes[1];
   votesValue = [votesSumHarris, votesSumTrump];

   // Узнаем проценты голосов Харрис в одном регионе
   votesProcentDistrict = (district.votes[0] + district.votes[1]) / 100;
   votesProcentHarris = district.votes[0] / votesProcentDistrict;
   h = votesProcentHarris;

   // Если голосов Харррис больше Трампа или процент более 15
   if (district.votes[0] > district.votes[1] || h > 15) {
      // Если голосов больше или равны голосам Трампа
      if (district.votes[0] >= district.votes[1]) {
         // КРАСНЫЙ
         document
            .querySelector(`.rf-map [data-code="${district.code[0]}"]`)
            .setAttribute("style", `fill: rgba(0, 0, 255, ${h / 100});`);
      } else {
         // СИНИЙ слабый (острая борьба)
         if (
            document.querySelector(`.rf-map [data-code="${district.code[0]}"]`)
         ) {
            document.querySelector(
               `.rf-map [data-code="${district.code[0]}"]`
            ).style.fill = `rgba(255, 0, 0, ${1 - h / 100 - 0.15})`;

            // .setAttribute(
            //    "style",
            //    `fill: rgba(255, 0, 0, ${1 - h / 100 - 0.15});`
            // );
         }
      }
      // Иначе если голоса равны
   } else if (district.votes[0] == district.votes[1]) {
      // СИНИЙ
      document
         .querySelector(`.rf-map [data-code="${district.code[0]}"]`)
         .setAttribute("style", `fill: rgba(0, 0, 255, ${1 - h / 100});`);
      // Иначе все красные
   } else {
      // КРАСНЫЙ
      document
         .querySelector(`.rf-map [data-code="${district.code[0]}"]`)
         .setAttribute("style", `fill: rgba(255, 0, 0, ${1 - h / 100});`);
   }
});

// Подсчёт общего процентное соотноешние [Х, Т]
votesProcents = [
   toNumberRussianVariant(
      (votesValue[0] / ((votesValue[0] + votesValue[1]) / 100)).toFixed(1)
   ),
   toNumberRussianVariant(
      (votesValue[1] / ((votesValue[0] + votesValue[1]) / 100)).toFixed(1)
   ),
];

// Выбираем кандитата страны
resultPerson = document.querySelector(".info-map.flag .candidate");
// Выбираем процент кандитата страны
resultProcent = document.querySelector(".info-map.flag .district-procent");

// Заполняем кандитата страны и его процент
if (votesProcents[0] >= votesProcents[1]) {
   resultPerson.innerHTML = "Харрис";
   resultProcent.innerHTML = votesProcents[0];
} else {
   resultPerson.innerHTML = "Трампа";
   resultProcent.innerHTML = votesProcents[1];
}

// ВСЕ ГОЛОСА
// Полоска Харрис
lineHarris = document.querySelector(".info-map.flag .line-votes .blue");
// Кол-во голосов Харрис
votesValueHarris = document.querySelector(
   ".info-map.flag .info-votes .blue .votes-count"
);
// Кол-во голосов Трампа
votesValueTrump = document.querySelector(
   ".info-map.flag .info-votes .red .votes-count"
);
// Процент голосов Харрис
votesProcentHarris = document.querySelector(
   ".info-map.flag .info-votes .blue .votes-procent__value"
);
// Процент голосов Трампа
votesProcentTrump = document.querySelector(
   ".info-map.flag .info-votes .red .votes-procent__value"
);

// Заполняем кол-во голосов
votesValueHarris.innerHTML = votesValue[0]
   .toString()
   .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
votesValueTrump.innerHTML = votesValue[1]
   .toString()
   .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// Заполняем процент голосов
votesProcentHarris.innerHTML = votesProcents[0];
votesProcentTrump.innerHTML = votesProcents[1];
