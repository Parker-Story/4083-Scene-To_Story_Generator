type Label = {
  description: string
  score?: number
}

type LabelsListProps = {
  labels: Label[]
}

export default function LabelsList({ labels }: LabelsListProps) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-6">
      <h3 className="mb-4 text-lg font-semibold">Detected Elements</h3>
      <div className="flex flex-wrap gap-2">
        {labels.map((label, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm border border-primary/20"
          >
            <span className="font-medium">{label.description}</span>
            {label.score !== undefined && (
              <span className="text-xs text-muted-foreground">{Math.round(label.score * 100)}%</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
