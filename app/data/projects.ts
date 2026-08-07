export interface ProjectItemData {
  nameKey: string;
  descriptionKey: string;
  link: string;
  images?: string[];
  featured?: boolean;
}

export interface ProjectCategoryData {
  categoryKey: string;
  icon: string;
  items: ProjectItemData[];
}

export const projectCategoriesData: ProjectCategoryData[] = [
  {
    categoryKey: 'projectsData.categories.presentationWebsites',
    icon: 'mdi:web',
    items: [
      {
        nameKey: 'projectsData.items.carServiceWebsite.name',
        descriptionKey: 'projectsData.items.carServiceWebsite.description',
        link: '#',
        featured: true,
        images: [
          '/webs/car-service/desktop/homecookies.webp',
          '/webs/car-service/desktop/contact.webp',
          '/webs/car-service/desktop/services.webp',
          '/webs/car-service/mobile/homecookies.webp',
          '/webs/car-service/mobile/homemenu.webp',
          '/webs/car-service/mobile/contact.webp',
        ],
      },
      {
        nameKey: 'projectsData.items.towingServiceWebsite.name',
        descriptionKey: 'projectsData.items.towingServiceWebsite.description',
        link: '#',
        images: [
          '/webs/towing-service/desktop/home.webp',
          '/webs/towing-service/desktop/services.webp',
          '/webs/towing-service/desktop/contact.webp',
          '/webs/towing-service/mobile/home.webp',
          '/webs/towing-service/mobile/services.webp',
          '/webs/towing-service/mobile/contact.webp',
        ],
      },
      {
        nameKey: 'projectsData.items.fishingLakeWebsite.name',
        descriptionKey: 'projectsData.items.fishingLakeWebsite.description',
        link: '#',
        images: [
          '/webs/pond/desktop/home.webp',
          '/webs/pond/desktop/gallery.webp',
          '/webs/pond/desktop/pricelist.webp',
          '/webs/pond/desktop/contact.webp',
          '/webs/pond/mobile/home.webp',
          '/webs/pond/mobile/gallery.webp',
          '/webs/pond/mobile/pricelist.webp',
          '/webs/pond/mobile/contact.webp',
        ],
      },
      {
        nameKey: 'projectsData.items.airportTransportWebsite.name',
        descriptionKey: 'projectsData.items.airportTransportWebsite.description',
        link: '#',
        images: [
          '/webs/airport-transport/desktop/home.webp',
          '/webs/airport-transport/desktop/pricelist.webp',
          '/webs/airport-transport/desktop/homefull.webp',
        ],
      },
      {
        nameKey: 'projectsData.items.carDetailingWebsitePlanned.name',
        descriptionKey: 'projectsData.items.carDetailingWebsitePlanned.description',
        link: '#',
      },
      {
        nameKey: 'projectsData.items.homeCleaningWebsitePlanned.name',
        descriptionKey: 'projectsData.items.homeCleaningWebsitePlanned.description',
        link: '#',
      },
      {
        nameKey: 'projectsData.items.electroServiceWebsitePlanned.name',
        descriptionKey: 'projectsData.items.electroServiceWebsitePlanned.description',
        link: '#',
      },
    ],
  },
  {
    categoryKey: 'projectsData.categories.chatApp',
    icon: 'mdi:folder-open',
    items: [
      {
        nameKey: 'projectsData.items.chatRooms.name',
        descriptionKey: 'projectsData.items.chatRooms.description',
        link: '#',
        featured: true,
        images: [
          '/chatapp/rooms.webp',
          '/chatapp/login.webp',
          '/chatapp/roommembersdialog.webp',
          '/chatapp/dualchat.webp',
          '/chatapp/e2e6.webp',
          '/chatapp/swag.webp',
          '/chatapp/swag2.webp',
          '/chatapp/swag3.webp',
          '/chatapp/swag4.webp',
          '/chatapp/swag5.webp',
        ],
      },
    ],
  },
  {
    categoryKey: 'projectsData.categories.enterpriseProjects',
    icon: 'mdi:lightning-bolt',
    items: [
      {
        nameKey: 'projectsData.items.contactPointPwa.name',
        descriptionKey: 'projectsData.items.contactPointPwa.description',
        link: '#',
        images: [
          '/proxenta/contactpoint/appicons.webp',
          '/proxenta/contactpoint/login.webp',
          '/proxenta/contactpoint/dashboard.webp',
          '/proxenta/contactpoint/search.webp',
          '/proxenta/contactpoint/profile.webp',
          '/proxenta/contactpoint/export.webp',
        ],
      },
      {
        nameKey: 'projectsData.items.varioStep.name',
        descriptionKey: 'projectsData.items.varioStep.description',
        link: '#',
        images: ['/microstep/variostep/sysconf.webp', '/microstep/variostep/customer.webp'],
      },
      {
        nameKey: 'projectsData.items.xenergie.name',
        descriptionKey: 'projectsData.items.xenergie.description',
        link: '#',
        featured: true,
        images: ['/microstep/variostepone/treeview.webp', '/microstep/variostepone/anomalydef.webp'],
      },
      {
        nameKey: 'projectsData.items.varioStepOne.name',
        descriptionKey: 'projectsData.items.varioStepOne.description',
        link: '#',
        images: ['/microstep/android/1.webp', '/microstep/android/2.webp', '/microstep/android/3.webp', '/microstep/android/4.webp'],
      },
      {
        nameKey: 'projectsData.items.acon.name',
        descriptionKey: 'projectsData.items.acon.description',
        link: '#',
        images: [
          '/microstep/acon/calcoverview.webp',
          '/microstep/acon/columns.webp',
          '/microstep/acon/trafosvg.webp',
          '/microstep/acon/export.webp',
          '/microstep/acon/imports.webp',
          '/microstep/acon/importstatus.webp',
          '/microstep/acon/processeshistory.webp',
        ],
      },
      {
        nameKey: 'projectsData.items.isafInProgress.name',
        descriptionKey: 'projectsData.items.isafInProgress.description',
        link: '#',
        images: ['/microstep/isaf/assets.webp', '/microstep/isaf/customers.webp', '/microstep/isaf/subpoints.webp'],
      },
    ],
  },
  {
    categoryKey: 'projectsData.categories.itAdministrator',
    icon: 'mdi:server',
    items: [
      {
        nameKey: 'projectsData.items.serverAdministration.name',
        descriptionKey: 'projectsData.items.serverAdministration.description',
        link: '#',
        images: ['/proxenta/vmware.webp'],
      },
      { nameKey: 'projectsData.items.ms365Administration.name', descriptionKey: 'projectsData.items.ms365Administration.description', link: '#' },
      { nameKey: 'projectsData.items.sharepointAdministration.name', descriptionKey: 'projectsData.items.sharepointAdministration.description', link: '#' },
      {
        nameKey: 'projectsData.items.activeDirectoryMigration.name',
        descriptionKey: 'projectsData.items.activeDirectoryMigration.description',
        link: '#',
        images: ['/proxenta/ad/info.webp'],
      },
      {
        nameKey: 'projectsData.items.fileserverPermissionsMigration.name',
        descriptionKey: 'projectsData.items.fileserverPermissionsMigration.description',
        link: '#',
        images: ['/proxenta/ad/groups.webp'],
      },
      { nameKey: 'projectsData.items.nasBackups.name', descriptionKey: 'projectsData.items.nasBackups.description', link: '#' },
      { nameKey: 'projectsData.items.domainManagement.name', descriptionKey: 'projectsData.items.domainManagement.description', link: '#' },
      { nameKey: 'projectsData.items.monitoring.name', descriptionKey: 'projectsData.items.monitoring.description', link: '#' },
      { nameKey: 'projectsData.items.microsoftBookings.name', descriptionKey: 'projectsData.items.microsoftBookings.description', link: '#' },
      { nameKey: 'projectsData.items.microsoftForms.name', descriptionKey: 'projectsData.items.microsoftForms.description', link: '#' },
      { nameKey: 'projectsData.items.teamViewerManagement.name', descriptionKey: 'projectsData.items.teamViewerManagement.description', link: '#' },
      { nameKey: 'projectsData.items.itInventoryManagement.name', descriptionKey: 'projectsData.items.itInventoryManagement.description', link: '#' },
      { nameKey: 'projectsData.items.companyAppsManagement.name', descriptionKey: 'projectsData.items.companyAppsManagement.description', link: '#' },
      { nameKey: 'projectsData.items.bitdefenderGravityZone.name', descriptionKey: 'projectsData.items.bitdefenderGravityZone.description', link: '#' },
      { nameKey: 'projectsData.items.fortinetManagement.name', descriptionKey: 'projectsData.items.fortinetManagement.description', link: '#' },
      { nameKey: 'projectsData.items.ubiquitiDevices.name', descriptionKey: 'projectsData.items.ubiquitiDevices.description', link: '#' },
      { nameKey: 'projectsData.items.hikvisionSurveillance.name', descriptionKey: 'projectsData.items.hikvisionSurveillance.description', link: '#' },
      { nameKey: 'projectsData.items.multiFactorAuthentication.name', descriptionKey: 'projectsData.items.multiFactorAuthentication.description', link: '#' },
    ],
  },
  {
    categoryKey: 'projectsData.categories.automation',
    icon: 'mdi:lightning-bolt',
    items: [
      {
        nameKey: 'projectsData.items.smartMeetingRoomSolution.name',
        descriptionKey: 'projectsData.items.smartMeetingRoomSolution.description',
        link: '#',
        images: ['/confroom/smart/all.webp', '/confroom/smart/setup.webp'],
      },
      {
        nameKey: 'projectsData.items.conferenceRoomOnlineMeetings.name',
        descriptionKey: 'projectsData.items.conferenceRoomOnlineMeetings.description',
        link: '#',
        images: ['/confroom/meet/1.webp', '/confroom/meet/2.webp', '/confroom/meet/3.webp'],
      },
      {
        nameKey: 'projectsData.items.carLiftInfoWebsite.name',
        descriptionKey: 'projectsData.items.carLiftInfoWebsite.description',
        link: '#',
        images: ['/carnotifysys/3.webp'],
      },
      {
        nameKey: 'projectsData.items.carLiftUnloadingNotificationSystem.name',
        descriptionKey: 'projectsData.items.carLiftUnloadingNotificationSystem.description',
        link: '#',
        images: ['/carnotifysys/1.webp', '/carnotifysys/2.webp'],
      },
      { nameKey: 'projectsData.items.groupPolicyAutomation.name', descriptionKey: 'projectsData.items.groupPolicyAutomation.description', link: '#' },
      { nameKey: 'projectsData.items.ciCdPipelines.name', descriptionKey: 'projectsData.items.ciCdPipelines.description', link: '#' },
    ],
  },
  {
    categoryKey: 'projectsData.categories.electronics',
    icon: 'mdi:chip',
    items: [
      {
        nameKey: 'projectsData.items.raspberryPiNasOpenMediaVault.name',
        descriptionKey: 'projectsData.items.raspberryPiNasOpenMediaVault.description',
        link: '#',
        images: ['/openvault/dashboard.webp', '/openvault/1.webp', '/openvault/2.webp'],
      },
      {
        nameKey: 'projectsData.items.raspberryPiMagicMirror.name',
        descriptionKey: 'projectsData.items.raspberryPiMagicMirror.description',
        link: '#',
        images: ['/magicmirror/3.webp', '/magicmirror/2.webp', '/magicmirror/1.webp'],
      },
      {
        nameKey: 'projectsData.items.raspberryPiHomeAssistant.name',
        descriptionKey: 'projectsData.items.raspberryPiHomeAssistant.description',
        link: '#',
        images: ['/homeassistant/1.webp'],
      },
      {
        nameKey: 'projectsData.items.raspberryPiTwingateRustDesk.name',
        descriptionKey: 'projectsData.items.raspberryPiTwingateRustDesk.description',
        link: '#',
        images: ['/rustdesktwingate/1.webp'],
      },
      {
        nameKey: 'projectsData.items.networkRoomTemperatureMonitoring.name',
        descriptionKey: 'projectsData.items.networkRoomTemperatureMonitoring.description',
        link: '#',
        images: ['/tempmonitor/1.webp', '/tempmonitor/2.webp', '/tempmonitor/3.webp', '/tempmonitor/4.webp', '/tempmonitor/5.webp', '/tempmonitor/6.webp'],
      },
    ],
  },
  {
    categoryKey: 'projectsData.categories.diy',
    icon: 'mdi:chip',
    items: [
      {
        nameKey: 'projectsData.items.hyperlapsBoardGame.name',
        descriptionKey: 'projectsData.items.hyperlapsBoardGame.description',
        link: '#',
        images: [
          '/hyperlaps/1.webp', '/hyperlaps/2.webp', '/hyperlaps/3.webp', '/hyperlaps/4.webp', '/hyperlaps/5.webp', '/hyperlaps/6.webp', '/hyperlaps/7.webp', '/hyperlaps/8.webp', '/hyperlaps/9.webp',
          '/hyperlaps/10.webp', '/hyperlaps/11.webp', '/hyperlaps/12.webp', '/hyperlaps/13.webp', '/hyperlaps/14.webp', '/hyperlaps/15.webp', '/hyperlaps/16.webp', '/hyperlaps/17.webp', '/hyperlaps/18.webp',
        ],
      },
    ],
  },
];
