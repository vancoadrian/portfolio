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
        images: [
          '/webs/car-service/desktop/homecookies.png',
          '/webs/car-service/desktop/contact.png',
          '/webs/car-service/desktop/services.png',
          '/webs/car-service/mobile/homecookies.png',
          '/webs/car-service/mobile/homemenu.png',
          '/webs/car-service/mobile/contact.png',
        ],
      },
      {
        nameKey: 'projectsData.items.towingServiceWebsite.name',
        descriptionKey: 'projectsData.items.towingServiceWebsite.description',
        link: '#',
        images: [
          '/webs/towing-service/desktop/home.png',
          '/webs/towing-service/desktop/services.png',
          '/webs/towing-service/desktop/contact.png',
          '/webs/towing-service/mobile/home.png',
          '/webs/towing-service/mobile/services.png',
          '/webs/towing-service/mobile/contact.png',
        ],
      },
      {
        nameKey: 'projectsData.items.fishingLakeWebsite.name',
        descriptionKey: 'projectsData.items.fishingLakeWebsite.description',
        link: '#',
        images: [
          '/webs/pond/desktop/home.png',
          '/webs/pond/desktop/gallery.png',
          '/webs/pond/desktop/pricelist.png',
          '/webs/pond/desktop/contact.png',
          '/webs/pond/mobile/home.png',
          '/webs/pond/mobile/gallery.png',
          '/webs/pond/mobile/pricelist.png',
          '/webs/pond/mobile/contact.png',
        ],
      },
      {
        nameKey: 'projectsData.items.airportTransportWebsite.name',
        descriptionKey: 'projectsData.items.airportTransportWebsite.description',
        link: '#',
        images: [
          '/webs/airport-transport/desktop/home.png',
          '/webs/airport-transport/desktop/pricelist.png',
          '/webs/airport-transport/desktop/homefull.png',
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
    icon: 'mdi:forum',
    items: [
      {
        nameKey: 'projectsData.items.chatRooms.name',
        descriptionKey: 'projectsData.items.chatRooms.description',
        link: '#',
        images: [
          '/chatapp/rooms.png',
          '/chatapp/login.png',
          '/chatapp/roommembersdialog.png',
          '/chatapp/dualchat.png',
          '/chatapp/e2e6.png',
          '/chatapp/swag.png',
          '/chatapp/swag2.png',
          '/chatapp/swag3.png',
          '/chatapp/swag4.png',
          '/chatapp/swag5.png',
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
          '/proxenta/contactpoint/appicons.png',
          '/proxenta/contactpoint/login.png',
          '/proxenta/contactpoint/dashboard.png',
          '/proxenta/contactpoint/search.png',
          '/proxenta/contactpoint/profile.png',
          '/proxenta/contactpoint/export.png',
        ],
      },
      {
        nameKey: 'projectsData.items.varioStep.name',
        descriptionKey: 'projectsData.items.varioStep.description',
        link: '#',
        images: ['/microstep/variostep/sysconf.png', '/microstep/variostep/customer.png'],
      },
      {
        nameKey: 'projectsData.items.xenergie.name',
        descriptionKey: 'projectsData.items.xenergie.description',
        link: '#',
        images: ['/microstep/variostepone/treeview.png', '/microstep/variostepone/anomalydef.png'],
      },
      {
        nameKey: 'projectsData.items.varioStepOne.name',
        descriptionKey: 'projectsData.items.varioStepOne.description',
        link: '#',
        images: ['/microstep/android/1.jpeg', '/microstep/android/2.jpeg', '/microstep/android/3.jpeg', '/microstep/android/4.jpeg'],
      },
      {
        nameKey: 'projectsData.items.acon.name',
        descriptionKey: 'projectsData.items.acon.description',
        link: '#',
        images: [
          '/microstep/acon/calcoverview.png',
          '/microstep/acon/columns.png',
          '/microstep/acon/trafosvg.png',
          '/microstep/acon/export.png',
          '/microstep/acon/imports.png',
          '/microstep/acon/importstatus.png',
          '/microstep/acon/processeshistory.png',
        ],
      },
      {
        nameKey: 'projectsData.items.isafInProgress.name',
        descriptionKey: 'projectsData.items.isafInProgress.description',
        link: '#',
        images: ['/microstep/isaf/assets.png', '/microstep/isaf/customers.png', '/microstep/isaf/subpoints.png'],
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
        featured: true,
        images: ['/proxenta/vmware.png'],
      },
      { nameKey: 'projectsData.items.ms365Administration.name', descriptionKey: 'projectsData.items.ms365Administration.description', link: '#' },
      { nameKey: 'projectsData.items.sharepointAdministration.name', descriptionKey: 'projectsData.items.sharepointAdministration.description', link: '#' },
      {
        nameKey: 'projectsData.items.activeDirectoryMigration.name',
        descriptionKey: 'projectsData.items.activeDirectoryMigration.description',
        link: '#',
        featured: true,
        images: ['/proxenta/ad/info.png'],
      },
      {
        nameKey: 'projectsData.items.fileserverPermissionsMigration.name',
        descriptionKey: 'projectsData.items.fileserverPermissionsMigration.description',
        link: '#',
        images: ['/proxenta/ad/groups.png'],
        featured: true,
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
    icon: 'mdi:robot',
    items: [
      {
        nameKey: 'projectsData.items.smartMeetingRoomSolution.name',
        descriptionKey: 'projectsData.items.smartMeetingRoomSolution.description',
        link: '#',
        images: ['/confroom/smart/all.png', '/confroom/smart/setup.png'],
      },
      {
        nameKey: 'projectsData.items.conferenceRoomOnlineMeetings.name',
        descriptionKey: 'projectsData.items.conferenceRoomOnlineMeetings.description',
        link: '#',
        images: ['/confroom/meet/1.jpeg', '/confroom/meet/2.jpeg', '/confroom/meet/3.jpeg'],
      },
      {
        nameKey: 'projectsData.items.carLiftInfoWebsite.name',
        descriptionKey: 'projectsData.items.carLiftInfoWebsite.description',
        link: '#',
        images: ['/carnotifysys/3.png'],
      },
      {
        nameKey: 'projectsData.items.carLiftUnloadingNotificationSystem.name',
        descriptionKey: 'projectsData.items.carLiftUnloadingNotificationSystem.description',
        link: '#',
        images: ['/carnotifysys/1.png', '/carnotifysys/2.png'],
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
        images: ['/openvault/dashboard.png', '/openvault/1.png', '/openvault/2.jpeg'],
      },
      {
        nameKey: 'projectsData.items.raspberryPiMagicMirror.name',
        descriptionKey: 'projectsData.items.raspberryPiMagicMirror.description',
        link: '#',
        images: ['/magicmirror/3.png', '/magicmirror/2.png', '/magicmirror/1.png'],
      },
      {
        nameKey: 'projectsData.items.raspberryPiHomeAssistant.name',
        descriptionKey: 'projectsData.items.raspberryPiHomeAssistant.description',
        link: '#',
        images: ['/homeassistant/1.jpeg'],
      },
      {
        nameKey: 'projectsData.items.raspberryPiTwingateRustDesk.name',
        descriptionKey: 'projectsData.items.raspberryPiTwingateRustDesk.description',
        link: '#',
        images: ['/rustdesktwingate/1.jpeg'],
      },
      {
        nameKey: 'projectsData.items.networkRoomTemperatureMonitoring.name',
        descriptionKey: 'projectsData.items.networkRoomTemperatureMonitoring.description',
        link: '#',
        images: ['/tempmonitor/1.jpeg', '/tempmonitor/2.jpeg', '/tempmonitor/3.jpeg', '/tempmonitor/4.jpeg', '/tempmonitor/5.jpeg', '/tempmonitor/6.jpeg'],
      },
    ],
  },
  {
    categoryKey: 'projectsData.categories.diy',
    icon: 'mdi:tools',
    items: [
      {
        nameKey: 'projectsData.items.hyperlapsBoardGame.name',
        descriptionKey: 'projectsData.items.hyperlapsBoardGame.description',
        link: '#',
        images: [
          '/hyperlaps/1.png', '/hyperlaps/2.png', '/hyperlaps/3.png', '/hyperlaps/4.png', '/hyperlaps/5.png', '/hyperlaps/6.png', '/hyperlaps/7.png', '/hyperlaps/8.png', '/hyperlaps/9.png',
          '/hyperlaps/10.png', '/hyperlaps/11.png', '/hyperlaps/12.png', '/hyperlaps/13.png', '/hyperlaps/14.png', '/hyperlaps/15.png', '/hyperlaps/16.png', '/hyperlaps/17.png', '/hyperlaps/18.png',
        ],
      },
    ],
  },
];
