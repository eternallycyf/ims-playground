import React, { useEffect, useState } from 'react';

import './index.css';

export interface MessageProps {
  type: 'error' | 'warn';
  content: string;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { type, content } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!!content);
  }, [content]);

  return visible ? (
    <div className={['msg', type].join(' ')}>
      <pre dangerouslySetInnerHTML={{ __html: content }}></pre>
      <button type="button" className="dismiss" onClick={() => setVisible(false)}>
        ✕
      </button>
    </div>
  ) : null;
};
