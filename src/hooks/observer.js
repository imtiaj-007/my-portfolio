import { useEffect, useState } from "react";

export function useSectionObserver(sectionIds) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length === 0) return;

                const mostVisible = visibleEntries.reduce((max, entry) =>
                    entry.intersectionRatio > max.intersectionRatio ? entry : max
                );

                const newId = mostVisible.target.id;
                setActiveId(newId);
                window.history.replaceState(null, "", `#${newId}`);
            },
            {
                rootMargin: "0px 0px -30% 0px",
                threshold: 0.5,
            }
        );

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [sectionIds]);

    return activeId;
}
