export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const scrollToSectionWithPreselect = (sectionId: string, sessionType?: string) => {
  if (sessionType) {
    // Store the session type in sessionStorage for the contact form to pick up
    sessionStorage.setItem('preselectedSessionType', sessionType);
  }
  scrollToSection(sectionId);
};