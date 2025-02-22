import { makeStyles } from '@fluentui/react-make-styles';
import { Theme } from '@fluentui/react-theme';

export var makeButtonTokens = (theme: Theme) => {
  return {
    primary: {
      hovered: {
        backgroundColor: theme.colorBrandBackgroundHover,
      },
    },
  };
};

export var useStyles = makeStyles({
  rootPrimary: function (theme) {
    var _a;
    var buttonTokens = makeButtonTokens(theme);
    return {
      color: 'red',
      backgroundColor: (_a = buttonTokens.primary.hovered) === null || _a === void 0 ? void 0 : _a.backgroundColor,
    };
  },
});
