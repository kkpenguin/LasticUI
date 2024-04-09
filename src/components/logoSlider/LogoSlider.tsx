const arb = '/assets/asset-logos/Arbitrum.svg'
const fuel = '/assets/asset-logos/Fuel.svg'
const artela = '/assets/asset-logos/artela.svg'
const base = '/assets/asset-logos/base.svg'
const fhenix = '/assets/asset-logos/fhenix.svg'
const linea = '/assets/asset-logos/linea.svg'
const moonbeam = '/assets/asset-logos/moonbeam.svg'
const threshold = '/assets/asset-logos/threshold.svg'

import './styles/Animations.css'

function LogoSlider() {
  const logos = [
    fuel,
    arb,
    base,
    threshold,
    linea,
    moonbeam,
    fhenix,
    artela,
    fuel,
    arb,
    base,
    threshold,
    linea,
    moonbeam,
    fhenix,
    artela,
    fuel,
    arb,
    base,
    threshold,
    linea,
    moonbeam,
    fhenix,
    artela,
  ]
  return (
    <div className=" w-screen overflow-hidden py-14 border-t border-gray-16 ">
      {/* Use flex and items-center to vertically center the logos */}
      <div className="flex items-center whitespace-nowrap gap-12 justify-center logo-slider hover:logo-slider">
        {logos.map((logoSrc, index) => (
          <div key={index} className="inline-flex justify-center" style={{ minWidth: '150px' }}>
            <img
              src={logoSrc}
              alt={`Logo ${index}`}
              className="mx-auto"
              style={{ width: '250px' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoSlider
