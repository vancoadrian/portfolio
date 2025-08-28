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
								<div class="flex items-center gap-1 text-blue-400 text-sm">
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
																				<div v-if="selectedProject.images.length > 1" class="flex gap-3">
																					<button v-for="(img, idx) in selectedProject.images.slice(1)" :key="idx" @click="openLightbox(img)" class="w-24 h-20 flex-shrink-0 focus:outline-none">
																						<img :src="img" class="rounded-lg border border-gray-800 w-full h-full object-cover shadow hover:scale-105 transition" />
																					</button>
																				</div>
																			</div>

														<!-- Lightbox Modal -->
														<div v-if="lightboxImage" class="fixed inset-0 z-60 flex items-center justify-center bg-black/80">
															<button @click="lightboxImage = null" class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
															</button>
															<img :src="lightboxImage" class="max-w-full max-h-[80vh] rounded-xl border border-gray-700 shadow-2xl" />
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

const selectedProject = ref(null);
const lightboxImage = ref(null);

function openProject(item) {
	selectedProject.value = item;
	lightboxImage.value = null;
}

function openLightbox(img) {
	lightboxImage.value = img;
}

const projectCategories = [
	{
		category: 'Presentation Websites (Nuxt)',
		icon: 'mdi:web',
		items: [
			{ name: 'Car Service Website', description: 'Website for a car service business', link: '#' },
			{ name: 'Fishing Lake Website', description: 'Presentation site for a fishing lake', link: '#' },
			{ name: 'Car Transport to Airport Website', description: 'Booking site for airport car transport (in progress)', link: '#' },
			{ name: 'Car Detailing Website', description: 'Website for car detailing services (planned)', link: '#' },
			{ name: 'Home Cleaning Service Website', description: 'Website for home cleaning services (planned)', link: '#' },
			{ name: 'Electro Service Website', description: 'Website for electrical services (planned)', link: '#' },
		]
	},
	{
		category: 'Enterprise Projects (Angular)',
		icon: 'mdi:lightning-bolt',
		items: [
			{ name: 'VarioStep', description: 'Enterprise energy management platform', link: '#' },
			{ name: 'Xenergie', description: 'Energy data analytics and reporting system', link: '#' },
			{ name: 'VarioStep One', description: 'Android web app (Xamarin) for scanning QR codes to link energy devices', link: '#' },
			{ name: 'ACON', description: 'Advanced control and monitoring for energy networks', link: '#' },
			{ name: 'ISAF', description: 'Integrated system for asset and facility management (in progress)', link: '#' },
		]
	},
	{
		category: 'IT Administrator',
		icon: 'mdi:server',
		items: [
			{ name: 'Server Administration', description: 'Managed Windows and Linux servers, including setup, maintenance, and troubleshooting', link: '#' },
			{ name: 'MS365 Administration', description: 'Administered Microsoft 365 services including Exchange, Teams, and licensing', link: '#' },
			{ name: 'SharePoint Administration', description: 'Managed and customized SharePoint sites for collaboration', link: '#' },
			{ name: 'Active Directory Migration', description: 'Migrated users and resources to Active Directory for centralized management', link: '#' },
			{ name: 'Fileserver Permissions Migration', description: 'Migrated file server permissions from user-based to group-based (created 500+ groups) for easier access management', link: '#' },
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
			{ name: 'Smart Meeting Room Solution', description: 'Automated smart home solution for meeting rooms', link: '#' },
			{ name: 'Conference Room Online Meetings', description: 'Integrated conference solution for online meetings in meeting rooms', link: '#' },
			{ name: 'Car Lift Info Website', description: 'Website providing real-time status and information about the car lift system', link: '#' },
			{ name: 'Car Lift Unloading Notification System', description: 'System that sends SMS and Microsoft Teams notifications when a car is unloaded from the lift', link: '#' },
			{ name: 'Group Policy Automation', description: 'Automated management and deployment of Windows Group Policy Objects (GPOs)', link: '#' },
			{ name: 'CI/CD Pipelines', description: 'Automated deployment pipelines for web apps', link: '#' },
		]
	},
	{
		category: 'Electronics',
		icon: 'mdi:chip',
		items: [
			{ name: 'Raspberry Pi NAS', description: 'Network Attached Storage built with Raspberry Pi', link: '#' },
			{ name: 'Raspberry Pi MagicMirror', description: 'MagicMirror project using Raspberry Pi for displaying presentation material', link: '#' },
			{ name: 'Network Room Temperature Monitoring', description: 'Monitoring network room temperature using ESP32 with notifications to server and SMS (planned)', link: '#' },
		]
	},
	{
		category: 'DIY',
		icon: 'mdi:tools',
		items: [
			{ 
				name: 'Hyperlaps Board Game', 
				description: 'A custom-designed electronic board game for 2-4 players, focused on strategy and racing mechanics. Each player uses a Bluetooth ESP32 gamepad with a joystick (to slide ships), a push-button (to activate the front bumper and eject the ball), and a 10-LED bargraph (to indicate score). When the ball falls, the receiver loses a point. The last player with points left wins.', 
				link: '#' 
			},
		]
	},
];
</script>
