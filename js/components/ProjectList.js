/**
 * ProjectList.js
 * Renders the recent-projects list, sorted by last-opened, or the
 * EmptyState when there are no projects (or no search matches).
 */
window.VaelisProjectList = {
    render() {
        const { el } = window.VaelisDom;
        const state = window.VaelisStore.getState();

        const sorted = state.projects.slice().sort((a, b) => b.lastOpened - a.lastOpened);
        const query = state.searchQuery.trim().toLowerCase();
        const filtered = query
            ? sorted.filter(p => p.name.toLowerCase().includes(query))
            : sorted;

        if (state.projects.length === 0) {
            return window.VaelisEmptyState.render({
                icon: 'film',
                title: 'No projects yet',
                desc: 'Create your first project to start building in Vaelis.',
                actionLabel: 'Start new project',
                onAction: () => window.VaelisStore.openModal()
            });
        }

        if (filtered.length === 0) {
            return window.VaelisEmptyState.render({
                icon: 'search-x',
                title: 'No matches',
                desc: 'Nothing in your projects matches "' + state.searchQuery + '".'
            });
        }

        return el('div', { class: 'project-list' },
            filtered.map(p => window.VaelisProjectCard.render(p))
        );
    }
};
