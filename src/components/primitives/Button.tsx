import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'
type Size = 'md' | 'lg'

const base =
  'group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-soft)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-teal text-white shadow-[0_1px_2px_rgba(10,84,92,0.24)] hover:bg-teal-deep hover:shadow-[0_10px_28px_-12px_rgba(10,84,92,0.55)]',
  secondary:
    'border border-line-teal bg-white text-teal hover:border-teal hover:bg-mist',
  ghost: 'text-ink hover:text-teal',
  onDark: 'bg-white text-teal hover:bg-teal-tint',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-[0.9375rem]',
}

type ButtonOwnProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonOwnProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonOwnProps & ComponentPropsWithoutRef<'a'>) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
