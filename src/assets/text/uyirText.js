export const getTrees = () => {
    const phase1 = ["1- நாட்டுக்கருவேல்", "2- ஆனைகுண்டுமணி", "3- வாகை", "4- கருவாகை", "5- அலிஞ்சி", "6- சீதா", "7- மந்தாரை", "8- இலைபுரசு", "9- சவுக்கு", "10- சிசு", "11- சரக்கொன்றை", "12- தோதகத்தி", "13- மயில்கொன்றை", "14- தண்ணீர்காய்மரம்", "15- தூங்குமூஞ்சி", "16- சந்தனம்", "17- எட்டி", "18-  தேத்தாங்கொட்டை", "19- மகோகனி", "20- புளி"]
    const phase2 = ["21- தான்றிக்காய்", "22- தேக்கு", "23- நீர்மருது", "24- வாதாங்கொட்டை", "25- சொர்க்கமரம்", "26- பென்சில்", "27- பூவரசு", "28- இலந்தை", "29- குதிரைகுழம்பு", "30- கடுக்காய்", "31- வெப்பாலை", "32- மகிழம்", "33- கருங்கொன்றை", "34- சீமைஅகத்தி", "35- பூந்திகொட்டை", "36- மஞ்சள்கொன்றை", "37- ஆலம்", "38- விளாம்", "39- குமுள்", "40- சுபாபுல்"];
    const phase3 = ["41- மலைவேம்பு", "42- தர்காவேம்பு", "43- அயல்வாகை", "44- புங்கம்", "45- வன்னி", "46- கொய்யா", "47- வேங்கை", "48- மாதுளை", "49- நாவல்", "50- ஆவாரை", "51- முருங்கை", "52- ஆவிமரம்", "53- இலுப்பை", "54- அகத்தி", "55- நெட்லிங்கம்", "56- மரபருத்தி", "57- அகத்தி", "58- மரத்தக்காளி", "59 - இலுப்பை", "60- உசிலை"]
    
    const phase1Eng = ["1- Karuvelam", "2- Aanaigundumani", "3- Vaagai", "4- Karuvaagai", "5- Alinji", "6- Seetha", "7- Mantharai", "8- Ilaipurusu", "9- Savukku", "10- Sisu", "11- Sarakkondrai", "12- Thothagathi", "13- Mayil kondrai", "14- Thaneerkai maram", "15- Thoongu munji", "16- Santhanam", "17- Yetti", "18-  Thethan kottai", "19- Mahogani", "20- Tamarind"];

    const phase2Eng = ["21- Thandrik kaai", "22- Thekku", "23-  Neer Marudu", "24- Vaathan kottai", "25- Sorgamaram", "26- Pencil", "27- Poovarasu", "28- Ilanthai", "29- Kuthirai kuzhambu", "30- Kadukkai", "31- Veppalai", "32- Magizham", "33- Karun kondrai", "34- Seemai agathi", "35- Boondhi kottai", "36- Manjam kondrai", "37- Aalam", "38- Vilam pazham", "39- Kumul", "40- Subaa pul"];

    const phase3Eng = ["41- Malai vembu", "42- Tharga vembu", "43- Ayal vaagai", "44- Pungam", "45- Vanni", "46- Guava", "47- Vengai", "48- Pomegranate", "49- Jambu", "50- Aavarai", "51- Drumstick", "52- Aavi maram", "53- Iluppai", "54- Agathi", "55- Net lingam", "56-  Mara paruthi", "57- Agathi", "58- Tomato tree", "59 - Iluppai", "60- Usilai"]
    return {
        phase1,phase2,phase3,phase1Eng,phase2Eng,phase3Eng
    }
}