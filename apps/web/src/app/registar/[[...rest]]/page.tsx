import { SignUp } from '@clerk/nextjs'

export default function RegistarPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <SignUp
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'shadow-lg rounded-2xl border border-slate-200',
            headerTitle: 'text-2xl font-bold',
            headerSubtitle: 'text-slate-600',
            formButtonPrimary: 'bg-primary-600 hover:bg-primary-700 text-sm font-medium',
            socialButtonsBlockButton: 'border border-slate-300 hover:bg-slate-50',
            footerActionLink: 'text-primary-600 hover:text-primary-700',
          },
        }}
      />
    </div>
  )
}