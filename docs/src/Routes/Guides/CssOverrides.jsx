import React from 'react';
import SourcablePanel from '_shared/SourcablePanel';
import { Typography } from 'material-ui';

const CssOverrides = () => (
  <div>
    <Typography variant="display2" gutterBottom> Override stylesheet </Typography>

    <Typography variant="body1" gutterBottom>
      Default pickers appearance build based on material-ui theme,
      so pickers will take all colors/font size setting as other material-ui components.
    </Typography>

    <Typography variant="body1" gutterBottom>
      But we are not providing any for-component classes api to override a view of
      particular component. Only one way to override existed stylesheet -
      usage of global material-ui theme overrides.
    </Typography>

    <SourcablePanel
      title="Override example"
      sourceFile="Guides/CssTheme.jsx"
      description={
        <Typography variant="body1" gutterBottom>
          You can find the override component name and class in
          the generated classnames for pickers components.
        </Typography>
      }
    />
  </div>
);

export default CssOverrides;

