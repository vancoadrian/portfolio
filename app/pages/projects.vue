<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 via-gray-900 py-24 px-4 flex justify-center items-center">
		<div class="absolute top-6 left-6 z-20">
			<NuxtLink to="/" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition shadow">
				<Icon name="mdi:arrow-left" class="text-lg" />
				<span>{{ t('common.backHome') }}</span>
			</NuxtLink>
		</div>
		<div class="w-full max-w-3xl bg-gradient-to-br from-gray-950/95 to-gray-900/90 rounded-3xl shadow-2xl border border-gray-800 p-0 overflow-hidden">
			<div class="flex flex-col items-center pt-10 pb-8 px-8 bg-gradient-to-b from-gray-950/80 to-gray-900/60 border-b border-gray-800">
				<h1 class="text-3xl font-extrabold text-gray-100 mb-1 tracking-tight">{{ t('projectsPage.title') }}</h1>
				<div class="text-gray-400 text-lg mb-2 font-medium">{{ t('projectsPage.subtitle') }}</div>
			</div>
			<div class="px-8 pb-12 pt-8">
				<div class="mb-8 grid gap-3 sm:grid-cols-2">
					<label class="block">
						<span class="sr-only">{{ t('projectsPage.searchPlaceholder') }}</span>
						<input
							v-model="searchQuery"
							type="search"
							:placeholder="t('projectsPage.searchPlaceholder')"
							class="w-full rounded-xl border border-gray-700 bg-gray-900/80 px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</label>
					<label class="block">
						<span class="sr-only">{{ t('projectsPage.filterLabel') }}</span>
						<select
							v-model="activeCategory"
							class="w-full rounded-xl border border-gray-700 bg-gray-900/80 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="all">{{ t('projectsPage.allCategories') }}</option>
							<option v-for="cat in localizedProjectCategories" :key="cat.key" :value="cat.key">{{ cat.category }}</option>
						</select>
					</label>
				</div>

				<div v-if="!filteredProjectCategories.length" class="mb-10 rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-6 text-center text-gray-400">
					{{ t('projectsPage.noResults') }}
				</div>

				<div v-for="cat in filteredProjectCategories" :key="cat.key" class="mb-10">
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
									<span>{{ t('projectsPage.showMore') }}</span>
								</div>
							</button>
						</li>
					</ul>
				</div>

				<!-- Modal -->
				<div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" @click.self="closeProjectModal">
					<div class="bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 max-w-lg w-full p-8 relative animate-fade-in" tabindex="-1">
						<button @click="closeProjectModal" :aria-label="t('common.close')" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
							<Icon name="mdi:close" />
						</button>

								<div class="mb-4">
									<div id="project-modal-title" class="text-2xl font-bold text-gray-100 mb-1">{{ selectedProject.name }}</div>
									<div class="text-gray-400 mb-4">{{ selectedProject.description }}</div>
																							<div v-if="selectedProject.images && selectedProject.images.length" class="pb-2">
																								<div>
																					<button v-if="selectedProject.images[0]" @click="openLightbox(selectedProject.images[0])" :aria-label="`${t('projectsPage.openImage')}: ${selectedProject.name}`" class="mb-3 w-full focus:outline-none">
																						<img :src="selectedProject.images[0]" :alt="`${selectedProject.name} screenshot 1`" class="rounded-lg border border-gray-800 w-full max-h-64 object-cover shadow hover:scale-105 transition" />
																									</button>
																								</div>
																								<div v-if="selectedProject.images.length > 1" class="overflow-x-auto pb-1 pr-1" style="scrollbar-width: thin;">
																										<div class="flex flex-nowrap gap-3 min-w-max">
																							<button v-for="(img, idx) in selectedProject.images.slice(1)" :key="idx" @click="openLightbox(img)" :aria-label="`${t('projectsPage.openImage')}: ${selectedProject.name} ${idx + 2}`" class="w-24 h-20 flex-shrink-0 focus:outline-none">
																								<img :src="img" :alt="`${selectedProject.name} screenshot ${idx + 2}`" class="rounded-lg border border-gray-800 w-full h-full object-cover shadow hover:scale-105 transition" />
																											</button>
																										</div>
																								</div>
																							</div>

														<!-- Lightbox Modal -->
																<div v-if="lightboxImage" class="fixed inset-0 z-60 flex items-center justify-center bg-black/80 select-none" role="dialog" aria-modal="true" :aria-label="selectedProject?.name" @click.self="closeLightbox">
																	<button @click="closeLightbox" :aria-label="t('common.close')" class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none z-20 bg-gray-900/80 rounded-full p-1">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
															</button>
															<!-- Navigation arrows -->
																		<button @click="prevImage" :aria-label="t('common.previous')" class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
															</button>
																		<button @click="nextImage" :aria-label="t('common.next')" class="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none z-20">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
															</button>
															<!-- Zoom controls -->
																<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-gray-900/90 rounded-lg px-4 py-2 z-20 border border-gray-700 shadow">
																<button @click="zoomOut" class="text-white text-2xl px-2 focus:outline-none">-</button>
																		<button @click="toggleZoom" class="text-white text-lg px-2 focus:outline-none">{{ t('projectsPage.zoom') }}</button>
																<button @click="zoomIn" class="text-white text-2xl px-2 focus:outline-none">+</button>
															</div>
															<img
																:src="lightboxImage"
																		:alt="`${selectedProject.name} enlarged screenshot ${lightboxIndex + 1}`"
																		:style="{ transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`, cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'auto' }"
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
							<a :href="selectedProject.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-4 py-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 text-sm transition">
								<Icon name="mdi:open-in-new" class="text-base" />
								<span>{{ t('projectsPage.visitProject') }}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRuntimeConfig } from '#imports';
import { projectCategoriesData } from '~/data/projects';

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
	title: () => t('projectsPage.seoTitle'),
	description: () => t('projectsPage.seoDescription'),
	ogTitle: () => t('projectsPage.seoTitle'),
	ogDescription: () => t('projectsPage.seoDescription'),
	ogUrl: () => canonicalURL.value,
	ogImage: () => ogImageURL.value,
	twitterTitle: () => t('projectsPage.seoTitle'),
	twitterDescription: () => t('projectsPage.seoDescription'),
	twitterImage: () => ogImageURL.value,
	twitterCard: 'summary_large_image',
});

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
const searchQuery = ref('');
const activeCategory = ref('all');

const localizedProjectCategories = computed(() => projectCategoriesData.map((cat, catIndex) => ({
	key: String(catIndex),
	icon: cat.icon,
	category: t(cat.categoryKey),
	items: cat.items.map((item) => ({
		name: t(item.nameKey),
		description: t(item.descriptionKey),
		link: item.link,
		images: item.images?.map(withBaseURL),
	})),
})));

const filteredProjectCategories = computed(() => {
	const query = searchQuery.value.trim().toLowerCase();

	return localizedProjectCategories.value
		.filter((cat) => activeCategory.value === 'all' || cat.key === activeCategory.value)
		.map((cat) => ({
			...cat,
			items: cat.items.filter((item) => {
				if (!query) return true;
				return `${item.name} ${item.description}`.toLowerCase().includes(query);
			}),
		}))
		.filter((cat) => cat.items.length > 0);
});

function closeProjectModal() {
	selectedProject.value = null;
	closeLightbox();
}

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

function onKeydown(e) {
	if (e.key === 'Escape') {
		if (lightboxImage.value) {
			closeLightbox();
			return;
		}

		if (selectedProject.value) {
			closeProjectModal();
		}

		return;
	}

	if (!lightboxImage.value) {
		return;
	}

	if (e.key === 'ArrowLeft') {
		prevImage();
	}

	if (e.key === 'ArrowRight') {
		nextImage();
	}
}

onMounted(() => {
	window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown);
});
</script>
