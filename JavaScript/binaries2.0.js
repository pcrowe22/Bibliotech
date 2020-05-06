
var htmlContr = new Array(document.getElementsByClassName("contrButton"));

var requestURL = "https://pcrowe22.github.io/Bibliotech/JavaScript/powerJSON.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();
var axes;
var axesPowers;
request.onload = function() {
  const jsonText = request.response;
  const jsonObjects = JSON.parse(jsonText);
  axesPowers = jsonObjects[0];
  axes = jsonObjects[1];
  for (var i=0; i<axes.length; i++) {
    for (var j=0; j<axes[i].powerNames.length; j++) {
      for (var k=0; k<axesPowers.length; k++) {
        if (axesPowers[k].name.localeCompare(axes[i].powerNames[j])==0) {
          axes[i].powers.push(axesPowers[k]);
        }
      }
    }
  }
}

var contr=["Light -- Dark"];

var circles = document.getElementById("dots");
var circtx = circles.getContext("2d");
circtx.strokeStyle = "green";
circtx.beginPath();
circtx.arc(25,25,10,0,2*Math.PI);
circtx.fillStyle = "green";


var c = document.getElementById("Can");
var htmlAxes = [document.getElementById('yp'), document.getElementById('q1'), document.getElementById('xp'), 
document.getElementById('q4'), document.getElementById('yn'), document.getElementById('q3'),
document.getElementById('xn'), document.getElementById('q2')];
function drawld(){
	var ldtx = c.getContext("2d");
    ldtx.strokeStyle = 'blue';
    ldtx.beginPath();
    ldtx.moveTo(0,0);
    ldtx.lineTo(500,500);
    ldtx.stroke();
}
function drawrd(){
	var rdtx = c.getContext("2d");
      rdtx.strokeStyle = "blue";
      rdtx.beginPath();
      rdtx.moveTo(0,500);
      rdtx.lineTo(500,0);
      rdtx.stroke();
}
function drawvert(){
	var vert = c.getContext("2d");
      vert.strokeStyle = "red";
      vert.beginPath();
      vert.moveTo(250,0);
      vert.lineTo(250,500);
      vert.stroke();
}
function drawhor(){
	var hor = c.getContext("2d");
      hor.strokeStyle = "red";
      hor.beginPath();
      hor.moveTo(0,250);
      hor.lineTo(500,250);
      hor.stroke();
}
function drawtb(){
	var tb = c.getContext("2d");
      tb.strokeStyle = "blue";
      tb.beginPath();
      tb.moveTo(0,0);
      tb.lineTo(500,0);
      tb.stroke();
}
function drawbb(){
	var bb = c.getContext("2d");
      bb.strokeStyle = "blue";
      bb.beginPath();
      bb.moveTo(0,500);
      bb.lineTo(500,500);
      bb.stroke();
}
function drawlb(){
	var lb = c.getContext("2d");
      lb.strokeStyle = "blue";
      lb.beginPath();
      lb.moveTo(0,0);
      lb.lineTo(0,500);
      lb.stroke();
}
function drawrb(){
	var rb = c.getContext("2d");
      rb.strokeStyle = "blue";
      rb.beginPath();
      rb.moveTo(500,0);
      rb.lineTo(500,500);
      rb.stroke();
}
var listOfDraws = [drawld, drawrd, drawtb, drawbb, drawlb, drawrb];

function drawContraries(newAxes){
  var ctx = c.getContext("2d");
	ctx.clearRect(0,0,500,500);
	drawvert();
	drawhor();
  for (var i=0; i<newAxes.graph.length; i++) {
	  if (newAxes.graph[i]==1){
        listOfDraws[i]();
    }
  }
	for (var i=0; i<newAxes.powers.length; i++){ 
    htmlAxes[i].innerHTML=newAxes.powers[i].name;
	}
}

var potentialAxes={ID1: "none",
	ID2: "none",
	parent: "none",
	layer: "none",
	graph: [0, 0, 0, 0, 0, 0],
	powers: ["none", "none", "none", "none", "none", "none", "none", "none"]
};
function assignPotID(potentialAxes, contrary){
	if (potentialAxes.ID1=="none"){
		potentialAxes.ID1=contrary;
		circtx.clearRect(0,0,100,50);
		circtx.stroke();
	} else if (potentialAxes.ID2=="none"){
		potentialAxes.ID2=contrary;
		var dispAxes=chooseAxes(potentialAxes);
		drawContraries(dispAxes);
	    circtx.fill();
	} else {
		potentialAxes.ID1=contrary;
		potentialAxes.ID2="none";
		circtx.clearRect(0,0,100,50);
		circtx.stroke();

	}
  showStats(contrary);
}
function chooseAxes(potAxes){
	var newAxes={
  name: "none",
  ID1: "none",
	ID2: "none",
	parent: "none",
  children: [],
	layer: "none",
	graph: [0, 0, 0, 0, 0, 0],
	powers: ["none", "none", "none", "none", "none", "none", "none", "none"]
	};

	for (var i=0; i<axes.length; i++){
		if ((axes[i].name.startsWith(potAxes.ID1)&&axes[i].name.endsWith(potAxes.ID2))
		|| (axes[i].name.startsWith(potAxes.ID2)&&axes[i].name.endsWith(potAxes.ID1))){		//verifies that the potential axes do exist within the list of axes
			//for adding the children properties of the axes to the contr list so you don't have to do it manually
      for (var j=0; j<axes[i].children.length; j++) {
          if (!contr.includes(axes[i].children[j])) {
            (function() {
            //add contrary to the hidden list
            contr.push(axes[i].children[j]);
            //physically add a new button for that contrary
            var newButton = document.createElement("button");
            newButton.innerHTML = axes[i].children[j];
            newButton.classList.add("contrButton");
            newButton.addEventListener("click", function() {assignPotID(potentialAxes, newButton.innerHTML);});
            htmlContr.push(newButton);
            document.getElementById("buttonDiv").appendChild(newButton);
            document.getElementById("discovery").play(); 
            }());
          }
        }
      //for adding an elemental power to the list of select options
      var selectList = document.getElementById("power");
      for (var j=0; j<axes[i].powers.length; j++) {
        var included = false;
        for (var k=0; k<selectList.options.length; k++) {
          if (selectList.options[k].text.localeCompare(axes[i].powers[j].name)==0) {
            included = true;
          }
        }
        if (included == false) {
          var newOption = document.createElement("option");
          newOption.text = axes[i].powers[j].name;
          newOption.value = axes[i].powers[j].name;
          newOption.setAttribute("info", axes[i].powers[j].bio);
          if (axes[i].powers[j].splittable == true) {
            newOption.setAttribute("selectCont", axes[i].powers[j].hiddenContr);
            newOption.setAttribute("e1Name", axes[i].powers[j].power1.name);
            newOption.setAttribute("e1Bio", axes[i].powers[j].power1.bio);
            newOption.setAttribute("e1Split", axes[i].powers[j].power1.splittable);
            newOption.setAttribute("e2Name", axes[i].powers[j].power2.name);
            newOption.setAttribute("e2Bio", axes[i].powers[j].power2.bio);
            newOption.setAttribute("e2Split", axes[i].powers[j].power2.splittable);
          }
          document.getElementById("power").add(newOption);
        }
      }
      return axes[i];
		}
	}
	return newAxes;
}

var simp = document.getElementById("simplifier");
var stx = simp.getContext("2d");

function drawsimp(){
	stx.strokeStyle ="white";
	stx.beginPath();
	stx.moveTo(200,75);
	stx.lineTo(500,75);
	stx.stroke();
}

function simplify(){
	stx.clearRect(0,0,500,100);
  var lineage = "";
	var combo = document.getElementById("power").options[document.getElementById("power").selectedIndex];
	var sCont = document.getElementById("power").options[document.getElementById("power").selectedIndex].getAttribute("selectCont");
	if (combo.getAttribute("e1Name")!=null){
    document.getElementById("s1").innerHTML=combo.getAttribute("e1Name");
    document.getElementById("s2").innerHTML=combo.getAttribute("e2Name");
		drawsimp();
    if (!contr.includes(sCont)){		
      contr.push(sCont);
      var newButton = document.createElement("button");
      newButton.innerHTML = sCont;
      newButton.classList.add("contrButton");
      newButton.addEventListener("click", function() {assignPotID(potentialAxes, newButton.innerHTML);});
      htmlContr.push(newButton);
      document.getElementById("buttonDiv").appendChild(newButton);
      document.getElementById("discovery").play();
		}
    var selectList = document.getElementById("power");
    var included = false;
    for (var i=0; i<selectList.options.length; i++) {
      if (selectList.options[i].text.localeCompare(combo.getAttribute("e1Name"))==0){
        included = true;
      }
    }
    if (included == false) {
      var newOption = document.createElement("option");
      newOption.text = combo.getAttribute("e1Name");
      newOption.value = combo.getAttribute("e1Name");
      newOption.setAttribute("info", combo.getAttribute("e1Bio"));
      if (combo.getAttribute("e1Split") == true) {
        newOption.setAttribute("selectCont", combo.getAttribute("e1Contr"));
        newOption.setAttribute("e1", combo.getAttribute("e1Power1"));
        newOption.setAttribute("e2", combo.getAttribute("e1Power2"));
      }
      document.getElementById("power").add(newOption);
    }
    included = false;
    for (var i=0; i<selectList.options.length; i++) {
      if (selectList.options[i].text.localeCompare(combo.getAttribute("e2Name"))==0){
        included = true;
      }
    }
    if (included == false) {
      var newOption = document.createElement("option");
      newOption.text = combo.getAttribute("e2Name");
      newOption.value = combo.getAttribute("e2Name");
      newOption.setAttribute("info", combo.getAttribute("e2Bio"));
      if (combo.getAttribute("e2Split") == true) {
        newOption.setAttribute("selectCont", combo.getAttribute("e2Contr"));
        newOption.setAttribute("e1", combo.getAttribute("e2").power1);
        newOption.setAttribute("e2", combo.getAttribute("e2").power2);
      }
      document.getElementById("power").add(newOption);
    }
  } else {
    document.getElementById("s1").innerHTML="";
    document.getElementById("s2").innerHTML="";
  }
  var tree_config = {
    chart: {
      container: "#lineage",
      node: {
        collapsable: true
      },
      rootOrientation: "SOUTH",
      connectors: {
        type: "step",
        style: {
          "stroke": "white"
        }
      }
    },
    nodeStructure: {
      text: {name: combo.value},
      collapsed: true,
      children: []
    }
  };
 
  var search = combo.value;
  var path = tree_config.nodeStructure.children;
  function findNode(search, path) {
    if (search.localeCompare("Light")!=0 && search.localeCompare("Dark")!=0) {
      for (var i=0; i<axes.length; i++) {
        for (var j=0; j<axes[i].powers.length; j++) {
          if (axes[i].powers[j].name.localeCompare(search)==0 && j%2!=0) {
            if (j==0) {
              var child1Name = axes[i].powers[axes[i].powers.length-1].name;
              var child1 = {text: {name: child1Name}, children: []};
              path.push(child1);
              var newPath = path[0].children;
              findNode(child1Name, newPath);

              var child2Name = axes[i].powers[j+1].name
              var child2 = {text: {name: child2Name}, children: []};
              path.push(child2);
              newPath = path[1].children;
              findNode(child2Name, newPath);
            } else if (j==axes[i].powers.length-1) {
              var child1Name = axes[i].powers[j-1].name
              var child1 = {text: {name: child1Name}, children: []};
              path.push(child1);
              var newPath = path[0].children;
              findNode(child1Name, newPath);
             
              var child2Name = axes[i].powers[0].name
              var child2 = {text: {name: child2Name}, children: []};
              path.push(child2);
              newPath = path[1].children;
              findNode(child2Name, newPath);
            } else {
              var child1Name = axes[i].powers[j-1].name
              var child1 = {text: {name: child1Name}, children: []};
              path.push(child1);
              var newPath = path[0].children;
              findNode(child1Name, newPath);
              
              var child2Name = axes[i].powers[j+1].name
              var child2 = {text: {name: child2Name}, children: []};
              path.push(child2);
              newPath = path[1].children;
              findNode(child2Name, newPath);
            }
            break;
          } else if (axes[i].powers[j].splittable == true) {
            if (axes[i].powers[j].power1.name.localeCompare(search)==0) {
              var childName = axes[i].powers[j].name;
              var child = {text: {name: childName}, children: []};
              path.push(child);
              var newPath = path[0].children;
              findNode(childName, newPath);
              break;
            } else if (axes[i].powers[j].power2.name.localeCompare(search)==0) {
              var childName = axes[i].powers[j].name
              var child = {text: {name: childName}, children: []};
              path.push(child);
              var newPath = path[0].children;
              findNode(childName, newPath);
              break;
            }
          } 
        } 
      }
    }
  }
  document.getElementById("elementTitle").innerHTML=document.getElementById("power").options[document.getElementById("power").selectedIndex].value;
	document.getElementById("elementInfo").innerHTML=document.getElementById("power").options[document.getElementById("power").selectedIndex].getAttribute("info");
  findNode(search, path);
  var elementTree = new Treant(tree_config);
}
function showStats(contrary) {
  document.getElementById("stats").remove();
  var newStats = document.createElement("ul");
  newStats.setAttribute("id", "stats");
  document.getElementById("statsContainer").appendChild(newStats);
  for (var i=0; i<axes.length; i++) {
    if (contrary.localeCompare(axes[i].ID1)==0){
      var newName = document.createElement("li");
      newName.style.color = "white";
      if (contr.includes(axes[i].ID2)) {
        newName.innerHTML = axes[i].name;
      } else {
        newName.innerHTML = "?";
      }
      document.getElementById("stats").appendChild(newName);
    } else if (contrary.localeCompare(axes[i].ID2)==0) {
      var newName = document.createElement("li");
      newName.style.color = "white";
      if (contr.includes(axes[i].ID1)) {
        newName.innerHTML = axes[i].name;
      } else {
        newName.innerHTML = "?";
      }
      document.getElementById("stats").appendChild(newName);
    }
  }
}
function showAll() {
  for (var i=0; i<axes.length; i++) {
    assignPotID(potentialAxes, axes[i].ID1);
    assignPotID(potentialAxes, axes[i].ID2);
  }
}
function filterFunction() {
  var input = document.getElementById("powerSearch");
  var list = document.getElementById("power");
  var powers = list.getElementsByTagName("option");
  for (i=0; i< power.length; i++) {
    var textValue = powers[i].value;
    if (textValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
      powers[i].style.display = "";
    } else {
      powers[i].style.display = "none";
    }
  }
}