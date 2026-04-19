// Plain-language Taglish explainers for LTO jargon
export interface GlossaryEntry {
  term: string
  explanation: string
}

export const glossary: Record<string, GlossaryEntry> = {
  MVUC: {
    term: 'MVUC',
    explanation:
      'Motor Vehicle User\'s Charge — ito ang pangunahing bayad sa LTO batay sa uri at laki ng iyong sasakyan. Iba-iba ang halaga depende sa displacement (cc) o timbang.',
  },
  CTPL: {
    term: 'CTPL',
    explanation:
      'Compulsory Third Party Liability Insurance — mandatory insurance na nagpoprotekta sa ibang tao sakaling maaksidente ka. Kailangan ito bawat taon bago mag-renew ng rehistro.',
  },
  'OR/CR': {
    term: 'OR/CR',
    explanation:
      'Official Receipt at Certificate of Registration — ang OR ay resibo ng bayad, ang CR naman ay ang opisyal na dokumento na nagpapatunay na rehistrado ang iyong sasakyan. Laging dala ito kapag nagmamaneho.',
  },
  'Smoke Emission': {
    term: 'Smoke Emission Test',
    explanation:
      'Pagsusuri kung gaano karumi ang usok ng iyong sasakyan. Kailangan itong pumasa bago makapag-renew ng rehistro.',
  },
  Impoundment: {
    term: 'Impoundment',
    explanation:
      'Pag-confiscate ng sasakyan ng LTO o pulis. Nangyayari ito kapag may matinding paglabag ka sa batas trapiko, tulad ng pagmamaneho ng expired registration.',
  },
  NVW: {
    term: 'NVW (Net Vehicle Weight)',
    explanation:
      'Ang timbang ng sasakyan nang walang pasahero o kargamento. Ginagamit ito ng LTO para sa ilang uri ng sasakyan para matukoy ang MVUC.',
  },
  GVW: {
    term: 'GVW (Gross Vehicle Weight)',
    explanation:
      'Ang kabuuang maximum na timbang ng sasakyan kasama ang lahat ng pasahero at kargamento. Ginagamit ito para sa mas mabibigat na sasakyan tulad ng trucks.',
  },
}
