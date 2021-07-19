function allPaarl(numPlate){
    var arrNumplates = numPlate.split(/,\s*/);
    var paalPlates = [];
    for(i=0;i<arrNumplates.length;i++){
     if(arrNumplates[i].startsWith('CJ')){
       paalPlates.push(arrNumplates[i]);
     };
   };
    return paalPlates;
  }