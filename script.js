var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
document.addEventListener("DOMContentLoaded", () => {
    const hospitalCards = document.querySelectorAll(".hospital-card");
  
    hospitalCards.forEach(card => {
      card.addEventListener("click", () => {
        const name = card.querySelector("h2").textContent;
        alert(`You clicked on ${name}`);
      });
    });
  });
  function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
  }
  
  function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");
  
    const userMessage = input.value.trim();
    if (userMessage === "") return;
  
    // Show user message
    const userBubble = document.createElement("div");
    userBubble.textContent = "👤 " + userMessage;
    messages.appendChild(userBubble);
  
    // Bot thinking...
    const botTyping = document.createElement("div");
    botTyping.textContent = "🤖: Typing...";
    messages.appendChild(botTyping);
  
    setTimeout(() => {
      messages.removeChild(botTyping);
  
      const botReply = document.createElement("div");
      botReply.textContent = "🤖: " + getBotReply(userMessage.toLowerCase());
      messages.appendChild(botReply);
      messages.scrollTop = messages.scrollHeight;
    }, 700);
  
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
  
  // Basic trained replies
  function getBotReply(message) {
    if (message.includes("hello") || message.includes("hi")) {
      return "Namaste! Indori Bot aapki sahayata ke liye taiyaar hai.";
    } else if (message.includes("food") || message.includes("restaurant")) {
      return "Indore ke best food spots: Sarafa Bazaar, 56 Dukaan, Vijay Chaat House 😋";
    } else if (message.includes("hospital")) {
      return "Top Hospitals: Bombay Hospital, CHL, Medanta, Aurobindo.";
    } else if (message.includes("itinerary") || message.includes("trip")) {
      return "Aap kitne din ruk rahe ho? Batao toh ek sahi itinerary de doon!";
    } else if (message.includes("college") || message.includes("school")) {
      return "SAGE, Medicaps, IPS, DAVV – Indore ke top institutions hain!";
    } else if (message.includes("history") || message.includes("about indore")) {
      return "Indore, Holkaron ka shahar, cleanest city, food capital of MP!";
    } else if (message.includes("who made you") || message.includes("creator") || message.includes("developed")) {
      return "Main bana hoon 2 amazing logon ke dwara – **Anosh & Kunal Sir** 🔥🙌";
    } else if (message.includes("thank")) {
      return "Arre bhai, dhanyawad kehne ki kya baat! Kabhi bhi pooch lo 😊";
    } else {
      return "Maaf karna bhai, ye question ka jawab abhi mere dimaag mein nahi hai 😅 HUM chatGPT se puch sakte hai, pr me internet se connected nhi hu ";
    }
  }
  
  