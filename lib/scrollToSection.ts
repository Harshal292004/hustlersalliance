const scrollToSection = ({ element_id }: { element_id: string }) => {
  setTimeout(() => {
    const element = document.getElementById(element_id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      //
    }
  }, 100);
};

export { scrollToSection };