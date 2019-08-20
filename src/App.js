import React, {Component} from 'react';
import './App.css';
import Main from './Main.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      legends: [
        {
          name: "Bangalore",
          description: "Professional Soldier",
          summary: "Born into a military family where she, her parents, and her four older brothers all served in the IMC Armed Forces, Bangalore has been an exceptional soldier since she was young. She was top of her class at the IMC Military Academy and the only cadet who could take apart a Peacekeeper, equip it with a Precision Choke hop-up, and put it back together in under twenty seconds – blindfolded.\n\nThree years ago, Anita and her brother Jackson were ordered to retrieve a mercenary fleet from the Outlands to aid in the IMC’s fight against the Militia. However, their unit lost contact with IMC HQ and were ambushed on arrival. The squad scattered, but Jackson stayed behind to give his sister time to escape. Alone and with no way home, Anita put her training, extensive weapon knowledge, and competitive spirit to work by joining the Apex Games. Now, she fights to raise money for passage back to the IMC home base, where she hopes to reunite with what remains of her family.",
          quote: '"Name the weapon--I\'ll still beat you."',
          bio: {
            "Real Name": "Anita Williams",
            "Age": "35",
            "Home World": "Earth",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565909158/ApexLegend/bangalore-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565838836/ApexLegend/bangalore-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/bangalore-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Smoke Launcher",
              description: "Fire a high-velocity smoke canister that explodes into a smoke wall on impact.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566238483/ApexLegend/bangalore-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Double Time",
              description: "Taking fire while sprinting makes you move faster for a brief time.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566238483/ApexLegend/bangalore-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Rolling Thunder",
              description: "Call in an artillery strike that slowly creeps across the landscape.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566238483/ApexLegend/bangalore-ultimate.png"
            }
          ],
        },
        {
          name: "Bloodhound",
          description: "Technological Tracker",
          summary: "Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen – and that’s about all anyone knows. Their identity is a mystery wrapped in layers of rumors: they are fabulously wealthy, a bloodthirsty murderer, a Goliath whisperer, a former slave, half bat, and a dozen other things depending on who’s doing the whispering.\n\nAll anyone truly knows is that Bloodhound is a force to be reckoned with in the Apex Games. Bloodhound’s unparalleled tracking skills are a boon to any team they join, helping them root out hidden opponents and tracking the enemy’s movements. Calling on Earth’s Old Norse Gods to guide them, Bloodhound believes that destiny is a path that has already been laid out, eventually carrying all to their death. But with that knowledge comes strength, because until that day comes, Bloodhound knows they can’t be stopped.",
          quote: '"I am the hunter the Gods have sent"',
          bio: {
            "Real Name": "Unknown",
            "Age": "Unknown",
            "Home World": "Unknown",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906796/ApexLegend/bloodhound-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565839458/ApexLegend/bloodhound-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/bloodhound-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Eye of the Allfather",
              description: "Briefly reveal hidden enemies, traps, and clues throughout structures in front of you.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566240924/ApexLegend/bloodhound-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Tracker",
              description: "See tracks left behind by your foes.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566240924/ApexLegend/bloodhound-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Beast of the Hunt",
              description: "Enhances your senses, allowing you move faster and highlighting your prey.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566240924/ApexLegend/bloodhound-ultimate.png"
            }
          ],
        },
        {
          name: "Caustic",
          description: "Toxic Trapper",
          summary: "Before there was Caustic, a scientist named Alexander Nox worked at Humbert Labs, the Frontier’s leading manufacturer of pesticide gases. With a glut of pesticides needed to protect the growing Frontier colonies’ crops, Humbert Labs was constantly on the hunt for better and stronger formulas. Nox was one of their brightest scientists and worked day and night developing new gases. But to make sure they worked, he needed to test them on more than just inert tissue: he needed something living.\n\nAs he toiled in secret, Nox began to see the beauty in his creations and their ability to destroy anything they touched. But the head of Humbert Labs soon discovered his gruesome experiments, and their confrontation ended with the lab in flames and its chief dead. Today, Nox is missing and presumed deceased. Caustic, meanwhile, now finds new test subjects in the Apex Games, where he puts his gaseous creations to work and observes their effects with great interest.",
          quote: '"I don\'t concern myself with the ambitions of insects."',
          bio: {
            "Real Name": "Alexander Nox",
            "Age": "48",
            "Home World": "Gaea",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906775/ApexLegend/Caustic-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565839755/ApexLegend/caustic-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/caustic-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Nox Gas Trap",
              description: "Drop canisters that release deadly Nox gas when shot or triggered by enemies.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566240937/ApexLegend/caustic-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Nox Vision",
              description: "Allows you to see enemies through your gas.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566240937/ApexLegend/caustic-ultimate.png"
            },
            {
              type: "Ultimate Ability",
              name: "Nox Gas Grenade",
              description: "Blankets a large area in Nox gas.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566240937/ApexLegend/caustic-passive.png"
            }
          ],
        },
        {
          name: "Gibraltar",
          description: "Shielded Fortress",
          summary: "Gibraltar is a gentle giant with a wild side. The son of two SARAS (Search and Rescue Association of Solace) volunteers, he has always been skilled at getting others out of dangerous situations that are common in the Outlands. However, he only began to understand the value of protecting others when he and his boyfriend stole his father’s motorcycle, took it on a joyride, and got trapped by a deadly mudslide. His parents saved them, and his father lost an arm in the process. Gibraltar has never forgotten that sacrifice and has devoted his life to helping those in need.\n\nThe Apex Games didn’t change that, but they changed what it meant. Many of Gibraltar’s friends and colleagues have competed in the Games for extra money, fame, and glory over the years, and some never came home. Gibraltar joined to keep them safe and, for the first time, his skills as a rescuer and his rebellious nature worked together. He’s now become an icon in the Apex Games, putting himself in the line of fire to protect his squad and send his opponents running for cover.",
          quote: '"Try to move me; it\'ll be fun."',
          bio: {
            "Real Name": "Makoa Gibraltar",
            "Age": "30",
            "Home World": "Solace",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906820/ApexLegend/Gibraltar-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565840143/ApexLegend/gibraltar-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/gibraltar-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Dome of Protection",
              description: "Throw down a dome-shield that blocks attacks for 15 seconds.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248395/ApexLegend/gibralter-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Gun Shield",
              description: "Aiming down sights deploys a gun shield that blocks incoming fire.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248395/ApexLegend/gibraltar-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Defensive Bombardment",
              description: "Call in a concentrated mortar strike on a marked position.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248395/ApexLegend/gibraltar-ultimate.png"
            }
          ],
        },
        {
          name: "Lifeline",
          description: "Combat Medic",
          summary: "Ajay Che, aka Lifeline, isn’t someone you would expect to find in the Apex Games. Once the child of wealthy war profiteers, she left home when she learned of the damage her family had caused and enlisted in the Frontier Corps, a humanitarian organization that aids Frontier communities in need. She’s since devoted her life to helping others and joined the Apex Games to fund the Frontier Corps with her winnings.\n\nSince no one in the Games is innocent — they all know what they signed up for — and every one of her victories means help for those in need, Lifeline has no problem engaging in the popular bloodsport. Or so she tells herself. She may seem sarcastic and callous, but deep down she wants to help people and make the world a better place. If that means taking a few people down in the process, so be it.",
          quote: '"Never quit. That\'s how you win."',
          bio: {
            "Real Name": "Ajay Che",
            "Age": "24",
            "Home World": "Psamathe",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906825/ApexLegend/Lifeline-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565840625/ApexLegend/lifeline-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/lifeline-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "D.O.C. Heal Drone",
              description: "Call your Drone of Compassion to automatically heal nearby teammates over time.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248391/ApexLegend/lifeline-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Combat Medic",
              description: "Revive knocked down teammates faster while protected by a shield wall. Healing items are used 25% faster.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248391/ApexLegend/lifeline-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Care Package",
              description: "Call in a drop pod full of high-quality defensive gear.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248391/ApexLegend/lifeline-ultimate.png"
            }
          ],
        },
        {
          name: "Mirage",
          description: "Holographic Trickster",
          summary: "Mirage is the kind of guy who likes to stand out. The youngest of four brothers, he perfected the art of fooling around to get attention. The one thing he took seriously was Holo-Pilot technology: introduced to the illusion-creating tech by his engineer mother, he poured over the mechanisms and learned all he could about them. Even when his brothers went MIA during the Frontier War, Mirage and his mother continued to develop holo devices, and the work brought them closer.\n\nWhile working as a bartender to make ends meet, Mirage heard amazing stories from his patrons about the Apex Games and the wealth and glory that came with victory. As good as both of those sounded, he knew he couldn’t risk leaving his mother childless – until she gave him a set of customized holo devices and told him to follow his dream. Mirage is now the life of the Apex Games, outwitting opponents and charming audiences across the Outlands.",
          quote: '"I don\'t take myself too seriously. I don\'t take myself anywhere. I need to get out more."',
          bio: {
            "Real Name": "Elliot Witt",
            "Age": "30",
            "Home World": "Solace",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906830/ApexLegend/Mirage-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/mirage-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/mirage-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Psyche Out",
              description: "Send out a holographic decoy to confuse the enemy.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248386/ApexLegend/mirage-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Encore!",
              description: "Automatically drop a decoy and cloak for five seconds when knocked down.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248386/ApexLegend/mirage-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Vanishing Act",
              description: "Deploy a team of Decoys to distract enemies while you cloak.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248386/ApexLegend/mirage-ultimate.png"
            }
          ],
        },
        {
          name: "Octane",
          description: "The Adrenaline Junkie",
          summary: "One day, Octavio Silva was bored. In fact, he was bored most days. Heir to the preoccupied CEOs of Silva Pharmaceuticals and wanting for nothing in life, he entertained himself by performing death-defying stunts and posting holovids of them for his fans to gawk over. So, this day, he decided to set the course record for a nearby Gauntlet by launching himself across the finish line – using a grenade.\n\nAs he lay in triage hours later, the doctors informed him that the damage done to his legs meant his daredevil days were over. That didn’t sit well with Octavio, who turned to an old friend for help: Ajay Che, who he guilted into forging an order to replace his legs with bionic ones. Suddenly able to repair his limbs at a moment’s notice, Octavio decided petty online stunts weren’t enough: the ultimate adrenaline rush, the Apex Games, was calling. Now, he’s going to become an Apex Champion doing the most incredible, death-defying moves anyone’s ever seen. Maybe in the arena, he won’t be so bored.",
          quote: '"Whoa . . . what a rush!"',
          bio: {
            "Real Name": "Octavio Silva",
            "Age": "24",
            "Home World": "Psamathe",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906843/ApexLegend/Octane-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/octane-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/octane-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Stim",
              description: "Move 30% faster for six seconds. Costs health to use.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248382/ApexLegend/octane-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Swift Mend",
              description: "Automatically restores health over time.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248382/ApexLegend/octane-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Launch Pad",
              description: "Deploy a jump pad that catapults teammates through the air.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248382/ApexLegend/octane-ultimate.png"
            }
          ],
        },
        {
          name: "Pathfinder",
          description: "Forward Scout",
          summary: "Pathfinder is the picture of optimism, despite his circumstances. A MRVN (Mobile Robotic Versatile eNtity) modified to specialize in location scouting and surveying, he booted up decades ago in an abandoned laboratory with no idea who created him or why. With only his MRVN designation to hint at his identity, Pathfinder set off in search of his creator.\n\nPathfinder has learned much in his travels since then (like how to make a mean Eastern Leviathan Stew) but hasn’t come any closer to finding his creator. Still, he’s never given up hope, and has joined the Apex Games to gain a following--and hopefully draw the attention of his maker. In the meantime, he remains enthusiastic and helpful, always ready to make new friends (then shoot them).",
          quote: '"Losing isn\'t fun. That\'s why I don\'t do it."',
          bio: {
            "Real Name": "MRVN",
            "Age": "He really wants to know, too.",
            "Home World": "He’s trying to find out!",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906855/ApexLegend/Pathfinder-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/pathfinder-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/pathfinder-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Grappling Hook",
              description: "Grapple to get to out-of-reach places quickly.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248376/ApexLegend/pathfinder-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Insider Knowledge",
              description: "Scan a survey beacon to reveal the ring’s next location.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248376/ApexLegend/pathfinder-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Zipline Gun",
              description: "Create a zipline for everyone to use.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248376/ApexLegend/pathfinder-ultimate.png"
            }
          ],
        },
        {
          name: "Wattson",
          description: "Static Defender",
          summary: "Natalie \"Wattson\" Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games’ lead electrical engineer, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her – its ordered, predictable flow made sense in a way the rest of the world didn’t.\n\nShe devoured every book she could on the subject, and eventually became such a skilled engineer that she was commissioned to build the Apex Games’ Modified Containment Ring. Unfortunately, her father died the day it was revealed, leaving her alone. At her lowest moment, a group of competitors invited her to return to the arena with them, assuring her she would always have a home. She now fights alongside her friends in the arena she helped build, destroying incoming missiles, recharging shields, creating fences, and using her pylon to silence fights that get too loud. Nobody knows the arena better than Wattson – anyone who underestimates her is in for a shock.",
          quote: '"Power is everything. You only think you have it."',
          bio: {
            "Real Name": "Natalie Paquette",
            "Age": "22",
            "Home World": "Solace",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565906860/ApexLegend/Wattson-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/wattson-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565848536/ApexLegend/wattson-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Perimeter Security",
              description: "Connect nodes to create electrified fences that damage and slow enemies.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248368/ApexLegend/wattson-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Spark of Genius",
              description: "Ultimate Accelerants fully charge your Ultimate Ability, and standing near interception pylons boosts your Tactical Ability recharge.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248368/ApexLegend/wattson-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Interception Pylon",
              description: "Place an electrified pylon that destroys incoming ordnance and repairs damaged shields as long as it stands. (Max: 3)",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248368/ApexLegend/wattson-ultimate.png"
            }
          ],
        },
        {
          name: "Wraith",
          description: "Interdimensional Skirmisher",
          summary: "Wraith is a whirlwind fighter, able to execute swift and deadly attacks and manipulate spacetime by opening rifts in the fabric of reality — but she has no idea how she got that way. Years ago, she woke up in an IMC Detention Facility for the Mentally Ill with no memory of her life before. She also began hearing a distant voice whispering in her mind that would keep her awake for days on end. Despite nearly driving her insane, once she started to listen and trust it, the voice helped her harness her newfound power of void manipulation and escape the facility.\n\nDetermined to uncover her true identity, Wraith began a quest to find out more about the experiments. Many of the old research facilities, however, are buried beneath heavily guarded arenas used for the Apex Games. Now Wraith has joined the competition, and with every match she gets closer to the truth.",
          quote: '"There\"s a thin line between life and death. You\"ll find me there."',
          bio: {
            "Real Name": "Redacted",
            "Age": "Redacted",
            "Home World": "Redacted",
          },
          mainImgURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565998870/ApexLegend/Wraith-avatar.png",
          thumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565842320/ApexLegend/wraith-thumbnail.png",
          altThumbnailURL: "https://res.cloudinary.com/rezdelamasa/image/upload/v1565845640/ApexLegend/wraith-thumbnail-red.png",
          abilities: [
            {
              type: "Tactical Ability",
              name: "Into the Void",
              description: "Reposition quickly through the safety of void space, avoiding all damage.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248356/ApexLegend/wraith-tactical.png"
            },
            {
              type: "Passive Ability",
              name: "Voices from the Void",
              description: "A voice warns you when danger approaches. As far as you can tell, it’s on your side.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248356/ApexLegend/wraith-passive.png"
            },
            {
              type: "Ultimate Ability",
              name: "Dimensional Rift",
              description: "Link two locations with portals for 60 seconds, allowing your entire team to use them.",
              image: "https://res.cloudinary.com/rezdelamasa/image/upload/v1566248356/ApexLegend/wraith-ultimate.png"
            }
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Main 
          legends={this.state.legends}
        />
      </div>
    );
  }

}

export default App;
