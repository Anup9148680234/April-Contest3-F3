'use strict';

/**
 * InlineCard - self-contained React component with inline styles.
 * No external libraries required apart from React at runtime.
 *
 * Example usage (when React/ReactDOM are loaded on the page):
 *   const root = document.getElementById('root');
 *   const element = React.createElement(InlineCard, {
 *     title: 'Welcome',
 *     subtitle: 'This is a self-contained card',
 *     imageUrl: 'https://picsum.photos/640/360',
 *     onClick: () => alert('Card clicked!'),
 *     width: 360
 *   });
 *   ReactDOM.render(element, root);
 */
function InlineCard(props) {
  var ReactObj = typeof React !== 'undefined' ? React : null;
  if (!ReactObj) {
    throw new Error('InlineCard requires React to be loaded on the page');
  }

  props = props || {};
  var title = props.title != null ? props.title : 'Title';
  var subtitle = props.subtitle != null ? props.subtitle : '';
  var imageUrl = props.imageUrl != null ? props.imageUrl : '';
  var onClick = props.onClick;
  var width = props.width != null ? props.width : 320;

  var styles = {
    card: {
      width: width,
      boxSizing: 'border-box',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderRadius: 12,
      backgroundColor: '#fff',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      transition: 'transform 120ms ease, box-shadow 120ms ease',
      cursor: onClick ? 'pointer' : 'default'
    },
    image: {
      width: '100%',
      height: 180,
      objectFit: 'cover',
      borderRadius: 8,
      backgroundColor: '#f2f2f2'
    },
    title: {
      margin: 0,
      fontSize: 18,
      lineHeight: '24px',
      color: '#111',
      fontWeight: 600
    },
    subtitle: {
      margin: 0,
      fontSize: 14,
      lineHeight: '20px',
      color: '#555'
    },
    footer: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    button: {
      padding: '8px 12px',
      fontSize: 14,
      borderRadius: 8,
      border: '1px solid #ddd',
      background: '#fafafa',
      color: '#111',
      cursor: 'pointer'
    }
  };

  var imageEl = imageUrl
    ? ReactObj.createElement('img', { src: imageUrl, alt: title, style: styles.image })
    : null;

  var contentEl = ReactObj.createElement(
    'div',
    null,
    ReactObj.createElement('h3', { style: styles.title }, title),
    subtitle ? ReactObj.createElement('p', { style: styles.subtitle }, subtitle) : null
  );

  var footerEl = ReactObj.createElement(
    'div',
    { style: styles.footer },
    ReactObj.createElement('span', { style: { fontSize: 12, color: '#888' } }, 'InlineCard'),
    ReactObj.createElement(
      'button',
      {
        type: 'button',
        style: styles.button,
        onClick: function (e) {
          e.stopPropagation();
          if (typeof onClick === 'function') onClick(e);
        }
      },
      'Action'
    )
  );

  return ReactObj.createElement(
    'div',
    { style: styles.card, onClick: onClick || null },
    imageEl,
    contentEl,
    footerEl
  );
}

InlineCard.displayName = 'InlineCard';

// UMD-style export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InlineCard;
}
if (typeof window !== 'undefined') {
  window.InlineCard = InlineCard;
}
