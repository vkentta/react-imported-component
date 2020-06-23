export type Preloader = () => any;
let preloaders: Preloader[] = [];

/**
 * adds a precondition before resolving any imported object
 */
export const addPreloader = (preloader: Preloader) => {
  preloaders.push(preloader);

  return () => {
    preloaders = preloaders.filter(p => p !== preloader);
  };
};

export const getPreloaders = () => preloaders.map(preloader => preloader());
