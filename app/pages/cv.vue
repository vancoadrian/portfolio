<template>
	<div
		class="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 via-gray-900 py-24 px-4 flex justify-center items-center">
		<div class="absolute top-6 left-6 z-20">
			<NuxtLink to="/"
				class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition shadow">
				<Icon name="mdi:arrow-left" class="text-lg" />
				<span>{{ t('common.backHome') }}</span>
			</NuxtLink>
		</div>
		<div
			class="w-full max-w-2xl bg-gradient-to-br from-gray-950/95 to-gray-900/90 rounded-3xl shadow-2xl border border-gray-800 p-0 overflow-hidden">
			<!-- Profile Card -->
			<div
				class="flex flex-col items-center pt-12 pb-10 px-10 bg-gradient-to-b from-gray-950/80 to-gray-900/60 border-b border-gray-800">
				<div
					class="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 border-4 border-gray-700 flex items-center justify-center mb-4 shadow-lg ring-4 ring-gray-900 overflow-hidden">
					<img v-if="profileImage" :src="profileImage" :alt="t('cvPage.role')" class="object-cover w-full h-full" />
					<Icon v-else name="mdi:account" class="text-6xl text-gray-400" />
				</div>
				<h1 class="text-3xl font-extrabold text-gray-100 mb-1 tracking-tight">Adrian Vanco</h1>
				<div class="text-gray-400 text-lg mb-2 font-medium">{{ t('cvPage.role') }}</div>
				<div class="text-gray-500 text-md">{{ t('cvPage.location') }}</div>
			</div>
			<!-- Main Content -->
			<div class="px-10 pb-12 pt-8">
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:school" class="text-xl" />{{ t('cvPage.education') }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.masterDegree') }}
							</span>, FIIT STU <span class="text-gray-400">(2024-Present)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.bachelorDegree') }}</span>, FIIT STU
							<span class="text-gray-400">(2019-2024)</span>
							<a href="https://github.com/vancoadrian/school" target="_blank" rel="noopener noreferrer"
								class="text-blue-400 underline ml-2">{{ t('cvPage.githubSchool') }}</a>
							<div class="text-gray-400 text-sm mt-1 pl-2">
								{{ t('cvPage.bachelorThesisLabel') }} {{ t('cvPage.bachelorThesisDescription') }}
								<a href="https://opac.crzp.sk/?fn=detailBiblioFormChildA3JN7&sid=AA9A59A4FA5B9CCA5E9C4B07A76D&seo=CRZP-detail-kniha"
									target="_blank" rel="noopener noreferrer" class="text-blue-400 underline ml-1">{{ t('cvPage.viewThesis') }}</a>
								<button @click="showThesisImages = true"
									class="ml-3 px-3 py-1 rounded bg-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white transition text-xs font-medium border border-gray-700">{{ t('cvPage.viewImages') }}</button>
							</div>

							<!-- Thesis Images Modal (projects-style) -->
							<div v-if="showThesisImages"
								class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true" aria-labelledby="thesis-modal-title" @click.self="closeThesisModal">
								<div
									class="bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 max-w-lg w-full p-8 relative animate-fade-in" tabindex="-1">
									<button @click="closeThesisModal"
										:aria-label="t('common.close')"
										class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											stroke="currentColor" class="w-8 h-8">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
									<div class="mb-4">
										<div id="thesis-modal-title" class="text-2xl font-bold text-gray-100 mb-1">{{ t('cvPage.thesisImages') }}</div>
										<div class="text-gray-400 mb-4">{{ t('cvPage.thesisImagesSubtitle') }}</div>
										<div v-if="thesisImages.length"
											class="flex gap-3 overflow-x-auto max-w-full pb-1"
											style="scrollbar-width: thin;">
											<div class="flex gap-3 min-w-fit">
												<button v-for="(img, idx) in thesisImages" :key="idx"
													@click="openThesisLightbox(idx)"
													:aria-label="`${t('cvPage.openImage')} ${idx + 1}`"
													class="w-32 h-24 flex-shrink-0 focus:outline-none">
													<img :src="img"
														:alt="`Thesis screenshot ${idx + 1}`"
														class="rounded-lg border border-gray-800 w-full h-full object-cover shadow hover:scale-105 transition" />
												</button>
											</div>
										</div>
									</div>
									<!-- Lightbox Modal -->
									<div v-if="lightboxThesisIndex !== null"
										class="fixed inset-0 z-60 flex items-center justify-center bg-black/80 select-none" role="dialog" aria-modal="true" :aria-label="t('cvPage.thesisImages')" @click.self="closeThesisLightbox">
										<button @click="closeThesisLightbox"
											:aria-label="t('common.close')"
											class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none z-20 bg-gray-900/80 rounded-full p-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-8 h-8">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
										<!-- Navigation arrows -->
										<button @click="prevThesisImage"
											:aria-label="t('common.previous')"
											class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-7 h-7">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M15 19l-7-7 7-7" />
											</svg>
										</button>
										<button @click="nextThesisImage"
											:aria-label="t('common.next')"
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
												class="text-white text-lg px-2 focus:outline-none">{{ t('cvPage.zoom') }}</button>
											<button @click="zoomThesisIn"
												class="text-white text-2xl px-2 focus:outline-none">+</button>
										</div>
										<img :src="thesisImages[lightboxThesisIndex]"
											:alt="`Thesis screenshot enlarged ${lightboxThesisIndex + 1}`"
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
							<span class="font-semibold text-gray-100">{{ t('cvPage.secondarySchool') }}</span> <span class="text-gray-400">(2015-2019)</span>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:briefcase" class="text-xl" />{{ t('cvPage.workExperience') }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-5">
						<li>
							<div class="font-semibold text-gray-100 text-base">{{ t('cvPage.jobItSpecialist') }}</div>
							<div class="text-gray-400">PROXENTA Support s.r.o.<span
									class="text-gray-500">(2022-Present)</span></div>
							<div class="text-gray-300 text-sm mt-1">{{ t('cvPage.jobItSpecialistDesc') }}</div>
						</li>
						<li>
							<div class="font-semibold text-gray-100 text-base">{{ t('cvPage.jobAppDeveloper') }}</div>
							<div class="text-gray-400">MicroStep - HDO s.r.o. <span class="text-gray-500">(2022-February
									2026)</span></div>
							<div class="text-gray-300 text-sm mt-1">{{ t('cvPage.jobAppDeveloperDesc') }}</div>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:star" class="text-xl" />{{ t('cvPage.skills') }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<div class="mb-4">
						<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2">
							<Icon name="mdi:code-tags" class="text-base" />{{ t('cvPage.programming') }}
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
							<Icon name="mdi:server" class="text-base" />{{ t('cvPage.itAdministration') }}
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
							<Icon name="mdi:account-group" class="text-base" />{{ t('cvPage.softSkills') }}
						</h3>
						<ul class="flex flex-wrap gap-3">
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.teamwork') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.communication') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.problemSolving') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.adaptability') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Time
								{{ t('cvPage.timeManagement') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.uiuxDesign') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.algorithmicThinking') }}</li>
						</ul>
					</div>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section>
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:certificate" class="text-xl" />{{ t('cvPage.certificates') }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.certIet') }}</span> <span
								class="text-gray-400">(2024)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.certGoogleAi') }}</span> <span
								class="text-gray-400">(2024)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.certCcna') }}</span> <span
								class="text-gray-400">(2019)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.certElectrical') }}</span> <span class="text-gray-400">(2019)</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
const config = useRuntimeConfig();
const route = useRoute();
const { t } = useI18n();

const siteURL = computed(() => config.public.siteURL?.replace(/\/$/, '') || '');
const canonicalURL = computed(() => {
	if (!siteURL.value) return '';
	return `${siteURL.value}${route.path}`;
});
const ogImageURL = computed(() => {
	const imagePath = `${config.public.baseURL}linkedin.jpg`;
	return siteURL.value ? `${siteURL.value}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}` : imagePath;
});

useHead({
	link: () => (canonicalURL.value ? [{ rel: 'canonical', href: canonicalURL.value }] : []),
});

useSeoMeta({
	title: () => t('cvPage.seoTitle'),
	description: () => t('cvPage.seoDescription'),
	ogTitle: () => t('cvPage.seoTitle'),
	ogDescription: () => t('cvPage.seoDescription'),
	ogImage: () => ogImageURL.value,
	twitterImage: () => ogImageURL.value,
	twitterCard: 'summary_large_image',
});

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

function onKeydown(e) {
	if (e.key === 'Escape') {
		if (lightboxThesisIndex.value !== null) {
			closeThesisLightbox();
			return;
		}

		if (showThesisImages.value) {
			closeThesisModal();
		}

		return;
	}

	if (lightboxThesisIndex.value === null) {
		return;
	}

	if (e.key === 'ArrowLeft') {
		prevThesisImage();
	}

	if (e.key === 'ArrowRight') {
		nextThesisImage();
	}
}

onMounted(() => {
	window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown);
});
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
