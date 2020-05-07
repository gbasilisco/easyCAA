function myFunction(p1) {
  //readXML();
  //alert("sono qui");

  var string = p1;

  string = string.split(" ");
  var stringArray = new Array();
  for (var i = 0; i < string.length; i++) {
    //alert(string.length)
    var myHTMLImage = "";
    var resParser = readXML(string[i]);
    if (resParser) {
      //myHTMLImage = "<img width='160px' height='160px' src='IT_simboli_arasaac_colori/" + resParser + "'>";

      myHTMLImage = "<div class='picto'><br><br>" +
        "<img src='" + myPictoDir + resParser + "' width='160px'>" +
        "<div>" + string[i] + "</div>" +
        "</div>";


    }
    //stringArray.push(string[i].concat(myHTMLImage));
    stringArray.push(myHTMLImage);
    if (i != string.length - 1) {
      stringArray.push(" ");
    }
  }

  return stringArray; // The function returns the product of p1 and p2
}


function readXML(word) {
  if (map.get(word)) {
    //alert( map.get(word)   );
    return map.get(word);
  }

  return;

}


var parser, xmlDoc;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text2, "text/xml");

map = new Map();

arraySize = xmlDoc.getElementsByTagName("image").length;

var i;

for (i = 0; i < arraySize; i++) {
  secondArraySize = xmlDoc.getElementsByTagName("image")[i].getElementsByTagName("language").length;
  imageName = xmlDoc.getElementsByTagName("image")[i].getAttribute('id');
  //alert(secondArraySize)
  var j;
  for (j = 0; j < secondArraySize; j++) {
    lang = xmlDoc.getElementsByTagName("image")[i].getElementsByTagName("language")[j].getAttribute('id');
    //alert(lang);
    if (lang == myLang) {

      thirdArraySize = xmlDoc.getElementsByTagName("image")[i].getElementsByTagName("language")[j].getElementsByTagName("word").length;
      //alert(thirdArraySize);     

      var k;
      for (k = 0; k < thirdArraySize; k++) {
        myWord = xmlDoc.getElementsByTagName("image")[i].getElementsByTagName("language")[j].getElementsByTagName("word")[k].childNodes[0].nodeValue;
        map.set(myWord, imageName);
      }


    }
  }


}