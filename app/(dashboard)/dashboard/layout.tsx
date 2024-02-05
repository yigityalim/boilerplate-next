import React from 'react';

export default async function DashboardLayout({
  children,
}: Readonly<React.PropsWithChildren<{}>>): Promise<React.ReactElement> {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}
