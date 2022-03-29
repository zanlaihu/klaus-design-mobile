import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { withNativeProps } from '../../utils/native-props';

import { ListInstance, ListProps } from './type';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';

const classPrefix = `adw-list`;

let defaultProps: ListProps = {};

const BaseList = forwardRef<HTMLDivElement, ListProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  return withNativeProps(
    props,
    <div className={classNames(classPrefix, props.className)} style={props.style} ref={ref}>
      {props.children}
    </div>,
  );
});

const List = BaseList as typeof BaseList & ListInstance;

List.setDefaultOption = (options: ListProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

List.displayName = 'List';
export default List;
