import blogImage1 from "../assets/img/1.png";
import blogImage2 from "../assets/img/2.png";
import blogImage3 from "../assets/img/3.png";
import blogImage4 from "../assets/img/4.png";
import blogImage5 from "../assets/img/5.png";

const blogCardsData = [
  {
    src: blogImage1,
    alt: "Blog 1",
    date: "Сент 26, 2021",
    title: "GPT-3 и OpenAI – это будущее. Давайте разберемся, как это?",
    link: {
      href: "#",
      title: "Читать полную статью",
    },
    isLarge: true,
  },
  {
    src: blogImage2,
    alt: "Blog 2",
    date: "Сент 26, 2021",
    title: "GPT-3 и OpenAI – это будущее. Давайте разберемся, как это?",
    link: {
      href: "#",
      title: "Читать полную статью",
    },
  },
  {
    src: blogImage4,
    alt: "Blog 3",
    date: "Сент 26, 2021",
    title: "GPT-3 и OpenAI – это будущее. Давайте разберемся, как это?",
    link: {
      href: "#",
      title: "Читать полную статью",
    },
  },
  {
    src: blogImage3,
    alt: "Blog 4",
    date: "Сент 26, 2021",
    title: "GPT-3 и OpenAI – это будущее. Давайте разберемся, как это?",
    link: {
      href: "#",
      title: "Читать полную статью",
    },
  },
  {
    src: blogImage5,
    alt: "Blog 5",
    date: "Сент 26, 2021",
    title: "GPT-3 и OpenAI – это будущее. Давайте разберемся, как это?",
    link: {
      href: "#",
      title: "Читать полную статью",
    },
  },
];

const blogData = {
  header: "Многое Происходит,\nМы Ведем об Этом Блог.",
  blogCardsData,
};

export default blogData;
