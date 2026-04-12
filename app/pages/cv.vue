<template>
	<div
		class="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 via-gray-900 py-24 px-4 flex justify-center items-center">
		<div class="absolute top-6 left-6 z-20">
			<NuxtLink to="/"
				class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition shadow">
				<Icon name="mdi:arrow-left" class="text-lg" />
				<span>Back Home</span>
			</NuxtLink>
		</div>
		<div
			class="w-full max-w-2xl bg-gradient-to-br from-gray-950/95 to-gray-900/90 rounded-3xl shadow-2xl border border-gray-800 p-0 overflow-hidden">
			<!-- Profile Card -->
			<div
				class="flex flex-col items-center pt-12 pb-10 px-10 bg-gradient-to-b from-gray-950/80 to-gray-900/60 border-b border-gray-800">
				<div
					class="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 border-4 border-gray-700 flex items-center justify-center mb-4 shadow-lg ring-4 ring-gray-900 overflow-hidden">
					<img v-if="profileImage" :src="profileImage" alt="Profile" class="object-cover w-full h-full" />
					<Icon v-else name="mdi:account" class="text-6xl text-gray-400" />
				</div>
				<h1 class="text-3xl font-extrabold text-gray-100 mb-1 tracking-tight">Adrian Vančo</h1>
				<div class="text-gray-400 text-lg mb-2 font-medium">Full-Stack Developer & IT Specialist</div>
				<div class="text-gray-500 text-md">Bratislava, Slovakia</div>
			</div>
			<!-- Main Content -->
			<div class="px-10 pb-12 pt-8">
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:school" class="text-xl" />Education
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">Master's degree (Intelligent Software Systems)
							</span>, FIIT STU <span class="text-gray-400">(2024-Present)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">Bachelor's degree (Informatics)</span>, FIIT STU
							<span class="text-gray-400">(2019-2024)</span>
							<a href="https://github.com/vancoadrian/school" target="_blank"
								class="text-blue-400 underline ml-2">GitHub School</a>
							<div class="text-gray-400 text-sm mt-1 pl-2">
								Bachelor thesis: Developed a decentralized application marketplace utilizing IPv4
								addresses on the IOTA network, with smart contracts in Solidity and a frontend in
								Angular integrated with MetaMask.
								<a href="https://opac.crzp.sk/?fn=detailBiblioFormChildA3JN7&sid=AA9A59A4FA5B9CCA5E9C4B07A76D&seo=CRZP-detail-kniha"
									target="_blank" class="text-blue-400 underline ml-1">View thesis</a>
								<button @click="showThesisImages = true"
									class="ml-3 px-3 py-1 rounded bg-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white transition text-xs font-medium border border-gray-700">View
									Images</button>
							</div>

							<!-- Thesis Images Modal (projects-style) -->
							<div v-if="showThesisImages"
								class="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
								<div
									class="bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 max-w-lg w-full p-8 relative animate-fade-in">
									<button @click="closeThesisModal"
										class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											stroke="currentColor" class="w-8 h-8">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
									<div class="mb-4">
										<div class="text-2xl font-bold text-gray-100 mb-1">Thesis Images</div>
										<div class="text-gray-400 mb-4">Screenshots and diagrams from my BP thesis</div>
										<div v-if="thesisImages.length"
											class="flex gap-3 overflow-x-auto max-w-full pb-1"
											style="scrollbar-width: thin;">
											<div class="flex gap-3 min-w-fit">
												<button v-for="(img, idx) in thesisImages" :key="idx"
													@click="openThesisLightbox(idx)"
													class="w-32 h-24 flex-shrink-0 focus:outline-none">
													<img :src="img"
														class="rounded-lg border border-gray-800 w-full h-full object-cover shadow hover:scale-105 transition" />
												</button>
											</div>
										</div>
									</div>
									<!-- Lightbox Modal -->
									<div v-if="lightboxThesisIndex !== null"
										class="fixed inset-0 z-60 flex items-center justify-center bg-black/80 select-none">
										<button @click="closeThesisLightbox"
											class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none z-20 bg-gray-900/80 rounded-full p-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-8 h-8">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
										<!-- Navigation arrows -->
										<button @click="prevThesisImage"
											class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-7 h-7">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M15 19l-7-7 7-7" />
											</svg>
										</button>
										<button @click="nextThesisImage"
											class="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-7 h-7">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 5l7 7-7 7" />
											</svg>
										</button>
										<!-- Zoom controls -->
										<div
											class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-gray-900/90 rounded-lg px-4 py-2 z-20 border border-gray-700 shadow">
											<button @click="zoomThesisOut"
												class="text-white text-2xl px-2 focus:outline-none">-</button>
											<button @click="toggleThesisZoom"
												class="text-white text-lg px-2 focus:outline-none">Zoom</button>
											<button @click="zoomThesisIn"
												class="text-white text-2xl px-2 focus:outline-none">+</button>
										</div>
										<img :src="thesisImages[lightboxThesisIndex]"
											:style="{ transform: `scale(${thesisZoom}) translate(${thesisPanX / thesisZoom}px, ${thesisPanY / thesisZoom}px)`, cursor: thesisZoom > 1 ? (thesisDragging ? 'grabbing' : 'grab') : 'auto' }"
											class="max-w-full max-h-[80vh] rounded-xl border border-gray-700 shadow-2xl transition-transform duration-200 z-10 select-none"
											@mousedown="onThesisImgMouseDown" @mousemove="onThesisImgMouseMove"
											@mouseup="onThesisImgMouseUp" @mouseleave="onThesisImgMouseLeave"
											@touchstart="onThesisImgTouchStart" @touchmove="onThesisImgTouchMove"
											@touchend="onThesisImgTouchEnd" draggable="false" />
									</div>
								</div>
							</div>
						</li>
						<li>
							<span class="font-semibold text-gray-100"> Technical School of electrical engineering
								(Computer systems)</span> <span class="text-gray-400">(2015-2019)</span>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:briefcase" class="text-xl" />Work Experience
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-5">
						<li>
							<div class="font-semibold text-gray-100 text-base">IT Specialist</div>
							<div class="text-gray-400">PROXENTA Support s.r.o.<span
									class="text-gray-500">(2022-Present)</span></div>
							<div class="text-gray-300 text-sm mt-1">Managing Active Directory, servers, MS365, and
								network infrastructure for an investment company.</div>
						</li>
						<li>
							<div class="font-semibold text-gray-100 text-base">Application Developer</div>
							<div class="text-gray-400">MicroStep - HDO s.r.o. <span class="text-gray-500">(2022-February
									2026)</span></div>
							<div class="text-gray-300 text-sm mt-1">Developing web applications in Angular for the
								energy sector. Built a mobile web app using Xamarin.</div>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:star" class="text-xl" />Skills
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<div class="mb-4">
						<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2">
							<Icon name="mdi:code-tags" class="text-base" />Programming
						</h3>
						<ul class="flex flex-wrap gap-3">
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Nuxt.js</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Angular</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Tailwind CSS</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Python</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">R
							</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Solidity</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Blockchain</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Laravel</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Xamarin</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">C#
								.NET</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Java
							</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Figma</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Jira
							</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Vercel</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Azure</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Supabase</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Automation</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Electronics</li>
						</ul>
					</div>
					<div class="mb-4">
						<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2">
							<Icon name="mdi:server" class="text-base" />IT Administration
						</h3>
						<ul class="flex flex-wrap gap-3">
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Active Directory</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								MS365</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								SharePoint</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Server Administration</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Network Administration</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Fortinet</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Ubiquiti</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">NAS
							</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">IoT
							</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								SmartHome Solutions</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								VMWare</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Bitdefender GravityZone</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Hikvision</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Android</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">iOS
							</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">DIY
							</li>
						</ul>
					</div>
					<div>
						<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2">
							<Icon name="mdi:account-group" class="text-base" />Soft Skills
						</h3>
						<ul class="flex flex-wrap gap-3">
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Teamwork</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Communication</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Problem Solving</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Adaptability</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Time
								Management</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								UI/UX Design</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								Algorithmic Thinking</li>
						</ul>
					</div>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section>
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:certificate" class="text-xl" />Certificates
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">IET Accreditation</span> <span
								class="text-gray-400">(2024)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">Google AI Essentials</span> <span
								class="text-gray-400">(2024)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">CCNA 1, 2, IoT</span> <span
								class="text-gray-400">(2019)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">§ 21 - Certificate of Professional Competence in
								Electrical Engineering</span> <span class="text-gray-400">(2019)</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const config = useRuntimeConfig();
const profileImage = ref(config.public.baseURL + 'linkedin.jpg');

const showThesisImages = ref(false);
const lightboxThesisIndex = ref(null);
const thesisZoom = ref(1);
const thesisPanX = ref(0);
const thesisPanY = ref(0);
const thesisDragging = ref(false);
const thesisDragStart = ref({ x: 0, y: 0 });
const thesisPanStart = ref({ x: 0, y: 0 });

function openThesisLightbox(idx) {
	lightboxThesisIndex.value = idx;
	thesisZoom.value = 1;
	thesisPanX.value = 0;
	thesisPanY.value = 0;
}
function closeThesisLightbox() {
	lightboxThesisIndex.value = null;
	thesisZoom.value = 1;
	thesisPanX.value = 0;
	thesisPanY.value = 0;
}
function closeThesisModal() {
	showThesisImages.value = false;
	closeThesisLightbox();
}
function prevThesisImage() {
	if (lightboxThesisIndex.value === null) return;
	lightboxThesisIndex.value = (lightboxThesisIndex.value - 1 + thesisImages.length) % thesisImages.length;
	thesisZoom.value = 1;
	thesisPanX.value = 0;
	thesisPanY.value = 0;
}
function nextThesisImage() {
	if (lightboxThesisIndex.value === null) return;
	lightboxThesisIndex.value = (lightboxThesisIndex.value + 1) % thesisImages.length;
	thesisZoom.value = 1;
	thesisPanX.value = 0;
	thesisPanY.value = 0;
}
function zoomThesisIn() {
	thesisZoom.value = Math.min(thesisZoom.value + 0.25, 3);
	if (thesisZoom.value === 1) {
		thesisPanX.value = 0;
		thesisPanY.value = 0;
	}
}
function zoomThesisOut() {
	thesisZoom.value = Math.max(thesisZoom.value - 0.25, 1);
	if (thesisZoom.value === 1) {
		thesisPanX.value = 0;
		thesisPanY.value = 0;
	}
}
function toggleThesisZoom() {
	thesisZoom.value = thesisZoom.value === 1 ? 2 : 1;
	if (thesisZoom.value === 1) {
		thesisPanX.value = 0;
		thesisPanY.value = 0;
	}
}
function onThesisImgMouseDown(e) {
	if (thesisZoom.value === 1) return;
	thesisDragging.value = true;
	thesisDragStart.value = { x: e.clientX, y: e.clientY };
	thesisPanStart.value = { x: thesisPanX.value, y: thesisPanY.value };
}
function onThesisImgMouseMove(e) {
	if (!thesisDragging.value) return;
	thesisPanX.value = thesisPanStart.value.x + (e.clientX - thesisDragStart.value.x);
	thesisPanY.value = thesisPanStart.value.y + (e.clientY - thesisDragStart.value.y);
}
function onThesisImgMouseUp() {
	thesisDragging.value = false;
}
function onThesisImgMouseLeave() {
	thesisDragging.value = false;
}
function onThesisImgTouchStart(e) {
	if (thesisZoom.value === 1) return;
	thesisDragging.value = true;
	const touch = e.touches[0];
	thesisDragStart.value = { x: touch.clientX, y: touch.clientY };
	thesisPanStart.value = { x: thesisPanX.value, y: thesisPanY.value };
}
function onThesisImgTouchMove(e) {
	if (!thesisDragging.value) return;
	const touch = e.touches[0];
	thesisPanX.value = thesisPanStart.value.x + (touch.clientX - thesisDragStart.value.x);
	thesisPanY.value = thesisPanStart.value.y + (touch.clientY - thesisDragStart.value.y);
}
function onThesisImgTouchEnd() {
	thesisDragging.value = false;
}
const thesisImages = [
	config.public.baseURL + 'bp/ActivityAddIP.png',
	config.public.baseURL + 'bp/ActivityLogin.png',
	config.public.baseURL + 'bp/Add IPs.png',
	config.public.baseURL + 'bp/ComponentW.png',
	config.public.baseURL + 'bp/Detail IPs.png',
	config.public.baseURL + 'bp/gasEthereum.png',
	config.public.baseURL + 'bp/gasIota.png',
	config.public.baseURL + 'bp/IERC4907.png',
	config.public.baseURL + 'bp/IERC4907_2.png',
	config.public.baseURL + 'bp/Irentable.png',
	config.public.baseURL + 'bp/Login Page.png',
	config.public.baseURL + 'bp/MarketEvents.png',
	config.public.baseURL + 'bp/MarketFunctions.png',
	config.public.baseURL + 'bp/MarketLibrary.png',
	config.public.baseURL + 'bp/Marketplace Page.png',
	config.public.baseURL + 'bp/Marketplace.png',
	config.public.baseURL + 'bp/My leased IPs page.png',
	config.public.baseURL + 'bp/My monetized IPs page.png',
	config.public.baseURL + 'bp/PrechodMedziObrazovkamiW.png',
	config.public.baseURL + 'bp/Profile Page.png',
	config.public.baseURL + 'bp/Rent IPs.png',
	config.public.baseURL + 'bp/Rentable.png',
	config.public.baseURL + 'bp/RentableOsetrenie.png',
	config.public.baseURL + 'bp/RentableTransferUpdate.png',
	config.public.baseURL + 'bp/SecurityMarketplace.png',
	config.public.baseURL + 'bp/SecurityRentable.png',
	config.public.baseURL + 'bp/SeqAddIP.png',
	config.public.baseURL + 'bp/StateW.png',
	config.public.baseURL + 'bp/testDeployed.png',
	config.public.baseURL + 'bp/testMarketplace.png',
	config.public.baseURL + 'bp/testRentable.png',
	config.public.baseURL + 'bp/testTable.png',
	config.public.baseURL + 'bp/Unlist IPs.png',
	config.public.baseURL + 'bp/UsecaseW.png',
];
</script>
