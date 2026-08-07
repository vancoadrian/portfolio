import { computed, ref } from 'vue';

export function useImageLightbox(getImages: () => string[]) {
	const index = ref<number | null>(null);
	const zoom = ref(1);
	const panX = ref(0);
	const panY = ref(0);
	const isDragging = ref(false);
	const dragStart = ref({ x: 0, y: 0 });
	const panStart = ref({ x: 0, y: 0 });

	const isOpen = computed(() => index.value !== null);
	const currentImage = computed(() => {
		if (index.value === null) return null;
		return getImages()[index.value] ?? null;
	});

	function resetTransform() {
		zoom.value = 1;
		panX.value = 0;
		panY.value = 0;
	}

	function open(image: string) {
		const images = getImages();
		const idx = images.indexOf(image);
		index.value = idx !== -1 ? idx : 0;
		resetTransform();
	}

	function openAt(startIndex: number) {
		index.value = startIndex;
		resetTransform();
	}

	function close() {
		index.value = null;
		resetTransform();
	}

	function prev() {
		const images = getImages();
		if (index.value === null || !images.length) return;
		index.value = (index.value - 1 + images.length) % images.length;
		resetTransform();
	}

	function next() {
		const images = getImages();
		if (index.value === null || !images.length) return;
		index.value = (index.value + 1) % images.length;
		resetTransform();
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

	function onMouseDown(e: MouseEvent) {
		if (zoom.value === 1) return;
		isDragging.value = true;
		dragStart.value = { x: e.clientX, y: e.clientY };
		panStart.value = { x: panX.value, y: panY.value };
	}

	function onMouseMove(e: MouseEvent) {
		if (!isDragging.value) return;
		panX.value = panStart.value.x + (e.clientX - dragStart.value.x);
		panY.value = panStart.value.y + (e.clientY - dragStart.value.y);
	}

	function onMouseUp() {
		isDragging.value = false;
	}

	function onMouseLeave() {
		isDragging.value = false;
	}

	function onTouchStart(e: TouchEvent) {
		if (zoom.value === 1) return;
		const touch = e.touches[0];
		if (!touch) return;
		isDragging.value = true;
		dragStart.value = { x: touch.clientX, y: touch.clientY };
		panStart.value = { x: panX.value, y: panY.value };
	}

	function onTouchMove(e: TouchEvent) {
		if (!isDragging.value) return;
		const touch = e.touches[0];
		if (!touch) return;
		panX.value = panStart.value.x + (touch.clientX - dragStart.value.x);
		panY.value = panStart.value.y + (touch.clientY - dragStart.value.y);
	}

	function onTouchEnd() {
		isDragging.value = false;
	}

	function onKeydown(e: KeyboardEvent) {
		if (!isOpen.value) return;
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}

	return {
		index,
		zoom,
		panX,
		panY,
		isDragging,
		isOpen,
		currentImage,
		open,
		openAt,
		close,
		prev,
		next,
		zoomIn,
		zoomOut,
		toggleZoom,
		onMouseDown,
		onMouseMove,
		onMouseUp,
		onMouseLeave,
		onTouchStart,
		onTouchMove,
		onTouchEnd,
		onKeydown,
	};
}
