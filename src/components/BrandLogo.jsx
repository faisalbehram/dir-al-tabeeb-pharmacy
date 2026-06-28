import logo from '../assets/logo.svg'
import uaePharmacyLogo from '../assets/uae-pharmacy-logo.svg'

/**
 * Reusable brand mark with optional UAE licensed pharmacy badge.
 */
function BrandLogo({
  variant = 'default',
  showUaeBadge = false,
  className = '',
  logoClassName = 'w-10 h-10 md:w-12 md:h-12',
  uaeBadgeClassName = 'w-8 h-8 md:w-9 md:h-9',
}) {
  const src = variant === 'uae' ? uaePharmacyLogo : logo
  const alt =
    variant === 'uae'
      ? 'UAE Licensed Pharmacy seal'
      : 'Dir Al Tabeeb Pharmacy logo'

  return (
    <div className={`relative flex items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`transition-transform group-hover:scale-105 ${logoClassName}`}
        loading={variant === 'uae' ? 'lazy' : 'eager'}
      />
      {showUaeBadge && variant === 'default' && (
        <img
          src={uaePharmacyLogo}
          alt="UAE Licensed Pharmacy"
          className={`absolute -bottom-1 -right-1 rounded-full border-2 border-white shadow-md ${uaeBadgeClassName}`}
          loading="lazy"
        />
      )}
    </div>
  )
}

export default BrandLogo
