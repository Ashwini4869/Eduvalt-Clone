// data for courses
const data = [
  {
    courseName: "Marketing",
    lessons: 9,
    duration: "17h 30m",
    title: "How to Market Yourself as a Coach or Consultant",
    totalRating: 10,
    instructor: "Mark Lassoff",
    originalPrice: "$19.00",
    discountedPrice: "$29.00",
    teacherProfile: "./assets/courses/author01.png",
    url: "./assets/courses/thumb01.png",
  },
  {
    courseName: "Graphic Design",
    lessons: 5,
    duration: "12h 30m",
    title: "A Biginer Adobe Illustrator for Graphic Design",
    totalRating: 6,
    instructor: "David Millar",
    originalPrice: "$11.00",
    teacherProfile: "./assets/courses/author02.png",
    url: "./assets/courses/thumb02.png",
  },
  {
    courseName: "Web Development",
    lessons: 8,
    duration: "14h 30m",
    title: "Become a Certified HTML, CSS, JavaScript Web Developer",
    totalRating: 8,
    instructor: "David Millar",
    originalPrice: "$29.00",
    teacherProfile: "./assets/courses/author03.png",
    url: "./assets/courses/thumb03.png",
  },
  {
    courseName: "Development",
    lessons: 12,
    duration: "15h 30m",
    title: "Running a Web Development The Complete Guide",
    totalRating: 8,
    instructor: "David Millar",
    originalPrice: "$24.00",
    discountedPrice: "$15.00",
    teacherProfile: "./assets/courses/author04.png",
    url: "./assets/courses/thumb04.png",
  },
  {
    courseName: "Photography",
    lessons: 10,
    duration: "12h 30m",
    title: "The Art of Seeing Photography training for the Artist in you",
    totalRating: 10,
    instructor: "David Millar",
    originalPrice: "$14.00",
    teacherProfile: "./assets/courses/author05.png",
    url: "./assets/courses/thumb05.png",
  },
  {
    courseName: "Finance",
    lessons: 12,
    duration: "16h 30m",
    title: "The Complete Guide to the Global Capital Markets",
    totalRating: 14,
    instructor: "David Millar",
    originalPrice: "$22.00",
    teacherProfile: "./assets/courses/author06.png",
    url: "./assets/courses/thumb06.png",
  },
];

const container = document.getElementById("card-container");

data.forEach((element, index) => {
  // create card element
  const card = document.createElement("div");
  card.classList = "card";

  const content = `
  <div class="card">
    <div class="card__thumb">
              <div class="thumb__image"><img src=${element.url} alt="Course Thumbnail"></div>
              <div class="thumb__badge">${element.courseName}</div> 
            </div>
            <div class="card__content">
              <ul class="info-list">
                <li class="info-list-item">
                  <img src="./assets/courses/page.svg" alt="page svg">
                  <p>${element.lessons} Lessons</p>
                </li>
                <li class="info-list-item">
                  <img src="./assets/courses/clock.svg" alt="Clock svg">
                  <p>${element.duration}</p>
                </li>
                <li class="info-list-item">
                  <img src="./assets/courses/students.svg" alt="Students svg">
                <p>Students</p>
                </li>
              </ul>
              <p class="card__title">
                  ${element.title}
              </p>
              <div class="card__rating">
                <img src="./assets/courses/star.svg" alt="Star svg">
                <img src="./assets/courses/star.svg" alt="Star svg">
                <img src="./assets/courses/star.svg" alt="Star svg">
                <img src="./assets/courses/star.svg" alt="Star svg">
                <img src="./assets/courses/star.svg" alt="Star svg">
                <p>(${element.totalRating})</p>
              </div>
              <div class="card__item-bottom">
                <div class="card__item-author">
                  <img src=${element.teacherProfile} alt="Course Author">
                  <p>${element.instructor}</p>
                </div>
                <p class="card__price">${element.originalPrice}</p>
              </div>
            </div>
            </div>
  `;
  container.innerHTML += content;
});
