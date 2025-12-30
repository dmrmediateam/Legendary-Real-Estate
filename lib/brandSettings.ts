import { client, urlFor } from './sanity'

export interface BrandSettings {
  _id: string
  coreIdentity?: {
    brandName?: string
    legalName?: string
    tagline?: string
    brandVoice?: {
      description?: string
      doExamples?: string[]
      dontExamples?: string[]
    }
    defaultLocation?: {
      city?: string
      state?: string
      serviceArea?: string
    }
  }
  logos?: {
    primaryLogo?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    secondaryLogo?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    markLogo?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    favicon?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    socialSharingImage?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    lightLogo?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    darkLogo?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
  }
  colors?: {
    primary?: string
    secondary?: string
    accent?: string
    background?: string
    surface?: string
    textPrimary?: string
    textSecondary?: string
    border?: string
    success?: string
    warn?: string
    error?: string
    gradients?: Array<{
      name?: string
      from?: string
      to?: string
      direction?: string
    }>
  }
  typography?: {
    headingFont?: string
    bodyFont?: string
    fontWeights?: string[]
    typeScale?: {
      xs?: string
      sm?: string
      base?: string
      lg?: string
      xl?: string
      text2xl?: string
      text3xl?: string
      text4xl?: string
      text5xl?: string
      text6xl?: string
    }
    lineHeight?: {
      tight?: string
      normal?: string
      relaxed?: string
    }
  }
  uiStyling?: {
    borderRadius?: {
      sm?: string
      md?: string
      lg?: string
      xl?: string
    }
    shadowStyle?: string
    buttonStyle?: string
    containerWidth?: string
    sectionSpacing?: string
  }
  header?: {
    navItems?: Array<{
      label?: string
      linkType?: string
      href?: string
      children?: Array<{
        label?: string
        href?: string
      }>
    }>
    ctaButton?: {
      label?: string
      href?: string
    }
    stickyHeader?: boolean
    announcementBar?: {
      enabled?: boolean
      text?: string
      link?: string
      startDate?: string
      endDate?: string
    }
  }
  footer?: {
    columns?: Array<{
      title?: string
      links?: Array<{
        label?: string
        href?: string
      }>
    }>
    legalLinks?: Array<{
      label?: string
      href?: string
    }>
    address?: string
    phone?: string
    email?: string
    businessHours?: string
    socialLinks?: Array<{
      platform?: string
      url?: string
    }>
    newsletterCopy?: string
  }
  seo?: {
    siteTitleTemplate?: string
    defaultMetaTitle?: string
    defaultMetaDescription?: string
    defaultOgTitle?: string
    defaultOgDescription?: string
    defaultOgImage?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
    twitterCardType?: string
    robotsDefault?: string
    organizationSchema?: {
      name?: string
      logo?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
      url?: string
      sameAs?: string[]
      address?: string
      contactPoint?: {
        type?: string
        telephone?: string
        email?: string
      }
    }
  }
  mediaDefaults?: {
    defaultHeroBackground?: {
      type?: string
      image?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
      videoUrl?: string
    }
    defaultPlaceholderImages?: {
      blog?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
      team?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
      testimonials?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
    }
    defaultTestimonials?: Array<{
      name?: string
      text?: string
      location?: string
      image?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
    }>
  }
  ctas?: {
    ctaPresets?: Array<{
      id?: string
      headline?: string
      subhead?: string
      buttonLabel?: string
      buttonLink?: string
      styleVariant?: string
      image?: {
        asset?: {
          _ref: string
          _type: string
        }
      }
    }>
    primaryContactCta?: {
      headline?: string
      subhead?: string
      buttonLabel?: string
      buttonLink?: string
    }
    leadMagnetCta?: {
      headline?: string
      subhead?: string
      buttonLabel?: string
      buttonLink?: string
    }
  }
  contactSettings?: {
    primaryContactMethod?: string
    formRouting?: {
      recipientEmails?: string[]
      webhookEndpoint?: string
      defaultSubject?: string
      defaultLabels?: string[]
    }
    calendlyLink?: string
    autoReplyCopy?: string
    successPageMessage?: string
  }
  analytics?: {
    ga4MeasurementId?: string
    gtmContainerId?: string
    metaPixelId?: string
    linkedInInsightTagId?: string
    hotjarId?: string
    searchConsoleVerification?: string
    cookieConsentEnabled?: boolean
    cookieConsentProvider?: string
  }
  legal?: {
    companyLegalName?: string
    privacyPolicy?: any
    terms?: any
    accessibilityStatement?: any
  }
  themePresets?: {
    activePreset?: string
    presets?: Array<{
      name?: string
      colors?: {
        primary?: string
        secondary?: string
        accent?: string
      }
      headingFont?: string
      bodyFont?: string
      borderRadius?: string
      shadowStyle?: string
    }>
  }
}

// Fetch brand settings (singleton - should only be one)
export async function getBrandSettings(): Promise<BrandSettings | null> {
  const query = `*[_type == "brandSettings"][0]{
    _id,
    coreIdentity,
    logos {
      primaryLogo {
        asset {
          _ref,
          _type
        }
      },
      secondaryLogo {
        asset {
          _ref,
          _type
        }
      },
      markLogo {
        asset {
          _ref,
          _type
        }
      },
      favicon {
        asset {
          _ref,
          _type
        }
      },
      socialSharingImage {
        asset {
          _ref,
          _type
        }
      },
      lightLogo {
        asset {
          _ref,
          _type
        }
      },
      darkLogo {
        asset {
          _ref,
          _type
        }
      }
    },
    colors,
    typography,
    uiStyling,
    header,
    footer,
    seo {
      ...,
      defaultOgImage {
        asset {
          _ref,
          _type
        }
      },
      organizationSchema {
        ...,
        logo {
          asset {
            _ref,
            _type
          }
        }
      }
    },
    mediaDefaults {
      defaultHeroBackground {
        type,
        image {
          asset {
            _ref,
            _type
          }
        },
        videoUrl
      },
      defaultPlaceholderImages {
        blog {
          asset {
            _ref,
            _type
          }
        },
        team {
          asset {
            _ref,
            _type
          }
        },
        testimonials {
          asset {
            _ref,
            _type
          }
        }
      },
      defaultTestimonials[] {
        name,
        text,
        location,
        image {
          asset {
            _ref,
            _type
          }
        }
      }
    },
    ctas {
      ctaPresets[] {
        id,
        headline,
        subhead,
        buttonLabel,
        buttonLink,
        styleVariant,
        image {
          asset {
            _ref,
            _type
          }
        }
      },
      primaryContactCta,
      leadMagnetCta
    },
    contactSettings,
    analytics,
    legal {
      companyLegalName,
      privacyPolicy,
      terms,
      accessibilityStatement
    },
    themePresets
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching brand settings:', error)
    return null
  }
}

// Generate CSS variables from brand settings
export function generateBrandCSSVariables(settings: BrandSettings | null): string {
  if (!settings) return ''

  const colors = settings.colors || {}
  const typography = settings.typography || {}
  const uiStyling = settings.uiStyling || {}

  const cssVars: string[] = []

  // Colors
  if (colors.primary) cssVars.push(`--color-primary: ${colors.primary};`)
  if (colors.secondary) cssVars.push(`--color-secondary: ${colors.secondary};`)
  if (colors.accent) cssVars.push(`--color-accent: ${colors.accent};`)
  if (colors.background) cssVars.push(`--color-background: ${colors.background};`)
  if (colors.surface) cssVars.push(`--color-surface: ${colors.surface};`)
  if (colors.textPrimary) cssVars.push(`--color-text-primary: ${colors.textPrimary};`)
  if (colors.textSecondary) cssVars.push(`--color-text-secondary: ${colors.textSecondary};`)
  if (colors.border) cssVars.push(`--color-border: ${colors.border};`)
  if (colors.success) cssVars.push(`--color-success: ${colors.success};`)
  if (colors.warn) cssVars.push(`--color-warn: ${colors.warn};`)
  if (colors.error) cssVars.push(`--color-error: ${colors.error};`)

  // Typography
  if (typography.headingFont) cssVars.push(`--font-heading: ${typography.headingFont}, serif;`)
  if (typography.bodyFont) cssVars.push(`--font-body: ${typography.bodyFont}, sans-serif;`)
  
  if (typography.typeScale) {
    const scale = typography.typeScale
    if (scale.xs) cssVars.push(`--text-xs: ${scale.xs};`)
    if (scale.sm) cssVars.push(`--text-sm: ${scale.sm};`)
    if (scale.base) cssVars.push(`--text-base: ${scale.base};`)
    if (scale.lg) cssVars.push(`--text-lg: ${scale.lg};`)
    if (scale.xl) cssVars.push(`--text-xl: ${scale.xl};`)
    if (scale.text2xl) cssVars.push(`--text-2xl: ${scale.text2xl};`)
    if (scale.text3xl) cssVars.push(`--text-3xl: ${scale.text3xl};`)
    if (scale.text4xl) cssVars.push(`--text-4xl: ${scale.text4xl};`)
    if (scale.text5xl) cssVars.push(`--text-5xl: ${scale.text5xl};`)
    if (scale.text6xl) cssVars.push(`--text-6xl: ${scale.text6xl};`)
  }

  if (typography.lineHeight) {
    if (typography.lineHeight.tight) cssVars.push(`--leading-tight: ${typography.lineHeight.tight};`)
    if (typography.lineHeight.normal) cssVars.push(`--leading-normal: ${typography.lineHeight.normal};`)
    if (typography.lineHeight.relaxed) cssVars.push(`--leading-relaxed: ${typography.lineHeight.relaxed};`)
  }

  // UI Styling
  if (uiStyling.borderRadius) {
    const radius = uiStyling.borderRadius
    if (radius.sm) cssVars.push(`--radius-sm: ${radius.sm};`)
    if (radius.md) cssVars.push(`--radius-md: ${radius.md};`)
    if (radius.lg) cssVars.push(`--radius-lg: ${radius.lg};`)
    if (radius.xl) cssVars.push(`--radius-xl: ${radius.xl};`)
  }

  if (uiStyling.containerWidth) cssVars.push(`--container-width: ${uiStyling.containerWidth};`)
  if (uiStyling.sectionSpacing) cssVars.push(`--section-spacing: ${uiStyling.sectionSpacing};`)

  return `:root { ${cssVars.join(' ')} }`
}

// Get logo URL
export function getLogoUrl(logo: any): string | null {
  if (!logo?.asset) return null
  return urlFor(logo).url() || null
}

