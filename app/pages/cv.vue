<template>
	<main class="cv-shell relative min-h-screen overflow-hidden bg-gray-950 px-4 pt-8 pb-20 text-gray-100 sm:px-6 lg:px-10">
		<div class="no-print absolute inset-0 bg-[linear-gradient(180deg,#030712_0%,#07111f_52%,#0f172a_100%)]"></div>
		<div class="no-print absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.1)_0%,rgba(3,7,18,0)_42%,rgba(16,185,129,0.08)_100%)]"></div>
		<div class="no-print absolute inset-x-0 top-0 h-px bg-cyan-300/30"></div>

		<div class="relative z-20 mx-auto mb-10 flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 no-print">
			<div class="flex flex-wrap items-center gap-3">
				<NuxtLink to="/"
					class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-700 bg-gray-950/80 px-4 py-2 text-sm font-bold text-gray-200 shadow-lg shadow-black/20 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300">
					<Icon name="mdi:arrow-left" class="text-lg" />
					<span>{{ t('common.backHome') }}</span>
				</NuxtLink>
			</div>
			<LanguageSwitch />
		</div>
		<div
			class="cv-document relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg border border-gray-800 bg-gray-950/90 p-0 shadow-2xl shadow-black/30">
			<button type="button" @click="exportToPdf"
				:aria-label="t('cvPage.downloadPdf')"
				:title="t('cvPage.downloadPdf')"
				class="no-print absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/80 text-gray-300 shadow transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300">
				<Icon name="mdi:file-pdf-box" class="text-xl" />
			</button>
			<!-- Profile Card -->
			<div
				class="cv-profile flex flex-col items-center border-b border-gray-800 bg-gray-950 px-6 pt-12 pb-10 sm:px-10">
				<div
					class="cv-avatar w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 border-4 border-gray-700 flex items-center justify-center mb-4 shadow-lg ring-4 ring-gray-900 overflow-hidden">
					<img v-if="profileImage" :src="profileImage" :alt="t('cvPage.role')" class="object-cover w-full h-full" />
					<Icon v-else name="mdi:account" class="text-6xl text-gray-400" />
				</div>
				<div class="cv-profile-text flex flex-col items-center">
					<h1 class="text-3xl font-extrabold text-gray-100 mb-1 tracking-tight">Adrián Vančo</h1>
					<div class="text-lg font-semibold text-cyan-200 mb-2">{{ t('cvPage.role') }}</div>
					<div class="text-md text-gray-400">{{ t('cvPage.location') }}</div>
					<a v-if="portfolioURL" :href="portfolioURL" class="only-print text-sm mt-1 underline">{{ portfolioURL }}</a>
				</div>
			</div>
			<!-- Main Content -->
			<div class="cv-content px-6 pb-12 pt-8 sm:px-10">
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-cyan-400 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:school" class="text-xl text-cyan-300" />{{ t('cvPage.education') }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.masterDegree') }}
							</span>, FIIT STU <span class="text-gray-400">(2024-{{ t('cvPage.present') }})</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">{{ t('cvPage.bachelorDegree') }}</span>, FIIT STU
							<span class="text-gray-400">(2019-2024)</span>
							<a href="https://github.com/vancoadrian/school" target="_blank" rel="noopener noreferrer"
								class="text-cyan-300 underline ml-2">{{ t('cvPage.githubSchool') }}</a>
							<div class="text-gray-400 text-sm mt-1 pl-2">
								{{ t('cvPage.bachelorThesisLabel') }} {{ t('cvPage.bachelorThesisDescription') }}
								<a href="https://opac.crzp.sk/?fn=detailBiblioFormChildA3JN7&sid=AA9A59A4FA5B9CCA5E9C4B07A76D&seo=CRZP-detail-kniha"
									target="_blank" rel="noopener noreferrer" class="text-cyan-300 underline ml-1">{{ t('cvPage.viewThesis') }}</a>
								<button @click="showThesisImages = true"
									class="no-print ml-3 rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-200 transition hover:border-cyan-300 hover:text-cyan-100">{{ t('cvPage.viewImages') }}</button>
							</div>

							<!-- Thesis Images Modal (projects-style) -->
							<div v-if="showThesisImages"
								class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true" aria-labelledby="thesis-modal-title" @click.self="closeThesisModal">
								<div
									class="bg-gray-950 rounded-lg shadow-2xl border border-gray-800 max-w-lg w-full p-8 relative animate-fade-in" tabindex="-1">
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
										class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 select-none" role="dialog" aria-modal="true" :aria-label="t('cvPage.thesisImages')" @click.self="closeThesisLightbox">
										<button @click="closeThesisLightbox"
											:aria-label="t('common.close')"
											class="absolute top-4 right-4 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 bg-gray-950/85 text-3xl text-gray-300 shadow-lg hover:border-cyan-300 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-8 h-8">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
										<!-- Navigation arrows -->
										<button @click="prevThesisImage"
											:aria-label="t('common.previous')"
											class="absolute left-4 top-1/2 z-[70] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-700 bg-gray-950/85 text-cyan-100 shadow-lg shadow-black/30 hover:border-cyan-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-7 h-7">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M15 19l-7-7 7-7" />
											</svg>
										</button>
										<button @click="nextThesisImage"
											:aria-label="t('common.next')"
											class="absolute right-4 top-1/2 z-[70] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-700 bg-gray-950/85 text-cyan-100 shadow-lg shadow-black/30 hover:border-cyan-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
												stroke="currentColor" class="w-7 h-7">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 5l7 7-7 7" />
											</svg>
										</button>
										<!-- Zoom controls -->
										<div
											class="absolute bottom-8 left-1/2 z-[70] flex -translate-x-1/2 gap-3 rounded-lg border border-gray-700 bg-gray-900/90 px-4 py-2 shadow">
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
											class="max-w-full max-h-[80vh] rounded-lg border border-gray-700 shadow-2xl transition-transform duration-200 z-10 select-none"
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
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-cyan-400 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:briefcase" class="text-xl text-cyan-300" />{{ t('cvPage.workExperience') }}
						<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
					</h2>
					<ul class="space-y-5">
						<li>
							<div class="font-semibold text-gray-100 text-base">{{ t('cvPage.jobItSpecialist') }}</div>
							<div class="text-gray-400">PROXENTA Support s.r.o.<span
									class="text-gray-500">(2022-{{ t('cvPage.present') }})</span></div>
							<div class="text-gray-300 text-sm mt-1">{{ t('cvPage.jobItSpecialistDesc') }}</div>
						</li>
						<li>
							<div class="font-semibold text-gray-100 text-base">{{ t('cvPage.jobAppDeveloper') }}</div>
							<div class="text-gray-400">MicroStep - HDO s.r.o. <span class="text-gray-500">(2022-{{ t('cvPage.february') }}
									2026)</span></div>
							<div class="text-gray-300 text-sm mt-1">{{ t('cvPage.jobAppDeveloperDesc') }}</div>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
				<section class="mb-8">
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-cyan-400 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:star" class="text-xl text-cyan-300" />{{ t('cvPage.skills') }}
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
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.timeManagement') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.uiuxDesign') }}</li>
							<li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">
								{{ t('cvPage.algorithmicThinking') }}</li>
						</ul>
					</div>
				</section>
				<div class="cv-page-break border-t border-gray-800 my-8"></div>
				<section>
					<h2
						class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-cyan-400 pl-3 pb-2 mb-4 relative">
						<Icon name="mdi:certificate" class="text-xl text-cyan-300" />{{ t('cvPage.certificates') }}
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
				<div class="no-print rounded-lg border border-gray-800 bg-gray-900/50 p-5 mt-8">
					<div class="text-base font-bold text-gray-100 mb-1">{{ t('cvPage.ctaTitle') }}</div>
					<div class="text-gray-400 text-sm mb-3">{{ t('cvPage.ctaDescription') }}</div>
					<div class="flex flex-wrap gap-3">
						<a href="https://www.linkedin.com/in/adrián-vančo-0b4835176" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-300">
							<Icon name="mdi:linkedin" class="text-base" />
							<span>{{ t('cvPage.ctaLinkedIn') }}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
const config = useRuntimeConfig();
const { t } = useI18n();

const { portfolioURL } = usePortfolioSeo({
	title: () => t('cvPage.seoTitle'),
	description: () => t('cvPage.seoDescription'),
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

function exportToPdf() {
	closeThesisModal();
	nextTick(() => window.print());
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

<style>
.only-print {
	display: none;
}

@media print {
	.only-print {
		display: block !important;
	}

	@page {
		size: A4;
		margin: 0;
	}

	.no-print,
	.no-print * {
		display: none !important;
	}

	html,
	body {
		background: #fff !important;
		margin: 0 !important;
		padding: 0 !important;
		font-size: 10.5pt;
		line-height: 1.35;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}

	body * {
		color: #111 !important;
		box-shadow: none !important;
		text-shadow: none !important;
	}

	a {
		color: #1d4ed8 !important;
		text-decoration: underline;
		word-break: break-word;
	}

	.min-h-screen {
		min-height: 0 !important;
		padding: 0 !important;
		background: #fff !important;
		display: block !important;
	}

	.min-h-screen > div:last-child {
		max-width: 100% !important;
		width: 100% !important;
		padding: 14mm 16mm !important;
		background: #fff !important;
		border: none !important;
		border-radius: 0 !important;
		overflow: visible !important;
	}

	/* Profile header — horizontal (avatar left, text right) */
	.cv-profile {
		flex-direction: row !important;
		align-items: center !important;
		justify-content: flex-start !important;
		gap: 6mm !important;
		padding: 0 0 5mm 0 !important;
		border-bottom: 1px solid #d1d5db !important;
	}
	.cv-avatar {
		width: 22mm !important;
		height: 22mm !important;
		margin: 0 !important;
		flex-shrink: 0 !important;
		border-width: 1px !important;
		box-shadow: none !important;
	}
	.cv-profile-text {
		align-items: flex-start !important;
		text-align: left !important;
	}
	.cv-profile-text h1 {
		font-size: 18pt !important;
		margin-bottom: 0.5mm !important;
	}
	.cv-profile-text > div {
		margin-bottom: 0 !important;
	}

	.cv-content {
		padding: 6mm 0 0 0 !important;
	}

	.cv-page-break {
		break-before: page !important;
		page-break-before: always !important;
		border: none !important;
		padding-top: 14mm !important;
		margin: 0 0 4mm 0 !important;
	}
	.cv-page-break::after {
		content: "";
		display: block;
		border-top: 1px solid #d1d5db;
	}

	/* Section spacing */
	section {
		margin-bottom: 5mm !important;
		break-inside: avoid;
	}
	section h2 {
		font-size: 12pt !important;
		margin-bottom: 2mm !important;
		break-after: avoid;
	}
	section h3 {
		font-size: 10.5pt !important;
		margin-bottom: 1.5mm !important;
		break-after: avoid;
	}

	li {
		break-inside: avoid;
	}

	ul.space-y-5 > li + li {
		margin-top: 3mm !important;
	}
	ul.space-y-2 > li + li {
		margin-top: 1.5mm !important;
	}

	/* Section dividers */
	.border-t.border-gray-800 {
		margin: 4mm 0 !important;
		border-color: #e5e7eb !important;
	}

	/* Skill pills — compact */
	ul.flex.flex-wrap {
		gap: 1.5mm !important;
	}
	ul.flex.flex-wrap > li {
		padding: 0.5mm 2mm !important;
		font-size: 9pt !important;
		border: 1px solid #d1d5db !important;
	}

	.bg-gray-800,
	.bg-gray-900\/50,
	[class*="bg-gray-"],
	[class*="bg-gradient-"] {
		background: #fff !important;
	}

	[class*="border-"] {
		border-color: #d1d5db !important;
	}

	.rounded-full.bg-gray-800 {
		border: 1px solid #d1d5db !important;
	}

	p, li, div {
		orphans: 3;
		widows: 3;
	}
}
</style>
