
var htmlContr = new Array(document.getElementsByClassName("contrButton"));

var Light = {
  name: "Light",
  bio: "Though modern science and magic fail to fully explain Light's complete properties, alchemists have identified Light as one of the root properties of the universe."
+" Color statitians classify light's representative color, white, as the combination of all colors."
+"Similarly, it can be said that light as an element is the combination of all elements, thus being both the alpha and omega of elemental abilities.",
  splittable: false
};
var Dark = {
  name: "Dark",
  bio: "Dark, the opposite of Light, gave what many cultures consider to be the Origin Element a contrary to compare with, thus making the element"+
" more of a gradient than an absolute. Dark gives variability to Light. Or Light gives variability to Dark. One cannot vary without the other." +
" As the 'Opposite Element,' Dark represents the absence of Light. The properties are reversed. Their locations are perpendicular in the Lucavi belief structure.",
  splittable: false
};
var Energy = {
  name: "Energy",
  bio: "In its pure form, Energy is action. Energy is movement. Energy is dynamicism. Without Energy, the multiverse would remain stationary in the"+
" forever-present. Forged from the purest of Light, Energy can be thought of as the activity of everything. Masters of Energy are considered the"+
" most powerful of Channelers, as no one has been able to control a layer-0 element, Light or Dark. Energy Channelers are capable of forcing everything to do anything.",
  splittable: false
};
var SpaceTime = {
  name: "Space-Time",
  bio: "Beyond the elements of construction, the first planar element was created upon the First Convergence of Light and Dark. Matter and Energy"+
" occupied the space that was created by Space-Time. Many Space-Times can exist, and currently do. Space-Time has seldom been manipulated"+
" and it is highly encouraged to avoid study involved with it. Magic exists because of our position in Space-Time, and toying with it could lead to the dissolution of magic completely."+
" Space-Time is a duplex element, thought to contain Space and Time within one representative object, Space-Time.",
  splittable: true,
  hiddenContr: "Space -- Time",
  power1: Space = {
    name: "Space",
    bio: "Plane of existence",
    splittable: false},
  power2: Time = {
    name: "Time",
    bio: "Plane of change",
    splittable: false}
};
var Matter = {
  name: "Matter",
  bio: "Matter's domain extends to every existable object on the tangible plane. Light and Dark came to us from intangible planes, and with "+
" their fusion, Matter came into existence as objects with qualities. These were completely stationary in nature until Energy manifested "+
" itself within Matter and forced it to move. Matter Channelers have complete control over what defines an object and its properties.",
  splittable: false
};
var ElectrostaticAttraction = {
  name: "Electrostatic-Attraction",
  bio: "Simplified down to the atomic components, the domain Electromagnetic-Attraction spans to the atomic proton and electron."+
  " As a child element of Energy and Matter, Electrostatic-Attraction can be classified as a force, though more on the transparent, micro level." +
  " Many objects are influenced by Electrostatic-Attraction, despite not having the traditional electric/magnetic properties like conductance. With control over Electrostatic-Attraction, one can make an object a conductor.",
  splittable: false
};
var Force = {
  name: "Force",
  bio: "Force is the umbrella term given to any element that branches from Force or its siblings Gravity and Electrostatic-Attraction." +
  " Many warriors and sages have attempted mastery over Force. While extremely versatile, it is also very dangerous. With so many magicians"+
  " studying Force, there have been many cases where magicians fall to insanity, thought to be caused by Force's high proximity to the original elements." +
  " Others speculate that too much study in Gravity and Electrostatic-Attraction could cause the same insanity, but too few people have mastered either field to conduct any conclusions yet.",
  splittable: true,
  hiddenContr: "Push -- Pull",
  power1: Push = {
    name: "Push",
    bio: "Outward force",
    splittable: false
  },
  power2: Pull = {
    name: "Pull",
    bio: "Inward force",
    splittable: false
  }
};
var Gravity = {
  name: "Gravity",
  bio: "Gravity can be thought of the force acting between macro atoms. The more the Matter, the stronger the Gravity. That is why"+
  " it is thought that Gravity is a combination of Matter and Matter. Gravity has also been recorded to manipulate Time, in some cases." +
  " This speaks to the ever-incredible quality of the elements, and how one could master many things from just one field.",
  splittable: false
};
var Fast = {
  name: "Fast",
  bio: "The act of traveling further in the space dimension than in the time dimension.",
  splittable: false
};
var Slow = {
  name: "Slow",
  bio: "The act of traveling less in the space dimension than in the time dimension.",
  splittable: false
};
var Expand = {
  name: "Expand",
  bio: "Equal and constant force outward (pushing force).",
  splittable: false
};
var Compress = {
  name: "Compress",
  bio: "Equal and constant force inward (pulling force).",
  splittable: false
};
var Visible = {
  name: "Visible",
  bio: "That which can be perceived",
  splittable: false
};
var Obscure = {
  name: "Obscure",
  bio: "That which cannot be observed",
  splittable: false
};
var Shadow = {
  name: "Shadow",
  bio: "A reduction in photons, of sorts",
  splittable: false
};
var Bright = {
  name: "Bright",
  bio: "The incrementation of luminosity",
  splittable: false
};
var Electricity = {
  name: "Electricity",
  bio: "Some say Electricity is the interaction between protons and electrons. Others think it is the work of gods.",
  splittable: false
};
var Teraforming = {
  name: "Teraforming",
  bio: "'The shaping of material', and 'the metamorphosis of planets'",
  splittable: false
};
var Heat = {
  name: "Heat",
  bio: "Represents both the presence and absence of Heat.",
  splittable: true,
  hiddenContr: "Hot -- Cold",
  power1: Hot = {
    name: "Hot",
    bio: "A rush of energy, and the collision of particles.",
    splittable: false
  },
  power2: Cold = {
    name: "Cold",
    bio: "No moving particles, no collisions, but that does not mean no Heat. Heat is always present in all its aspects.",
    splittable: false
  }
};
var Spark = {
  name: "Spark",
  bio: "Electricity's relative. It is decomposible.",
  splittable: true,
  hiddenContr: "Positive -- Negative",
  power1: Positive = {
    name: "Positive",
    bio: "One half of Spark's power.",
    splittable: false
  },
  power2: Negative = {
    name: "Negative",
    bio: "The second half of Spark's power.",
    splittable: false
  }
};
var Invisible = {
  name: "Invisible",
  bio: "Translucence and the ability to allow light waves to pass through that which exists",
  splittable: false
};
var Reflection = {
  name: "Reflection",
  bio: "Reflection specifically refers to the ricochet effect of light waves bouncing off a surface.",
  splittable: false
};
var SnapFreeze = {
  name: "Snap-Freeze",
  bio: "Cold that cuts so deep so quickly, it can shatter material like glass.",
  splittable: false
};
var Freeze = {
  name: "Freeze",
  bio: "Freeze takes material and moves everything in it to a stand still, effectively freezing it solid.",
  splittable: false
};
var Melt = {
  name: "Melt",
  bio: "Melt gradually makes the particles of matter move faster, effectively allowing any material to slide over itself like an ice cube melting.",
  splittable: false
};
var Combustion = {
  name: "Combustion",
  bio: "When particles move too quickly, material spontaneously combusts into a fiery mass until all the particles have shot away from each other and left the original material completely disintegrated.",
  splittable: false
};
var Wind = {
  name: "Wind",
  bio: "Gusts of air represent Wind.",
  splittable: false
};
var Fire = {
  name: "Fire",
  bio: "Fire is just hot Wind.",
  splittable: false
};
var Ice = {
  name: "Ice",
  bio: "Ice is the cruel winter wind solidified into a solid object.",
  splittable: false
};
var Magma = {
  name: "Magma",
  bio: "Earth's bloody pores spill Magma, condensed fire that can be scooped up and held.",
  splittable: false
};
var Plasma = {
  name: "Plasma",
  bio: "Plasma is said to be Fire that behaves like liquid.",
  splittable: false
};
var FlickerFlame = {
  name: "Flicker Flame",
  bio: "A unique element, thought to occur in Fire only when it is first ignited and when it is dying.",
  splittable: true,
  hiddenContr: "Static -- Dynamic",
  power1: Static = {
    name: "Static",
    bio: "Lacking change does not mean lacking existence.",
    splittable: false
  },
  power2: Dynamic = {
    name: "Dynamic",
    bio: "Ever changing, always different.",
    splittable: false
  }
};
var Cloud = {
  name: "Cloud",
  bio: "An airy collection of frost.",
  splittable: false
};
var Ash = {
  name: "Ash",
  bio: "Heavy, dark chucks of what remains after something has been burned.",
  splittable: false
};
var Dust = {
  name: "Dust",
  bio: "Particles separate, but united, by its elemental definition.",
  splittable: false
};
var Smoke = {
  name: "Smoke",
  bio: "Dust in motion, yet united as Smoke",
  splittable: false
};
var Storm = {
  name: "Storm",
  bio: "The gentleness of Cloud twisted into a tumultuous fervor inscribed in Dynamic",
  splittable: false
};
var Fog = {
  name: "Fog",
  bio: "A Cloud, laying still and stopped.",
  splittable: false
};
var WeatherPattern = {
  name: "Weather Pattern",
  bio: "This is the changing of Storm into something new or something old",
  splittable: false
};
var Mist = {
  name: "Mist",
  bio: "Slightly activated Fog.",
  splittable: false
};
var Dew = {
  name: "Dew",
  bio: "Fog that has settled",
  splittable: false
};
var Climate = {
  name: "Climate",
  bio: "Consistency in Storms, the Dynamic form of Clouds over locations.",
  splittable: false
};
var Sound = {
  name: "Sound",
  bio: "Waves that carry sensations perceivable with auditory input.",
  splittable: false
};
var Color = {
  name: "Color",
  bio: "Waves that bring visual stimulation to observers.",
  splittable: false
};
var Absence = {
  name: "Absence",
  bio: "What is not must also be defined, just as the Romans declared 0 for the first time.",
  splittable: false
};
var Presence = {
  name: "Presence",
  bio: "A simple concept, however not the bottom criteria for existence. Presence is just existence within a perceivable zone.",
  splittable: false
};
var Dry = {
  name: "Dry",
  bio: "Arid and lacking Water.",
  splittable: false
};
var Emptiness = {
  name: "Emptiness",
  bio: "When there is nothing present, not even Dust, one can consider it Emptiness",
  splittable: true,
  hiddenContr: "Contained -- Released",
  power1: Contained = {
    name: "Contained",
    bio: "Originally from Emptiness. This aspect of Emptiness represents the Contained side, the side where Emptiness ends.",
    splittable: false
  },
  power2: Released = {
    name: "Released",
    bio: "Originally from Emptiness. This aspect of Emptiness represents the Released side, the side where Emptiness never ends.",
    splittable: false
  }
};
var Earth = {
  name: "Earth",
  bio: "So much Dust that it becomes solid Earth.",
  splittable: false
};
var Water = {
  name: "Water",
  bio: "Wetness, and the high presence of Fog",
  splittable: false
};
var Death = {
  name: "Death",
  bio: "The end to consciousness",
  splittable: false
};
var Life = {
  name: "Life",
  bio: "The beginning of consciousness",
  splittable: false
};
var Order = {
  name: "Order",
  bio: "Following logic and consistency.",
  splittable: false
};
var Chaos = {
  name: "Chaos",
  bio: "Spontanaity and free from reason.",
  splittable: false
};
var Tornado = {
  name: "Tornado",
  bio: "Chaotic Wind with no remorse.",
  splittable: false
};
var Haze = {
  name: "Haze",
  bio: "Slithering, suspicious air.",
  splittable: false
};
var Humidity = {
  name: "Humidity",
  bio: "Air so saturated that it's tangible.",
  splittable: false
};
var FireRain = {
  name: "Fire Rain",
  bio: "Precipitation that's ignited like mini suns.",
  splittable: false
};
var Kamikaze = {
  name: "Kamikaze",
  bio: "Taking a life with another life.",
  splittable: false
};
var IntangibleSpirit = {
  name: "Intangible Spirit",
  bio: "The Life without corpus.",
  splittable: false
};
var Birth = {
  name: "Birth",
  bio: "Making a life with another life.",
  splittable: false
};
var AnimatedHusk = {
  name: "Animated Husk",
  bio: "The corpse without Life.",
  splittable: false
};
var None = {
  name: "None",
  bio: "No varying traits or iterations.",
  splittable: false
};
var Many = {
  name: "Many", 
  bio: "A definitive collection of Many, rife with variation and every iteration imaginable.",
  splittable: false
};
var Vacuum = {
  name: "Vacuum",
  bio: "A heavy Force occurring in the Absence of everything.",
  splittable: false
};
var Pressure = {
  name: "Pressure",
  bio: "A heavy Force occurring in the Presence of Many.",
  splittable: false
};
var Random = {
  name: "Random",
  bio: "Lots of Chaos.",
  splittable: false
};
var Pattern = {
  name: "Pattern",
  bio: "Absolutely no Chaos.",
  splittable: false
};
var Void = {
  name: "Void",
  bio: "Nothing put into Order.",
  splittable: false
};
var Singularity = {
  name: "Singularity",
  bio: "Many things put into Order.",
  splittable: false
};
var Monochrome = {
  name: "Monochrome",
  bio: "No colors, just one Color.",
  splittable: false
};
var Technicolor = {
  name: "Technicolor",
  bio: "Every Color of imagination and beyond.",
  splittable: false
};
var LayeredNoise = {
  name: "Layered Noise",
  bio: "Noise on top of noise. None are similar. All coexist.",
  splittable: false
};
var SingleSound = {
  name: "Single Sound",
  bio: "The universe does not care if Sound comes from one origin or many. If there is no variation, the Sound becomes Single Sound.",
  splittable: false
};
var Sight = {
  name: "Sight",
  bio: "The ability to perceive Color waves.",
  splittable: false
};
var Blind = {
  name: "Blind",
  bio: "The ability to ignore Color.",
  splittable: false
};
var Hearing = {
  name: "Hearing",
  bio: "The ability to perceive Sound waves.",
  splittable: false
};
var Deaf = {
  name: "Deaf",
  bio: "The ability to ignore Sound waves.",
  splittable: false
};
var Image = {
  name: "Image",
  bio: "Color Ordered into a definable Image.",
  splittable: false
};
var Blur = {
  name: "Blur",
  bio: "Color Randomized into a distinguishable Blur.",
  splittable: false
};
var Speech = {
  name: "Speech",
  bio: "Sound Ordered into a recognizable Speech.",
  splittable: false
};
var Noise = {
  name: "Noise",
  bio: "Sound Randomized into a garbled Noise.",
  splittable: false
};
var Present = {
  name: "Present",
  bio: "When there have been no Time instances other than the current one, it is known as Present.",
  splittable: false
};
var Timeline = {
  name: "Timeline",
  bio: "When there have been many Time instances, it is considered a Timeline.",
  splittable: false
};
var Location = {
  name: "Location",
  bio: "Space with no variation.",
  splittable: false
};
var Distance = {
  name: "Distance",
  bio: "Space that is varied from Location to Location.",
  splittable: false
};
var Future = {
  name: "Future",
  bio: "Some part of the Timeline, unknowable.",
  splittable: false
};
var Past = {
  name: "Past",
  bio: "Some part of the Timeline that is reached through Reflection.",
  splittable: false
};
var New = {
  name: "New",
  bio: "An unknowable circumstance in the Present moment.",
  splittable: false
};
var Familiar = {
  name: "Familiar",
  bio: "A revisited experience occurring in the Present.",
  splittable: false
};
var Prediction = {
  name: "Prediction",
  bio: "A single potential moment in the future.",
  splittable: false
};
var Memory = {
  name: "Memory",
  bio: "A single set unchanging moment in the past.",
  splittable: false
};
var Forever = {
  name: "Forever",
  bio: "The unchanging future, never achievable.",
  splittable: false
};
var Continuation = {
  name: "Continuation",
  bio: "A set of many instances that resist change in the past.",
  splittable: false
};
var Expectation = {
  name: "Expectation",
  bio: "A high amount of Predictions that build into an Expectation.",
  splittable: false
};
var Surprise = {
  name: "Surprise",
  bio: "No Prediction means only Surprise.",
  splittable: false
};
var Experience = {
  name: "Experience",
  bio: "A large amount of Memories creates an Experience.",
  splittable: true,
  hiddenContr: "Thought -- Action",
  power1: Thought = {
    name: "Thought",
    bio: "The intangible half resulting from and contributing to an Experience.",
    splittable: false
  },
  power2: Action = {
    name: "Action",
    bio: "The exterior half resulting from and contributing to an Experience.",
    splittable: false
  }
};
var BlankSlate = {
  name: "Blank Slate",
  bio: "Definable by it's opposite, Blank Slate is the complete lack of Experience. It is openness and naivity purely.",
  splittable: false
};
var Unawareness = {
  name: "Unawareness",
  bio: "An entity lacking experience.",
  splittable: false
};
var Consciousness = {
  name: "Consciousness",
  bio: "Life and experience forming an ever-changing event carrynig wisdom.",
  splittable: false
};
var Rebirth = {
  name: "Rebirth",
  bio: "The potential to be Unaware after Death.",
  splittable: false
};
var Reincarnation = {
  name: "Reincarnation",
  bio: "The potential to retain Experiences after Death.",
  splittable: false
};
var Unfamiliarity = {
  name: "Unfamiliarity",
  bio: "A cognizant lack of knowledge. The strangeness does not come from a lack of knowledge, it comes from a lack of experience.",
  splittable: false
};
var Unknown = {
  name: "Unknown",
  bio: "The Unknown is preserved through its impossibility to be experienced.",
  splittable: false
};
var Empathy = {
  name: "Empathy",
  bio: "Seeking that which relates, despite direct ties.",
  splittable: false
};
var Sympathy = {
  name: "Sympathy",
  bio: "Finding similarity because the Experience is shared between entities.",
  splittable: false
};
var Home = {
  name: "Home",
  bio: "A distinguishable place, with no iterations, that surrounds an entity with Sympathy and Familiarity.",
  splittable: false
};
var Lost = {
  name: "Lost",
  bio: "An unwavering sense of not belonging.",
  splittable: false
};
var Culture = {
  name: "Culture",
  bio: "The pleasure of Sympathy from a wide variety of sources.",
  splittable: false
};
var Foreign = {
  name: "Foreign",
  bio: "The struggle to find something familiar, spanning across Many occasions.",
  splittable: false
};
var Wiped = {
  name: "Wiped",
  bio: "Describing something completely destroyed from all sources.",
  splittable: false
};
var Erased = {
  name: "Erased",
  bio: "Describing something eliminated from a single source.",
  splittable: false
};
var Shared = {
  name: "Shared",
  bio: "A single trait spread across Many variations.",
  splittable: false
};
var Individual = {
  name: "Individual",
  bio: "Some single thing that does not vary enough to distinguish it as a separate entity.",
  splittable: false
};
var Collaboration = {
  name: "Collaboration",
  bio: "An Action Shared between many entities.",
  splittable: false
};
var Act = {
  name: "Act",
  bio: "A single Action resulting from an Individual.",
  splittable: false
};
var Idea = {
  name: "Idea",
  bio: "A single Thought originating from an Individual.",
  splittable: false
};
var Language = {
  name: "Language",
  bio: "A Language consists more than just words, it is verbal and nonverbal thoughts being passed from one entity to another as communication.",
  splittable: false
};
var axes = [ 
{
  name: "Light -- Dark ++ Light -- Dark",
	ID1: "Light -- Dark",
	ID2: "Light -- Dark",
	parent: "none",
	children: ["Energy -- Matter"],
	layer: 0,
        //left diagonal, right diagonal, top, bottom, left, right
	graph: [1,1,0,0,0,0],
          //clockwise, starting at 12
	powers: [Light, Energy, Light, SpaceTime, Dark, Matter, Dark, SpaceTime],
},
{
  name: "Energy -- Matter ++ Energy -- Matter",
	ID1: "Energy -- Matter",
	ID2: "Energy -- Matter",
	parent: "ldld",
	children: ["Electrostatic-Attraction -- Gravity"],
	layer: 1,
	graph: [1,1,0,0,0,0],
	powers: [Energy, ElectrostaticAttraction, Energy, Force, Matter, Gravity, Matter, Force]
},
{
  name: "Push -- Pull ++ Space -- Time",
  ID1: "Push -- Pull",
  ID2: "Space -- Time",
  parent: "ldld",
  children: ["Compress -- Expand", "Fast -- Slow"],
  layer: 1,
  graph: [0,0,0,0,1,1],
  powers: [Push, Fast, Time, Slow, Pull, Expand, Space, Compress]
},
{
  name: "Compress -- Expand ++ Light -- Dark",
  ID1: "Compress -- Expand",
  ID2: "Light -- Dark",
  parent: "none",
  children: ["Bright -- Shadow", "Visible -- Obscure"],
  layer: 0,
  graph: [0,0,0,0,1,1],
  powers: [Light, Visible, Expand, Obscure, Dark, Shadow, Compress, Bright]
},
{
  name: "Push -- Pull ++ Energy -- Matter",
  ID1: "Push -- Pull",
  ID2: "Energy -- Matter",
  parent: "ldld",
  children: ["Electricity -- Teraforming"],
  layer: 1,
  graph: [0,0,1,1,0,0],
  powers: [Push, Electricity, Energy, Electricity, Pull, Teraforming, Matter, Teraforming]
},
{
  name: "Electricity -- Teraforming ++ Visible -- Obscure",
  ID1: "Electricity -- Teraforming",
  ID2: "Visible -- Obscure",
  parent: "celd",
  children: ["Spark -- Heat", "Reflection -- Invisible"],
  layer: 1,
  graph: [0,0,1,1,0,0],
  powers: [Electricity, Heat, Obscure, Invisible, Teraforming, Reflection, Visible, Spark]
},
{
  name: "Hot -- Cold ++ Fast -- Slow",
  ID1: "Hot -- Cold",
  ID2: "Fast -- Slow",
  parent: "ppem",
  children: ["Combusion -- Snap-Freeze", "Snap-Freeze -- Freeze", "Melt -- Combustion", "Melt -- Freeze"],
  layer: 2,
  graph: [0,0,1,1,1,1],
  powers: [Fast, SnapFreeze, Cold, Freeze, Slow, Melt, Hot, Combustion]
},
{
  name: "Energy -- Matter ++ Hot -- Cold",
  ID1: "Energy -- Matter",
  ID2: "Hot -- Cold",
  parent: "ldld",
  children: ["Fire -- Wind", "Magma -- Ice"],
  layer: 1,
  graph: [0,0,1,1,0,0,],
  powers: [Energy, Wind, Cold, Ice, Matter, Magma, Hot, Fire]
},
{
  name: "Magma -- Ice ++ Fire -- Wind",
  ID1: "Magma -- Ice",
  ID2: "Fire -- Wind",
  parent: "emhc",
  children: ["Ash -- Cloud"],
  layer: 2, 
  graph: [0,0,0,0,1,0],
  powers: [Magma, Plasma, Fire, FlickerFlame, Ice, Cloud, Wind, Ash]
},
{
  name: "Static -- Dynamic ++ Ash -- Cloud",
  ID1: "Static -- Dynamic",
  ID2: "Ash -- Cloud",
  parent: "mifw",
  children: ["Fog -- Storm", "Fog -- Dust", "Dust -- Smoke"],
  layer: 3,
  graph: [0,0,1,0,1,1],
  powers: [Static, Dust, Ash, Smoke, Dynamic, Storm, Cloud, Fog]
},
{
  name: "Static -- Dynamic ++ Fog -- Smoke",
  ID1: "Static -- Dynamic",
  ID2: "Fog -- Smoke",
  parent: "mifw",
  children: ["Dew -- Mist", "Climate -- Weather Pattern"],
  layer: 3,
  graph: [0,0,1,1,0,0],
  powers: [Storm, WeatherPattern, Dynamic, Mist, Fog, Dew, Static, Climate]
},
{
  name: "Energy -- Matter ++ Visible -- Obscure",
  ID1: "Energy -- Matter",
  ID2: "Visible -- Obscure",
  parent: "ldld",
  children: ["Sound -- Color", "Presence -- Absence"],
  layer: 1,
  graph: [0,0,1,1,0,0],
  powers: [Energy, Sound, Obscure, Absence, Matter, Presence, Visible, Color]
},
{
  name: "Fog -- Dust ++ Presence -- Absence",
  ID1: "Fog -- Dust",
  ID2: "Presence -- Absence",
  parent: "emvo",
  children: ["Water -- Earth", "Water -- Dry"],
  layer: 2,
  graph: [0,0,1,0,1,0],
  powers: [Fog, Dry, Absence, Emptiness, Dust, Earth, Presence, Water]
},
{
  name: "Static -- Dynamic ++ Contained -- Released",
  ID1: "Static -- Dynamic",
  ID2: "Contained -- Released",
  parent: "flicker flame",
  children: ["Order -- Chaos", "Life -- Death"],
  layer: 4,
  graph: [1,1,0,0,0,0],
  powers: [Static, Death, Released, Chaos, Dynamic, Life, Contained, Order]
},
{
  name: "Fog -- Storm ++ Fire -- Wind",
  ID1: "Fog -- Storm",
  ID2: "Fire -- Wind",
  parent: "emhc",
  children: [],
  layer: 2,
  graph: [0,0,0,0,0,0],
  powers: [Storm, Tornado, Wind, Haze, Fog, Humidity, Fire, FireRain]
},
{
  name: "Life -- Death ++ Life -- Death",
  ID1: "Life -- Death",
  ID2: "Life -- Death",
  parent: "sdcr",
  children: ["Animated Husk -- Intangible Spirit", "Kamikaze -- Birth"],
  layer: 5,
  graph: [0,0,0,0,1,1],
  powers: [Death, Kamikaze, Death, IntangibleSpirit, Life, Birth, Life, AnimatedHusk]
}, 
{
  name: "Contained -- Released ++ Presence -- Absence",
  ID1: "Contained -- Released",
  ID2: "Presence -- Absence",
  parent: "emvo",
  children: ["Many -- None", "Pressure -- Vacuum"],
  layer: 2,
  graph: [0,0,1,1,0,0],
  powers: [Contained, None, Absence, Vacuum, Released, Pressure, Presence, Many]
},
{
  name: "Many -- None ++ Order -- Chaos",
  ID1: "Many -- None",
  ID2: "Order -- Chaos",
  parent: "crpa",
  children: ["Singularity -- Void", "Random -- Pattern"],
  layer: 3,
  graph: [0,0,0,0,1,1],
  powers: [Many, Random, Chaos, Pattern, None, Void, Order, Singularity]
},
{
  name: "Sound -- Color ++ Many -- None",
  ID1: "Sound -- Color",
  ID2: "Many -- None",
  parent: "hcfs",
  children: ["Technicolor -- Monochrome", "Layered Noise -- Single Sound"],
  layer: 3,
  graph: [0,0,1,1,0,0],
  powers: [Color, Monochrome, None, SingleSound, Sound, LayeredNoise, Many, Technicolor]
},
{
  name: "Sound -- Color ++ Presence -- Absence",
  ID1: "Sound -- Color",
  ID2: "Presence -- Absence",
  parent: "hcfs",
  children: ["Sight -- Blind", "Hearing -- Deaf"],
  layer: 3,
  graph: [0,0,1,1,0,0],
  powers: [Color, Blind, Absence, Deaf, Sound, Hearing, Presence, Sight]
},
{
  name: "Sound -- Color ++ Random -- Pattern",
  ID1: "Sound -- Color",
  ID2: "Random -- Pattern",
  parent: "hcfs",
  children: ["Blur -- Image", "Noise -- Speech"],
  layer: 3,
  graph: [0,0,1,1,0,0],
  powers: [Color, Image, Pattern, Speech, Sound, Noise, Random, Blur]
},
{
  name: "Space -- Time ++ Many -- None",
  ID1: "Space -- Time",
  ID2: "Random -- Pattern",
  children: ["Distance -- Location", "Timeline -- Present"],
  layer: 3,
  graph: [0,0,0,0,1,1],
  powers: [Many, Timeline, Time, Present, None, Location, Space, Distance]
},
{
  name: "Reflection -- Invisible ++ Timeline -- Present",
  ID1: "Reflection -- Invisible",
  ID2: "Timeline -- Present",
  children: ["Past -- Future", "Familiar -- New"],
  layer: 2,
  graph: [0,0,1,1,0,0],
  powers: [Timeline, Future, Invisible, New, Present, Familiar, Reflection, Past]
},
{
  name: "Static -- Dynamic ++ Past -- Future",
  ID1: "Static -- Dynamic",
  ID2: "Past -- Future",
  children: ["Memory -- Prediction", "Continuation -- Forever"],
  layer: 4,
  graph: [0,0,1,1,0,0],
  powers: [Dynamic, Prediction, Future, Forever, Static, Continuation, Past, Memory]
},
{
  name: "Many -- None ++ Memory -- Prediction",
  ID1: "Many -- None",
  ID2: "Memory -- Prediction",
  children: ["Expectation -- Surprise", "Experience -- Blank Slate"],
  layer: 3,
  graph: [0,0,0,0,1,1],
  powers: [Many, Expectation, Prediction, Surprise, None, BlankSlate, Memory, Experience]
},
{
  name: "Experience -- Blank Slate ++ Life -- Death",
  ID1: "Experience -- Blank Slate",
  ID2: "Life -- Death",
  children: ["Consciousness -- Unawareness", "Rebirth -- Reincarnation"],
  layer: 4,
  graph: [0,0,1,1,0,0],
  powers: [Life, Unawareness, BlankSlate, Rebirth, Death, Reincarnation, Experience, Consciousness]
},
{
  name: "Consciousness -- Unawareness ++ Familiar -- New",
  ID1: "Consciousness -- Unawareness",
  ID2: "Familiar -- New",
  children: ["Sympathy -- Unknown", "Sympath -- Empathy", "Sympathy -- Unfamiliarity", "Empathy -- Unfamiliarity", "Unfamiliarity -- Unknown"],
  layer: 3,
  graph: [1,1,1,0,1,1],
  powers: [Consciousness, Unfamiliarity, New, Unknown, Unawareness, Empathy, Familiar, Sympathy]
},
{
  name: "Sympathy -- Unfamiliarity ++ Many -- None",
  ID1: "Sympathy -- Unfamiliarity",
  ID2: "Many -- None",
  children: ["Foreign -- Culture", "Home -- Lost"],
  layer: 3, 
  graph: [0,0,0,0,1,1],
  powers: [Sympathy, Home, None, Lost, Unfamiliarity, Foreign, Many, Culture]
},
{
  name: "Many -- None ++ Singularity -- Void",
  ID1: "Many -- None",
  ID2: "Singularity -- Void",
  children: ["Shared -- Individual", "Erased -- Wiped"],
  layer: 3,
  graph: [0,0,0,0,1,1],
  powers: [Many, Wiped, Void, Erased, None, Individual, Singularity, Shared]
},
{
  name: "Shared -- Individual ++ Thought -- Action",
  ID1: "Shared -- Individual",
  ID2: "Thought -- Action",
  children: ["Idea -- Act", "Collaboration -- Act"],
  layer: 4,
  graph: [0,0,0,1,0,1],
  powers: [Shared, Collaboration, Action, Act, Individual, Idea, Thought, Language]
}
  ];
/*
/*var csmn = {
  ID1: "cs",
  ID2: "mn",
  parent: "*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    if (textValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
      powers[i].style.display = "";
    } else {
      powers[i].style.display = "none";
    }
  }
}