import React from 'react';

export default async function MarkettingLayout({
  children,
}: Readonly<React.PropsWithChildren<{}>>): Promise<React.ReactElement> {
  return (
    <div>
      <h1>Marketting</h1>
      {children}
    </div>
  );
}
