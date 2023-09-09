import { SectionOverride } from '@faststore/core/src/typings/overrides'
 
const SECTION = 'ProductDetails' as const
 
const override: SectionOverride = {
  section: SECTION,
  components: {BuyButton: { props: { size: 'regular', iconPosition: 'right' } },}
}
 
export { override }