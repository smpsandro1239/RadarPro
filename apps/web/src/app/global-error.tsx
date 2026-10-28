'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Algo correu mal</h2>
          <button onClick={() => reset()}>Tentar novamente</button>
        </div>
      </body>
    </html>
  )
}
