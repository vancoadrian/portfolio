export interface CvWorkExperienceData {
  titleKey: string;
  company: string;
  periodKey: string;
  descriptionKey: string;
}

export interface CvSkillGroupData {
  titleKey: string;
  icon: string;
  /** Plain labels rendered as-is (tech/tool names, not translated). */
  skills?: string[];
  /** i18n keys, for translatable skills (soft skills). */
  skillKeys?: string[];
}

export interface CvCertificateData {
  nameKey: string;
  year: string;
}

export const workExperienceData: CvWorkExperienceData[] = [
  {
    titleKey: 'cvPage.jobItSpecialist',
    company: 'PROXENTA Support s.r.o.',
    periodKey: 'cvPage.periodItSpecialist',
    descriptionKey: 'cvPage.jobItSpecialistDesc',
  },
  {
    titleKey: 'cvPage.jobAppDeveloper',
    company: 'MicroStep - HDO s.r.o.',
    periodKey: 'cvPage.periodAppDeveloper',
    descriptionKey: 'cvPage.jobAppDeveloperDesc',
  },
];

export const skillGroupsData: CvSkillGroupData[] = [
  {
    titleKey: 'cvPage.programming',
    icon: 'mdi:code-tags',
    skills: [
      'Nuxt.js',
      'Angular',
      'Tailwind CSS',
      'Python',
      'R',
      'Solidity',
      'Blockchain',
      'Laravel',
      'Xamarin',
      'C# .NET',
      'Java',
      'Figma',
      'Jira',
      'Vercel',
      'Azure',
      'Supabase',
      'Automation',
      'Electronics',
    ],
  },
  {
    titleKey: 'cvPage.itAdministration',
    icon: 'mdi:server',
    skills: [
      'Active Directory',
      'MS365',
      'SharePoint',
      'Server Administration',
      'Network Administration',
      'Fortinet',
      'Ubiquiti',
      'NAS',
      'IoT',
      'SmartHome Solutions',
      'VMWare',
      'Bitdefender GravityZone',
      'Hikvision',
      'Android',
      'iOS',
      'DIY',
    ],
  },
  {
    titleKey: 'cvPage.softSkills',
    icon: 'mdi:account-group',
    skillKeys: [
      'cvPage.teamwork',
      'cvPage.communication',
      'cvPage.problemSolving',
      'cvPage.adaptability',
      'cvPage.timeManagement',
      'cvPage.uiuxDesign',
      'cvPage.algorithmicThinking',
    ],
  },
];

export const certificatesData: CvCertificateData[] = [
  { nameKey: 'cvPage.certIet', year: '2024' },
  { nameKey: 'cvPage.certGoogleAi', year: '2024' },
  { nameKey: 'cvPage.certCcna', year: '2019' },
  { nameKey: 'cvPage.certElectrical', year: '2019' },
];
