<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 via-gray-900 py-24 px-4 flex justify-center items-center">
		<div class="absolute top-6 left-6 z-20">
			<NuxtLink to="/" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition shadow">
				<Icon name="mdi:arrow-left" class="text-lg" />
				<span>Back Home</span>
			</NuxtLink>
		</div>
		<div class="w-full max-w-3xl bg-gradient-to-br from-gray-950/95 to-gray-900/90 rounded-3xl shadow-2xl border border-gray-800 p-0 overflow-hidden">
			<div class="flex flex-col items-center pt-10 pb-8 px-8 bg-gradient-to-b from-gray-950/80 to-gray-900/60 border-b border-gray-800">
				<h1 class="text-3xl font-extrabold text-gray-100 mb-1 tracking-tight">Projects</h1>
				<div class="text-gray-400 text-lg mb-2 font-medium">A selection of my work</div>
			</div>
			<div class="px-8 pb-12 pt-8">
				<div v-for="cat in projectCategories" :key="cat.category" class="mb-10">
					<h2 class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon :name="cat.icon" class="text-xl" />{{ cat.category }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-4">
						<li v-for="item in cat.items" :key="item.name">
							<button @click="openProject(item)" class="w-full text-left bg-gray-900/80 border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-2 shadow hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
								<div class="flex-1">
									<div class="font-semibold text-gray-100 text-base">{{ item.name }}</div>
									<div class="text-gray-400 text-sm mb-1">{{ item.description }}</div>
								</div>
								<div v-if="item.images && item.images.length" class="flex items-center gap-1 text-blue-400 text-sm">
									<Icon name="mdi:eye" class="text-base" />
									<span>Show more</span>
								</div>
							</button>
						</li>
					</ul>
				</div>

				<!-- Modal -->
				<div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
					<div class="bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 max-w-lg w-full p-8 relative animate-fade-in">
						<button @click="selectedProject = null" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
							<Icon name="mdi:close" />
						</button>

								<div class="mb-4">
									<div class="text-2xl font-bold text-gray-100 mb-1">{{ selectedProject.name }}</div>
									<div class="text-gray-400 mb-4">{{ selectedProject.description }}</div>
																							<div v-if="selectedProject.images && selectedProject.images.length" class="pb-2">
																								<div>
																									<button v-if="selectedProject.images[0]" @click="openLightbox(selectedProject.images[0])" class="mb-3 w-full focus:outline-none">
																										<img :src="selectedProject.images[0]" class="rounded-lg border border-gray-800 w-full max-h-64 object-cover shadow hover:scale-105 transition" />
																									</button>
																								</div>
																								<div v-if="selectedProject.images.length > 1" class="flex gap-3 overflow-x-auto max-w-full pb-1" style="scrollbar-width: thin;">
																									<div class="flex gap-3 min-w-fit">
																										<button v-for="(img, idx) in selectedProject.images.slice(1)" :key="idx" @click="openLightbox(img)" class="w-24 h-20 flex-shrink-0 focus:outline-none">
																											<img :src="img" class="rounded-lg border border-gray-800 w-full h-full object-cover shadow hover:scale-105 transition" />
																										</button>
																									</div>
																								</div>
																							</div>

														<!-- Lightbox Modal -->
														<div v-if="lightboxImage" class="fixed inset-0 z-60 flex items-center justify-center bg-black/80 select-none">
															<button @click="closeLightbox" class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none z-20 bg-gray-900/80 rounded-full p-1">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
															</button>
															<!-- Navigation arrows -->
																<button @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
															</button>
																<button @click="nextImage" class="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
															</button>
															<!-- Zoom controls -->
																<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-gray-900/90 rounded-lg px-4 py-2 z-20 border border-gray-700 shadow">
																<button @click="zoomOut" class="text-white text-2xl px-2 focus:outline-none">-</button>
																<button @click="toggleZoom" class="text-white text-lg px-2 focus:outline-none">Zoom</button>
																<button @click="zoomIn" class="text-white text-2xl px-2 focus:outline-none">+</button>
															</div>
															<img
																:src="lightboxImage"
																:style="{ transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`, cursor: zoom.value > 1 ? (isDragging ? 'grabbing' : 'grab') : 'auto' }"
																class="max-w-full max-h-[80vh] rounded-xl border border-gray-700 shadow-2xl transition-transform duration-200 z-10 select-none"
																@mousedown="onImgMouseDown"
																@mousemove="onImgMouseMove"
																@mouseup="onImgMouseUp"
																@mouseleave="onImgMouseLeave"
																@touchstart="onImgTouchStart"
																@touchmove="onImgTouchMove"
																@touchend="onImgTouchEnd"
																draggable="false"
															/>
														</div>

						</div>
						<div v-if="selectedProject.link && selectedProject.link !== '#'">
							<a :href="selectedProject.link" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-4 py-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 text-sm transition">
								<Icon name="mdi:open-in-new" class="text-base" />
								<span>Visit Project</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
function withBaseURL(path) {
	return config.public.baseURL + path.replace(/^\//, '');
}

const selectedProject = ref(null);
const lightboxImage = ref(null);
const lightboxIndex = ref(0);
const zoom = ref(1);
const panX = ref(0);
const panY = ref(0);
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });
const panStart = ref({ x: 0, y: 0 });

function openProject(item) {
  selectedProject.value = item;
  lightboxImage.value = null;
  lightboxIndex.value = 0;
  zoom.value = 1;
  panX.value = 0;
  panY.value = 0;
}

function openLightbox(img) {
  if (!selectedProject.value || !selectedProject.value.images) return;
  const idx = selectedProject.value.images.indexOf(img);
  lightboxIndex.value = idx !== -1 ? idx : 0;
  lightboxImage.value = selectedProject.value.images[lightboxIndex.value];
  zoom.value = 1;
  panX.value = 0;
  panY.value = 0;
}

function closeLightbox() {
  lightboxImage.value = null;
  zoom.value = 1;
  panX.value = 0;
  panY.value = 0;
}

function prevImage() {
  if (!selectedProject.value || !selectedProject.value.images) return;
  lightboxIndex.value = (lightboxIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length;
  lightboxImage.value = selectedProject.value.images[lightboxIndex.value];
  zoom.value = 1;
  panX.value = 0;
  panY.value = 0;
}

function nextImage() {
  if (!selectedProject.value || !selectedProject.value.images) return;
  lightboxIndex.value = (lightboxIndex.value + 1) % selectedProject.value.images.length;
  lightboxImage.value = selectedProject.value.images[lightboxIndex.value];
  zoom.value = 1;
  panX.value = 0;
  panY.value = 0;
}

function zoomIn() {
  zoom.value = Math.min(zoom.value + 0.25, 3);
  if (zoom.value === 1) {
    panX.value = 0;
    panY.value = 0;
  }
}

function zoomOut() {
  zoom.value = Math.max(zoom.value - 0.25, 1);
  if (zoom.value === 1) {
    panX.value = 0;
    panY.value = 0;
  }
}

function toggleZoom() {
  zoom.value = zoom.value === 1 ? 2 : 1;
  if (zoom.value === 1) {
    panX.value = 0;
    panY.value = 0;
  }
}

function onImgMouseDown(e) {
  if (zoom.value === 1) return;
  isDragging.value = true;
  dragStart.value = { x: e.clientX, y: e.clientY };
  panStart.value = { x: panX.value, y: panY.value };
}

function onImgMouseMove(e) {
  if (!isDragging.value) return;
  panX.value = panStart.value.x + (e.clientX - dragStart.value.x);
  panY.value = panStart.value.y + (e.clientY - dragStart.value.y);
}

function onImgMouseUp() {
  isDragging.value = false;
}

function onImgMouseLeave() {
  isDragging.value = false;
}

function onImgTouchStart(e) {
  if (zoom.value === 1) return;
  isDragging.value = true;
  const touch = e.touches[0];
  dragStart.value = { x: touch.clientX, y: touch.clientY };
  panStart.value = { x: panX.value, y: panY.value };
}

function onImgTouchMove(e) {
  if (!isDragging.value) return;
  const touch = e.touches[0];
  panX.value = panStart.value.x + (touch.clientX - dragStart.value.x);
  panY.value = panStart.value.y + (touch.clientY - dragStart.value.y);
}

function onImgTouchEnd() {
  isDragging.value = false;
}

const projectCategories = [
	{
		category: 'Presentation Websites (Nuxt)',
		icon: 'mdi:web',
		items: [
			{ 
				name: 'Car Service Website', 
				description: 'Website for a car service business with contact form and CAPTCHA. Supports dark/light mode.', 
				link: '#', 
				images: [
					"/webs/car-service/desktop/homecookies.png", 
					"/webs/car-service/desktop/contact.png", 
					"/webs/car-service/desktop/services.png", 
					"/webs/car-service/mobile/homecookies.png", 
					"/webs/car-service/mobile/homemenu.png", 
					"/webs/car-service/mobile/contact.png"
				].map(withBaseURL) 
			},
			{ 
				name: 'Towing Service Website', 
				description: 'Website for a towing service with booking form and CAPTCHA. Supports dark/light mode.', 
				link: '#', 
				images: [
					"/webs/towing-service/desktop/home.png", 
					"/webs/towing-service/desktop/services.png", 
					"/webs/towing-service/desktop/contact.png", 
					"/webs/towing-service/mobile/home.png", 
					"/webs/towing-service/mobile/services.png", 
					"/webs/towing-service/mobile/contact.png"
				].map(withBaseURL) 
			},
			{ 
				name: 'Fishing Lake Website', 
				description: 'Presentation site for a fishing lake with gallery.', 
				link: '#', 
				images: [
					"/webs/pond/desktop/home.png", 
					"/webs/pond/desktop/gallery.png", 
					"/webs/pond/desktop/pricelist.png", 
					"/webs/pond/desktop/contact.png", 
					"/webs/pond/mobile/home.png", 
					"/webs/pond/mobile/gallery.png", 
					"/webs/pond/mobile/pricelist.png", 
					"/webs/pond/mobile/contact.png"
				].map(withBaseURL) 
			},
			{ 
				name: 'Car Transport to Airport Website', 
				description: 'Presentation site for car transport to airport with price list and contact form. (EN/SK i18n)',
				link: '#', 
				images: [
					"/webs/airport-transport/desktop/home.png", 
					"/webs/airport-transport/desktop/pricelist.png", 
					"/webs/airport-transport/desktop/homefull.png"
				].map(withBaseURL) 
			},
			{ name: 'Car Detailing Website (planned)', description: 'Website for car detailing services', link: '#' },
			{ name: 'Home Cleaning Service Website (planned)', description: 'Website for home cleaning services', link: '#' },
			{ name: 'Electro Service Website (planned)', description: 'Website for electrical services', link: '#' },
		]
	},
	{
		category: 'ChatApp (Quasar + NestJS)',
		icon: 'mdi:forum',
		items: [
			{ 
				name: 'ChatRooms', 
				description: 'Real-time chat app with WebSockets, built using Quasar (Vue) for the frontend and NestJS for the backend. Features include user authentication, persistent chat history with BetterSQLite3, and comprehensive E2E testing with Cypress.', 
				link: '#', 
				images: [
					"/chatapp/rooms.png", 
					"/chatapp/login.png", 
					"/chatapp/roommembersdialog.png", 
					"/chatapp/dualchat.png",
					"/chatapp/e2e6.png"
				].map(withBaseURL) 
			},
		]
	},
	{
		category: 'Enterprise Projects (Angular)',
		icon: 'mdi:lightning-bolt',
		items: [
			{ name: 'ContactPoint PWA', description: 'PWA Internal portal connected to AD to see own business contact card and work colleagues contact cards with export features. Also works offline.', link: '#', images: ["/proxenta/contactpoint/appicons.png", "/proxenta/contactpoint/login.png", "/proxenta/contactpoint/dashboard.png", "/proxenta/contactpoint/search.png", "/proxenta/contactpoint/profile.png", "/proxenta/contactpoint/export.png"].map(withBaseURL) },
			{ name: 'VarioStep', description: 'Enterprise energy management platform', link: '#'
			// , images: ["/microstep/variostep/sysconf.png", "/microstep/variostep/customer.png"].map(withBaseURL) 
			},
			{ name: 'Xenergie', description: 'Energy data analytics and reporting system', link: '#'
			// , images: ["/microstep/variostepone/treeview.png", "/microstep/variostepone/anomalydef.png"].map(withBaseURL) 
		},
			{ name: 'VarioStep One', description: 'Android web app (.NET MAUI) for scanning QR codes to link energy devices', link: '#'
			// , images: ["/microstep/android/1.jpeg", "/microstep/android/2.jpeg", "/microstep/android/3.jpeg", "/microstep/android/4.jpeg"].map(withBaseURL) 
			},
			{ name: 'ACON', description: 'Advanced control and monitoring for energy networks', link: '#'
			// , images: ["/microstep/acon/calcoverview.png", "/microstep/acon/columns.png", "/microstep/acon/trafosvg.png", "/microstep/acon/export.png", "/microstep/acon/imports.png", "/microstep/acon/importstatus.png", "/microstep/acon/processeshistory.png"].map(withBaseURL) 
			},
			{ name: 'ISAF (in progress)', description: 'Integrated system for asset and facility management', link: '#'
			// , images: ["/microstep/isaf/assets.png", "/microstep/isaf/customers.png", "/microstep/isaf/subpoints.png"].map(withBaseURL) 
			},
		]
	},
	{
		category: 'IT Administrator',
		icon: 'mdi:server',
		items: [
			{ name: 'Server Administration', description: 'Managed Windows and Linux servers, including setup, maintenance, and troubleshooting', link: '#', images: ["/proxenta/vmware.png"].map(withBaseURL) },
			{ name: 'MS365 Administration', description: 'Administered Microsoft 365 services including Exchange, Teams, and licensing', link: '#' },
			{ name: 'SharePoint Administration', description: 'Managed and customized SharePoint sites for collaboration', link: '#' },
			{ name: 'Active Directory Migration', description: 'Migrated users and resources to Active Directory for centralized management', link: '#', images: ["/proxenta/ad/info.png"].map(withBaseURL) },
			{ name: 'Fileserver Permissions Migration', description: 'Migrated file server permissions from user-based to group-based (created 500+ groups) for easier access management', link: '#', images: ["/proxenta/ad/groups.png"].map(withBaseURL) },
			{ name: 'NAS Backups', description: 'Implemented and managed NAS server backups for data protection', link: '#' },
			{ name: 'Domain Management', description: 'Managed domains and DNS records via web admin portals (registrars, hosting providers)', link: '#' },
			{ name: 'Monitoring', description: 'Implemented monitoring solutions for servers and network infrastructure', link: '#' },
			{ name: 'Microsoft Bookings', description: 'Set up Microsoft Bookings for company car reservations', link: '#' },
			{ name: 'Microsoft Forms', description: 'Created and managed Microsoft Forms for internal processes', link: '#' },
			{ name: 'TeamViewer Management', description: 'Managed TeamViewer for remote support and access', link: '#' },
			{ name: 'IT Inventory Management', description: 'Tracked and managed company IT inventory', link: '#' },
			{ name: 'Company Apps Management', description: 'Oversaw deployment and updates of company applications', link: '#' },
			{ name: 'Bitdefender GravityZone', description: 'Managed antivirus protection with Bitdefender GravityZone', link: '#' },
			{ name: 'Fortinet Management', description: 'Configured and managed Fortinet security appliances', link: '#' },
			{ name: 'Ubiquiti Devices', description: 'Configured and maintained Ubiquiti UniFi devices for reliable networking', link: '#' },
			{ name: 'Hikvision Surveillance', description: 'Configured and managed Hikvision surveillance cameras and NVRs for security monitoring', link: '#' },
			{ name: 'Multi-Factor Authentication (MFA)', description: 'Implemented and managed MFA for enhanced security across company accounts and services', link: '#' },
		]
	},
	{
		category: 'Automation',
		icon: 'mdi:robot',
		items: [
			{ name: 'Smart Meeting Room Solution', description: 'Automated smart home solution for meeting rooms', link: '#', images: ["/confroom/smart/all.png", "/confroom/smart/setup.png"].map(withBaseURL) },
			{ name: 'Conference Room Online Meetings', description: 'Integrated conference solution for online meetings in meeting rooms', link: '#', images: ["/confroom/meet/1.jpeg", "/confroom/meet/2.jpeg", "/confroom/meet/3.jpeg"].map(withBaseURL) },
			{ name: 'Car Lift Info Website', description: 'Website providing real-time status and information about the car lift system', link: '#', images: ["/carnotifysys/3.png"].map(withBaseURL) },
			{ name: 'Car Lift Unloading Notification System', description: 'System that sends SMS and Microsoft Teams notifications when a car is unloaded from the lift', link: '#', images: ["/carnotifysys/1.png", "/carnotifysys/2.png"].map(withBaseURL) },
			{ name: 'Group Policy Automation', description: 'Automated management and deployment of Windows Group Policy Objects (GPOs)', link: '#' },
			{ name: 'CI/CD Pipelines', description: 'Automated deployment pipelines for web apps', link: '#' },
		]
	},
	{
		category: 'Electronics',
		icon: 'mdi:chip',
		items: [
			{ name: 'Raspberry Pi NAS OpenMediaVault', description: 'Network Attached Storage built with Raspberry Pi', link: '#', images: ["/openvault/dashboard.png", "/openvault/1.png", "/openvault/2.jpeg"].map(withBaseURL) },
			{ name: 'Raspberry Pi MagicMirror', description: 'MagicMirror project using Raspberry Pi for displaying presentation material', link: '#', images: ["/magicmirror/3.png", "/magicmirror/2.png", "/magicmirror/1.png"].map(withBaseURL) },
			{ name: 'Raspberry Pi HomeAssistant', description: 'HomeAssistant project using Raspberry Pi for home automation', link: '#', images: ["/homeassistant/1.jpeg"].map(withBaseURL) },
			{ name: 'Raspberry Pi Twingate VPN + RustDesk', description: 'VPN and remote desktop solution using Twingate and RustDesk on Raspberry Pi', link: '#', images: ["/rustdesktwingate/1.jpeg"].map(withBaseURL) },
			{ name: 'Network Room Temperature Monitoring', description: 'Monitoring network room temperature using ESP32, sending data to Centreon via SNMP with notifications SMS', link: '#', images: ["/tempmonitor/1.jpeg", "/tempmonitor/2.jpeg", "/tempmonitor/3.jpeg", "/tempmonitor/4.jpeg", "/tempmonitor/5.jpeg", "/tempmonitor/6.jpeg"].map(withBaseURL) },]
	},
	{
		category: 'DIY',
		icon: 'mdi:tools',
		items: [
					{ 
						name: 'Hyperlaps Board Game', 
						description: 'A custom-designed electronic board game for 2-4 players, focused on strategy and racing mechanics. Each player uses a Bluetooth ESP32 gamepad with a joystick (to slide ships), a push-button (to activate the front bumper and eject the ball), and a 10-LED bargraph (to indicate score). When the ball falls, the receiver loses a point. The last player with points left wins.', 
						link: '#' ,
						images: ["/hyperlaps/1.png", "/hyperlaps/2.png", "/hyperlaps/3.png", "/hyperlaps/4.png", "/hyperlaps/5.png", "/hyperlaps/6.png", "/hyperlaps/7.png", "/hyperlaps/8.png", "/hyperlaps/9.png", "/hyperlaps/10.png", "/hyperlaps/11.png", "/hyperlaps/12.png", "/hyperlaps/13.png", "/hyperlaps/14.png", "/hyperlaps/15.png", "/hyperlaps/16.png", "/hyperlaps/17.png", "/hyperlaps/18.png"].map(withBaseURL)
					},
		]
	},
];
</script>
