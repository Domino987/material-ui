import * as React from 'react';
import { StandardProps } from '..';
import { SwitchBaseProps, SwitchBaseClassKey } from '../internal/SwitchBase';

export interface CheckboxProps extends StandardProps<SwitchBaseProps, CheckboxClassKey> {}

export type CheckboxClassKey = SwitchBaseClassKey | 'colorPrimary' | 'colorSecondery';

declare const Checkbox: React.ComponentType<CheckboxProps>;

export default Checkbox;
