const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');

const endpoints = {
  navbar: `${publicUrl}/profile/navbar.json`,
  routes: `${publicUrl}/profile/routes.json`,
  home: `${publicUrl}/profile/home.json`,
  social: `${publicUrl}/profile/social.json`,
  about: `${publicUrl}/profile/about.json`,
  skills: `${publicUrl}/profile/skills.json`,
  education: `${publicUrl}/profile/education.json`,
  experiences: `${publicUrl}/profile/experiences.json`,
  projects: `${publicUrl}/profile/projects.json`,
};

export default endpoints;
