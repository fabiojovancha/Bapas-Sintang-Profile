import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [buka, setBuka] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setBuka(buka === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-primary-50 transition-colors"
          >
            <span className="font-heading font-semibold text-primary-900 text-sm pr-4">
              {item.pertanyaan}
            </span>
            <ChevronDown className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-200 ${buka === i ? 'rotate-180' : ''}`} />
          </button>
          {buka === i && (
            <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed">{item.jawaban}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}