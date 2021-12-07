import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type SpinnerSlots = {
  // TODO Add slots here and to spinnerShorthandProps in useSpinner.ts
  root: IntrinsicShorthandProps<'div'>;
};

export type SpinnerCommons = {
  // TODO Add things shared between props and state here
};

/**
 * Spinner Props
 */
export type SpinnerProps = ComponentProps<SpinnerSlots> & SpinnerCommons;

/**
 * State used in rendering Spinner
 */
export type SpinnerState = ComponentState<SpinnerSlots> & SpinnerCommons;