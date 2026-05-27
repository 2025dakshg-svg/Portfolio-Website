import React from 'react';

const DownloadLink = ({ href, filename, label, className = '' }) => (
  <a
    href={href}
    download={filename}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

export default DownloadLink;
