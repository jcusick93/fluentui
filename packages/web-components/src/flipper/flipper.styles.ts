import { css, ElementStyles } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  ElementDefinitionContext,
  FlipperOptions,
  focusVisible,
  forcedColorsStylesheetBehavior,
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import { heightNumber } from '../styles';
import {
  controlCornerRadius,
  designUnit,
  disabledOpacity,
  focusStrokeOuter,
  focusStrokeWidth,
  neutralFillRest,
  neutralFillStrongActive,
  neutralFillStrongHover,
  neutralFillStrongRest,
  neutralStrokeControlRest,
} from '../design-tokens';

export const flipperStyles: (context: ElementDefinitionContext, definition: FlipperOptions) => ElementStyles = (
  context: ElementDefinitionContext,
  definition: FlipperOptions,
) =>
  css`
    ${display('inline-flex')} :host {
      height: calc((${heightNumber} + ${designUnit}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${neutralFillStrongRest};
      background: padding-box linear-gradient(${neutralFillRest}, ${neutralFillRest}),
        border-box ${neutralStrokeControlRest};
      box-sizing: border-box;
      border: calc(${focusStrokeWidth} * 1px) solid transparent;
      border-radius: calc(${controlCornerRadius} * 1px);
      outline: none;
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${disabledOpacity};
      cursor: ${disabledCursor};
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${neutralFillStrongHover};
    }

    :host(:not(.disabled):active) {
      color: ${neutralFillStrongActive};
    }

    :host(:${focusVisible}) {
      border-color: ${focusStrokeOuter};
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(
      css`
        :host {
          background: ${SystemColors.ButtonFace};
          border-color: ${SystemColors.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${SystemColors.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${SystemColors.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${SystemColors.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${SystemColors.GrayText};
          color: ${SystemColors.GrayText};
          fill: currentcolor;
        }
        :host(:${focusVisible}) {
          forced-color-adjust: none;
          border-color: ${SystemColors.Highlight};
          box-shadow: 0 0 0 2px ${SystemColors.ButtonFace}, 0 0 0 4px ${SystemColors.ButtonText};
        }
      `,
    ),
  );
