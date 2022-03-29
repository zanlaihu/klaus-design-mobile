import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { ProgressProps, ProgressInstance } from './type';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';

const classPrefix = 'adw-progress';

let defaultProps: ProgressProps = {
  size: 'small',
};

const BaseProgress = forwardRef<HTMLDivElement, ProgressProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);

  return (
    <div className={classNames(`${classPrefix}`, props.className)} ref={ref} style={props.style}>
      {props.steps ? (
        <div className={`${classPrefix}-steps`} ref={ref} style={props.style}>
          <div
            className={classNames(`${classPrefix}-steps-bar`, {
              [`${classPrefix}-radius-${props.radius}`]: !!props.radius,
            })}
          >
            {[...new Array((props.currentStep || 1) - 1)].map((_, index) => (
              <div
                key={index}
                className={classNames(
                  `${classPrefix}-finished-bar`,
                  `${classPrefix}-bar`,
                  `${classPrefix}-radius`,
                  { [`${classPrefix}-size-${props.size}`]: !!props.size },
                )}
              />
            ))}
            <div
              className={classNames(
                `${classPrefix}-current-bar`,
                `${classPrefix}-bar`,
                `${classPrefix}-radius`,
                { [`${classPrefix}-size-${props.size}`]: !!props.size },
              )}
            />
            {[...new Array((props.steps || 1) - (props.currentStep || 1))].map((_, index) => (
              <div
                key={index}
                className={classNames(
                  `${classPrefix}-unfinished-bar`,
                  `${classPrefix}-bar`,
                  `${classPrefix}-radius`,
                  { [`${classPrefix}-size-${props.size}`]: !!props.size },
                )}
              />
            ))}
          </div>
          {props.label && <div className={`${classPrefix}-label`}>{props.label}</div>}
        </div>
      ) : (
        <div
          className={classNames(`${classPrefix}-linear`, {
            [`${classPrefix}-radius-${props.radius}`]: !!props.radius,
          })}
          ref={ref}
          style={props.style}
        >
          <div
            className={classNames(
              `${classPrefix}-linear-unfinished`,
              {
                [`${classPrefix}-radius-${props.radius}`]: !!props.radius,
                [`${classPrefix}-size-${props.size}`]: !!props.size,
              },
              `${classPrefix}-radius`,
            )}
          >
            <div
              className={classNames(`${classPrefix}-linear-finished`, `${classPrefix}-radius`, {
                [`${classPrefix}-size-${props.size}`]: !!props.size,
              })}
              style={{ width: `${props.percent}%` }}
            />
          </div>
          {props.label && <div className={`${classPrefix}-label`}>{props.label}</div>}
        </div>
      )}
    </div>
  );
});

const Progress = BaseProgress as typeof BaseProgress & ProgressInstance;

Progress.setDefaultOption = (options: ProgressProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

Progress.displayName = 'Progress';
export default Progress;
