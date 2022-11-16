// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', 'G-JVFDC7YLM5', {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', action, params)
    }
}

export const goBack = () => {
    if (typeof window !== 'undefined') {
        window.gtag('event', 'go_back', {
            event_category: 'button',
            event_label: 'go_back'
        })
    }
}

export const goStatement = (statement) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', `go_to_${statement}`, {
            event_category: 'button',
            event_label: `go_to_${statement}`
        })
    }
}
