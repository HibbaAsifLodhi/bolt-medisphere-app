import React, { lazy, Suspense } from 'react';

type LazyRouteProps = {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
  [key: string]: unknown;
};

const cache = new Map<() => Promise<{ default: React.ComponentType<any> }>, React.ComponentType<any>>();

export function LazyRoute({ loader, ...props }: LazyRouteProps) {
  let Component = cache.get(loader);
  if (!Component) {
    Component = lazy(loader);
    cache.set(loader, Component);
  }
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24">
          <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
}
