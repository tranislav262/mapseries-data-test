var mapseries = {};
mapseries.config = {
  formatFunctionsTemplate: {
    addDegrees: function (stringValue, sheet) {
      stringValue += '';
      if(stringValue.length==4) {
        stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
      }
      return stringValue;
    }
  },
  series: [
    {
      title: "Evropa; Třetí vojenské mapování, speciální mapy 1:75 000; Třetí vojenské mapování: speciální mapy 1:75 000",
      layer: "evropa-treti-vojenske-mapovani-specialni-mapy-175-000",
      template: "evropa-treti-vojenske-mapovani-specialni-mapy-175-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, generální mapy 1:200 000; Třetí vojenské mapování: generální mapy 1:200 000",
      layer: "evropa-treti-vojenske-mapovani-generalni-mapy-1200-000",
      template: "evropa-treti-vojenske-mapovani-generalni-mapy-1200-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, přehledné mapy 1:750 000; Třetí vojenské mapování, přehledná mapa střední Evropy 1:750 000",
      layer: "evropa-treti-vojenske-mapovani-prehledna-mapa-stredni-evropy-1750-000",
      template: "evropa-treti-vojenske-mapovani-prehledna-mapa-stredni-evropy-1750-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, topografické sekce 1:25 000; Třetí vojenské mapování, topografické sekce 1:25 000",
      layer: "evropa-treti-vojenske-mapovani-topograficke-mapy-125-000",
      template: "evropa-treti-vojenske-mapovani-topograficke-mapy-125-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, speciální mapy 1:75 000; Geologická speciální mapa 1:75 000",
      layer: "evropa-treti-vojenske-mapovani-specialni-mapy-175-000",
      template: "evropa-geologicka-specialni-mapa-175-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, přehledné mapy; Befestigungskarte Tschechoslowakei 1:25 000",
      layer: "evropa-befestigungskarte-tschechoslowakei-125-000",
      template: "evropa-befestigungskarte-tschechoslowakei-125-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Letecká mapa Evropy 1:500 000; Letecká mapa Evropy 1:500 000",
      layer: "evropa-letecka-mapa-evropy-1500-000",
      template: "evropa-letecka-mapa-evropy-1500-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==8) {
            stringValue = stringValue.substr(0,5)+'°'+stringValue.substr(5)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Deutsche Heereskarte 1:300 000; Deutsche Heereskarte 1:300 000",
      layer: "evropa-deutsche-heereskarte-1300-000",
      template: "evropa-deutsche-heereskarte-1300-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, generální mapy 1:200 000; Deutsche Heereskarte 1:200 000",
      layer: "evropa-deutsche-heereskarte-1200-000",
      template: "evropa-deutsche-heereskarte-1200-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Deutsche Heereskarte 1:100 000 (Bulgarien); Deutsche Heereskarte Bulgarien 1:100 000",
      layer: "evropa-deutsche-heereskarte-bulgarien-1100-000",
      template: "evropa-deutsche-heereskarte-bulgarien-1100-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Deutsche Heereskarte 1:100 000 (Italien); Deutsche Heereskarte Italien 1:100 000",
      layer: "evropa-deutsche-heereskarte-italien-1100-000",
      template: "evropa-deutsche-heereskarte-italien-1100-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Deutsche Heereskarte 1:50 000 (Protektorat); Deutsche Heereskarte 1:50 000 (Protektorat)",
      layer: "evropa-deutsche-heereskarte-150-000-protektorat",
      template: "evropa-deutsche-heereskarte-150-000-protektorat.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa;  Třetí vojenské mapování, speciální mapy 1:75 000; Karte Slowakei 1:75 000",
      layer: "evropa-karte-slowakei-175-000",
      template: "evropa-karte-slowakei-175-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, speciální mapy 1:75 000; Karte Ungarn 1:75 000",
      layer: "evropa-karte-ungarn-175-000",
      template: "evropa-karte-ungarn-175-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Svět; Karta mira 1:2 500 000; Karta mira 1:2 500 000",
      layer: "svet-karta-mira-12-500-000",
      template: "svet-karta-mira-12-500-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Carte de France topographique 1:25 000; Karte von Frankreich 1:25 000",
      layer: "evropa-karte-von-frankreich-125-000",
      template: "evropa-karte-von-frankreich-125-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, generální mapy 1:200 000; Normální mezinárodní letecká mapa 1:200 000",
      layer: "evropa-normalni-mezinarodni-letecka-mapa-1200-000",
      template: "evropa-normalni-mezinarodni-letecka-mapa-1200-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Souřadnicový systém 1942 1:200 000; Souřadnicový systém 1942 1:200 000",
      layer: "evropa-souradnicovy-system-1942-s42-1200-000-oprava",
      template: "evropa-souradnicovy-system-1942-s42-1200-000-oprava.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Souřadnicový systém 1942 1:50 000; Souřadnicový systém 1942 1:50 000",
      layer: "evropa-souradnicovy-system-1942-s42",
      template: "evropa-souradnicovy-system-1942-s42.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Souřadnicový systém 1942 1:25 000; Souřadnicový systém 1942 1:25 000",
      layer: "evropa-souradnicovy-system-1942-s42-125-000",
      template: "evropa-souradnicovy-system-1942-s42-125-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Základní mapa 1:200 000; Základní mapa ČSR 1:200 000",
      layer: "evropa-zakladni-mapa-csr-1200-000",
      template: "evropa-zakladni-mapa-csr-1200-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Základní mapa 1:100 000; Základní mapa ČSR 1:100 000",
      layer: "evropa-zakladni-mapa-csr-1100-000",
      template: "evropa-zakladni-mapa-csr-1100-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Základní mapa 1:50 000; Základní mapa ČSR 1:50 000",
      layer: "evropa-zakladni-mapa-csr-150-000",
      template: "evropa-zakladni-mapa-csr-150-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Základní mapa 1:25 000; Základní mapa ČSR 1:25 000",
      layer: "evropa-zakladni-mapa-csr-125-000",
      template: "evropa-zakladni-mapa-csr-125-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Základní mapa 1:10 000; Základní mapa ČSR 1:10 000",
      layer: "evropa-zakladni-mapa-csr-110-000",
      template: "evropa-zakladni-mapa-csr-110-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Státní mapa 1:50 000; Státní mapa ČSR 1:50 000",
      layer: "evropa-statni-mapa-csr-150-000",
      template: "evropa-statni-mapa-csr-150-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Messtischblatt 1:25 000; Topographische Karte (Messtischblatt) 1:25 000",
      layer: "evropa-topographische-karte-messtischblatt-125-000",
      template: "evropa-topographische-karte-messtischblatt-125-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Messtischblatt 1:25 000; Topographische Karte (Messtischblatt) 1:25 000 (Protektorat)",
      layer: "evropa-topographische-karte-messtischblatt-125-000-protektorat",
      template: "evropa-topographische-karte-messtischblatt-125-000-protektorat.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Karte des Deutschen Reiches 1:100 000; Geologische Karte der Provinz Preussen 1:100 000",
      layer: "evropa-geologische-karte-der-provinz-preussen-1100-000",
      template: "evropa-geologische-karte-der-provinz-preussen-1100-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Prozatímní vojenské mapování 1:10 000; Prozatímní vojenské mapování 1:10 000 (Benešovo zobrazení)",
      layer: "evropa-prozatimni-vojenske-mapovani-110-000-benesovo-zobrazeni-oprava",
      template: "evropa-prozatimni-vojenske-mapovani-110-000-benesovo-zobrazeni-oprava.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Mapování v Křovákově zobrazení 1:20 000; Definitivní vojenské mapování 1:20 000 (Křovákovo zobrazení)",
      layer: "evropa-definitivni-vojenske-mapovani-120-000-krovakovo-zobrazeni",
      template: "evropa-definitivni-vojenske-mapovani-120-000-krovakovo-zobrazeni.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    },
    {
      title: "Evropa; Třetí vojenské mapování, přehledné mapy 1:750 000; test2",
      layer: "evropa-test2",
      template: "evropa-test2.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==4) {
            stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
          }
          return stringValue;
        }
      }
    }
  ]
}
