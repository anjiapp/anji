'use client';
export default function Button({children, ...props}) {
    return (
        <button onClick={props.action} style={props.style}>
            {children}
        </button>
    )
}