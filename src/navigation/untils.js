import {StackViewTransitionConfigs} from 'react-navigation-stack';

export const getConfig = modals => {
  return (transitionProps, prevTransitionProps) => {
    const isModal = modals.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps &&
          screenName === prevTransitionProps.scene.route.routeName),
    );
    return StackViewTransitionConfigs.defaultTransitionConfig(
      transitionProps,
      prevTransitionProps,
      isModal,
    );
  };
};
