const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "08:59",
        destination: "WASAW",
        flight: "DX 133",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "10:02",
        destination: "KOPENHAGA",
        flight: "WR 198",
        gate: "A 05",
        remarks: "DELAY"
    },
    {
        time: "12:27",
        destination: "BARCELONA",
        flight: "OX 753",
        gate: "B 03",
        remarks: "ON TIME"
    },
    {
        time: "13:16",
        destination: "HAMBURG",
        flight: "XM 983",
        gate: "A 02",
        remarks: "CANCELLED"
    },
    {
        time: "14:47",
        destination: "TURIN",
        flight: "XR 343",
        gate: "B 01",
        remarks: "ON TIME"
    },
];

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "POZNAN", "GDANSK", "WIENNA", "LIPSK", "OSLO", "HELSINKI", "DORTMUND", "BRNO", "PRAGA", "LONDON", "NEW YORK", "BEIGIN"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15



function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");
        const tableIcon = document.createElement("td");
        tableIcon.className = "icon";
        tableIcon.textContent = "✈";
        tableRow.append(tableIcon);
        
        
        for( const flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail]);

            for(const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div');

                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100*index);
            }

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
}
populateTable();



function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    } else {
        return numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
}

function generateTime() {
    let displayHour = hour
    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }
    return displayHour +  ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift();
    flights.push({
      time: generateTime(),
      destination: destinations[Math.floor(Math.random() * destinations.length)],
      flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
      gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
      remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = "";
    populateTable();
}
  
  
setInterval(shuffleUp, 3000);