function setBg(obj)
{
    var id = obj.id;
    switch(id) {
        case "jtg":
            document.getElementById("centerDiv").style.color = "red"; //backgroundImage = url("flaen.png");
          break;
        case "bbd":
            document.getElementById("centerDiv").style.color = "red";
          break;
      } 
}

function clearBg ()
{
    document.getElementById("centerDiv").style.backgroundImage = "";
}