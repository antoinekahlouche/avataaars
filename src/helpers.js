import uniqueId  from "lodash.uniqueid"

export function selector(id) {
	return "#" + id
}

export function uid(prefix) {
	return uniqueId(prefix)
}

export function url(id) {
	return `url(#${id})`
}
