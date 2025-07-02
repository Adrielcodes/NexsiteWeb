module.exports = {
    name: "NexSite",
    tagline: "Modern Web Development Solutions",
    email: "hello@nexsite.com",
    phoneForTel: "555-779-4407",
    phoneFormatted: "(555) 779-4407",
    address: {
        lineOne: "Brickell Financial District",
        lineTwo: "Suite 500",
        city: "Miami",
        state: "FL",
        zip: "33131",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/nexsite",
        instagram: "https://www.instagram.com/nexsite",
        twitter: "https://twitter.com/nexsite",
        linkedin: "https://linkedin.com/company/nexsite",
        github: "https://github.com/nexsite",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.nexsite.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
