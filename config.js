var mapseries = {};
mapseries.config = {
  formatFunctionsTemplate: {
    addDegrees: function(stringValue, sheet) {
      stringValue += '';
      if(stringValue.length==4) {
        stringValue = stringValue.substr(0,2)+'°'+stringValue.substr(2)+'°';
      }
      return stringValue;
    }
  },
  series: [
  ]
};
