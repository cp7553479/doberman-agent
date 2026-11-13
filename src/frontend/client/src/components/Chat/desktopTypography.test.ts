/** @jest-environment jsdom */

describe('desktop typography surface initialization', () => {
  beforeEach(() => {
    sessionStorage.clear();
    delete document.documentElement.dataset.dobermanAgentSurface;
    window.history.replaceState(null, '', '/workspace');
  });

  afterEach(() => {
    sessionStorage.clear();
    delete document.documentElement.dataset.dobermanAgentSurface;
    window.history.replaceState(null, '', '/workspace');
    jest.restoreAllMocks();
  });

  function initialize() {
    jest.isolateModules(() => { jest.requireActual('./desktopEmbedding'); });
    return document.documentElement.dataset.dobermanAgentSurface;
  }

  it('selects desktop typography before rendering the embedded entry', () => {
    window.history.replaceState(null, '', '/workspace?embed=dsh');
    expect(initialize()).toBe('desktop');
  });

  it('retains desktop typography after route redirects and page reloads', () => {
    window.history.replaceState(null, '', '/workspace?embed=dsh');
    initialize();
    window.history.replaceState(null, '', '/workspace/knowledge/space/1/settings');
    delete document.documentElement.dataset.dobermanAgentSurface;
    expect(initialize()).toBe('desktop');
  });

  it('selects responsive web typography for standalone browsers', () => {
    expect(initialize()).toBe('web');
  });

  it('uses the explicit desktop entry when session storage is unavailable', () => {
    window.history.replaceState(null, '', '/workspace?embed=dsh');
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage unavailable');
    });
    expect(initialize()).toBe('desktop');
  });
});
