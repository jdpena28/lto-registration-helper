import { useState } from 'react'
import { copy } from '../../config/copy'
import { carSubtypeLabels, motoSubtypeLabels, displacementLabels, motoBracketLabels } from '../../config/mvuc'
import type { CarSubtype, MotoSubtype, DisplacementBracket, MotoBracket } from '../../config/mvuc'
import type { LatenessCategory } from '../../config/penalties'
import type { FeeInput } from '../../lib/fees'
import { Breakdown } from './Breakdown'

type Category = 'car' | 'motorcycle'
type RegType = 'new' | 'renewal'

interface FormState {
  step: number
  category: Category | null
  carSubtype: CarSubtype | null
  motoSubtype: MotoSubtype | null
  displacement: DisplacementBracket | null
  motoDisplacement: MotoBracket | null
  isHybridOrEv: boolean | null
  regType: RegType | null
  lateness: LatenessCategory | null
}

const initial: FormState = {
  step: 1,
  category: null,
  carSubtype: null,
  motoSubtype: null,
  displacement: null,
  motoDisplacement: null,
  isHybridOrEv: null,
  regType: null,
  lateness: null,
}

function totalSteps(category: Category | null): number {
  if (!category) return 7
  return category === 'car' ? 7 : 6
}

export function GuidedForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)

  function reset() {
    setForm(initial)
    setSubmitted(false)
  }

  function back() {
    setForm((f) => ({ ...f, step: Math.max(1, f.step - 1) }))
    setSubmitted(false)
  }

  function buildInput(): FeeInput | null {
    if (form.category === 'car' && form.carSubtype && form.displacement && form.isHybridOrEv !== null && form.lateness) {
      return {
        category: 'car',
        subtype: form.carSubtype,
        displacement: form.displacement,
        isHybridOrEv: form.isHybridOrEv,
        lateness: form.lateness,
      }
    }
    if (form.category === 'motorcycle' && form.motoSubtype && form.motoDisplacement && form.isHybridOrEv !== null && form.lateness) {
      return {
        category: 'motorcycle',
        subtype: form.motoSubtype,
        displacement: form.motoDisplacement,
        isHybridOrEv: form.isHybridOrEv,
        lateness: form.lateness,
      }
    }
    return null
  }

  const steps = totalSteps(form.category)

  if (submitted) {
    const input = buildInput()
    if (input) {
      return (
        <div>
          <Breakdown input={input} />
          <button
            onClick={reset}
            className="mt-6 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold hover:border-red-400 transition-colors w-full"
          >
            {copy.fees.resetButton}
          </button>
        </div>
      )
    }
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {copy.fees.step} {form.step} {copy.fees.of} {steps}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-red-600 h-2 rounded-full transition-all"
          style={{ width: `${(form.step / steps) * 100}%` }}
        />
      </div>

      {/* Step content */}
      <div className="rounded-xl border-2 border-gray-200 p-5 space-y-4" style={{ borderColor: 'var(--border-color)' }}>
        <StepContent form={form} setForm={setForm} setSubmitted={setSubmitted} />
      </div>

      {form.step > 1 && (
        <button
          onClick={back}
          className="rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold w-full hover:border-gray-400 transition-colors"
        >
          ← {copy.fees.backButton}
        </button>
      )}
    </div>
  )
}

interface StepProps {
  form: FormState
  setForm: React.Dispatch<React.SetStateAction<FormState>>
  setSubmitted: (v: boolean) => void
}

function StepContent({ form, setForm, setSubmitted }: StepProps) {
  function next(patch: Partial<FormState>) {
    setForm((f) => ({ ...f, ...patch, step: f.step + 1 }))
  }

  function finish(patch: Partial<FormState>) {
    setForm((f) => ({ ...f, ...patch }))
    setSubmitted(true)
  }

  // Step 1: Category
  if (form.step === 1) {
    return (
      <ChoiceStep
        question={copy.fees.steps.category.question}
        options={[
          { label: copy.fees.steps.category.car, value: 'car' },
          { label: copy.fees.steps.category.motorcycle, value: 'motorcycle' },
        ]}
        onSelect={(v) => next({ category: v as Category })}
      />
    )
  }

  // Step 2: Subtype
  if (form.step === 2) {
    if (form.category === 'car') {
      const opts = Object.entries(carSubtypeLabels)
        .filter(([k]) => k !== 'hatchback') // merge hatchback into sedan
        .map(([k, v]) => ({ label: v, value: k }))
      return (
        <ChoiceStep
          question={copy.fees.steps.carSubtype.question}
          options={opts}
          onSelect={(v) => next({ carSubtype: v as CarSubtype })}
        />
      )
    }
    const opts = Object.entries(motoSubtypeLabels).map(([k, v]) => ({ label: v, value: k }))
    return (
      <ChoiceStep
        question={copy.fees.steps.motoSubtype.question}
        options={opts}
        onSelect={(v) => next({ motoSubtype: v as MotoSubtype })}
      />
    )
  }

  // Step 3: Displacement
  if (form.step === 3) {
    if (form.category === 'car') {
      const opts = Object.entries(displacementLabels).map(([k, v]) => ({ label: v, value: k }))
      return (
        <ChoiceStep
          question={copy.fees.steps.displacement.question}
          options={opts}
          onSelect={(v) => next({ displacement: v as DisplacementBracket })}
        />
      )
    }
    const opts = Object.entries(motoBracketLabels).map(([k, v]) => ({ label: v, value: k }))
    return (
      <ChoiceStep
        question={copy.fees.steps.displacement.question}
        options={opts}
        onSelect={(v) => next({ motoDisplacement: v as MotoBracket })}
      />
    )
  }

  // Step 4: Hybrid/EV
  if (form.step === 4) {
    return (
      <ChoiceStep
        question={copy.fees.steps.hybrid.question}
        options={[
          { label: copy.fees.steps.hybrid.yes, value: 'yes' },
          { label: copy.fees.steps.hybrid.no, value: 'no' },
        ]}
        onSelect={(v) => next({ isHybridOrEv: v === 'yes' })}
      />
    )
  }

  // Step 5: Reg type
  if (form.step === 5) {
    return (
      <ChoiceStep
        question={copy.fees.steps.regType.question}
        options={[
          { label: copy.fees.steps.regType.renewal, value: 'renewal' },
          { label: copy.fees.steps.regType.new, value: 'new' },
        ]}
        onSelect={(v) => {
          if (v === 'new') {
            finish({ regType: 'new', lateness: 'ontime' })
          } else {
            next({ regType: 'renewal' })
          }
        }}
      />
    )
  }

  // Step 6: Lateness (renewal only)
  if (form.step === 6 && form.regType === 'renewal') {
    return (
      <ChoiceStep
        question={copy.fees.steps.lateness.question}
        options={[
          { label: copy.fees.steps.lateness.ontime, value: 'ontime' },
          { label: copy.fees.steps.lateness.pastWeek, value: 'pastWeek' },
          { label: copy.fees.steps.lateness.oneToEleven, value: 'oneToEleven' },
          { label: copy.fees.steps.lateness.twelveOrMore, value: 'twelveOrMore' },
        ]}
        onSelect={(v) => finish({ lateness: v as LatenessCategory })}
      />
    )
  }

  return null
}

interface ChoiceOption {
  label: string
  value: string
  description?: string
}

function ChoiceStep({
  question,
  options,
  onSelect,
}: {
  question: string
  options: ChoiceOption[]
  onSelect: (value: string) => void
}) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
        {question}
      </p>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="w-full rounded-lg border-2 border-gray-300 px-5 py-4 text-left font-semibold hover:border-red-500 hover:bg-red-50 active:bg-red-100 transition-colors"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
          >
            {opt.label}
            {opt.description && (
              <span className="block text-sm font-normal mt-1" style={{ color: 'var(--text-secondary)' }}>
                {opt.description}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
