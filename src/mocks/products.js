const products = [
    {
        id: 0,
        name: 'Филе бедра цыпленка',
        description: 'Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.',
        price: 400,
        weight: 700,
        image: '',
        details: [
            {
                property: 'Масса',
                value: '0,7 кг. (595-805 г.).',
            },
            {
                property: 'Срок годности',
                value: '6 суток',
            },
            {
                property: 'Порода',
                value: 'Кобб 500ю',
            },
            {
                property: 'Место происхождения',
                value: 'Тверская область',
            },
        ],
        features: [
            {
                property: 'Энергетическая ценность',
                value: '135 ккал./565 кДж',
            },
            {
                property: 'Пищевая ценность',
                value: 'белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.',
            },
        ],
    },

    {
        id: 1,
        name: 'Филе бедра гуся',
        description: 'Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусие отличает сырокопченого гуся от других подобных продуктов.',
        price: 500,
        weight: 600,
        image: '',
        details: [
            {
                property: 'Масса',
                value: '0,6 кг. (495-705 г.).',
            },
            {
                property: 'Срок годности',
                value: '5 суток',
            },
            {
                property: 'Порода',
                value: 'Кобб 200ю',
            },
            {
                property: 'Место происхождения',
                value: 'Тверская область',
            },
        ],
        features: [
            {
                property: 'Энергетическая ценность',
                value: '335 ккал./765 кДж',
            },
            {
                property: 'Пищевая ценность',
                value: 'белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г.',
            },
        ],
    },

    {
        id: 2,
        name: 'Молоко 3,8-4,5%',
        description: 'Фермерское молоко от Дмитрия Воробьёва обладает нежным вкусом и мягким, натуральным ароматом. Оно отлично подойдёт для полдника с булочкой, вкусной каши или крепкого утреннего кофе',
        price: 112,
        weight: 1,
        image: '',
        details: [
            {
                property: 'Масса',
                value: ' 1 л.',
            },
            {
                property: 'Жирность',
                value: '3,8-4,5%.',
            },
            {
                property: 'Условия хранения',
                value: 'при температуре от 0 до +6 °С.',
            },
            {
                property: 'Срок годности',
                value: '5 суток.',
            },
            {
                property: 'Место происхождения',
                value: 'Московская область, Домодедовский район.',
            },
        ],
        features: [
            {
                property: 'Пищевая ценность',
                value: 'белки - 3,1-3,3 г., жиры - 3,5-4,5 г., углеводы - 3,9-4,6 г.; на 100 г.',
            },
            {
                property: 'Энергетическая ценность',
                value: '59-78 ккал./ 247-326,57 кДж',
            },
        ],
    },

    {
        id: 3,
        name: 'Хлеб цельнозерновой с семенами льна',
        description: 'Ароматный и полезный хлеб придаст сил на целый день. Благодаря большому количеству семян, хлеб является достаточно богатым по вкусу и текстуре. ',
        price: 272,
        weight: 430,
        image: '',
        details: [
            {
                property: 'Масса',
                value: '460 г.',
            },
            {
                property: 'Применение',
                value: 'самостоятельный продукт, для приготовления закусок, бутербродов.',
            },
            {
                property: 'Условия хранения',
                value: ' при температуре от +15 до +25 °С.',
            },
            {
                property: 'Срок годности',
                value: '3 суток.',
            },
            {
                property: 'Место происхождения',
                value: 'Московская область, Одинцовский район.',
            },
        ],
        features: [
            {
                property: 'Пищевая ценность',
                value: 'белки - 7 г., жиры - 1,3 г., углеводы - 45,2 г.; на 100 г.',
            },
            {
                property: 'Энергетическая ценность',
                value: '220,9 кКал. / 924 кДж.',
            },
        ],
    },

    {
        id: 4,
        name: 'Гребешок морской филе (средний) свежемороженый',
        description: 'Морские гребешки считаются настоящим деликатесом и имеют приятный сладковатый вкус, известный каждому гурману. Это прекрасный источник витаминов и минералов. В его нежном и питательном мясе содержится фосфор, кальций, медь, железо и, конечно же, йод.',
        price: 1410,
        weight: 500,
        image: '',
        details: [
            {
                property: 'Масса:',
                value: '460 г.',
            },
            {
                property: 'Качество: ',
                value: 'ТУ 10.20.30-184-00472093-2017',
            },
            {
                property: 'Применение:',
                value: 'Продукт готов к употреблению , достаточно просто разморозить',
            },
            {
                property: 'Срок годности',
                value: '1 год.',
            },
            {
                property: 'Место происхождения:',
                value: 'Зона вылова – Японское и Охотское моря.',
            },
        ],
        features: [
            {
                property: 'Пищевая ценность:',
                value: 'белки - 17,5 г., жиры - 2 г., углеводы - 0 г.; на 100 г.',
            },
            {
                property: 'Энергетическая ценность:',
                value: '88 ккал. / 368 кДж.',
            },
        ],
    },

    {
        id: 5,
        name: 'Кетчуп "Organic" томатный классический',
        description: 'Кетчуп приготовлен на основе пасты из спелых органических томатов и классического набора специй, за счет чего имеет естественный сладко-пряный вкус. Органический продукт. Без глютена. Без консервантов. Без вкусоароматических добавок и красителей. Без крахмала. Свернуть',
        price: 365,
        weight: 530,
        image: '',
        details: [
            {
                property: 'Объем:',
                value: '530 мл.',
            },
            {
                property: 'Условия хранения:',
                value: 'при температуре от 0° до +25°С. после вскрытия продукт сохраняет свои свойства в течение 6 месяцев при 0 °С до +4 °С.',
            },
            {
                property: 'Применение:',
                value: 'Продукт готов к употреблению.',
            },
            {
                property: 'Срок годности',
                value: '1095 суток.',
            },
            {
                property: 'Место происхождения:',
                value: 'Латвия, улица Муизас 18A, Адажи, LV 2164.',
            },
        ],
        features: [
            {
                property: 'Пищевая ценность:',
                value: 'белки - 1,6 г., жиры - 0,1 г., углеводы - 19,5 г.; на 100 г.',
            },
            {
                property: 'Энергетическая ценность:',
                value: '90 ккал. / 381 кДж.',
            },
        ],
    },
]

export default products;