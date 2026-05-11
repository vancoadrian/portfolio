<template>
	<main class="relative min-h-screen overflow-hidden bg-gray-950 text-gray-100">
		<div class="absolute inset-0 bg-[linear-gradient(180deg,#030712_0%,#07111f_52%,#0f172a_100%)]"></div>
		<div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.1)_0%,rgba(3,7,18,0)_42%,rgba(16,185,129,0.08)_100%)]"></div>
		<div class="absolute inset-x-0 top-0 h-px bg-cyan-300/30"></div>

		<div class="relative mx-auto w-full max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:px-10">
			<NuxtLink
				to="/"
				class="mb-10 inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-950/80 px-4 py-2 text-sm font-bold text-gray-200 shadow-lg shadow-black/20 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
			>
				<Icon name="mdi:arrow-left" class="text-lg" />
				<span>{{ t('common.backHome') }}</span>
			</NuxtLink>

			<header class="mb-10 max-w-3xl">
				<div class="mb-4 inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
					<Icon name="mdi:folder-open" class="text-base" />
					<span>{{ t('projectsPage.subtitle') }}</span>
				</div>
				<h1 class="text-5xl font-bold leading-none text-white sm:text-6xl">{{ t('projectsPage.title') }}</h1>
				<p class="mt-5 max-w-2xl text-lg leading-8 text-gray-300">{{ t('projectsPage.seoDescription') }}</p>
			</header>

			<section v-if="featuredProjects.length" class="mb-10">
				<div class="mb-4 flex items-end justify-between gap-4">
					<div>
						<h2 class="flex items-center gap-2 text-xl font-bold uppercase text-gray-100">
							<Icon name="mdi:star-circle" class="text-2xl text-amber-300" />
							{{ t('projectsPage.featuredTitle') }}
						</h2>
						<p class="mt-1 text-sm text-gray-400">{{ t('projectsPage.featuredSubtitle') }}</p>
					</div>
				</div>
				<div class="grid gap-4 md:grid-cols-3">
					<button
						v-for="item in featuredProjects"
						:key="`featured-${item.name}`"
						@click="openProject(item)"
						class="relative min-h-52 rounded-lg border border-cyan-400/30 bg-gray-950/82 p-5 text-left shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
					>
						<span class="absolute top-5 left-5 inline-flex border border-amber-300/40 bg-amber-300/10 px-2 py-1 text-[10px] font-bold uppercase text-amber-200">{{ t('projectsPage.featuredBadge') }}</span>
						<div class="absolute top-16 right-5 left-5">
							<div class="mb-2 text-lg font-bold leading-tight text-gray-100">{{ item.name }}</div>
							<div class="line-clamp-3 text-sm leading-6 text-gray-400">{{ item.description }}</div>
						</div>
					</button>
				</div>
			</section>

			<section class="mb-8 grid gap-3 rounded-lg border border-gray-800 bg-gray-950/82 p-4 shadow-xl shadow-black/20 sm:grid-cols-2">
				<label class="block">
					<span class="mb-1 block text-xs font-bold uppercase text-gray-400">{{ t('projectsPage.searchLabel') }}</span>
					<input
						v-model="searchQuery"
						type="search"
						:placeholder="t('projectsPage.searchPlaceholder')"
						class="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
					/>
				</label>
				<label class="block">
					<span class="mb-1 block text-xs font-bold uppercase text-gray-400">{{ t('projectsPage.filterLabel') }}</span>
					<select
						v-model="activeCategory"
						class="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
					>
						<option value="all">{{ t('projectsPage.allCategories') }}</option>
						<option v-for="cat in localizedProjectCategories" :key="cat.key" :value="cat.key">{{ cat.category }}</option>
					</select>
				</label>
			</section>

			<div class="mb-6 flex flex-wrap items-center justify-between gap-3">
				<div class="text-sm font-semibold text-gray-400">{{ t('projectsPage.resultsCount', { count: filteredProjectsCount }) }}</div>
				<button
					v-if="hasActiveFilters"
					@click="clearFilters"
					class="inline-flex items-center gap-1 rounded-lg border border-gray-700 bg-gray-900/70 px-3 py-1.5 text-xs font-bold text-gray-200 transition hover:border-emerald-300 hover:text-emerald-200"
				>
					<Icon name="mdi:filter-remove" class="text-sm" />
					<span>{{ t('projectsPage.clearFilters') }}</span>
				</button>
			</div>

			<div v-if="!filteredProjectCategories.length" class="mb-10 rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-6 text-center text-gray-400">
				{{ t('projectsPage.noResults') }}
			</div>

			<section v-for="cat in filteredProjectCategories" :key="cat.key" class="mb-10">
				<h2 class="mb-4 flex items-center gap-2 border-l-4 border-cyan-400 pl-3 text-lg font-bold uppercase text-gray-100">
					<Icon :name="cat.icon" class="text-xl text-cyan-300" />
					{{ cat.category }}
				</h2>
				<ul class="grid gap-3 md:grid-cols-2">
					<li v-for="item in cat.items" :key="item.name">
						<button
							@click="openProject(item)"
							class="flex h-full w-full flex-col gap-3 rounded-lg border border-gray-800 bg-gray-950/82 p-5 text-left shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
						>
							<div class="flex-1">
								<div class="text-base font-bold text-gray-100">{{ item.name }}</div>
								<div class="mt-1 text-sm leading-6 text-gray-400">{{ item.description }}</div>
							</div>
							<div v-if="item.images && item.images.length" class="inline-flex items-center gap-1 text-sm font-bold text-cyan-300">
								<Icon name="mdi:eye" class="text-base" />
								<span>{{ t('projectsPage.showMore') }}</span>
							</div>
						</button>
					</li>
				</ul>
			</section>

			<section class="rounded-lg border border-gray-800 bg-gray-950/82 p-5 shadow-xl shadow-black/20">
				<div class="mb-1 text-base font-bold text-gray-100">{{ t('projectsPage.ctaTitle') }}</div>
				<div class="mb-3 text-sm text-gray-400">{{ t('projectsPage.ctaDescription') }}</div>
				<a
					href="https://www.linkedin.com/in/adrián-vančo-0b4835176"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-300"
				>
					<Icon name="mdi:linkedin" class="text-base" />
					<span>{{ t('projectsPage.ctaLinkedIn') }}</span>
				</a>
			</section>

			<div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" @click.self="closeProjectModal">
				<div class="relative w-full max-w-lg rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-2xl animate-fade-in sm:p-8" tabindex="-1">
					<button @click="closeProjectModal" :aria-label="t('common.close')" class="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white focus:outline-none">
						<Icon name="mdi:close" />
					</button>

					<div class="mb-4 pr-8">
						<div id="project-modal-title" class="mb-1 text-2xl font-bold text-gray-100">{{ selectedProject.name }}</div>
						<div class="mb-4 text-gray-400">{{ selectedProject.description }}</div>
						<div v-if="selectedProject.images && selectedProject.images.length" class="pb-2">
							<button v-if="selectedProject.images[0]" @click="openLightbox(selectedProject.images[0])" :aria-label="`${t('projectsPage.openImage')}: ${selectedProject.name}`" class="mb-3 w-full focus:outline-none">
								<img :src="selectedProject.images[0]" :alt="`${selectedProject.name} screenshot 1`" class="max-h-64 w-full rounded-lg border border-gray-800 object-cover shadow transition hover:scale-[1.01]" />
							</button>
							<div v-if="selectedProject.images.length > 1" class="overflow-x-auto pb-1 pr-1" style="scrollbar-width: thin;">
								<div class="flex min-w-max flex-nowrap gap-3">
									<button v-for="(img, idx) in selectedProject.images.slice(1)" :key="idx" @click="openLightbox(img)" :aria-label="`${t('projectsPage.openImage')}: ${selectedProject.name} ${idx + 2}`" class="h-20 w-24 flex-shrink-0 focus:outline-none">
										<img :src="img" :alt="`${selectedProject.name} screenshot ${idx + 2}`" class="h-full w-full rounded-lg border border-gray-800 object-cover shadow transition hover:scale-105" />
									</button>
								</div>
							</div>
						</div>
					</div>

					<div v-if="selectedProject.link && selectedProject.link !== '#'">
						<a :href="selectedProject.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-white">
							<Icon name="mdi:open-in-new" class="text-base" />
							<span>{{ t('projectsPage.visitProject') }}</span>
						</a>
					</div>
				</div>
			</div>

			<div v-if="lightboxImage" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 select-none" role="dialog" aria-modal="true" :aria-label="selectedProject?.name" @click.self="closeLightbox">
				<button @click="closeLightbox" :aria-label="t('common.close')" class="absolute top-4 right-4 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 bg-gray-950/85 text-3xl text-gray-300 shadow-lg hover:border-cyan-300 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300">
					<Icon name="mdi:close" />
				</button>
				<button @click="prevImage" :aria-label="t('common.previous')" class="absolute left-4 top-1/2 z-[70] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-700 bg-gray-950/85 text-cyan-100 shadow-lg shadow-black/30 hover:border-cyan-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300">
					<svg aria-hidden="true" class="h-7 w-7" viewBox="0 0 24 24" fill="none">
						<path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<button @click="nextImage" :aria-label="t('common.next')" class="absolute right-4 top-1/2 z-[70] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-gray-700 bg-gray-950/85 text-cyan-100 shadow-lg shadow-black/30 hover:border-cyan-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300">
					<svg aria-hidden="true" class="h-7 w-7" viewBox="0 0 24 24" fill="none">
						<path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<div class="absolute bottom-8 left-1/2 z-[70] flex -translate-x-1/2 gap-3 rounded-lg border border-gray-700 bg-gray-900/90 px-4 py-2 shadow">
					<button @click="zoomOut" class="px-2 text-2xl text-white focus:outline-none">-</button>
					<button @click="toggleZoom" class="px-2 text-lg text-white focus:outline-none">{{ t('projectsPage.zoom') }}</button>
					<button @click="zoomIn" class="px-2 text-2xl text-white focus:outline-none">+</button>
				</div>
				<img
					:src="lightboxImage"
					:alt="`${selectedProject.name} enlarged screenshot ${lightboxIndex + 1}`"
					:style="{ transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`, cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'auto' }"
					class="z-10 max-h-[80vh] max-w-full rounded-lg border border-gray-700 shadow-2xl transition-transform duration-200 select-none"
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
	</main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRuntimeConfig } from '#imports';
import { projectCategoriesData } from '~/data/projects';

const config = useRuntimeConfig();
const { t } = useI18n();

usePortfolioSeo({
	title: () => t('projectsPage.seoTitle'),
	description: () => t('projectsPage.seoDescription'),
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
		featured: !!item.featured,
		images: item.images?.map(withBaseURL),
	})),
})));

const featuredProjects = computed(() => localizedProjectCategories.value
	.flatMap((cat) => cat.items.filter((item) => item.featured))
	.slice(0, 3));

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

const filteredProjectsCount = computed(() => filteredProjectCategories.value.reduce((acc, cat) => acc + cat.items.length, 0));
const hasActiveFilters = computed(() => searchQuery.value.trim().length > 0 || activeCategory.value !== 'all');

function clearFilters() {
	searchQuery.value = '';
	activeCategory.value = 'all';
}

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
