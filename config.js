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
    }
  ]
}