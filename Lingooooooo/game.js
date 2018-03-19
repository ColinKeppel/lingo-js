// woordenlijst
var words = [
    "appel",
    "aldus",
    "afwas",
    "aftel",
    "aarde",
    "armen",
    "actie",
    "apart",
    "adres",
    "avond",
    "aders",
    "alarm",
    "boten",
    "balen",
    "beter",
    "bomen",
    "boren",
    "boven",
    "boxen",
    "brood",
    "broek",
    "bwoord",
    "breed",
    "benen",
    "beeld",
    "brief",
    "beten",
    "basis",
    "blauw",
    "beren",
    "buren",
    "banen",
    "bloed",
    "broer",
    "blond",
    "boter",
    "beleg",
    "breng",
    "baken",
    "beker",
    "blind",
    "bezig",
    "baden",
    "bedel",
    "bazen",
    "bazin",
    "baren",
    "beden",
    "beken",
    "bezem",
    "baard",
    "bidet",
    "breuk",
    "conus",
    "cello",
    "creme",
    "cloud",
    "cacao",
    "cadet",
    "cavia",
    "ceder",
    "combi",
    "china",
    "clown",
    "draai",
    "deden",
    "dalen",
    "derde",
    "delen",
    "dwaas",
    "daden",
    "dader",
    "dames",
    "diner",
    "datum",
    "dozen",
    "dreun",
    "duits",
    "dagen",
    "deren",
    "dwerg",
    "dwaal",
    "dwing",
    "druil",
    "droog",
    "draad",
    "dweil",
    "drank",
    "duren",
    "dwars",
    "drugs",
    "daten",
    "daler",
    "doorn",
    "disco",
    "degen",
    "droom",
    "dient",
    "drone",
    "dadel",
    "duwen",
    "druif",
    "deken",
    "deler",
    "elven",
    "eigen",
    "enger",
    "engel",
    "elder",
    "enkel",
    "effen",
    "email",
    "egaal",
    "fiets",
    "friet",
    "files",
    "forel",
    "films",
    "feest",
    "fruit",
    "falen",
    "flora",
    "fauna",
    "feeen",
    "freak",
    "forum",
    "fusie",
    "geven",
    "gaven",
    "groen",
    "graai",
    "getal",
    "grens",
    "grond",
    "groef",
    "graal",
    "gewei",
    "games",
    "grote",
    "groet",
    "garen",
    "gebak",
    "graag",
    "genre",
    "glans",
    "geluk",
    "geeuw",
    "horen",
    "heren",
    "halen",
    "hagel",
    "haren",
    "helen",
    "harde",
    "hemel",
    "hoofd",
    "huren",
    "hamer",
    "haken",
    "heden",
    "hotel",
    "hobby",
    "heler",
    "hoger",
    "ieder",
    "index",
    "immer",
    "icoon",
    "inlog",
    "inzet",
    "innig",
    "jovel",
    "jaren",
    "jicht",
    "jabot",
    "jacht",
    "jaden",
    "jagen",
    "jager",
    "japon",
    "jarig",
    "jawel",
    "jeans",
    "jemig",
    "jeugd",
    "joint",
    "jonas",
    "joule",
    "koken",
    "kreet",
    "koker",
    "kerst",
    "kegel",
    "koude",
    "kader",
    "krent",
    "kamer",
    "kaars",
    "kaart",
    "kraan",
    "krant",
    "keren",
    "kruid",
    "kerel",
    "kubus",
    "kraal",
    "kleur",
    "kroon",
    "klein",
    "korst",
    "klopt",
    "kabel",
    "kunst",
    "kopje",
    "krans",
    "klimt",
    "kater",
    "klink",
    "kudde",
    "kruis",
    "lopen",
    "laten",
    "lepel",
    "links",
    "laden",
    "leven",
    "lezen",
    "lucht",
    "lenen",
    "laser",
    "lente",
    "licht",
    "lader",
    "leder",
    "lunch",
    "lijst",
    "leger",
    "leden",
    "legen",
    "lagen",
    "lezer",
    "lever",
    "lingo",
    "loper",
    "luier",
    "lager",
    "leeuw",
    "maand",
    "malen",
    "maken",
    "media",
    "meter",
    "motor",
    "maten",
    "markt",
    "mazen",
    "molen",
    "meest",
    "meren",
    "model",
    "meden",
    "maden",
    "macht",
    "meeuw",
    "mager",
    "magen",
    "maren",
    "manen",
    "noord",
    "nieuw",
    "negen",
    "namen",
    "neven",
    "nodig",
    "naden",
    "neder",
    "nemen",
    "onder",
    "optel",
    "ovaal",
    "ovale",
    "onwel",
    "optie",
    "orden",
    "oppas",
    "ouder",
    "ophef",
    "oases",
    "palen",
    "plein",
    "pegel",
    "paars",
    "prijs",
    "piano",
    "pixel",
    "paden",
    "pasta",
    "pizza",
    "poten",
    "paard",
    "puber",
    "pauze",
    "preek",
    "polis",
    "pater",
    "proef",
    "panda",
    "penis",
    "prins",
    "pluto",
    "polen",
    "plint",
    "quota",
    "quant",
    "quark",
    "queue",
    "quilt",
    "quote",
    "robot",
    "reken",
    "raden",
    "regen",
    "radio",
    "rente",
    "regio",
    "rugby",
    "reden",
    "roken",
    "ruzie",
    "ruist",
    "regel",
    "racen",
    "races",
    "riool",
    "ramen",
    "radar",
    "roman",
    "rokje",
    "razen",
    "roede",
    "staan",
    "staal",
    "speel",
    "steeg",
    "stoel",
    "stook",
    "steek",
    "schep",
    "spijs",
    "stoep",
    "shirt",
    "samen",
    "sites",
    "sport",
    "spalk",
    "sjaal",
    "storm",
    "staat",
    "steun",
    "strak",
    "serie",
    "shows",
    "schat",
    "snoep",
    "sfeer",
    "smeer",
    "speer",
    "scene",
    "speld",
    "smeed",
    "smaak",
    "super",
    "stand",
    "steer",
    "smelt",
    "sedan",
    "skier",
    "sluis",
    "sneer",
    "steel",
    "truck",
    "terug",
    "typen",
    "talen",
    "taboe",
    "tegel",
    "taart",
    "tafel",
    "trouw",
    "teken",
    "teren",
    "taken",
    "treur",
    "tenen",
    "titel",
    "thuis",
    "tiara",
    "teder",
    "toets",
    "tabak",
    "trein",
    "tarwe",
    "telen",
    "teler",
    "uiten",
    "uilig",
    "uitje",
    "uiver",
    "ultra",
    "uniek",
    "uppie",
    "uraan",
    "uiers",
    "velen",
    "vloer",
    "video",
    "varen",
    "vegen",
    "veren",
    "vader",
    "vaten",
    "vuren",
    "vrouw",
    "vlees",
    "vogel",
    "vroeg",
    "vezel",
    "veins",
    "vorst",
    "veder",
    "vanaf",
    "vieze",
    "veger",
    "villa",
    "veler",
    "vrede",
    "vries",
    "woord",
    "wagen",
    "wonen",
    "waren",
    "warme",
    "weten",
    "water",
    "weren",
    "wazig",
    "wegen",
    "weven",
    "wezen",
    "weken",
    "wraak",
    "wilde",
    "wreed",
    "wrede",
    "wenst",
    "woest",
    "xenon",
    "yacht",
    "yucca",
    "zwaar",
    "zware",
    "zesde",
    "zagen",
    "zalig",
    "zomer",
    "zeden",
    "zwart",
    "zeven",
    "zicht",
    "zadel",
    "zweet",
    "zenuw",
    "zweer",
    "zweef",
    "zaden",
    "zaken",
    "zeker",
    "zever",
    "zeeen"];
//         math floor rond het getal 1tje omlaag af        Kiest een getal tussen 0 & 1 maar niet 1 en daarna * het aantal elementen in de array
var woord = words[Math.floor(Math.random() * words.length)]
console.log(woord);
var kopiewoord = woord.split("");
var poging;
var uitkomst = [0, 0, 0, 0, 0];

var table = document.getElementsByTagName("table")[0];

for(t = 1; t <= 6; t++) {
    if (t <= 5) {
        var tr = document.createElement("TR");
        tr.setAttribute("id", "rij" + t);
        for (r = 1; r <= 5; r++) {
            var td = document.createElement("TD");
            var input = document.createElement("INPUT");
            input.setAttribute("id", "rij" + t + "letter" + r);
            input.setAttribute("type", "text");
            input.setAttribute("maxlength", "1");
            if(t > 1) {
                input.disabled = true;
            }
            td.appendChild(input);
            tr.appendChild(td);
            table.appendChild(tr);
        }
    } else if (t > 5){
        var tr = document.createElement("TR");
        tr.setAttribute("id", "antwoordrij");
        for (r = 1; r <= 5; r++) {
            var td = document.createElement("TD");
            var input = document.createElement("INPUT");
            input.setAttribute("id", "antwoordrij" + "letter" + r);
            input.setAttribute("type", "text");
            input.setAttribute("maxlength", "1");
            input.disabled = true;
            td.appendChild(input);
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
}
var rij1letter1 = document.getElementById("rij1letter1");
var rij1letter2 = document.getElementById("rij1letter2");
var rij1letter3 = document.getElementById("rij1letter3");
var rij1letter4 = document.getElementById("rij1letter4");
var rij1letter5 = document.getElementById("rij1letter5");
var rij2letter1 = document.getElementById("rij2letter1");
var rij2letter2 = document.getElementById("rij2letter2");
var rij2letter3 = document.getElementById("rij2letter3");
var rij2letter4 = document.getElementById("rij2letter4");
var rij2letter5 = document.getElementById("rij2letter5");
var rij3letter1 = document.getElementById("rij3letter1");
var rij3letter2 = document.getElementById("rij3letter2");
var rij3letter3 = document.getElementById("rij3letter3");
var rij3letter4 = document.getElementById("rij3letter4");
var rij31etter5 = document.getElementById("rij31etter5");
var rij4letter1 = document.getElementById("rij4letter1");
var rij4letter2 = document.getElementById("rij4letter2");
var rij4letter3 = document.getElementById("rij4letter3");
var rij4letter4 = document.getElementById("rij4letter4");
var rij41etter5 = document.getElementById("rij41etter5");
var rij5letter1 = document.getElementById("rij5letter1");
var rij5letter2 = document.getElementById("rij5letter2");
var rij5letter3 = document.getElementById("rij5letter3");
var rij5letter4 = document.getElementById("rij5letter4");
var rij51etter5 = document.getElementById("rij51etter5");
var antwoordrijletter1 = document.getElementById("antwoordrijletter1");
var antwoordrijletter2 = document.getElementById("antwoordrijletter2");
var antwoordrijletter3 = document.getElementById("antwoordrijletter3");
var antwoordrijletter4 = document.getElementById("antwoordrijletter4");
var antwoordrijletter = document.getElementById("antwoordrijletter5");
//plaatst de eerste letter van het woord in de placeholder zodat je ziet wat de eerste letter is
rij1letter1.placeholder = woord[0];
rij2letter1.placeholder = woord[0];
rij3letter1.placeholder = woord[0];
rij4letter1.placeholder = woord[0];
rij5letter1.placeholder = woord[0];
rij1letter1.value = woord[0];
rij2letter1.value = woord[0];
rij3letter1.value = woord[0];
rij4letter1.value = woord[0];
rij5letter1.value = woord[0];


var eersterij = [rij1letter1, rij1letter2, rij1letter3, rij1letter4, rij1letter5];
var tweederij = [rij2letter1, rij2letter2, rij2letter3, rij2letter4, rij2letter5];
var derderij = [rij3letter1, rij3letter2, rij3letter3, rij3letter4, rij3letter5];
var vierderij = [rij4letter1, rij4letter2, rij4letter3, rij4letter4, rij4letter5];
var vijfderij = [rij5letter1, rij5letter2, rij5letter3, rij5letter4, rij5letter5];
var antwoordrij = [antwoordrijletter1, antwoordrijletter2, antwoordrijletter3, antwoordrijletter4, antwoordrijletter5];

var rijnummer = 0;
var rijen = [eersterij, tweederij, derderij, vierderij, vijfderij];

// uitkomst betekenis
// 2 is goed (#ff0000)
// 1 is goed maar op verkeerde plaats (#ffff00)
// 0 is fout
function check() {
    uitkomst =  [0, 0, 0, 0, 0];
    poging = "";
    kopiewoord = woord.split("");
// maakt van losse letters die je gokt een woord van. poging word een woord.
    poging = rijen[rijnummer][0].value + rijen[rijnummer][1].value + rijen[rijnummer][2].value + rijen[rijnummer][3].value + rijen[rijnummer][4].value;
// Als woordom woord gelijk is aan poging maak achtergrond groen
    for(i = 0; i <= 4; i++) { // for loop die checkt of de letter goed is en als hij overeenkomt geeft hij de waarde 2 in uitkomst in de overeenkomende index.
        if(poging[i].toLowerCase() === kopiewoord[i]) {
            uitkomst[i] = 2;
            kopiewoord[i] = null;
        }
    }
    for(j = 0; j <= 4; j++) { // For loop die checkt of de letter in het woord zit.
        if (kopiewoord.includes(poging[j].toLowerCase()) && kopiewoord[kopiewoord.indexOf(poging[j])] !== null && uitkomst[j] !== 2) {
        uitkomst[j] = 1;
        kopiewoord[kopiewoord.indexOf(poging[j])] = null;
        }
    }
    // Voorbeeld van hoe de code werkt.
    //    uitkomst =            [ 0,  2,  0,  0,  0 ];
    //    kopiewoord =           ["b",null,"n","e","n"];
    //    poging =              ["l","e","e","n","x"];
    for(k = 0; k <= 4; k++) { // een for loop die vertaalt de getallen van "uitkomst" naar kleuren.
        if (uitkomst[k] === 2) {
            rijen[rijnummer][k].className = "letterKlopt";
            rijen[rijnummer][k].disabled = true;
        } else if (uitkomst[k] === 1) {
            rijen[rijnummer][k].className = "verkeerdePlek";
            rijen[rijnummer][k].disabled = true;
        } else if (uitkomst[k] === 0) {
            rijen[rijnummer][k].disabled = true;
        }
    }
    nieuwerij();
}
// Deze functie zorgt er voor dat hij naar de volgende rij gaat en als na 5 pogingen het woord fout is het antwoord word laten zien bij de antwoord regel ook zorgt hij er voor dat het woord word laten zien stel je raad het
function nieuwerij() {
    rijnummer++;
    if(rijnummer === 5) {
        antwoordrijletter1.value = woord[0];
        antwoordrijletter2.value = woord[1];
        antwoordrijletter3.value = woord[2];
        antwoordrijletter4.value = woord[3];
        antwoordrijletter5.value = woord[4];
    } else if(poging === woord) {
        antwoordrijletter1.value = woord[0];
        antwoordrijletter2.value = woord[1];
        antwoordrijletter3.value = woord[2];
        antwoordrijletter4.value = woord[3];
        antwoordrijletter5.value = woord[4];
    } else if(rijnummer < 5) {
        for(c = 0; c <= 4; c++) {
            rijen[rijnummer][c].disabled = false;
        }
    }
}



