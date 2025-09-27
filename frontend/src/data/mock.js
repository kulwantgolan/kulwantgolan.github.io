export const portfolioData = {
  hero: {
    name: {
      firstName: "KULWANT",
      lastName: "KUMAR"
    },
    tagline: "Cyber Security Leader & IRAP Assessor",
    description: "Seasoned Cyber Security Professional with 13+ years across private, public, and defence sectors. I lead initiatives end-to-end—from capability development and governance to hands-on assessments—aligning complex systems with business goals to deliver transformative results.",
    contact: {
      location: "Parkside, South Australia",
      email: "kulwantgolan@gmail.com",
      phone: "0432 669 023"
    },
    badges: [
      "Australian Citizen",
      "Security Clearance: NV1"
    ],
    cta: {
      primary: {
        text: "View My Work",
        target: "#experience"
      },
      secondary: {
        text: "Get In Touch",
        target: "#contact"
      }
    }
  },
  about: {
    title: "About",
    content: [
      "I've delivered security outcomes for government and industry, including Defence and critical infrastructure. Recent work spans IRAP readiness, ISM/PSPF alignment, Essential Eight enablement, cloud security architecture, and large-scale governance uplift.",
      "I bridge executive priorities and technical depth—leading teams, shaping strategy, and shipping secure systems."
    ]
  },
  skills: {
    title: "Skills",
    categories: {
      technical: {
        title: "Technical",
        items: [
          "PowerShell, Bash, Ruby on Rails, C++, Delphi",
          "Cloud: AWS, Azure; Virtualization: VMware",
          "Infrastructure: LAN, hybrid/cloud; Kubernetes; Terraform; CI/CD; ELK",
          "Tools/Platforms: ServiceNow, ERP solutions, Microsoft 365"
        ]
      },
      security: {
        title: "Security & Governance",
        items: [
          "IRAP Readiness • ISM/PSPF • AESCSF • ISO 27001 • TDIF",
          "Security architecture & risk • Governance uplift • Audit & advisory",
          "DevSecOps & container security • Continuous monitoring • Incident response"
        ]
      }
    }
  },
  experience: {
    title: "Experience",
    positions: [
      {
        company: "KPMG",
        role: "Cyber Associate Director (Adelaide)",
        period: "Jul 2024 – Present",
        description: "Lead security stream for a landmark SA Government multi-year program; review architecture and provide ongoing security leadership for solution build, deployment, and management (Aug 2024–ongoing).",
        highlights: []
      },
      {
        company: "KPMG",
        role: "Cyber Security Manager & IRAP Assessor",
        period: "Jul 2023 – Jun 2024",
        description: "Managed a team delivering assessments, IT audit/advisory, and security posture uplift across energy, healthcare, education, defence, and tech.",
        highlights: [
          "Queensland Health: early-stage security assessment & architecture review (Jun–Jul 2024)",
          "Melbourne Polytechnic: ISM compliance implementation (May 2023–ongoing)",
          "Mediabrands: pre-IRAP for cloud apps (Apr–Jun 2024)",
          "Navantia Australia: pre-IRAP for Azure landing zone (Feb–Apr 2024)",
          "Teradata: pre-IRAP using CCM; authored SSP, IRP, Continuous Monitoring Plan (Jan 2024–ongoing)",
          "AGIG: AESCSF v2 assessment across 4 environments in one month; compliance report (Oct–Dec 2023)",
          "RAAF 462SQN: Certificate of Appreciation & Commanding Officer's coin (Aug–Sep 2023)"
        ]
      },
      {
        company: "KPMG",
        role: "Senior Consultant",
        period: "Jun 2022 – Jun 2023",
        description: "Delivered strategic security assessments and compliance initiatives across diverse sectors.",
        highlights: [
          "Autodesk (US): IRAP readiness (May–Jul 2023)",
          "ACSC: Essential Eight Assessment course design & delivery (Jan–Jun 2023)",
          "Mitsubishi Motors: governance & risk uplift (Nov–Dec 2022)",
          "Services Australia: cloud security assessment (Sep–Nov 2022)",
          "VMware (US): IRAP readiness (Aug–Nov 2022)",
          "Telstra: TDIF & ISM compliance (Aug 2022)",
          "TAFE SA: cyber strategy (Jun–Jul 2022)"
        ],
        recognition: "Letter from ASD Assistant Director-General for the Essential Eight course."
      },
      {
        company: "Catapult Smallprint",
        role: "IT Infrastructure Manager (Adelaide)",
        period: "Jul 2019 – Jun 2022",
        description: "Led platform transformation from monolith to microservices; Kubernetes on AWS; DevSecOps in CI/CD; introduced ELK; data-centre relocation with minimal disruption.",
        highlights: []
      },
      {
        company: "Smallprint Australia",
        role: "System Administrator (Adelaide)",
        period: "Jan 2012 – Jun 2019",
        description: "Managed servers (AD, app, DB), virtualization (Hyper-V/VMware), networks, security, backups, ERP (Ostendo, MYOB, HR3), web hosting; delivered 40% revenue lift via new e-commerce site.",
        highlights: []
      }
    ]
  },
  certifications: {
    title: "Certifications",
    items: [
      { name: "CISM", year: "2024" },
      { name: "ISO 27001 Lead Auditor", year: "2024" },
      { name: "IRAP Assessor", year: "2023" },
      { name: "CISA", year: "2022" },
      { name: "CISSP", year: "2021" },
      { name: "CKS", year: "2021" },
      { name: "Terraform Associate", year: "2021" },
      { name: "SOC Analyst Training", year: "2021" },
      { name: "CKA", year: "2020" },
      { name: "CKAD", year: "2020" },
      { name: "AWS Security Specialty", year: "2020" },
      { name: "CCNA", year: "2012" },
      { name: "MCITP", year: "2012" }
    ]
  },
  education: {
    title: "Education",
    degrees: [
      {
        institution: "University of South Australia",
        degree: "Masters of Professional Computing",
        year: "2008",
        grade: "GPA 5.2/7"
      },
      {
        institution: "Punjab Technical University",
        degree: "B.Tech (Computer Science)",
        year: "2005",
        grade: "72%"
      }
    ]
  },
  contact: {
    title: "Contact",
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true }
      ]
    }
  },
  navigation: [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CERTIFICATIONS", href: "#certifications" },
    { name: "EDUCATION", href: "#education" },
    { name: "CONTACT", href: "#contact" }
  ]
};