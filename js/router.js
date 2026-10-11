/**
 * router.js
 * Maps the current store view name to a view-content renderer.
 * Not a URL router — this launcher has no navigable history, just
 * in-memory tab state, so this simply resolves state.view -> component.
 */
window.VaelisRouter = {
    resolve(view) {
        switch (view) {
            case 'projects':
                return window.VaelisProjectList.render();
            case 'learn':
                return window.VaelisLearnView.render();
            case 'installs':
                return window.VaelisInstallsView.render();
            default:
                return window.VaelisProjectList.render();
        }
    }
};
