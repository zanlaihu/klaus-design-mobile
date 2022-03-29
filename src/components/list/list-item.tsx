
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { ListItemInstance, ListItemProps } from './type';

const classPrefix = `adw-list-item`;

let defaultProps: ListItemProps = {};

const BaseListItem = forwardRef<HTMLDivElement, ListItemProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);

  const content = (
    <div
      className={classNames(
        `${classPrefix}`,
        props.className,
        `${props.onClick && `${classPrefix}-clicked`}`,
      )}
      style={props.style}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
      <div className={`${classPrefix}-content-wrap`}>
        <div
          className={classNames(
            `${classPrefix}-content`,
            `${props.divider && `${classPrefix}-divider`}`,
          )}
        >
          {props.prefix && <div className={`${classPrefix}-prefix`}>{props.prefix}</div>}
          <div className={`${classPrefix}-content-main`}>
            {props.label && <div className={`${classPrefix}-label`}>{props.label}</div>}
            {props.title && <div className={`${classPrefix}-title`}>{props.title}</div>}
            {props.subTitle && <div className={`${classPrefix}-subTitle`}>{props.subTitle}</div>}
          </div>
          {props.extra && <div className={`${classPrefix}-extra`}>{props.extra}</div>}
          {props.onClick && (
            <div className={`${classPrefix}-arrow`}>
              {props.arrow || (
                <div className={`${classPrefix}-arrowContent`}>
                  <div className={`${classPrefix}-upArrow`}></div>
                  <div className={`${classPrefix}-downArrow`}></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return content;
});

const ListItem = BaseListItem as typeof BaseListItem & ListItemInstance;

ListItem.setDefaultOption = (options: ListItemProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

ListItem.displayName = 'ListItem';
export default ListItem;
