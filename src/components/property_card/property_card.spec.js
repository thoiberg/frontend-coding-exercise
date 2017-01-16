import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import PropertyCard from './property_card'
import {AgencyBranding, PropertyImage, PropertyPriceBar} from 'components'

describe('<PropertyCard />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.brandingColors = {
      primary: random.string()
    }
    cxt.logo = random.string()
    cxt.mainImage = random.string()
    cxt.price = random.string()
    cxt.agency = {
      brandingColors: cxt.brandingColors,
      logo: cxt.logo
    }
    cxt.details = {
      agency: cxt.agency,
      mainImage: cxt.mainImage,
      price: cxt.price
    }
    cxt.onClickSpy = sinon.spy()
    cxt.wrapper = shallow(<PropertyCard details={cxt.details} onClick={cxt.onClickSpy} />)
  })

  it('renders an Agency Branding component', () => {
    expect(cxt.wrapper.find(AgencyBranding)).to.have.length(1)
  })

  it('renders a Property Image component', () => {
    expect(cxt.wrapper.find(PropertyImage)).to.have.length(1)
  })

  it('renders a Property Price Bar component', () => {
    expect(cxt.wrapper.find(PropertyPriceBar)).to.have.length(1)
  })

  context('rendering the Agency Branding component', () => {

    beforeEach(() => {
      cxt.agencyBrandingComponent = cxt.wrapper.find(AgencyBranding)
    })

    it('renders the component with the branding colours', () => {
      expect(cxt.agencyBrandingComponent.prop('brandingColors')).to.eq(cxt.brandingColors)
    })

    it('renders the component with the agency logoUrl', () => {
      expect(cxt.agencyBrandingComponent.prop('logoUrl')).to.eq(cxt.logo)
    })

  })

  context('rendering the Property Image component', () => {

    beforeEach(() => {
      cxt.propertyImageComponent = cxt.wrapper.find(PropertyImage)
    })

    it('renders the component with the main image url', () => {
      expect(cxt.propertyImageComponent.prop('mainImageUrl')).to.eq(cxt.mainImage)
    })

  })

  context('rendering the Property Price Bar component', () => {

    beforeEach(() => {
      cxt.propertyPriceBarComponent = cxt.wrapper.find(PropertyPriceBar)
    })

    it('renders the component with the price', () => {
      expect(cxt.propertyPriceBarComponent.prop('price')).to.eq(cxt.price)
    })

  })

})