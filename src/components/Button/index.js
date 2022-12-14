import React from 'react';
import { Button } from 'react-bootstrap';

function SButton({
  children,
  action,
  variant,
  size,
  loading,
  disabeld,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabeld={disabeld}
      size={size}
    >
      {loading ? 'Loading..' : children}
    </Button>
  );
}

export default SButton;
