// Object with police station details by area
const policeStations = {
    mgroad: {
      name: "MG Road Police Station",
      address: "Mrignayani Chouraha, Nagar Nigam Rd, Indore",
      contact: "+91 70491 08513"
    },
    annapurna: {
      name: "Annapurna Police Station",
      address: "Annapurna Road, Indore",
      contact: "2583032, 2449640"
    },
    aerodrum: {
      name: "Aerodrum Police Station",
      address: "Aerodrum Road, Indore",
      contact: "2620100, 2419512"
    },
    bhanwarkuan: {
      name: "Bhanwarkuan Police Station",
      address: "Bhanwarkuan Main Rd, Indore",
      contact: "2449948, 2449949"
    },
    sarafa: {
      name: "Sarafa Police Station",
      address: "Sarafa Bazaar, Indore",
      contact: "2541156, 2549830"
    },
    sadarbazar: {
      name: "Sadar Bazar Police Station",
      address: "Sadar Bazar, Indore",
      contact: "2542100, 2549835"
    },
    pardesipura: {
      name: "Pardesipura Police Station",
      address: "Pardesipura Main Rd, Indore",
      contact: "2434100, 2549818"
    },
    rajendranagar: {
      name: "Rajendra Nagar Police Station",
      address: "Rajendra Nagar, Indore",
      contact: "2321835, 2321825"
    },
    lasudia: {
      name: "Lasudia Police Station",
      address: "Lasudia Mori, Indore",
      contact: "5021950, 2802999"
    },
    khajrana: {
      name: "Khajrana Police Station",
      address: "Khajrana, Indore",
      contact: "2591475, 2591476"
    }
  };
  
  // Function to display selected police station info
  function showPoliceDetails() {
    const area = document.getElementById("areaSelect").value;
    const output = document.getElementById("policeDetails");
  
    if (area && policeStations[area]) {
      const station = policeStations[area];
      output.innerHTML = `
        <strong>${station.name}</strong><br>
        Address: ${station.address}<br>
        Contact: ${station.contact}
      `;
    } else {
      output.innerHTML = "";
    }
  }
  