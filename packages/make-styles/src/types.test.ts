import { MakeStylesStyle } from './types';

function assertType(style: MakeStylesStyle): MakeStylesStyle {
  return style;
}

it('types tests', () => {
  assertType({ flexShrink: 1 });
  assertType({ color: 'beige' });

  assertType({ '--color': 'red' });

  assertType({ ':hover': { flexShrink: 0 } });
  assertType({ ':hover:focus': { flexShrink: 0 } });

  assertType({ '.foo': { flexShrink: 0 } });
  assertType({
    ':focus': {
      '.foo': { flexShrink: 0 },
    },
  });

  // @ts-expect-error "1" is invalid value for "flexShrink"
  assertType({ flexShrink: '1' });
  // @ts-expect-error "0" is invalid value for "color"
  assertType({ color: 0 });
  // @ts-expect-error "1" is invalid value for "flexShrink"
  assertType({ ':hover': { flexShrink: '1' } });
  // @ts-expect-error "1" is invalid value for "flexShrink"
  assertType({ ':hover:focus': { flexShrink: '1' } });
  // @ts-expect-error "1" is invalid value for "flexShrink"
  assertType({ '.foo': { flexShrink: '1' } });
  assertType({
    ':focus': {
      // @ts-expect-error "1" is invalid value for "flexShrink"
      '.foo': { flexShrink: '1' },
    },
  });
});
