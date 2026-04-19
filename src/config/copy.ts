// Taglish UI strings
export const copy = {
  appTitle: 'LTO Registration Helper',
  appSubtitle: 'Gabay sa Pagpapatala ng Sasakyan',
  nav: {
    schedule: 'Kailan?',
    fees: 'Magkano?',
    memos: 'Memo / Patakaran',
  },
  schedule: {
    title: 'Kailan Ako Mag-re-renew?',
    subtitle: 'Ilagay ang iyong plate number para malaman ang iyong renewal schedule.',
    inputLabel: 'Plate Number',
    inputPlaceholder: 'Hal. ABC1234 o 123AB',
    checkButton: 'Tingnan ang Schedule',
    vehicleTypeLabel: 'Uri ng Sasakyan',
    vehicleTypes: {
      fourWheel: '4-Gulong (Kotse, SUV, atbp.)',
      motorcycle: 'Motorsiklo',
    },
    resultTitle: 'Renewal Schedule mo:',
    renewalMonth: 'Buwan ng Renewal',
    renewalWeek: 'Linggo ng Renewal',
    nextRenewal: 'Susunod na Renewal',
    earlyRenewalNote: 'Pwede kang mag-renew nang hanggang 2 buwan bago mag-expire.',
    invalidPlate: 'Hindi nakilala ang plate number. Pakisuri ang format at subukan ulit.',
    lateWarning: 'Ang iyong registration ay maaaring expired na. Pumunta agad sa LTO!',
    alreadyExpiredWarning: 'Ang iyong registration ay mukhang expired. May karagdagang bayad ang late renewal.',
  },
  fees: {
    title: 'Magkano ang Bayad?',
    subtitle: 'Sagutan ang mga tanong para matantya ang iyong registration fees.',
    step: 'Hakbang',
    of: 'ng',
    backButton: 'Bumalik',
    calculateButton: 'Kalkulahin',
    resetButton: 'Magsimula Ulit',
    resultTitle: 'Breakdown ng Bayad',
    mvucLabel: 'MVUC',
    fixedFeesLabel: 'Iba pang Bayad',
    penaltyLabel: 'Multa',
    totalLabel: 'Kabuuan (Tinantya)',
    verifyNote: 'Ang halagang ito ay tinantya lamang. I-verify sa pinakamalapit na LTO branch bago pumunta.',
    steps: {
      category: {
        question: 'Anong uri ng sasakyan?',
        car: 'Kotse / SUV / Van',
        motorcycle: 'Motorsiklo',
      },
      carSubtype: {
        question: 'Anong klaseng kotse?',
      },
      motoSubtype: {
        question: 'Anong klaseng motorsiklo?',
      },
      displacement: {
        question: 'Ano ang displacement (cc) ng makina?',
      },
      hybrid: {
        question: 'Electric Vehicle (EV) o Hybrid ba ang iyong sasakyan?',
        yes: 'Oo, EV o Hybrid (50% diskwento sa MVUC)',
        no: 'Hindi, regular na sasakyan',
      },
      regType: {
        question: 'Bagong rehistrasyon o renewal?',
        new: 'Bagong Rehistrasyon',
        renewal: 'Renewal',
      },
      lateness: {
        question: 'Ilang buwan ka na huli sa renewal?',
        ontime: 'Hindi pa huli (sa loob ng designated week)',
        pastWeek: 'Huli sa linggo pero nasa buwan pa',
        oneToEleven: '1–11 buwan na huli',
        twelveOrMore: '12 buwan o higit',
      },
    },
  },
  memos: {
    title: 'Memo at Patakaran ng LTO',
    subtitle: 'Plain-language na buod ng mga opisyal na memorandum ng LTO.',
    filterLabel: 'I-filter ayon sa paksa:',
    all: 'Lahat',
    readOriginal: 'Basahin ang original (PDF/Link)',
    effectiveDate: 'Petsa ng bisa',
  },
  a11y: {
    fontSizeLabel: 'Laki ng Teksto',
    contrastLabel: 'Contrast',
    contrastNormal: 'Normal',
    contrastHigh: 'Mataas',
  },
  footer: {
    sources: 'Mga Pinagmulan ng Impormasyon',
    lastUpdated: 'Huling na-update',
    disclaimer:
      'Ang impormasyon dito ay para sa gabay lamang. I-verify sa pinakamalapit na LTO branch.',
  },
} as const
