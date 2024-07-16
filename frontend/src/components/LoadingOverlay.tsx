import React from 'react';
import { useContext } from 'react'
import { LoaderContext } from '@/stores/LoaderProvider';

export const LoadingOverlay = () => {
  const { isLoading, loaderText } = useContext(LoaderContext)

  return (
    <>
      {isLoading ? (
        <div className="h-full w-full fixed top-0 left-0 bg-black/20 z-[99999999999999]">
          <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <span className="sr-only">{loaderText}</span>
          </div>
        </div>
      ) : null}
    </>
  )
}