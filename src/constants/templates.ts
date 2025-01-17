export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software developmental Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <html>
      <head>
        <title>Software Proposal</title>
      </head>
      <body>
        <p><strong>Title:</strong> [Software Title]</p>
        <h1>Software Proposal</h1>
        <p><strong>Prepared By:</strong> [Your Name]</p>
        <p><strong>Date:</strong> [Date]</p>
        <h2>Introduction</h2>
        <p>[Introduction Content]</p>
        <h2>Objectives</h2>
        <ul>
          <li>[Objective 1]</li>
          <li>[Objective 2]</li>
        </ul>
        <h2>Scope</h2>
        <p>[Scope Content]</p>
        <h2>Technical Details</h2>
        <p>[Technical Details Content]</p>
      </body>
      </html>`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <html>
      <head>
      <title>Project Proposal</title>
      </head>
      <body>
      <h1>Project Proposal</h1>
      <p><strong>Project Title:</strong> [Project Title]</p>
      <p><strong>Proposed By:</strong> [Your Name]</p>
      <h2>Overview</h2>
      <p>[Project Overview]</p>
      <h2>Goals</h2>
      <ul>
        <li>[Goal 1]</li>
        <li>[Goal 2]</li>
      </ul>
      <h2>Timeline</h2>
      <p>[Timeline Details]</p>
      </body>
      </html>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<html>
<head>
    <title>Business Letter</title>
</head>
<body>
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Date]</p>

    <p>[Recipient Name]</p>
    <p>[Recipient Title]</p>
    <p>[Company Name]</p>
    <p>[Company Address]</p>
    <p>[City, State, ZIP Code]</p>

    <p>Dear [Recipient Name],</p>
    <p>[Letter Content]</p>
    <p>Sincerely,</p>
    <p>[Your Name]</p>
</body>
</html>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <html>
<head>
    <title>Resume</title>
</head>
<body>
    <h1>[Your Name]</h1>
    <p>[Your Contact Information]</p>

    <h2>Objective</h2>
    <p>[Objective Statement]</p>

    <h2>Experience</h2>
    <h3>[Job Title] at [Company Name]</h3>
    <p>[Job Description]</p>

    <h2>Education</h2>
    <h3>[Degree] from [Institution]</h3>
    <p>[Details]</p>
</body>
</html>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <html>
<head>
    <title>Cover Letter</title>
</head>
<body>
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Date]</p>

    <p>[Recipient Name]</p>
    <p>[Recipient Title]</p>
    <p>[Company Name]</p>
    <p>[Company Address]</p>
    <p>[City, State, ZIP Code]</p>

    <p>Dear [Recipient Name],</p>
    <p>[Introduction Paragraph]</p>
    <p>[Body Paragraphs]</p>
    <p>[Closing Paragraph]</p>
    <p>Sincerely,</p>
    <p>[Your Name]</p>
</body>
</html>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <html>
<head>
    <title>General Letter</title>
</head>
<body>
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Date]</p>

    <p>[Recipient Name]</p>
    <p>[Recipient Title]</p>
    <p>[Company/Organization]</p>
    <p>[Address]</p>
    <p>[City, State, ZIP Code]</p>

    <p>Dear [Recipient Name],</p>
    <p>[Letter Content]</p>
    <p>Sincerely,</p>
    <p>[Your Name]</p>
</body>
</html>
    `,
  },
];
