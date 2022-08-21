/* eslint-disable no-bitwise */
/* eslint-disable no-shadow */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import debounce from '@/src/utils/debounce';
import style from './Tooltip.module.scss';

function getElementOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    right: rect.right + scrollLeft,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
  };
}

const PADDING = 10;
const calculateCoordinate = (target: HTMLElement, tooltip: HTMLDivElement) => {
  const rect = getElementOffset(target);
  const { left, bottom, width } = rect;

  const { innerWidth, innerHeight } = window;
  const { clientWidth: tooltipWidth, clientHeight: tooltipHeight } = tooltip;

  const targetCenterX = left + (width >> 1);
  const baseLeft = targetCenterX - tooltipWidth / 2;
  const baseTop = bottom;
  const BOTTOM_EDGE = innerHeight - tooltipHeight - PADDING;
  const LEFT_EDGE = innerWidth - tooltipWidth - PADDING;

  let newLeft = Math.min(LEFT_EDGE, baseLeft);
  let newTop = baseTop;
  let direction = 'top';
  if (baseTop > BOTTOM_EDGE) {
    newTop = baseTop - tooltipHeight - PADDING;
    direction = 'bottom';
  }
  newLeft = Math.max(PADDING, newLeft);

  const arrowLeft = left - newLeft + width / 2;
  return {
    left: newLeft,
    top: newTop,
    direction,
    arrowLeft,
  };
};

type TooltipProps = {
  scrollHide?: boolean;
  resizeHide?: boolean;
  mode?: 'dark' | 'light';
};
const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const { scrollHide = true, resizeHide = true, mode = 'dark' } = props;
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [direction, setDirection] = useState('top');

  const rootElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = rootElementRef;
    const showTipHandler = (e: MouseEvent | TouchEvent) => {
      const { tip } = (e.target as HTMLElement).dataset;
      if (tip) {
        setText(tip);
        requestAnimationFrame(() => {
          setShow(true);
          const { left, top, direction, arrowLeft } = calculateCoordinate(
            e.target as HTMLElement,
            current as HTMLDivElement,
          );
          setDirection(direction);
          if (current) {
            current.style.left = `${left}px`;
            current.style.top = `${top}px`;
            current.style.setProperty('--arrow-left', `${arrowLeft}px`);
          }
        });
      }
    };
    const windowScrollHandler = debounce(() => {
      if (scrollHide) {
        setShow(false);
      }
    }, 250);

    const resizeHandler = debounce(() => {
      if (resizeHide) {
        setShow(false);
      }
    }, 250);

    window.addEventListener('touchstart', showTipHandler);
    window.addEventListener('mouseover', showTipHandler);
    window.addEventListener('scroll', windowScrollHandler);
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('touchstart', showTipHandler);
      window.removeEventListener('mouseover', showTipHandler);
      window.removeEventListener('scroll', windowScrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHide, scrollHide]);

  useEffect(() => {
    const keydownHandler = ({ keyCode }: KeyboardEvent) => {
      if (keyCode === 27 && show) {
        setShow(false);
      }
    };
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [show]);

  const atMouseLeaveHandler = useCallback(() => setShow(false), []);
  return ReactDOM.createPortal(
    <div
      ref={rootElementRef}
      onMouseLeave={atMouseLeaveHandler}
      className={style.root}
      data-component="Tooltip"
      data-active={show}
      data-direction={direction}
      data-light={mode === 'light'}
    >
      <i className={style.hitArea} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>,
    document.body,
  );
};

export default React.memo(Tooltip);
