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

// GitHub Pages serves the prerendered directory-style pages only at the
// trailing-slash URL and 301-redirects the bare form, so every absolute URL
// we emit (canonical, hreflang, og:url) must end with a slash to point at a
// directly served page.
function withTrailingSlash(path: string) {
	return path.endsWith('/') ? path : `${path}/`;
}

export function usePortfolioSeo(options: PortfolioSeoOptions) {
	const config = useRuntimeConfig();
	const route = useRoute();
	const { locales } = useI18n();
	const switchLocalePath = useSwitchLocalePath();
	const localePath = useLocalePath();

	const siteURL = computed(() => config.public.siteURL?.replace(/\/$/, '') || '');
	const basePath = computed(() => (config.public.baseURL || '/').replace(/\/$/, ''));
	const canonicalURL = computed(() => {
		if (!siteURL.value) return '';
		return `${siteURL.value}${basePath.value}${withTrailingSlash(route.path)}`;
	});
	const portfolioURL = computed(() => {
		if (!siteURL.value) return '';
		return `${siteURL.value}${basePath.value}${withTrailingSlash(localePath('/'))}`;
	});
	const ogImageURL = computed(() => {
		const imagePath = `${config.public.baseURL}${(options.image || 'linkedin.jpg').replace(/^\//, '')}`;
		return siteURL.value ? `${siteURL.value}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}` : imagePath;
	});

	// hreflang alternates for search engines; x-default points at the Slovak
	// (unprefixed) variant, matching the site's default locale.
	const alternateLinks = computed(() => {
		if (!siteURL.value) return [];
		const toHref = (code: Parameters<typeof switchLocalePath>[0]) =>
			`${siteURL.value}${basePath.value}${withTrailingSlash(switchLocalePath(code))}`;
		return [
			...locales.value.map((entry) => ({
				rel: 'alternate' as const,
				hreflang: entry.language ?? entry.code,
				href: toHref(entry.code),
			})),
			{ rel: 'alternate' as const, hreflang: 'x-default', href: toHref('sk') },
		];
	});

	useHead({
		link: () =>
			canonicalURL.value
				? [{ rel: 'canonical', href: canonicalURL.value }, ...alternateLinks.value]
				: [],
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
