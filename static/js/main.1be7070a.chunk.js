(window["webpackJsonpapex-legend"]=window["webpackJsonpapex-legend"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(8),r=t.n(o),s=(t(15),t(1)),l=t(2),d=t(4),c=t(3),m=t(5),h=(t(16),t(9)),p=t(6),u=(t(17),t(18),t(19),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).handleClick=function(e){t.props.changeScreenState(e)},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.className,n=(a.imageURL,a.children);return i.a.createElement("li",{className:t,onClick:function(){return e.handleClick(n)}},i.a.createElement("h1",{className:"category__heading"},n))}}]),a}(n.Component)),g=(n.Component,t(20),t(21),t(22),function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.legend,n=(a.updateHoverState,a.legendClass);return i.a.createElement("li",{className:"Legend",onClick:function(){return e.props.updateHoverState(t.name)}},i.a.createElement("img",{className:"thumbnail",src:t.thumbnailURL,alt:""}),i.a.createElement("div",{className:"shadow"}),i.a.createElement("img",{className:n,src:t.altThumbnailURL,alt:""}),"-")}}]),a}(n.Component)),y=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a=this.props,t=a.legends,n=a.updateHoverState,o=a.hover;return i.a.createElement("ul",{className:"LegendsList"},t.map(function(a){return o==a.name?(e="thumbnail-hover thumbnail-click",i.a.createElement(g,{updateHoverState:n,legend:a,legendClass:e})):(e="thumbnail-hover",i.a.createElement(g,{updateHoverState:n,legend:a,legendClass:e}))}))}}]),a}(n.Component),b=(t(23),t(24),t(25),function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.legend;return i.a.createElement("div",{className:"Bio"},i.a.createElement("div",{className:"Bio__section"},i.a.createElement("h3",{className:"Bio__heading"},"Real Name"),i.a.createElement("p",{className:"Bio__text"},e.bio["Real Name"])),i.a.createElement("div",{className:"Bio__section"},i.a.createElement("h3",{className:"Bio__heading"},"Age"),i.a.createElement("p",{className:"Bio__text"},e.bio.Age)),i.a.createElement("div",{className:"Bio__section"},i.a.createElement("h3",{className:"Bio__heading"},"Home World"),i.a.createElement("p",{className:"Bio__text"},e.bio["Home World"])))}}]),a}(n.Component)),f=(t(26),t(27),function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.type,t=e.name,n=e.description,o=e.image;return i.a.createElement("div",{className:"Ability"},i.a.createElement("h1",{className:"Ability__type"},a),i.a.createElement("img",{className:"Ability__image",src:o,alt:""}),i.a.createElement("h2",{className:"Ability__name"},t),i.a.createElement("p",{className:"Ability__description"},n))}}]),a}(n.Component)),v=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.legend;return i.a.createElement("div",{className:"Abilities"},e.abilities.map(function(e){return i.a.createElement(f,{type:e.type,name:e.name,image:e.image,description:e.description})}))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.legend;return i.a.createElement("div",{className:"Profile__info"},i.a.createElement("h1",{className:"Profile__name"},e.name),i.a.createElement("h2",{className:"Profile__description"},e.description),i.a.createElement(b,{legend:e}),i.a.createElement("p",{className:"Profile__summary"},e.summary),i.a.createElement(v,{legend:e}))}}]),a}(n.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.legend,t=(e.hover,"Profile__picture Profile__picture--"+a.name);console.log(a.mainImgURL);var n={backgroundImage:'url("'+a.mainImgURL+'")'};return console.log(n),i.a.createElement("div",{className:"Profile Profile--"+a.name},i.a.createElement("div",{className:"Profile__main"},i.a.createElement("div",{className:t,style:n}),i.a.createElement("p",{className:"Profile__quote"},a.quote),i.a.createElement(w,{legend:a})))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).state={hover:"Bangalore"},t.updateHoverState=t.updateHoverState.bind(Object(p.a)(t)),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"updateHoverState",value:function(e){this.setState({hover:e}),console.log(e)}},{key:"render",value:function(){var e=this,a=this.props.legends;return i.a.createElement("div",{className:"Legends"},i.a.createElement("div",{className:"display-area"},i.a.createElement("img",{className:"display__background",src:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566245529/ApexLegend/apex-background.jpg",alt:""}),a.map(function(a){if(e.state.hover==a.name)return i.a.createElement(A,{legend:a,hover:e.state.hover})})),i.a.createElement(y,{legends:a,updateHoverState:this.updateHoverState,hover:this.state.hover}))}}]),a}(n.Component);function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).state={screenState:"Main"},t.changeScreenState=t.changeScreenState.bind(Object(p.a)(t)),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"changeScreenState",value:function(e){var a=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(t,!0).forEach(function(a){Object(h.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},this.state).screenState;a=e,console.log(a),this.setState({screenState:a})}},{key:"render",value:function(){var e=this.props.legends;return i.a.createElement("div",{className:"Main"},i.a.createElement(k,{legends:e}))}}]),a}(n.Component),O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).state={legends:[{name:"Bangalore",description:"Professional Soldier",summary:"Born into a military family where she, her parents, and her four older brothers all served in the IMC Armed Forces, Bangalore has been an exceptional soldier since she was young. She was top of her class at the IMC Military Academy and the only cadet who could take apart a Peacekeeper, equip it with a Precision Choke hop-up, and put it back together in under twenty seconds \u2013 blindfolded.\n\nThree years ago, Anita and her brother Jackson were ordered to retrieve a mercenary fleet from the Outlands to aid in the IMC\u2019s fight against the Militia. However, their unit lost contact with IMC HQ and were ambushed on arrival. The squad scattered, but Jackson stayed behind to give his sister time to escape. Alone and with no way home, Anita put her training, extensive weapon knowledge, and competitive spirit to work by joining the Apex Games. Now, she fights to raise money for passage back to the IMC home base, where she hopes to reunite with what remains of her family.",quote:'"Name the weapon--I\'ll still beat you."',bio:{"Real Name":"Anita Williams",Age:"35","Home World":"Earth"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565909158/ApexLegend/bangalore-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565838836/ApexLegend/bangalore-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/bangalore-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Smoke Launcher",description:"Fire a high-velocity smoke canister that explodes into a smoke wall on impact.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566238483/ApexLegend/bangalore-tactical.png"},{type:"Passive Ability",name:"Double Time",description:"Taking fire while sprinting makes you move faster for a brief time.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566238483/ApexLegend/bangalore-passive.png"},{type:"Ultimate Ability",name:"Rolling Thunder",description:"Call in an artillery strike that slowly creeps across the landscape.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566238483/ApexLegend/bangalore-ultimate.png"}]},{name:"Bloodhound",description:"Technological Tracker",summary:"Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen \u2013 and that\u2019s about all anyone knows. Their identity is a mystery wrapped in layers of rumors: they are fabulously wealthy, a bloodthirsty murderer, a Goliath whisperer, a former slave, half bat, and a dozen other things depending on who\u2019s doing the whispering.\n\nAll anyone truly knows is that Bloodhound is a force to be reckoned with in the Apex Games. Bloodhound\u2019s unparalleled tracking skills are a boon to any team they join, helping them root out hidden opponents and tracking the enemy\u2019s movements. Calling on Earth\u2019s Old Norse Gods to guide them, Bloodhound believes that destiny is a path that has already been laid out, eventually carrying all to their death. But with that knowledge comes strength, because until that day comes, Bloodhound knows they can\u2019t be stopped.",quote:'"I am the hunter the Gods have sent"',bio:{"Real Name":"Unknown",Age:"Unknown","Home World":"Unknown"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906796/ApexLegend/bloodhound-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565839458/ApexLegend/bloodhound-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/bloodhound-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Eye of the Allfather",description:"Briefly reveal hidden enemies, traps, and clues throughout structures in front of you.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566240924/ApexLegend/bloodhound-tactical.png"},{type:"Passive Ability",name:"Tracker",description:"See tracks left behind by your foes.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566240924/ApexLegend/bloodhound-passive.png"},{type:"Ultimate Ability",name:"Beast of the Hunt",description:"Enhances your senses, allowing you move faster and highlighting your prey.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566240924/ApexLegend/bloodhound-ultimate.png"}]},{name:"Caustic",description:"Toxic Trapper",summary:"Before there was Caustic, a scientist named Alexander Nox worked at Humbert Labs, the Frontier\u2019s leading manufacturer of pesticide gases. With a glut of pesticides needed to protect the growing Frontier colonies\u2019 crops, Humbert Labs was constantly on the hunt for better and stronger formulas. Nox was one of their brightest scientists and worked day and night developing new gases. But to make sure they worked, he needed to test them on more than just inert tissue: he needed something living.\n\nAs he toiled in secret, Nox began to see the beauty in his creations and their ability to destroy anything they touched. But the head of Humbert Labs soon discovered his gruesome experiments, and their confrontation ended with the lab in flames and its chief dead. Today, Nox is missing and presumed deceased. Caustic, meanwhile, now finds new test subjects in the Apex Games, where he puts his gaseous creations to work and observes their effects with great interest.",quote:'"I don\'t concern myself with the ambitions of insects."',bio:{"Real Name":"Alexander Nox",Age:"48","Home World":"Gaea"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906775/ApexLegend/Caustic-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565839755/ApexLegend/caustic-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/caustic-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Nox Gas Trap",description:"Drop canisters that release deadly Nox gas when shot or triggered by enemies.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566240937/ApexLegend/caustic-tactical.png"},{type:"Passive Ability",name:"Nox Vision",description:"Allows you to see enemies through your gas.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566240937/ApexLegend/caustic-ultimate.png"},{type:"Ultimate Ability",name:"Nox Gas Grenade",description:"Blankets a large area in Nox gas.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566240937/ApexLegend/caustic-passive.png"}]},{name:"Gibraltar",description:"Shielded Fortress",summary:"Gibraltar is a gentle giant with a wild side. The son of two SARAS (Search and Rescue Association of Solace) volunteers, he has always been skilled at getting others out of dangerous situations that are common in the Outlands. However, he only began to understand the value of protecting others when he and his boyfriend stole his father\u2019s motorcycle, took it on a joyride, and got trapped by a deadly mudslide. His parents saved them, and his father lost an arm in the process. Gibraltar has never forgotten that sacrifice and has devoted his life to helping those in need.\n\nThe Apex Games didn\u2019t change that, but they changed what it meant. Many of Gibraltar\u2019s friends and colleagues have competed in the Games for extra money, fame, and glory over the years, and some never came home. Gibraltar joined to keep them safe and, for the first time, his skills as a rescuer and his rebellious nature worked together. He\u2019s now become an icon in the Apex Games, putting himself in the line of fire to protect his squad and send his opponents running for cover.",quote:'"Try to move me; it\'ll be fun."',bio:{"Real Name":"Makoa Gibraltar",Age:"30","Home World":"Solace"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906820/ApexLegend/Gibraltar-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565840143/ApexLegend/gibraltar-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/gibraltar-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Dome of Protection",description:"Throw down a dome-shield that blocks attacks for 15 seconds.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248395/ApexLegend/gibralter-tactical.png"},{type:"Passive Ability",name:"Gun Shield",description:"Aiming down sights deploys a gun shield that blocks incoming fire.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248395/ApexLegend/gibraltar-passive.png"},{type:"Ultimate Ability",name:"Defensive Bombardment",description:"Call in a concentrated mortar strike on a marked position.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248395/ApexLegend/gibraltar-ultimate.png"}]},{name:"Lifeline",description:"Combat Medic",summary:"Ajay Che, aka Lifeline, isn\u2019t someone you would expect to find in the Apex Games. Once the child of wealthy war profiteers, she left home when she learned of the damage her family had caused and enlisted in the Frontier Corps, a humanitarian organization that aids Frontier communities in need. She\u2019s since devoted her life to helping others and joined the Apex Games to fund the Frontier Corps with her winnings.\n\nSince no one in the Games is innocent \u2014 they all know what they signed up for \u2014 and every one of her victories means help for those in need, Lifeline has no problem engaging in the popular bloodsport. Or so she tells herself. She may seem sarcastic and callous, but deep down she wants to help people and make the world a better place. If that means taking a few people down in the process, so be it.",quote:'"Never quit. That\'s how you win."',bio:{"Real Name":"Ajay Che",Age:"24","Home World":"Psamathe"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906825/ApexLegend/Lifeline-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565840625/ApexLegend/lifeline-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/lifeline-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"D.O.C. Heal Drone",description:"Call your Drone of Compassion to automatically heal nearby teammates over time.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248391/ApexLegend/lifeline-tactical.png"},{type:"Passive Ability",name:"Combat Medic",description:"Revive knocked down teammates faster while protected by a shield wall. Healing items are used 25% faster.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248391/ApexLegend/lifeline-passive.png"},{type:"Ultimate Ability",name:"Care Package",description:"Call in a drop pod full of high-quality defensive gear.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248391/ApexLegend/lifeline-ultimate.png"}]},{name:"Mirage",description:"Holographic Trickster",summary:"Mirage is the kind of guy who likes to stand out. The youngest of four brothers, he perfected the art of fooling around to get attention. The one thing he took seriously was Holo-Pilot technology: introduced to the illusion-creating tech by his engineer mother, he poured over the mechanisms and learned all he could about them. Even when his brothers went MIA during the Frontier War, Mirage and his mother continued to develop holo devices, and the work brought them closer.\n\nWhile working as a bartender to make ends meet, Mirage heard amazing stories from his patrons about the Apex Games and the wealth and glory that came with victory. As good as both of those sounded, he knew he couldn\u2019t risk leaving his mother childless \u2013 until she gave him a set of customized holo devices and told him to follow his dream. Mirage is now the life of the Apex Games, outwitting opponents and charming audiences across the Outlands.",quote:"\"I don't take myself too seriously. I don't take myself anywhere. I need to get out more.\"",bio:{"Real Name":"Elliot Witt",Age:"30","Home World":"Solace"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906830/ApexLegend/Mirage-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/mirage-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/mirage-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Psyche Out",description:"Send out a holographic decoy to confuse the enemy.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248386/ApexLegend/mirage-tactical.png"},{type:"Passive Ability",name:"Encore!",description:"Automatically drop a decoy and cloak for five seconds when knocked down.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248386/ApexLegend/mirage-passive.png"},{type:"Ultimate Ability",name:"Vanishing Act",description:"Deploy a team of Decoys to distract enemies while you cloak.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248386/ApexLegend/mirage-ultimate.png"}]},{name:"Octane",description:"The Adrenaline Junkie",summary:"One day, Octavio Silva was bored. In fact, he was bored most days. Heir to the preoccupied CEOs of Silva Pharmaceuticals and wanting for nothing in life, he entertained himself by performing death-defying stunts and posting holovids of them for his fans to gawk over. So, this day, he decided to set the course record for a nearby Gauntlet by launching himself across the finish line \u2013 using a grenade.\n\nAs he lay in triage hours later, the doctors informed him that the damage done to his legs meant his daredevil days were over. That didn\u2019t sit well with Octavio, who turned to an old friend for help: Ajay Che, who he guilted into forging an order to replace his legs with bionic ones. Suddenly able to repair his limbs at a moment\u2019s notice, Octavio decided petty online stunts weren\u2019t enough: the ultimate adrenaline rush, the Apex Games, was calling. Now, he\u2019s going to become an Apex Champion doing the most incredible, death-defying moves anyone\u2019s ever seen. Maybe in the arena, he won\u2019t be so bored.",quote:'"Whoa . . . what a rush!"',bio:{"Real Name":"Octavio Silva",Age:"24","Home World":"Psamathe"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906843/ApexLegend/Octane-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/octane-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/octane-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Stim",description:"Move 30% faster for six seconds. Costs health to use.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248382/ApexLegend/octane-tactical.png"},{type:"Passive Ability",name:"Swift Mend",description:"Automatically restores health over time.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248382/ApexLegend/octane-passive.png"},{type:"Ultimate Ability",name:"Launch Pad",description:"Deploy a jump pad that catapults teammates through the air.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248382/ApexLegend/octane-ultimate.png"}]},{name:"Pathfinder",description:"Forward Scout",summary:"Pathfinder is the picture of optimism, despite his circumstances. A MRVN (Mobile Robotic Versatile eNtity) modified to specialize in location scouting and surveying, he booted up decades ago in an abandoned laboratory with no idea who created him or why. With only his MRVN designation to hint at his identity, Pathfinder set off in search of his creator.\n\nPathfinder has learned much in his travels since then (like how to make a mean Eastern Leviathan Stew) but hasn\u2019t come any closer to finding his creator. Still, he\u2019s never given up hope, and has joined the Apex Games to gain a following--and hopefully draw the attention of his maker. In the meantime, he remains enthusiastic and helpful, always ready to make new friends (then shoot them).",quote:"\"Losing isn't fun. That's why I don't do it.\"",bio:{"Real Name":"MRVN",Age:"He really wants to know, too.","Home World":"He\u2019s trying to find out!"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906855/ApexLegend/Pathfinder-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/pathfinder-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/pathfinder-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Grappling Hook",description:"Grapple to get to out-of-reach places quickly.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248376/ApexLegend/pathfinder-tactical.png"},{type:"Passive Ability",name:"Insider Knowledge",description:"Scan a survey beacon to reveal the ring\u2019s next location.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248376/ApexLegend/pathfinder-passive.png"},{type:"Ultimate Ability",name:"Zipline Gun",description:"Create a zipline for everyone to use.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248376/ApexLegend/pathfinder-ultimate.png"}]},{name:"Wattson",description:"Static Defender",summary:'Natalie "Wattson" Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games\u2019 lead electrical engineer, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her \u2013 its ordered, predictable flow made sense in a way the rest of the world didn\u2019t.\n\nShe devoured every book she could on the subject, and eventually became such a skilled engineer that she was commissioned to build the Apex Games\u2019 Modified Containment Ring. Unfortunately, her father died the day it was revealed, leaving her alone. At her lowest moment, a group of competitors invited her to return to the arena with them, assuring her she would always have a home. She now fights alongside her friends in the arena she helped build, destroying incoming missiles, recharging shields, creating fences, and using her pylon to silence fights that get too loud. Nobody knows the arena better than Wattson \u2013 anyone who underestimates her is in for a shock.',quote:'"Power is everything. You only think you have it."',bio:{"Real Name":"Natalie Paquette",Age:"22","Home World":"Solace"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565906860/ApexLegend/Wattson-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/wattson-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/wattson-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Perimeter Security",description:"Connect nodes to create electrified fences that damage and slow enemies.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248368/ApexLegend/wattson-tactical.png"},{type:"Passive Ability",name:"Spark of Genius",description:"Ultimate Accelerants fully charge your Ultimate Ability, and standing near interception pylons boosts your Tactical Ability recharge.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248368/ApexLegend/wattson-passive.png"},{type:"Ultimate Ability",name:"Interception Pylon",description:"Place an electrified pylon that destroys incoming ordnance and repairs damaged shields as long as it stands. (Max: 3)",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248368/ApexLegend/wattson-ultimate.png"}]},{name:"Wraith",description:"Interdimensional Skirmisher",summary:"Wraith is a whirlwind fighter, able to execute swift and deadly attacks and manipulate spacetime by opening rifts in the fabric of reality \u2014 but she has no idea how she got that way. Years ago, she woke up in an IMC Detention Facility for the Mentally Ill with no memory of her life before. She also began hearing a distant voice whispering in her mind that would keep her awake for days on end. Despite nearly driving her insane, once she started to listen and trust it, the voice helped her harness her newfound power of void manipulation and escape the facility.\n\nDetermined to uncover her true identity, Wraith began a quest to find out more about the experiments. Many of the old research facilities, however, are buried beneath heavily guarded arenas used for the Apex Games. Now Wraith has joined the competition, and with every match she gets closer to the truth.",quote:'"There"s a thin line between life and death. You"ll find me there."',bio:{"Real Name":"Redacted",Age:"Redacted","Home World":"Redacted"},mainImgURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565998870/ApexLegend/Wraith-avatar.png",thumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/wraith-thumbnail.png",altThumbnailURL:"https://res.cloudinary.com/rezdelamasa/image/upload/v1565845640/ApexLegend/wraith-thumbnail-red.png",abilities:[{type:"Tactical Ability",name:"Into the Void",description:"Reposition quickly through the safety of void space, avoiding all damage.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248356/ApexLegend/wraith-tactical.png"},{type:"Passive Ability",name:"Voices from the Void",description:"A voice warns you when danger approaches. As far as you can tell, it\u2019s on your side.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248356/ApexLegend/wraith-passive.png"},{type:"Ultimate Ability",name:"Dimensional Rift",description:"Link two locations with portals for 60 seconds, allowing your entire team to use them.",image:"https://res.cloudinary.com/rezdelamasa/image/upload/v1566248356/ApexLegend/wraith-ultimate.png"}]}]},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement(x,{legends:this.state.legends}))}}]),a}(n.Component);r.a.render(i.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.1be7070a.chunk.js.map