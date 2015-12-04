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
      layer: "stredovychodni-evropa-treti-vojenske-mapovani-specialni-mapy-175-000",
      template: "stredovychodni-evropa-treti-vojenske-mapovani-specialni-mapy-175-000.txt",
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