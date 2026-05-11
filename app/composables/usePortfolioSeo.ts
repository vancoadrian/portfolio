import { computed } from 'vue';

type SeoValue = string | (() => string);

type PortfolioSeoOptions = {
	title: SeoValue;
	description: SeoValue;
	image?: string;
};

function resolveSeoValue(value: SeoValue) {
	return typeof value === 'function' ? value() : value;
}

export function usePortfolioSeo(options: PortfolioSeoOptions) {
	const config = useRuntimeConfig();
	const route = useRoute();

	const siteURL = computed(() => config.public.siteURL?.replace(/\/$/, '') || '');
	const basePath = computed(() => (config.public.baseURL || '/').replace(/\/$/, ''));
	const canonicalURL = computed(() => {
		if (!siteURL.value) return '';
		return `${siteURL.value}${basePath.value}${route.path}`;
	});
	const portfolioURL = computed(() => {
		if (!siteURL.value) return '';
		return `${siteURL.value}${basePath.value || '/'}`;
	});
	const ogImageURL = computed(() => {
		const imagePath = `${config.public.baseURL}${(options.image || 'linkedin.jpg').replace(/^\//, '')}`;
		return siteURL.value ? `${siteURL.value}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}` : imagePath;
	});

	useHead({
		link: () => (canonicalURL.value ? [{ rel: 'canonical', href: canonicalURL.value }] : []),
	});

	useSeoMeta({
		title: () => resolveSeoValue(options.title),
		description: () => resolveSeoValue(options.description),
		ogTitle: () => resolveSeoValue(options.title),
		ogDescription: () => resolveSeoValue(options.description),
		ogUrl: () => canonicalURL.value,
		ogImage: () => ogImageURL.value,
		twitterTitle: () => resolveSeoValue(options.title),
		twitterDescription: () => resolveSeoValue(options.description),
		twitterImage: () => ogImageURL.value,
		twitterCard: 'summary_large_image',
	});

	return {
		canonicalURL,
		ogImageURL,
		portfolioURL,
		siteURL,
	};
}
