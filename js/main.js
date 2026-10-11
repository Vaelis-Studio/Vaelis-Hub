/**
 * main.js
 * Application bootstrap. Subscribes to the store and re-renders the
 * affected DOM regions on every state change. No virtual DOM — each
 * region is small enough to fully re-render on change.
 */
(function () {
    const { mount, refreshIcons, el } = window.VaelisDom;

    const titlebarRoot = document.getElementById('titlebar-root');
    const railRoot = document.getElementById('rail-root');
    const topbarRoot = document.getElementById('topbar-root');
    const viewRoot = document.getElementById('view-root');
    const modalRoot = document.getElementById('modal-root');

    function renderAll() {
        mount(titlebarRoot, window.VaelisTitlebar.render());
        mount(railRoot, window.VaelisRail.render());
        mount(topbarRoot, window.VaelisTopbar.render());

        const state = window.VaelisStore.getState();
        const inner = el('div', { class: 'view-inner' }, [window.VaelisRouter.resolve(state.view)]);
        mount(viewRoot, inner);

        mount(modalRoot, window.VaelisNewProjectModal.render());

        refreshIcons();
    }

    window.VaelisStore.subscribe(renderAll);
    if (window.VaelisPWA) window.VaelisPWA.subscribe(renderAll);
    renderAll();
})();
