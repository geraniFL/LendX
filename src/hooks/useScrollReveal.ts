import { useEffect, useRef, useState } from "react"

export function useScrollReveal() {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const node = ref.current
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]
				if (entry && entry.isIntersecting) {
					setIsVisible(true)
					observer.unobserve(entry.target)
				}
			},
			{ threshold: 0.1 },
		)

		if (node) {
			observer.observe(node)
		}

		return () => {
			if (node) {
				observer.unobserve(node)
			}
		}
	}, [])

	return { ref, isVisible }
}
