const data = {
   districts: [
      {
         id: "77",
         name: "Москва и Московская область",
         code: ["RU-MOW", "RU-MOS"],
         votes: [55, 252]
      },
      {
         id: "47",
         name: "Санкт-Петербург и Ленинградская область",
         code: ["RU-SPE", "RU-LEN"],
         votes: [26, 138+3]
      },
      {
         id: "23",
         name: "Краснодарский край",
         code: ["RU-KDA"],
         votes: [26, 34]
      },
      {
         id: "66",
         name: "Свердловская область",
         code: ["RU-SVE"],
         votes: [6, 24]
      },
      {
         id: "61",
         name: "Ростовская область",
         code: ["RU-ROS"],
         votes: [2, 26]
      },
      {
         id: "63",
         name: "Самарская область",
         code: ["RU-SAM"],
         votes: [4, 22]
      },
      {
         id: "52",
         name: "Нижегородская область",
         code: ["RU-NIZ"],
         votes: [3, 22]
      },
      {
         id: "74",
         name: "Челябинская область",
         code: ["RU-CHE"],
         votes: [1, 20]
      },
      {
         id: "16",
         name: "Республика Татарстан",
         code: ["RU-TA"],
         votes: [2, 18]
      },
      {
         id: "24",
         name: "Красноярский край",
         code: ["RU-KYA"],
         votes: [3, 14]
      },
      {
         id: "02",
         name: "Республика Башкортостан",
         code: ["RU-BA"],
         votes: [1, 15]
      },
      {
         id: "26",
         name: "Ставропольский край",
         code: ["RU-STA"],
         votes: [0, 16]
      },
      {
         id: "64",
         name: "Саратовская область",
         code: ["RU-SAR"],
         votes: [2, 14]
      },
      {
         id: "86",
         name: "86 — Ханты-Мансийский АО - Югра",
         code: ["RU-KHM"],
         votes: [1, 15]
      },
      {
         id: "11",
         name: "Республика Коми",
         code: ["RU-KO"],
         votes: [2, 12]
      },
      {
         id: "36",
         name: "Воронежская область",
         code: ["RU-VOR"],
         votes: [2, 12]
      },
      {
         id: "42",
         name: "Кемеровская область",
         code: ["RU-KEM"],
         votes: [2, 12]
      },
      {
         id: "72",
         name: "Тюменская область",
         code: ["RU-TYU"],
         votes: [1, 13]
      },
      {
         id: "34",
         name: "Волгоградская область",
         code: ["RU-VGG"],
         votes: [1, 12]
      },
      {
         id: "22",
         name: "Алтайский край",
         code: ["RU-AL"],
         votes: [0, 12]
      },
      {
         id: "37",
         name: "Ивановская область",
         code: ["RU-IVA"],
         votes: [2, 10]
      },
      {
         id: "05",
         name: "Республика Дагестан",
         code: ["RU-DA"],
         votes: [3, 8]
      },
      {
         id: "51",
         name: "Мурманская область",
         code: ["RU-MUR"],
         votes: [2, 9]
      },
      {
         id: "59",
         name: "Пермский край",
         code: ["RU-PER"],
         votes: [1, 10]
      },
      {
         id: "71",
         name: "Тульская область",
         code: ["RU-TUL"],
         votes: [1, 10]
      },
      {
         id: "80",
         name: "Донецкая Народная Республика",
         code: ["RU-DON"],
         votes: [9, 2]
      },
      {
         id: "10",
         name: "Республика Карелия",
         code: ["RU-KR"],
         votes: [2, 8]
      },
      {
         id: "21",
         name: "Чувашская Республика",
         code: ["RU-CE"],
         votes: [2, 8]
      },
      {
         id: "38",
         name: "Иркутская область",
         code: ["RU-IRK"],
         votes: [1, 9]
      },
      {
         id: "95",
         name: "Чеченская Республика",
         code: ["RU-CE"],
         votes: [2, 8]
      },
      {
         id: "25",
         name: "Приморский край",
         code: ["RU-PRI"],
         votes: [2, 7]
      },
      {
         id: "39",
         name: "Калининградская область",
         code: ["RU-KGD"],
         votes: [1, 8]
      },
      {
         id: "54",
         name: "Новосибирская область",
         code: ["RU-NVS"],
         votes: [0, 9]
      },
      {
         id: "82",
         name: "Автономная Республика Крым",
         code: ["RU-KRY"],
         votes: [0, 9]
      },
      {
         id: "27",
         name: "Хабаровский край",
         code: ["RU-KHB"],
         votes: [0, 8]
      },
      {
         id: "35",
         name: "Вологодская область",
         code: ["RU-VLG"],
         votes: [2, 6]
      },
      {
         id: "43",
         name: "Кировская область",
         code: ["RU-KIR"],
         votes: [2, 6]
      },
      {
         id: "46",
         name: "Курская область",
         code: ["RU-KRS"],
         votes: [1, 7]
      },
      {
         id: "76",
         name: "Ярославская область",
         code: ["RU-YAR"],
         votes: [1, 7]
      },
      {
         id: "81",
         name: "Луганская Народная Республика",
         code: ["RU-LUG"],
         votes: [4, 4]
      },
      {
         id: "03",
         name: "Республика Бурятия",
         code: ["RU-BU"],
         votes: [1, 6]
      },  
      {
         id: "60",
         name: "Липецкая область",
         code: ["RU-LIP"],
         votes: [0, 7]
      },
      {
         id: "56",
         name: "Оренбургская область",
         code: ["RU-ORE"],
         votes: [0, 7]
      },
      {
         id: "57",
         name: "Орловская область",
         code: ["RU-ORL"],
         votes: [1, 6]
      },
      {
         id: "69",
         name: "Тверская область",
         code: ["RU-TVE"],
         votes: [1, 6]
      },
      {
         id: "13",
         name: "Республика Мордовия",
         code: ["RU-MO"],
         votes: [0, 6]
      },
      {
         id: "14",
         name: "Республика Саха (Якутия)",
         code: ["RU-SA"],
         votes: [0, 6]
      },
      {
         id: "31",
         name: "Белгородская область",
         code: ["RU-BEL"],
         votes: [0, 6]
      },
      {
         id: "32",
         name: "Брянская область",
         code: ["RU-BRY"],
         votes: [3, 3]
      },
      {
         id: "33",
         name: "Владимирская область",
         code: ["RU-VLA"],
         votes: [0, 6]
      },
      {
         id: "58",
         name: "Пензенская область",
         code: ["RU-PNZ"],
         votes: [1, 5]
      },
      {
         id: "70",
         name: "Томская область",
         code: ["RU-TOM"],
         votes: [2, 4]
      },
      {
         id: "85",
         name: "Запорожская область",
         code: ["UA-ZAP"],
         votes: [2, 4]
      },
      {
         id: "40",
         name: "Калужская область",
         code: ["RU-KLU"],
         votes: [1, 4]
      },
      {
         id: "62",
         name: "Рязанская область",
         code: ["RU-RYA"],
         votes: [0, 5]
      },
      {
         id: "65",
         name: "Сахалинская область",
         code: ["RU-SAH"],
         votes: [1, 4]
      },
      {
         id: "79",
         name: "Еврейская автономная область",
         code: ["RU-YEV"],
         votes: [4, 1]
      },
      {
         id: "92",
         name: "Резерв МВД РФ",
         code: [""],
         votes: [2, 3]
      },
      {
         id: "53",
         name: "Новгородская область",
         code: ["RU-NGR"],
         votes: [0, 4]
      },
      {
         id: "55",
         name: "Омская область",
         code: ["RU-OMS"],
         votes: [0, 4]
      },
      {
         id: "60",
         name: "Псковская область",
         code: ["RU-PSK"],
         votes: [0, 4]
      },
      {
         id: "67",
         name: "Смоленская область",
         code: ["RU-SMO"],
         votes: [0, 4]
      },
      {
         id: "68",
         name: "Тамбовская область",
         code: ["RU-TAM"],
         votes: [1, 3]
      },
      {
         id: "73",
         name: "Ульяновская область",
         code: ["RU-ULY"],
         votes: [1, 3]
      },
      {
         id: "01",
         name: "Республика Адыгея",
         code: ["RU-AD"],
         votes: [2, 1]
      },
      {
         id: "04",
         name: "Республика Алтай",
         code: ["RU-ALT"],
         votes: [0, 3]
      },
      {
         id: "18",
         name: "Удмуртская Республика",
         code: ["RU-UD"],
         votes: [1, 2]
      },
      {
         id: "29",
         name: "Архангельская область",
         code: ["RU-ARK"],
         votes: [0, 3]
      },
      {
         id: "45",
         name: "Курганская область",
         code: ["RU-KGN"],
         votes: [1, 2]
      },
      {
         id: "08",
         name: "Республика Калмыкия",
         code: ["RU-KL"],
         votes: [0, 2]
      },
      {
         id: "09",
         name: "Республика Карачаево-Черкессия",
         code: ["RU-KC"],
         votes: [1, 1]
      },
      {
         id: "41",
         name: "Камчатский край",
         code: ["RU-KAM"],
         votes: [0, 2]
      },
      {
         id: "44",
         name: "Костромская область",
         code: ["RU-KOS"],
         votes: [0, 2]
      },
      {
         id: "75",
         name: "Забайкальский край",
         code: ["RU-ZAB"],
         votes: [0, 2]
      },
      {
         id: "87",
         name: "Чукотский АО",
         code: ["RU-CHU"],
         votes: [0, 2]
      },
      {
         id: "89",
         name: "Ямало-Ненецкий АО",
         code: ["RU-YA"],
         votes: [0, 2]
      },
      {
         id: "94",
         name: "Байконур",
         code: [""],
         votes: [0, 2]
      },
      {
         id: "06",
         name: "Республика Ингушетия",
         code: [""],
         votes: [0, 1]
      },
      {
         id: "07",
         name: "Кабардино-Балкарская Республика",
         code: [""],
         votes: [0, 1]
      },
      {
         id: "12",
         name: "Республика Марий Эл",
         code: [""],
         votes: [0, 1]
      },
      {
         id: "17",
         name: "Республика Тыва",
         code: [""],
         votes: [1, 0]
      },
      {
         id: "19",
         name: "Республика Хакасия",
         code: [""],
         votes: [0, 1]
      },
      {
         id: "28",
         name: "Амурская область",
         code: [""],
         votes: [0, 1]
      },
      {
         id: "83",
         name: "Ненецкий АО",
         code: [""],
         votes: [0, 1]
      },
      {
         id: "84",
         name: "Херсонская область",
         code: [""],
         votes: [1, 0]
      }
   ],
   parties: [
      {
         name: "Двач",
         logo: "url",
         votes: [12, 49]
      },
      {
         name: "Карельский бальзам",
         logo: "url",
         votes: [13, 48]
      },
      {
         name: "Республиканская партия",
         logo: "url",
         votes: [3, 57]
      },
      {
         name: "DK",
         logo: "url",
         votes: [5, 47]
      },
      {
         name: "Единая Америка",
         logo: "url",
         votes: [8, 42]
      },
      {
         name: "Жмиль",
         logo: "url",
         votes: [8, 42]
      },
      {
         name: "Клуб любителей пива",
         logo: "url",
         votes: [7, 29]
      },
      {
         name: "ЛДПР",
         logo: "url",
         votes: [4, 30]
      },
      {
         name: "Анимешники",
         logo: "url",
         votes: [6, 25]
      },
      {
         name: "Единая Россия",
         logo: "url",
         votes: [4, 20]
      },
      {
         name: "Клуб любителей пяточек",
         logo: "url",
         votes: [3, 20]
      },
      {
         name: "Возрождение Хуцпаленда",
         logo: "url",
         votes: [16, 0]
      },
      {
         name: "КПСС",
         logo: "url",
         votes: [4, 12]
      },
      {
         name: "Золотой трезубец",
         logo: "url",
         votes: [5, 9]
      },
      {
         name: "КПРФ",
         logo: "url",
         votes: [4, 10]
      },
      {
         name: "Демократическая партия",
         logo: "url",
         votes: [6, 7]
      },
      {
         name: "ДШРГ Русич",
         logo: "url",
         votes: [1, 12]
      },
      {
         name: "ПВЗ Кракен",
         logo: "url",
         votes: [1, 12]
      },
      {
         name: "Хейтеры Джарахова",
         logo: "url",
         votes: [3, 8]
      },
      {
         name: "Антихайп",
         logo: "url",
         votes: [1, 6]
      },
      {
         name: "ЧВК ПЛЭЙ",
         logo: "url",
         votes: [2, 5]
      },
      {
         name: "CS:GO",
         logo: "url",
         votes: [0, 6]
      },
      {
         name: "89SQUAD",
         logo: "url",
         votes: [0, 4]
      },
      {
         name: "Жожеки",
         logo: "url",
         votes: [0, 4]
      },
      {
         name: "Ментач",
         logo: "url",
         votes: [1, 3]
      },
      {
         name: "НСДАП",
         logo: "url",
         votes: [2, 2]
      },
      {
         name: "СТАС",
         logo: "url",
         votes: [2, 2]
      },
      {
         name: "Фонд SCP",
         logo: "url",
         votes: [0, 4]
      },
      {
         name: "ШУЕ",
         logo: "url",
         votes: [1, 3]
      },
      {
         name: "Яндекс Мессенджер",
         logo: "url",
         votes: [1, 3]
      },
      {
         name: "Клуб любителей вкусно покушать",
         logo: "url",
         votes: [0, 3]
      },
      {
         name: "Клуб любителей нард",
         logo: "url",
         votes: [2, 1]
      },
      {
         name: "Красотки",
         logo: "url",
         votes: [0, 3]
      },
      {
         name: "Партия Регионов",
         logo: "url",
         votes: [3, 0]
      },
      {
         name: "Партия скуфов России",
         logo: "url",
         votes: [0, 3]
      },
      {
         name: "РКН",
         logo: "url",
         votes: [0, 3]
      },
      {
         name: "Антонов такой Антонов",
         logo: "url",
         votes: [0, 2]
      }  
   ]
}












































