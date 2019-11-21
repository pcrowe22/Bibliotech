
var htmlContr = document.getElementsByClassName("contrButton");
//these lists are synced

var ldld = {
	ID1: "ld",
	ID2: "ld",
	parent: "none",
	children: ["em", "space-time"],
	layer: "0",
	graph: "rd_ld",
	p1: "Light",
	p2: "Energy",
	p3: "Light",
	p4: "Space-Time",
	p5: "Dark",
	p6: "Matter",
	p7: "Dark",
	p8: "Space-time"
};
var emem = {
	ID1: "em",
	ID2: "em",
	parent: "ldld",
	children: ["eg", "force"],
	layer: "1",
	graph: "rd_ld",
	p1: "Energy",
	p2: "Electrostatic Attraction",
	p3: "Energy",
	p4: "Force", 
	p5: "Matter",
	p6: "Gravity",
	p7: "Matter",
	p8: "Force"
};
var ppst = {
	ID1: "pp",
	ID2: "st",
	parent: "ldld",
	children: ["ce", "fs"],
	layer: "1",
	graph: "rb_lb",
	p1: "Push",
	p2: "Fast",
	p3: "Time",
	p4: "Slow",
	p5: "Pull",
	p6: "Expand",
	p7: "Space",
	p8: "Compress"
};
var celd = {
	ID1: "ce",
	ID2: "ld",
	parent: "none",
	children: ["bs", "vo"],
	layer: "0",
	graph: "rb_lb",
	p1: "Light",
	p2: "Visible",
	p3: "Expand",
	p4: "Obscure",
	p5: "Dark",
	p6: "Shadow",
	p7: "Compress",
	p8: "Bright"
};
var ppem = {
	ID1: "pp",
	ID2: "em",
	parent: "ldld",
	children: ["et"],
	layer: "1",
	graph: "rb_lb",
	p1: "Push",
	p2: "Electricity**",
	p3: "Energy",
	p4: "Electricity**",
	p5: "Pull",
	p6: "Teraforming*",
	p7: "Matter",
	p8: "Teraforming*"
};
var etvo = {
	ID1: "et",
	ID2: "vo",
	parent: "celd",
	children: ["sh", "ri"],
	layer: "1",
	graph: "tb_bb",
	p1: "Electricity",
	p2: "Heat",
	p3: "Obscure",
	p4: "Invisible",
	p5: "Teraforming",
	p6: "Reflection",
	p7: "Visible",
	p8: "Spark"
};
var hcfs = {
	ID1: "hc",
	ID2: "fs",
	parent: "ppem",
	children: ["cs", "sf", "mc", "mf"],
	layer: "2",
	graph: "rb_tb_lb_bb",
	p1: "Fast",
	p2: "Snap-Freeze",
	p3: "Cold",
	p4: "Freeze",
	p5: "Slow", 
	p6: "Melt",
	p7: "Hot",
	p8: "Combustion"
};
var emhc = {
	ID1: "em",
	ID2: "hc",
	parent: "ldld",
	children: ["fw", "mi"],
	layer: "1",
	graph: "tb_bb",
	p1: "Energy",
	p2: "Wind",
	p3: "Cold",
	p4: "Ice",
	p5: "Matter",
	p6: "Magma",
	p7: "Hot",
	p8: "Fire"
};
var mifw = {
	ID1: "mi",
	ID2: "fw",
	parent: "emhc", 
	children: ["ac", "plasma", "flicker flame"],
	layer: "2",
	graph: "lb",
	p1: "Magma",
	p2: "Plasma",
	p3: "Fire",
	p4: "Flicker Flame",
	p5: "Ice",
	p6: "Clouds",
	p7: "Winds",
	p8: "Ash"
};
var sdac = {
	ID1: "sd",
	ID2: "ac",
	parent: "mifw",
	children: ["FogS", "FogD", "ds"],
	layer: "3",
	graph: "rb_tb_lb",
	p1: "Static",
	p2: "Dust",
	p3: "Ash",
	p4: "Smoke",
	p5: "Dynamic",
	p6: "Storm",
	p7: "Clouds",
	p8: "Fog"
};
var sdFogS = {
	ID1: "sd",
	ID2: "FogS",
	parent: "mifw",
	children: ["dm", "cw"],
	layer: "3",
	graph: "tb_bb",
	p1: "Storm",
	p2: "Weather Pattern",
	p3: "Dynamic",
	p4: "Mist",
	p5: "Fog",
	p6: "Dew",
	p7: "Static",
	p8: "Climate"
};

var emvo = {
	ID1: "em",
	ID2: "vo",
	parent: "ldld",
	layer: "1",
	children: ["sc", "pa"],
	graph: "tb_bb",
	p1: "Energy",
	p2: "Sound",
	p3: "Obscure",
	p4: "Absence",
	p5: "Matter",
	p6: "Presence",
	p7: "Visible",
	p8: "Color"
};
var FogDpa = {
	ID1: "FogD",
	ID2: "pa",
	parent: "emvo",
	layer: "2",
	children: ["we", "wd", "emptiness"],
	graph: "lb_tb",
	p1: "Fog",
	p2: "Dry",
	p3: "Absence",
	p4: "Emptiness",
	p5: "Dust",
	p6: "Earth",
	p7: "Presence",
	p8: "Water"
};
var sdcr = {
	ID1: "sd",
	ID2: "cr",
	parent: "flicker flame",
	layer: "4",
	children: ["oc", "LifeD"],
	graph: "ld_rd",
	p1: "Static",
	p2: "Death",
	p3: "Released",
	p4: "Chaos",
	p5: "Dynamic",
	p6: "Life",
	p7: "Contained",
	p8: "Order"
};
var FogSfw = {
	ID1: "FogS",
	ID2: "fw",
	parent: "emhc",
	layer: "2",
	children: ["fire rain", "tornado", "haze", "humidity"],
	graph: "none",
	p1: "Storm",
	p2: "Tornado",
	p3: "Wind",
	p4: "Haze",
	p5: "Fog",
	p6: "Humidity",
	p7: "Fire",
	p8: "Fire Rain"
};
var LifeDLifeD = {
	ID1: "LifeD",
	ID2: "LifeD",
	parent: "sdcr",
	layer: "5",
	children: ["ai", "kb"],
	graph: "ld_rd",
	p1: "Death",
	p2: "Kamikaze",
	p3: "Death",
	p4: "Intangible Spirit",
	p5: "Life",
	p6: "Birth",
	p7: "Life",
	p8: "Animated Husk"
};
var crpa = {
	ID1: "cr",
	ID2: "pa",
	parent: "emvo",
	layer: "2",
	children: ["mn", "pv"],
	graph: "tb_bb",
	p1: "Contained",
	p2: "None",
	p3: "Absence",
	p4: "Vacuum",
	p5: "Released",
	p6: "Pressure",
	p7: "Presence",
	p8: "Many"
};
var mnoc = {
	ID1: "mn",
	ID2: "oc",
	parent: "crpa",
	layer: "3",
	children: ["sv", "rp"],
	graph: "rb_lb",
	p1: "Many",
	p2: "Random",
	p3: "Chaos",
	p4: "Pattern",
	p5: "None",
	p6: "Void",
	p7: "Order",
	p8: "Singularity"
};
var scmn = {
	ID1: "sc",
	ID2: "mn",
	parent: "hcfs",
	layer: "3",
	children: ["tm", "ls"],
	graph: "tb_bb",
	p1: "Color",
	p2: "Monochrome",
	p3: "None",
	p4: "Single Sound",
	p5: "Sound",
	p6: "Layered Noise",
	p7: "Many",
	p8: "Technicolor"
};
var scpa = {
	ID1: "sc",
	ID2: "pa",
	parent: "hcfs",
	layer: "3",
	children: ["sb", "hd"],
	graph: "tb_bb",
	p1: "Color",
	p2: "Blind",
	p3: "Absence",
	p4: "Deaf",
	p5: "Sound",
	p6: "Hearing",
	p7: "Presence",
	p8: "Sight"
};
var scrp = {
	ID1: "sc",
	ID2: "rp",
	parent: "hcfs",
	layer: "3",
	children: ["bi", "ns"],
	graph: "tb_bb",
	p1: "Color",
	p2: "Image",
	p3: "Pattern",
	p4: "Speech",
	p5: "Sound",
	p6: "Noise",
	p7: "Random",
	p8: "Blur"
};
var stmn = {
	ID1: "st",
	ID2: "mn",
	parent: "space-time",
	layer: "3",
	children: ["dl", "tp"],
	graph: "lb_rb",
	p1: "Many",
	p2: "Timeline",
	p3: "Time",
	p4: "Present",
	p5: "None",
	p6: "Location",
	p7: "Space",
	p8: "Distance"
};
var ritp = {
	ID1: "ri",
	ID2: "tp",
	parent: "celd",
	layer: "2",
	children: ["pf", "fn"],
	graph: "tb_bb",
	p1: "Timeline",
	p2: "Future",
	p3: "Invisible",
	p4: "New",
	p5: "Present",
	p6: "Familiar",
	p7: "Reflection",
	p8: "Past"
};
var sdpf = {
	ID1: "sd",
	ID2: "pf",
	parent: "flicker flame",
	layer: "4",
	children: ["mp", "cf"],
	graph: "tb_bb",
	p1: "Dynamic",
	p2: "Prediction",
	p3: "Future",
	p4: "Forever",
	p5: "Static",
	p6: "Continuation",
	p7: "Past",
	p8: "Memory"
};
var mnmp = {
	ID1: "mn",
	ID2: "mp",
	parent: "crpa",
	layer: "3",
	children: ["eb", "es"],
	graph: "rb_lb",
	p1: "Many",
	p2: "Expectation",
	p3: "Prediction",
	p4: "Surprise",
	p5: "None",
	p6: "Blank Slate",
	p7: "Memory",
	p8: "Experience"
};
var ebLifeD = {
	ID1: "eb",
	ID2: "LifeD",
	parent: "mnmp",
	layer: "4",
	children: ["cu", "rr"],
	graph: "tb_bb",
	p1: "Life",
	p2: "Unawareness",
	p3: "Blank Slate",
	p4: "Rebirth",
	p5: "Death",
	p6: "Reincarnation",
	p7: "Experience",
	p8: "Consciousness"
};
var cufn = {
	ID1: "cu",
	ID2: "fn",
	parent: "ritp",
	layer: "3",
	children: ["su", "se", "eu", "uu"],
	graph: "tb_lb_rd_rb",
	p1: "Consciousness",
	p2: "Unfamiliarity",
	p3: "New",
	p4: "Unknown",
	p5: "Unawareness",
	p6: "Empathy",
	p7: "Familiar",
	p8: "Sympathy"
};
var sumn = {
	ID1: "su",
	ID2: "mn",
	parent: "crpa",
	layer: "3",
	children: ["fc", "hl"],
	graph: "rb_lb",
	p1: "Sympathy",
	p2: "Home",
	p3: "None",
	p4: "Lost", 
	p5: "Unfamiliarity",
	p6: "Foreign",
	p7: "Many", 
	p8: "Culture"
};
var mnsv = {
	ID1: "mn",
	ID2: "sv",
	parent: "crpa",
	layer: "3",
	children: ["si", "ew"],
	graph: "rb_lb",
	p1: "Many",
	p2: "Wiped",
	p3: "Void",
	p4: "Erased",
	p5: "None",
	p6: "Individual",
	p7: "Singularity",
	p8: "Shared"
};
var sita = {
	ID1: "si",
	ID2: "ta",
	parent: "mnsv",
	layer: "4",
	children: ["ia", "ca"],
	graph: "bb_rb",
	p1: "Shared",
	p2: "Collaboration",
	p3: "Action",
	p4: "Act",
	p5: "Individual",
	p6: "Idea",
	p7: "Thought",
	p8: "Language"
};

var contr=["ld", "em", "st", "pp", "ce", "fs", "et", "bs", "vo", "hc", "pn", "sh", "ri", "cs", "sf", "mc", "mf", "fw", "mi", "ac", "sd", 
"FogS", "FogD", "ds", "dm", "cw", "sc", "pa", "we", "wd", "cr", "oc", "LifeD",
"ai", "kb", "mn", "pv", "sv", "rp", "tm", "ls", "sb", "hd", "bi", "ns", "dl", "tp",
"pf", "fn", "mp", "cf", "eb", "es", "cu", "rr", "su", "se", "eu", "uu", "fc", "hl", "ta", "si",
"ew", "ia", "ca"];
var axes = [ldld, emem, ppst, celd, ppem, etvo, hcfs, emhc, mifw, sdac, sdFogS, 
emvo, FogDpa, sdcr, FogSfw, LifeDLifeD, crpa, mnoc, scmn, scpa, scrp, stmn, ritp,
sdpf, mnmp, ebLifeD, cufn, sumn, mnsv]; 
var strAxes = ["ldld", "emem", "ppst", "celd", "ppem", "etvo", "hcfs", "emhc", "mifw", "sdac", "sdFogS",
"emvo", "FogDpa", "sdcr", "FogSfw", "LifeDLifeD", "crpa", "mnoc", "scmn", "scpa", "scrp", "stmn", "ritp", 
"sdpf", "mnmp", "ebLifeD", "cufn", "sumn", "mnsv"];

document.getElementById("power").options[0].setAttribute("info", 
"Though modern science and magic fail to fully explain Light's complete properties, alchemists have identified Light as one of the root properties of the universe."
+" Color statitians classify light's representative color, white, as the combination of all colors."
+"Similarly, it can be said that light as an element is the combination of all elements, thus being both the alpha and omega of elemental abilities.");

var circles = document.getElementById("dots");
var circtx = circles.getContext("2d");
circtx.strokeStyle = "green";
circtx.beginPath();
circtx.arc(25,25,10,0,2*Math.PI);
circtx.fillStyle = "green";


var c = document.getElementById("Can");
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

function drawContraries(newAxes){
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,500,500);
	drawvert();
	drawhor();
	
	  if (newAxes.graph.includes("ld")==true){
        drawld();
      }
      if (newAxes.graph.includes("rd")==true){
      drawrd();
      }
      if (newAxes.graph.includes("tb")==true){
      drawtb();
      }
      if (newAxes.graph.includes("bb")==true){
      drawbb();
      }
      if (newAxes.graph.includes("rb")==true){
      drawrb();
      }
      if (newAxes.graph.includes("lb")==true){
      drawlb();
      }

	 document.getElementById('yp').innerHTML=newAxes.p1;
	 document.getElementById('q1').innerHTML=newAxes.p2;
	 document.getElementById('xp').innerHTML=newAxes.p3;
	 document.getElementById('q4').innerHTML=newAxes.p4;
	 document.getElementById('yn').innerHTML=newAxes.p5;
	 document.getElementById('q3').innerHTML=newAxes.p6;
	 document.getElementById('xn').innerHTML=newAxes.p7;
	 document.getElementById('q2').innerHTML=newAxes.p8;
}

var potentialAxes={ID1: "none",
	ID2: "none",
	parent: "none",
	layer: "none",
	graph: "none",
	p1: "none",
	p2: "none",
	p3: "none",
	p4: "none",
	p5: "none",
	p6: "none",
	p7: "none",
	p8: "none"
};
function assignPotID(potAxes, contrary){
	if (potentialAxes.ID1=="None"){
		potentialAxes.ID1=contrary;
		circtx.clearRect(0,0,100,50);
		circtx.stroke();
	} else if (potentialAxes.ID2=="None"){
		potentialAxes.ID2=contrary;
		var dispAxes=chooseAxes(potentialAxes);
		drawContraries(dispAxes);
	    circtx.fill();
	} else {
		potentialAxes.ID1=contrary;
		potentialAxes.ID2="None";
		circtx.clearRect(0,0,100,50);
		circtx.stroke();

	}
}
function chooseAxes(potAxes){
	var newAxes={ID1: "none",
	ID2: "none",
	parent: "none",
	layer: "none",
	graph: "none",
	p1: "none",
	p2: "none",
	p3: "none",
	p4: "none",
	p5: "none",
	p6: "none",
	p7: "none",
	p8: "none"
	};

	for (var i=0; i<strAxes.length; i++){
		if ((strAxes[i].startsWith(potentialAxes.ID1)&&strAxes[i].endsWith(potentialAxes.ID2))
		|| (strAxes[i].startsWith(potentialAxes.ID2)&&strAxes[i].endsWith(potentialAxes.ID1))){		//verifies that the potential axes do exist within the list of axes
			newAxes=axes[i];
			for (var i=0; i<contr.length; i++){				//goes through list of all contraries
				if (newAxes.children.includes(contr[i])){		//checks to see if the contrary is also a child
					htmlContr[i].style.display = "block";						//if it is, display the corresponding button
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p1.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";

				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p2.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p3.toLowerCase()){
					if (document.getElementById("power").options[j].style.display == "none"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p4.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p5.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p6.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p7.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			for (var j=0; j<document.getElementById("power").length; j++){
				if (document.getElementById("power").options[j].value == newAxes.p8.toLowerCase()){
					if (document.getElementById("power").options[j].style.display!="block"){
						document.getElementById("discovery").play();
					}
					document.getElementById("power").options[j].style.display = "block";
				}
			}
			return newAxes;
			
		} else {
			newAxes.graph = "None";
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
	var att1 = document.getElementById("power").options[document.getElementById("power").selectedIndex].getAttribute("e1");
	var att2 = document.getElementById("power").options[document.getElementById("power").selectedIndex].getAttribute("e2");
	var sCont = document.getElementById("power").options[document.getElementById("power").selectedIndex].getAttribute("selectCont");
	document.getElementById("s1").innerHTML=att1;
	document.getElementById("s2").innerHTML=att2;
	if (att1!=null){
		drawsimp();
		for (var i=0; i<contr.length; i++){				//goes through list of all contraries
			if (sCont.includes(contr[i])){		//checks to see if the contrary is also the simplified contrary
				if (htmlContr[i].style.display!="block"){
					document.getElementById("discovery").play();
				}
				htmlContr[i].style.display = "block";					
			}
		}
		for (var j=0; j<document.getElementById("power").length; j++){
			if (document.getElementById("power").options[j].value == att1.toLowerCase()){
				if (document.getElementById("power").options[j].style.display!="block"){
					document.getElementById("discovery").play();
				}
				document.getElementById("power").options[j].style.display = "block";
			}
		}
		for (var j=0; j<document.getElementById("power").length; j++){
			if (document.getElementById("power").options[j].value == att2.toLowerCase()){
				if (document.getElementById("power").options[j].style.display!="block"){
					document.getElementById("discovery").play();
				}
				document.getElementById("power").options[j].style.display = "block";
			}
		}
	}
	document.getElementById("elementTitle").innerHTML=document.getElementById("power").options[document.getElementById("power").selectedIndex].value;
	document.getElementById("elementInfo").innerHTML=document.getElementById("power").options[document.getElementById("power").selectedIndex].getAttribute("info");
}