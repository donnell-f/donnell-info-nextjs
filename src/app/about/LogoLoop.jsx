import React from 'react';

const LogoLoop = ({
  logos = [],
  speed = 25,
  direction = 'left', // 'left' | 'right'
  pauseOnHover = true,
  iconClassName = 'text-4xl text-slate-900/80',
}) => {
  if (!logos.length) {
    return null;
  }

  const wrapperClass = 'flex w-max min-w-full shrink-0 items-center justify-around';
  const directionClass = direction === 'right' ? '[animation-direction:reverse]' : '';
  const pauseClass = pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '';
  const contentClass = `animate-infinite-scroll ${directionClass} ${pauseClass}`;
  const animationStyle = { animationDuration: `${speed}s` };

  const renderLogo = (logo, index) => {
    const label = logo.title || logo.alt || 'Logo';
    const hasNode = Boolean(logo.node);
    const content = hasNode
      ? React.isValidElement(logo.node)
        ? React.cloneElement(logo.node, {
            className: [iconClassName, logo.node.props?.className].filter(Boolean).join(' '),
            'aria-hidden': true,
            focusable: 'false',
          })
        : logo.node
      : (
          <img
            src={logo.src}
            alt={label}
            className="max-w-none h-10 w-auto"
            loading="lazy"
          />
        );

    const Wrapper = logo.href ? 'a' : 'span';
    const wrapperProps = logo.href
      ? { href: logo.href, target: '_blank', rel: 'noreferrer' }
      : {};

    return (
      <li key={`${label}-${index}`} className="mx-8 flex items-center justify-center">
        <Wrapper className="flex items-center justify-center text-current" {...wrapperProps}>
          {hasNode && <span className="sr-only">{label}</span>}
          {content}
        </Wrapper>
      </li>
    );
  };

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
      <ul className={`${wrapperClass} ${contentClass}`} style={animationStyle}>
        {logos.map(renderLogo)}
      </ul>
      <ul className={`${wrapperClass} ${contentClass}`} style={animationStyle} aria-hidden="true">
        {logos.map(renderLogo)}
      </ul>
    </div>
  );
};

export default LogoLoop;
