import React from "react"

export type BaseButtonProps = {
    submitformbutton?: string
}

export type CalendlyStackType = {
    children: React.ReactNode,
}

export type CalendlyRef = {
    calendlyRef: React.RefObject<HTMLDivElement>
}