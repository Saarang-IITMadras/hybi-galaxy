type Point = {x:number, y:number}

export const getVectorDistance = (p1:Point, p2:Point):number => {
	const a = p1.x - p2.x
	const b = p1.y - p2.y
	const c = Math.sqrt(a*a + b*b)
	return c
}

export const mapVolumeToDist = (max:number, dist:number):number => {
	const volume = 1 - dist/max
	const p = volume > 0 ? volume : 0
	return p
}

export const getVolumeByDistance = (p1:Point, p2:Point):number => {
	const d = getVectorDistance(p1, p2)
	// const dWidth = document.body.clientWidth / 2 // relative distance based on screen size
	const dWidth = 650 // 3 * video size as a starter?
	const v = mapVolumeToDist(dWidth, d)
	return v
}

export const getVolumeByRoomOrDistance = (privateRoom: boolean, p1:Point, p2:Point):number => {
	let v = 1
	if (privateRoom) {
		v = 1
	} else {
		v = getVolumeByDistance(p1, p2)
	}
	return v
}