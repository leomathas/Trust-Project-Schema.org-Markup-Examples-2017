export default function generateTrustProjectData() {
  return `
  {
  "@context": "http://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "The Daily Beast",
  "ethicsPolicy": "https://www.thedailybeast.com/company/code-of-ethics", // Add #bookmark to policy section on page
  "masthead": "https://www.thedailybeast.com/company/about-us", // Add #bookmark to exact masthead section on page if it does not start at the top 
  "missionCoveragePrioritiesPolicy": "https://www.thedailybeast.com/company/about-us", //Add #bookmark to exact section 
  "foundingDate": "10-06-2008",
  "diversityPolicy": "https://www.thedailybeast.com/company/code-of-ethics", // Add #bookmark to policy section on page
  "correctionsPolicy": "https://www.thedailybeast.com/company/code-of-ethics", // Add #bookmark to policy section on page
  "unnamedSourcesPolicy": "https://www.thedailybeast.com/company/code-of-ethics", // Add #bookmark to policy section on page
  "ownershipFundingInfo": "https://www.thedailybeast.com/company/about-us", //Add #bookmark to policy section on page
  "contactPoint" : [{
          "@type" : "ContactPoint",
          "contactType" : "Newsroom Contact",
          "email" : "editorial@thedailybeast.com",
          "url" : "https://www.thedailybeast.com/company/contact-us"
    }].   // Add the second contact point, Public Engagement, in addition the Newsroom Contact.   
  }`;
}
