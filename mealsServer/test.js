class Category{
    constructor(title,color) {
        this.title = title;
        this.color = color;
    }
}

const CATEGORIES = [
    new Category('Italian', '#f5428d'),
    new Category('Quick & Easy', '#f54242'),
    new Category('Hamburgers', '#f5a442'),
    new Category('German', '#f5d142'),
    new Category('Light & Lovely', '#368dff'),
    new Category('Exotic', '#41d95d'),
    new Category('Breakfast', '#9eecff'),
    new Category('Asian', '#b9ffb0'),
    new Category('French', '#ffc7ff'),
    new Category('Summer', '#47fced')
  ];

console.log(JSON.stringify(CATEGORIES, undefined, 4));
/**
 * [
    {
        "title": "Italian",
        "color": "#f5428d"
    },
    {
        "title": "Quick & Easy",
        "color": "#f54242"
    },
    {
        "title": "Hamburgers",
        "color": "#f5a442"
    },
    {
        "title": "German",
        "color": "#f5d142"
    },
    {
        "title": "Light & Lovely",
        "color": "#368dff"
    },
    {
        "title": "Exotic",
        "color": "#41d95d"
    },
    {
        "title": "Breakfast",
        "color": "#9eecff"
    },
    {
        "title": "Asian",
        "color": "#b9ffb0"
    },
    {
        "title": "French",
        "color": "#ffc7ff"
    },
    {
        "title": "Summer",
        "color": "#47fced"
    }
]
 */