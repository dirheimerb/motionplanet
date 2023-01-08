import React from 'react'
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="uk-card uk-card-default uk-card-body">
      {children}
    </div>
  )
}