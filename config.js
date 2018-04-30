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
      title: "Evropa: Třetí vojenské mapování, speciální mapy 1:75 000",
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
      title: "Evropa: Třetí vojenské mapování, generální mapy 1:200 000",
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
      title: "Evropa: Třetí vojenské mapování, přehledná mapa střední Evropy 1:750 000",
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
      title: "Evropa: Třetí vojenské mapování, topografické mapy 1:25 000",
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
      title: "Evropa: Geologická speciální mapa 1:75 000",
      layer: "evropa-geologicka-specialni-mapa-175-000",
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
      title: "Evropa: Befestigungskarte Tschechoslowakei 1:25 000",
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
      title: "Evropa: Letecká mapa Evropy 1:500 000",
      layer: "evropa-letecka-mapa-evropy-1500-000",
      template: "evropa-letecka-mapa-evropy-1500-000.txt",
      formatFunctions: {
        addDegrees: function (stringValue, sheet) {
          stringValue += '';
          if(stringValue.length==8) {
            stringValue = stringValue.substr(5)+'°'+stringValue.substr(3)+'°';
          }
          return stringValue;
        }
      }
    }
  ]
}