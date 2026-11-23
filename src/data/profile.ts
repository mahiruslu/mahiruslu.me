export const profile = {
  name: "Mahir Uslu",
  /** Canonical origin; the apex mahiruslu.com redirects here. */
  siteUrl: "https://www.mahiruslu.com",
  role: "Senior Software Developer",
  currentCompany: "Innovance Consultancy",
  location: "Konya, Türkiye",
  availability: "Open to focused product work",
  email: "mhrsl07@gmail.com",
  github: {
    login: "mahiruslu",
    url: "https://github.com/mahiruslu",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/mahiruslu/",
  },
  medium: {
    url: "https://www.medium.com/@mahir.uslu/",
  },
} as const;

export const socials = [
  { label: "GitHub", href: profile.github.url },
  { label: "LinkedIn", href: profile.linkedin.url },
  { label: "Medium", href: profile.medium.url },
] as const;
