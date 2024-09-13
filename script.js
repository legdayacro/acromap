const data = {
  oslo: {
    icon: "./facebook.svg",
    url: "https://www.instagram.com/legday.acro/",
    title: "Oslo",
    details:
      '<p>The Oslo community often meets outside at <a href="https://maps.app.goo.gl/nGatNvp1gbyWpxWH6">Skur 13</a> when the weather is nice. </p>',
  },
  trondheim: {
    icon: "./facebook.svg",
    url: "https://www.instagram.com/legday.acro/",
    title: "Trondheim",
    details: "<p>Trondheim bla bla bla</p>",
  },
  kristiansand: {
    icon: "./instagram.svg",
    url: "https://www.instagram.com/legday.acro/",
    title: "Kristiansand",
    details: "<p>Kristiansand bla bla bla</p>",
  },
  tromso: {
    icon: "./instagram.svg",
    url: "https://www.instagram.com/legday.acro/",
    title: "Tromsø",
    details: "<p>Tromsø bla bla bla</p>",
  },
  sogndal: {
    icon: "./instagram.svg",
    url: "https://www.instagram.com/legday.acro/",
    title: "Sogndal",
    details: "<p>Sogndal bla bla bla</p>",
  },
  bergen: {
    icon: "./instagram.svg",
    url: "https://www.instagram.com/legday.acro/",
    title: "Bergen",
    details: "<p>Bergen bla bla bla kjashdkasjhd</p>",
  },
};

function populateDetails(index) {
  selected = index;

  const link = document.querySelector(".details .details-header");
  const details = document.querySelector(".details .title");
  const icon = document.querySelector(".details .social-icon");
  const content = document.querySelector(".details .content");

  link.setAttribute("href", data[index].url);
  icon.setAttribute("style", `background-image: url(${data[index].icon})`);
  details.innerHTML = data[index].title;
  content.innerHTML = data[index].details;

  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    if (marker.id === index) {
      marker.classList.add("selected");
    } else {
      marker.classList.remove("selected");
    }
  });
}

window.onload = (event) => {
  const initialIndex = Math.floor(Math.random() * Object.keys(data).length);
  populateDetails(Object.keys(data)[initialIndex]);

  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    marker.addEventListener("click", (e) => {
      populateDetails(e.target.id);
    });
  });

  const listItems = document.querySelectorAll(".list li");
  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      populateDetails(e.target.id);
    });
  });
};
