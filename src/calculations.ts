import { MaybeRef } from '@vueuse/core'

export function getWavePath(segments: number): string {
	const h = 60
	const m = 0.512286623256592433
	const a = h / 4
	const y = h / 2

	const addSegment = (left: number, multiply = 1): Array<string | number> => {
		const segment = ['s', -(1 - a) * m, a * multiply, a, a * multiply]
		left > 0 && segment.push(...addSegment(left - 1, multiply * -1))
		return segment
	}

	const pathData = [
		'M 0',
		y + a / 2,
		'c',
		a * m,
		0,
		-(1 - a) * m,
		-a,
		a,
		-a,
		...addSegment(segments),
	].join(' ')

	return pathData
}

export const getMaybeRefNumberValue = (v: MaybeRef<number>): number =>
	typeof v === 'number' ? v : v.value

export const getViewBoxWidth = (
	width: MaybeRef<number>,
	height: MaybeRef<number>,
	vbHeight: number,
): number => {
	const w = getMaybeRefNumberValue(width)
	const h = getMaybeRefNumberValue(height)
	return vbHeight * (w / h)
}

export const getStrokeDashLength = (viewBoxWidth: MaybeRef<number>): number => {
	const w = getMaybeRefNumberValue(viewBoxWidth)
	return w * 1.5 - 17.52
}

export const getSegmentsNumber = (viewBoxWidth: MaybeRef<number>): number => {
	const w = getMaybeRefNumberValue(viewBoxWidth)
	return Math.ceil((w + 83.98) / 14.91)
}
